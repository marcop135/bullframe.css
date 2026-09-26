/* Every HTML a skill ships — example files and fenced ```html blocks — is validated
 * with the project's own html-validate config, then checked against the framework
 * rules a generated page has to obey. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { HtmlValidate } from 'html-validate';

import { repoRoot } from '../../scripts/lib/css-api.mjs';
import { readSkills, readShared, codeBlocks, columnSums } from '../../scripts/lib/skills.mjs';

const require = createRequire(import.meta.url);
const config = require(path.join(repoRoot, '.htmlvalidate.cjs'));

const htmlvalidate = new HtmlValidate({ root: true, ...config });

/** Fragments start mid-document, so the document-scoped heading rule cannot apply. */
const fragmentValidate = new HtmlValidate({
  root: true,
  ...config,
  rules: { ...config.rules, 'heading-level': 'off' },
});

const isDocument = (html) => /^\s*<!doctype html>/i.test(html);
const BUILD_LINK = /<link[^>]+href=["'][^"']*bullframe[^"']*["']/gi;

async function report(label, html) {
  const validator = isDocument(html) ? htmlvalidate : fragmentValidate;
  const result = await validator.validateString(html);
  return result.results.flatMap((file) =>
    file.messages.map((m) => `${label}:${m.line}:${m.column} ${m.ruleId} ${m.message}`)
  );
}

function frameworkErrors(label, html) {
  const errors = [];

  for (const sum of columnSums(html)) {
    if (sum > 12) errors.push(`${label}: a .bf-row claims ${sum} twelfths`);
  }

  if (/outline\s*:\s*none/i.test(html)) {
    errors.push(`${label}: removes a focus ring with outline: none`);
  }

  if (isDocument(html)) {
    const links = html.match(BUILD_LINK) ?? [];
    if (links.length !== 1) {
      errors.push(`${label}: links ${links.length} Bullframe stylesheets, expected exactly 1`);
    }
    if (/class="[^"]*\bbf-/.test(html) && !html.includes('bf-skip-link')) {
      errors.push(`${label}: class-based document without a skip link`);
    }
    if ((html.match(/<h1\b/g) ?? []).length !== 1) {
      errors.push(`${label}: expected exactly one h1`);
    }
  }

  return errors;
}

const sources = [];

for (const skill of readSkills()) {
  for (const file of skill.files.filter((f) => f.endsWith('.html'))) {
    sources.push({
      label: `src/skills/${skill.dir}/${file}`,
      html: readFileSync(path.join(skill.path, file), 'utf8'),
      // `before*.html` is the un-converted input of a conversion example: valid HTML,
      // deliberately not yet a Bullframe page.
      frameworkRules: !path.basename(file).startsWith('before'),
    });
  }
  codeBlocks(skill.text).forEach((html, i) => {
    sources.push({ label: `src/skills/${skill.dir}/SKILL.md block ${i + 1}`, html });
  });
}

for (const shared of readShared()) {
  codeBlocks(shared.text).forEach((html, i) => {
    sources.push({ label: `src/skills/_shared/${shared.file} block ${i + 1}`, html });
  });
}

test('skills ship HTML to validate', () => {
  assert.ok(sources.length >= 5, `only ${sources.length} HTML sources found`);
});

for (const { label, html, frameworkRules = true } of sources) {
  test(`${label} validates`, async () => {
    assert.deepEqual(await report(label, html), []);
  });

  if (frameworkRules) {
    test(`${label} follows the framework rules`, () => {
      assert.deepEqual(frameworkErrors(label, html), []);
    });
  }
}

test('the column scanner catches an overfull row', () => {
  const overfull =
    '<div class="bf-row"><div class="bf-col-8"></div><div class="bf-col-6"></div></div>';
  assert.deepEqual(columnSums(overfull), [14]);
  assert.deepEqual(columnSums('<div class="bf-row"><div class="bf-col-6"></div></div>'), [6]);
});
