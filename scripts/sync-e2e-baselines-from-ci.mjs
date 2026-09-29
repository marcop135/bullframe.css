#!/usr/bin/env node
/**
 * Copy Playwright "actual" screenshots from a CI run into committed linux baselines.
 *
 * Usage:
 *   node scripts/sync-e2e-baselines-from-ci.mjs <run-id> [page-name]
 *
 * Example (after a failed playwright job uploaded test-results):
 *   node scripts/sync-e2e-baselines-from-ci.mjs 36448524780 landing
 *
 * Requires `gh` authenticated for this repo. Does not download browsers.
 */
import { cp, mkdir, mkdtemp, readdir, rm, stat } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const runId = process.argv[2];
const pageName = process.argv[3] || 'landing';
const browsers = ['chromium', 'firefox', 'webkit'];
const destDir = join('tests', 'e2e', '__screenshots__', 'visual.spec.js');

if (!runId || !/^\d+$/.test(runId)) {
  console.error(
    'Usage: node scripts/sync-e2e-baselines-from-ci.mjs <github-actions-run-id> [page-name]'
  );
  process.exit(1);
}

const staging = await mkdtemp(join(tmpdir(), 'bf-e2e-baselines-'));

try {
  const download = spawnSync(
    'gh',
    ['run', 'download', runId, '-n', 'playwright-report', '-D', staging],
    { encoding: 'utf8' }
  );
  if (download.status !== 0) {
    console.error(download.stderr || download.stdout || 'gh run download failed');
    process.exit(download.status ?? 1);
  }

  const roots = [join(staging, 'test-results'), staging];
  await mkdir(destDir, { recursive: true });

  let copied = 0;
  for (const browser of browsers) {
    const actual = await findActual(roots, pageName, browser);
    if (!actual) {
      console.error(`No ${pageName}-actual.png for ${browser} in run ${runId}`);
      process.exit(1);
    }
    const dest = join(destDir, `${pageName}-${browser}-linux.png`);
    await cp(actual, dest);
    const size = (await stat(dest)).size;
    console.log(`wrote ${dest} (${size} bytes) from ${actual}`);
    copied += 1;
  }
  console.log(`Synced ${copied} baseline(s) from run ${runId}.`);
} finally {
  await rm(staging, { recursive: true, force: true });
}

async function findActual(roots, page, browser) {
  const needle = `${page}-actual.png`;
  const browserToken = `-${browser}`;
  for (const root of roots) {
    const hit = await walk(root, (name, full) => {
      if (name !== needle) return false;
      return full.includes(browserToken);
    });
    if (hit) return hit;
  }
  return null;
}

async function walk(dir, match) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return null;
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await walk(full, match);
      if (nested) return nested;
      continue;
    }
    if (entry.isFile() && match(entry.name, full)) return full;
  }
  return null;
}
