/* The regression gate that matters: every .bf-* class and --bf-* token named by a
 * skill, a shared reference, or a docs code block must still exist in src/css/.
 *
 * Counterexamples are declared per file with `<!-- bf-absent: bf-card, bf-nav -->`.
 * A declared name that turns out to exist is also an error, so the declaration
 * cannot rot the other way. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

import { readCssApi, toApiJson, repoRoot } from '../../scripts/lib/css-api.mjs';
import {
  readSkills,
  readShared,
  collectBfRefs,
  declaredAbsent,
  codeBlocks,
  apiNames,
} from '../../scripts/lib/skills.mjs';

const api = toApiJson(readCssApi());
const { classes, tokens } = apiNames(api);

/** Demo-only classes that live in src/docs/examples/shared.css, not the framework. */
const NON_FRAMEWORK = new Set();

function check(label, text, { htmlOnly = false } = {}) {
  const absent = declaredAbsent(text);
  const source = htmlOnly ? codeBlocks(text, 'html').join('\n') : text;
  const refs = collectBfRefs(source);
  const errors = [];

  for (const name of refs.classes) {
    if (NON_FRAMEWORK.has(name) || absent.has(name)) continue;
    if (!classes.has(name)) errors.push(`${label}: .${name} does not exist`);
  }
  for (const name of refs.tokens) {
    if (absent.has(name)) continue;
    if (!tokens.has(name)) errors.push(`${label}: ${name} does not exist`);
  }
  for (const name of absent) {
    const exists = name.startsWith('--') ? tokens.has(name) : classes.has(name);
    if (exists) errors.push(`${label}: bf-absent declares ${name}, which now exists`);
  }

  return errors;
}

for (const skill of readSkills()) {
  test(`${skill.dir} references only real classes and tokens`, () => {
    const errors = check(`src/skills/${skill.dir}/SKILL.md`, skill.text);
    for (const file of skill.files.filter((f) => f.endsWith('.html'))) {
      const text = readFileSync(path.join(skill.path, file), 'utf8');
      errors.push(...check(`src/skills/${skill.dir}/${file}`, text));
    }
    assert.deepEqual(errors, []);
  });
}

for (const shared of readShared()) {
  test(`_shared/${shared.file} references only real classes and tokens`, () => {
    assert.deepEqual(check(`src/skills/_shared/${shared.file}`, shared.text), []);
  });
}

test('docs code blocks reference only real classes and tokens', () => {
  const docsRoot = path.join(repoRoot, 'docs');
  const errors = [];

  const walk = (dir) => {
    for (const entry of readdirSync(dir).sort()) {
      if (entry.startsWith('.') || entry === 'public') continue;
      const full = path.join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
        continue;
      }
      if (!entry.endsWith('.md') || entry === 'api-reference.md') continue;
      const rel = path.relative(repoRoot, full).replace(/\\/g, '/');
      errors.push(...check(rel, readFileSync(full, 'utf8')));
    }
  };
  walk(docsRoot);

  assert.deepEqual(errors, []);
});

test('api.json counts match the generated reference', () => {
  const reference = readFileSync(path.join(repoRoot, 'docs', 'api-reference.md'), 'utf8');
  const match = reference.match(/_(\d+) classes, (\d+) CSS custom properties._/);
  assert.ok(match, 'api-reference.md has no count line');
  assert.equal(api.counts.classes, Number(match[1]));
  assert.equal(api.counts.tokens, Number(match[2]));
});
