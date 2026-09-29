/* Optional end-to-end evaluation: does an agent given a skill actually produce correct
 * Bullframe markup?
 *
 * Never runs in the PR gate. It needs ANTHROPIC_API_KEY, costs money and is not
 * deterministic, so it lives behind `workflow_dispatch` and exits 0 with a notice when
 * no key is present. The grading itself is deterministic: the same html-validate config
 * and the same class-existence check the static tests use.
 *
 * Run with: `node scripts/eval-skills.mjs [--skill <name>] [--model <id>]`
 */
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
import { HtmlValidate } from 'html-validate';

import { readCssApi, toApiJson, repoRoot } from './lib/css-api.mjs';
import { readSkills, readShared, collectBfRefs, columnSums, apiNames } from './lib/skills.mjs';

const require = createRequire(import.meta.url);
const htmlvalidate = new HtmlValidate({
  root: true,
  ...require(path.join(repoRoot, '.htmlvalidate.cjs')),
});

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = argValue('--model') ?? process.env.BF_EVAL_MODEL ?? 'claude-sonnet-5';
const ONLY = argValue('--skill');

function argValue(flag) {
  const i = process.argv.indexOf(flag);
  return i === -1 ? undefined : process.argv[i + 1];
}

if (!API_KEY) {
  console.log('[eval] ANTHROPIC_API_KEY is not set. Nothing to run.');
  process.exit(0);
}

const { classes, tokens } = apiNames(toApiJson(readCssApi()));
const skills = new Map(readSkills().map((s) => [s.data.name, s]));
const shared = new Map(readShared().map((s) => [s.file, s.text]));

/** The context an agent would have after `npx bullframe.css skills install`. */
function contextFor(name) {
  const skill = skills.get(name);
  if (!skill) throw new Error(`unknown skill "${name}"`);
  const prerequisites = (skill.data.requires ?? []).map((r) => skills.get(r).text);
  return [
    shared.get('conventions.md'),
    shared.get('builds.md'),
    ...prerequisites,
    skill.text,
  ].join('\n\n---\n\n');
}

async function ask(system, prompt) {
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 4096,
      system,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic API ${response.status}: ${await response.text()}`);
  }

  const body = await response.json();
  return body.content
    .filter((part) => part.type === 'text')
    .map((part) => part.text)
    .join('');
}

function extractHtml(text) {
  const fenced = text.match(/```(?:html)?\r?\n([\s\S]*?)```/);
  return (fenced ? fenced[1] : text).trim();
}

async function grade(html, expect) {
  const failures = [];

  if (expect.document && !/^\s*<!doctype html>/i.test(html)) {
    failures.push('not a complete document');
  }

  const links = html.match(/<link[^>]+href=["'][^"']*bullframe[^"']*["']/gi) ?? [];
  if (links.length !== 1) failures.push(`links ${links.length} Bullframe stylesheets`);

  if (expect.classless && /class="/.test(html)) failures.push('classless page carries classes');
  if (expect.classBased && !/class="[^"]*\bbf-/.test(html)) failures.push('no Bullframe classes');
  if (expect.classBased && !html.includes('bf-skip-link')) failures.push('no skip link');
  if (expect.minRows && (html.match(/\bbf-row\b/g) ?? []).length < expect.minRows) {
    failures.push('no grid row');
  }

  const refs = collectBfRefs(html);
  for (const name of refs.classes) {
    if (!classes.has(name)) failures.push(`invented class .${name}`);
  }
  for (const name of refs.tokens) {
    if (!tokens.has(name)) failures.push(`invented token ${name}`);
  }

  for (const sum of columnSums(html)) {
    if (sum > 12) failures.push(`a row claims ${sum} twelfths`);
  }

  if (/outline\s*:\s*none/i.test(html)) failures.push('removes a focus ring');

  if (expect.labelledControls) {
    const ids = [...html.matchAll(/<(?:input|select|textarea)[^>]*\bid="([^"]+)"/gi)].map(
      (m) => m[1]
    );
    const labelled = new Set([...html.matchAll(/<label[^>]*\bfor="([^"]+)"/gi)].map((m) => m[1]));
    const hidden = /type="hidden"/i;
    for (const id of ids) {
      if (!labelled.has(id) && !hidden.test(html)) failures.push(`control #${id} has no label`);
    }
  }

  const result = await htmlvalidate.validateString(html);
  for (const file of result.results) {
    for (const message of file.messages) {
      failures.push(`html-validate ${message.ruleId}: ${message.message}`);
    }
  }

  return failures;
}

const cases = JSON.parse(
  await readFile(path.join(repoRoot, 'tests', 'skills', 'eval', 'prompts.json'), 'utf8')
).filter((c) => !ONLY || c.skill === ONLY);

let failed = 0;

for (const testCase of cases) {
  const system = `You are working in a project that uses Bullframe CSS. Follow these skills exactly.\n\n${contextFor(
    testCase.skill
  )}`;

  const answer = await ask(system, testCase.prompt);
  const failures = await grade(extractHtml(answer), testCase.expect ?? {});

  if (failures.length === 0) {
    console.log(`[eval] PASS ${testCase.skill}`);
  } else {
    failed++;
    console.log(`[eval] FAIL ${testCase.skill}`);
    for (const failure of [...new Set(failures)]) console.log(`         ${failure}`);
  }
}

console.log(`\n[eval] ${cases.length - failed}/${cases.length} passed on ${MODEL}`);
process.exit(failed === 0 ? 0 : 1);
