/* Links inside skills have to resolve: relative paths to real files, docs URLs to real
 * pages. Checked offline against docs/ and the generated asset list, so CI never depends
 * on the site being up. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import path from 'node:path';

import { readSkills, readShared, docsSlugs, skillsRoot } from '../../scripts/lib/skills.mjs';

const slugs = docsSlugs();
const SITE = 'https://bullframecss.marcopontili.com';

/** Published files that are generated or static, so they have no page under docs/. */
const STATIC_PATHS = new Set([
  '/api.json',
  '/sri.json',
  '/llms.txt',
  '/llms-full.txt',
  '/skills/index.json',
  '/kitchen-sink/',
]);

const LINK_RE = /\[[^\]]*\]\(([^)\s]+)\)|<(https?:\/\/[^>\s]+)>/g;

function linkErrors(label, text, dir) {
  const errors = [];

  for (const match of text.matchAll(LINK_RE)) {
    const target = match[1] ?? match[2];
    if (!target || target.startsWith('#')) continue;

    if (target.startsWith(SITE)) {
      const url = new URL(target);
      const clean = url.pathname.replace(/\.md$/, '');
      if (STATIC_PATHS.has(url.pathname) || STATIC_PATHS.has(clean)) continue;
      if (!slugs.has(clean) && !slugs.has(`${clean}/`)) {
        errors.push(`${label}: ${target} has no page under docs/`);
      }
      continue;
    }

    if (/^https?:/.test(target)) continue;

    const resolved = path.resolve(dir, target.split('#')[0]);
    if (!existsSync(resolved)) {
      errors.push(`${label}: ${target} does not resolve to a file`);
    }
  }

  return errors;
}

for (const skill of readSkills()) {
  test(`${skill.dir} links resolve`, () => {
    assert.deepEqual(linkErrors(`src/skills/${skill.dir}/SKILL.md`, skill.text, skill.path), []);
  });
}

for (const shared of readShared()) {
  test(`_shared/${shared.file} links resolve`, () => {
    assert.deepEqual(
      linkErrors(`src/skills/_shared/${shared.file}`, shared.text, path.dirname(shared.path)),
      []
    );
  });
}

test('every skill points at the docs it declares', () => {
  for (const skill of readSkills()) {
    for (const slug of skill.data.docs ?? []) {
      assert.ok(
        skill.text.includes(`${SITE}${slug}`),
        `${skill.dir}: frontmatter declares ${slug} but the body never links it`
      );
    }
  }
});

test('the shared references are reachable from a skill', () => {
  const bodies = readSkills()
    .map((s) => s.text)
    .join('\n');
  assert.ok(existsSync(path.join(skillsRoot, '_shared', 'conventions.md')));
  assert.ok(bodies.includes('_shared/conventions.md'));
  assert.ok(bodies.includes('_shared/builds.md'));
});
