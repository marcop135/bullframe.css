/* What actually reaches npm, and what must never reach it.
 *
 * Also guards the generated surface with committed snapshots: a change to index.json or
 * to the AGENTS.md block has to be reviewed, not discovered after a release. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile, rm } from 'node:fs/promises';
import path from 'node:path';

import { repoRoot } from '../../scripts/lib/css-api.mjs';

const run = promisify(execFile);
const distSkills = path.join(repoRoot, 'dist', 'skills');
const snapshots = path.join(repoRoot, 'tests', 'skills', '__snapshots__');

const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';

let files;
test('npm pack lists the tarball contents', async () => {
  const { stdout } = await run(npm, ['pack', '--dry-run', '--json'], {
    cwd: repoRoot,
    shell: process.platform === 'win32',
    maxBuffer: 10 * 1024 * 1024,
  });
  const json = JSON.parse(stdout.slice(stdout.indexOf('[')));
  files = json[0].files.map((f) => f.path.replace(/\\/g, '/'));
  assert.ok(files.length > 0);
});

test('the tarball ships the CLI and the skills', () => {
  assert.ok(files.includes('bin/bullframe.mjs'), 'bin/bullframe.mjs is missing');
  assert.ok(files.includes('dist/skills/index.json'), 'dist/skills/index.json is missing');
  assert.ok(files.includes('dist/skills/api.json'), 'dist/skills/api.json is missing');
  assert.ok(files.includes('dist/skills/AGENTS.bullframe.md'));
  assert.ok(files.some((f) => f.startsWith('dist/skills/bullframe-core/')));
  assert.ok(files.includes('dist/css/bullframe.css'), 'the CSS build must still ship');
});

test('the tarball ships no sources, docs or tests', () => {
  const forbidden = ['src/', 'docs/', 'tests/', 'scripts/', '.github/', 'AGENTS.md', 'CLAUDE.md'];
  const leaked = files.filter((f) => forbidden.some((prefix) => f.startsWith(prefix)));
  assert.deepEqual(leaked, []);
});

test('the skills payload stays small', () => {
  const skillFiles = files.filter((f) => f.startsWith('dist/skills/'));
  assert.ok(skillFiles.length < 60, `${skillFiles.length} skill files is more than expected`);
});

test('index.json matches its snapshot', async () => {
  const [built, golden] = await Promise.all([
    readFile(path.join(distSkills, 'index.json'), 'utf8'),
    readFile(path.join(snapshots, 'index.json'), 'utf8'),
  ]);
  assert.equal(
    built,
    golden,
    'dist/skills/index.json changed. Review it, then run `npm run skills:snapshot`.'
  );
});

test('the AGENTS.md block matches its snapshot', async () => {
  const [built, golden] = await Promise.all([
    readFile(path.join(distSkills, 'AGENTS.bullframe.md'), 'utf8'),
    readFile(path.join(snapshots, 'agents-block.md'), 'utf8'),
  ]);
  assert.equal(
    built,
    golden,
    'the AGENTS.md block changed. Review it, then run `npm run skills:snapshot`.'
  );
});

test('the built payload is current with src/skills', async () => {
  // Build into a scratch directory: rebuilding dist/skills in place would yank the
  // payload out from under the CLI tests running alongside this file.
  const scratch = path.join(repoRoot, '.tmp', 'skills-freshness');
  await run(
    process.execPath,
    [path.join(repoRoot, 'scripts', 'build-skills.mjs'), '--out', scratch],
    { cwd: repoRoot }
  );

  for (const file of ['index.json', 'api.json', 'AGENTS.bullframe.md']) {
    const [committed, rebuilt] = await Promise.all([
      readFile(path.join(distSkills, file), 'utf8'),
      readFile(path.join(scratch, file), 'utf8'),
    ]);
    assert.equal(
      committed,
      rebuilt,
      `dist/skills/${file} is stale. Run \`npm run skills:build\`.`
    );
  }

  await rm(scratch, { recursive: true, force: true });
});
