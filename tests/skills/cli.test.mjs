/* End-to-end checks on bin/bullframe.mjs: it lists what ships, writes the layouts each
 * agent environment expects, stays idempotent, and never duplicates its AGENTS.md block.
 *
 * Scratch directories live under .tmp/, which is gitignored. */
import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

import { repoRoot } from '../../scripts/lib/css-api.mjs';

const run = promisify(execFile);
const bin = path.join(repoRoot, 'bin', 'bullframe.mjs');
const scratchRoot = path.join(repoRoot, '.tmp', 'cli-tests');

const index = JSON.parse(
  await readFile(path.join(repoRoot, 'dist', 'skills', 'index.json'), 'utf8')
);

async function project() {
  await mkdir(scratchRoot, { recursive: true });
  const dir = await mkdtemp(path.join(scratchRoot, 'p-'));
  return dir;
}

async function cli(cwd, args) {
  return run(process.execPath, [bin, ...args], { cwd });
}

test.after(async () => {
  await rm(scratchRoot, { recursive: true, force: true });
});

test('skills list reports every shipped skill', async () => {
  const { stdout } = await cli(repoRoot, ['skills', 'list']);
  assert.match(stdout, new RegExp(`${index.skills.length} skills`));
  for (const skill of index.skills) assert.ok(stdout.includes(skill.name));
});

test('skills path points at the shipped payload', async () => {
  const { stdout } = await cli(repoRoot, ['skills', 'path']);
  assert.ok(existsSync(path.join(stdout.trim(), 'index.json')));
});

test('--version prints the package version', async () => {
  const { stdout } = await cli(repoRoot, ['--version']);
  assert.equal(stdout.trim(), index.version);
});

test('an unknown command exits 2 with usage', async () => {
  await assert.rejects(
    () => cli(repoRoot, ['nope']),
    (error) => error.code === 2 && /unknown command/.test(error.stderr)
  );
});

test('--dry-run writes nothing', async () => {
  const dir = await project();
  const { stdout } = await cli(dir, ['skills', 'install', '--dry-run']);
  assert.match(stdout, /Dry run/);
  assert.ok(!existsSync(path.join(dir, 'AGENTS.md')));
  assert.ok(!existsSync(path.join(dir, 'bullframe-skills')));
});

test('the default install writes the portable layout', async () => {
  const dir = await project();
  await cli(dir, ['skills', 'install']);

  const agents = await readFile(path.join(dir, 'AGENTS.md'), 'utf8');
  assert.ok(agents.includes('<!-- bullframe:skills:start -->'));
  assert.ok(agents.includes('<!-- bullframe:skills:end -->'));
  for (const skill of index.skills) {
    assert.ok(agents.includes(skill.name), `AGENTS.md does not mention ${skill.name}`);
    assert.ok(existsSync(path.join(dir, 'bullframe-skills', skill.name, 'SKILL.md')));
  }
  assert.ok(existsSync(path.join(dir, 'bullframe-skills', 'api.json')));
  assert.ok(existsSync(path.join(dir, 'bullframe-skills', '_shared', 'conventions.md')));
  assert.ok(!existsSync(path.join(dir, '.claude')), 'claude target ran without a .claude dir');
  assert.ok(!existsSync(path.join(dir, '.cursor')), 'cursor target ran without a .cursor dir');
  assert.ok(!existsSync(path.join(dir, '.agents')), 'codex target ran without an .agents dir');
});

async function assertToolLayout(dir, skillsRoot) {
  for (const skill of index.skills) {
    assert.ok(existsSync(path.join(dir, skillsRoot, skill.name, 'SKILL.md')));
  }
  // `../_shared/…` links inside a SKILL.md have to resolve after the copy.
  assert.ok(existsSync(path.join(dir, skillsRoot, '_shared', 'conventions.md')));
  assert.ok(existsSync(path.join(dir, skillsRoot, '_shared', 'api.json')));
}

test('a .claude project also gets the Claude layout', async () => {
  const dir = await project();
  await mkdir(path.join(dir, '.claude'), { recursive: true });
  await cli(dir, ['skills', 'install']);
  await assertToolLayout(dir, path.join('.claude', 'skills'));
});

test('a .cursor project also gets the Cursor layout', async () => {
  const dir = await project();
  await mkdir(path.join(dir, '.cursor'), { recursive: true });
  await cli(dir, ['skills', 'install']);
  await assertToolLayout(dir, path.join('.cursor', 'skills'));
});

test('an .agents project also gets the Codex layout', async () => {
  const dir = await project();
  await mkdir(path.join(dir, '.agents'), { recursive: true });
  await cli(dir, ['skills', 'install']);
  await assertToolLayout(dir, path.join('.agents', 'skills'));
});

test('--target cursor writes the Cursor layout without AGENTS.md', async () => {
  const dir = await project();
  await cli(dir, ['skills', 'install', '--target', 'cursor']);
  await assertToolLayout(dir, path.join('.cursor', 'skills'));
  assert.ok(!existsSync(path.join(dir, 'AGENTS.md')));
  assert.ok(!existsSync(path.join(dir, 'bullframe-skills')));
});

test('--target codex writes the Codex layout without AGENTS.md', async () => {
  const dir = await project();
  await cli(dir, ['skills', 'install', '--target', 'codex']);
  await assertToolLayout(dir, path.join('.agents', 'skills'));
  assert.ok(!existsSync(path.join(dir, 'AGENTS.md')));
  assert.ok(!existsSync(path.join(dir, 'bullframe-skills')));
});

test('installing twice is idempotent', async () => {
  const dir = await project();
  await cli(dir, ['skills', 'install', '--target', 'agents']);
  const first = await readFile(path.join(dir, 'AGENTS.md'), 'utf8');

  await cli(dir, ['skills', 'install', '--target', 'agents']);
  const second = await readFile(path.join(dir, 'AGENTS.md'), 'utf8');

  assert.equal(first, second);
  assert.equal(second.match(/bullframe:skills:start/g).length, 1);
});

test('an existing AGENTS.md keeps its own content', async () => {
  const dir = await project();
  await writeFile(path.join(dir, 'AGENTS.md'), '# Project rules\n\nRun the tests.\n', 'utf8');
  await cli(dir, ['skills', 'install', '--target', 'agents']);

  const agents = await readFile(path.join(dir, 'AGENTS.md'), 'utf8');
  assert.ok(agents.startsWith('# Project rules'));
  assert.ok(agents.includes('Run the tests.'));
  assert.equal(agents.match(/bullframe:skills:start/g).length, 1);

  await cli(dir, ['skills', 'install', '--target', 'agents']);
  const again = await readFile(path.join(dir, 'AGENTS.md'), 'utf8');
  assert.equal(again.match(/bullframe:skills:start/g).length, 1);
  assert.ok(again.startsWith('# Project rules'));
});

test('--dir redirects the copy', async () => {
  const dir = await project();
  await cli(dir, ['skills', 'install', '--target', 'dir', '--dir', 'vendor/bf']);
  assert.ok(existsSync(path.join(dir, 'vendor', 'bf', 'bullframe-core', 'SKILL.md')));
  assert.ok(!existsSync(path.join(dir, 'AGENTS.md')));
});

test('an unknown target fails loudly', async () => {
  const dir = await project();
  await assert.rejects(
    () => cli(dir, ['skills', 'install', '--target', 'copilot']),
    (error) => /unknown target/.test(error.stderr)
  );
});
