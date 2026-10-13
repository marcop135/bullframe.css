/**
 * Pack-time README transform: GitHub keeps light/dark `#gh-*-mode-only` images;
 * the npm tarball ships the light hero only so marky-markdown does not double it.
 *
 * Stash must NOT be named README* — npm always packs those into the tarball.
 *
 * Usage:
 *   node scripts/npm-readme-light.mjs prepack
 *   node scripts/npm-readme-light.mjs postpack
 */
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const readmePath = join(root, 'README.md');
const stashDir = join(root, '.artifacts');
const stashPath = join(stashDir, 'readme-github.md');

const mode = process.argv[2];

if (mode === 'prepack') {
  if (existsSync(stashPath)) {
    console.error('stash already exists; aborting prepack to avoid clobbering');
    process.exit(1);
  }
  const original = readFileSync(readmePath, 'utf8');
  mkdirSync(stashDir, { recursive: true });
  copyFileSync(readmePath, stashPath);
  const lightOnly = original
    .split('\n')
    .filter((line) => !line.includes('#gh-dark-mode-only'))
    .join('\n');
  if (lightOnly === original) {
    console.error('prepack: no #gh-dark-mode-only line found in README.md');
    process.exit(1);
  }
  writeFileSync(readmePath, lightOnly);
  console.log('prepack: README.md is light-only for the npm tarball');
  process.exit(0);
}

if (mode === 'postpack') {
  if (!existsSync(stashPath)) {
    console.error('postpack: stash missing; cannot restore');
    process.exit(1);
  }
  renameSync(stashPath, readmePath);
  console.log('postpack: restored dual-theme README.md');
  process.exit(0);
}

console.error('Usage: node scripts/npm-readme-light.mjs <prepack|postpack>');
process.exit(1);
