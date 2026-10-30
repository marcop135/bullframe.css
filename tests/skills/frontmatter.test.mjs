/* Schema validation for every SKILL.md: required keys, naming, version range,
 * prerequisites, docs paths, and the section headings a skill must carry. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';

import { repoRoot } from '../../scripts/lib/css-api.mjs';
import {
  readSkills,
  docsSlugs,
  validateSkill,
  satisfies,
  parseFrontmatter,
} from '../../scripts/lib/skills.mjs';

const { version } = JSON.parse(readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
const skills = readSkills();
const slugs = docsSlugs();
const skillNames = new Set(skills.map((s) => s.data?.name).filter(Boolean));

test('at least one skill ships', () => {
  assert.ok(skills.length > 0, 'src/skills/ contains no skill directories');
});

for (const skill of skills) {
  test(`${skill.dir} frontmatter is valid`, () => {
    const errors = validateSkill(skill, { version, slugs, skillNames });
    assert.deepEqual(errors, []);
  });
}

test('skill names are unique', () => {
  assert.equal(skillNames.size, skills.length);
});

test('prerequisites load before dependants', () => {
  const seen = new Set();
  for (const skill of skills) {
    for (const required of skill.data.requires ?? []) {
      assert.ok(seen.has(required), `${skill.dir} requires ${required}, which loads later`);
    }
    seen.add(skill.data.name);
  }
});

test('metadata keys hoist to the top level and are rejected there', () => {
  const nested = parseFrontmatter(
    "---\nname: x\nmetadata:\n  builds: 'a.css, b.css'\n  requires: ''\n---\n"
  );
  assert.deepEqual(nested.data.builds, ['a.css', 'b.css']);
  assert.deepEqual(nested.data.requires, []);

  const flat = parseFrontmatter('---\nname: x\nbuilds: [a.css]\n---\n');
  const errors = validateSkill(
    { dir: 'x', data: flat.data, topKeys: flat.topKeys, body: '' },
    { version, slugs, skillNames }
  );
  assert.ok(errors.some((e) => e.includes('"builds" belongs under metadata')));
});

test('version ranges are comparator pairs', () => {
  assert.ok(satisfies('6.1.0', '>=6.1.0 <7.0.0'));
  assert.ok(!satisfies('7.0.0', '>=6.1.0 <7.0.0'));
  assert.ok(!satisfies('6.0.9', '>=6.1.0 <7.0.0'));
  assert.ok(!satisfies('6.1.0', 'next'));
});
