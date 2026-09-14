/**
 * Generate every Bullframe brand image from one source scene.
 *
 *   npm run brand:images            write all targets
 *   npm run brand:images -- --check fail if any target is out of date (CI/pre-push)
 *   npm run brand:images -- --only readme|hero|og
 *
 * How it works: src/docs/brand/images/scene.mjs builds a standalone HTML
 * document sized to the exact output, Chromium screenshots it at
 * deviceScaleFactor 1, and the bytes are written straight to disk. Nothing is
 * resampled, recoloured, cropped or flood-filled after the fact. The previous
 * heroes were post-processed rasters, which is where the soft type, the stray
 * dashes and the blue fringe on the mascot came from.
 *
 * The only raster input is src/docs/brand/images/mascot-bull-ok.png, an
 * alpha-cut mascot that is placed, never recoloured.
 *
 * Not published to npm: package.json `files` ships dist/css/ only.
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';

import { buildScene } from '../src/docs/brand/images/scene.mjs';
import { TARGETS } from '../src/docs/brand/images/targets.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const MASCOT = path.join(root, 'src/docs/brand/images/mascot-bull-ok.png');

const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const onlyIndex = args.indexOf('--only');
const only = onlyIndex === -1 ? null : args[onlyIndex + 1];

/** `--only readme|hero|og` filters on the output path, not a separate registry. */
function selected(target) {
  if (!only) return true;
  if (only === 'readme') return target.file.includes('github-readme');
  if (only === 'hero') return target.file.includes('bullframe-hero');
  if (only === 'og') return target.file.includes('og-image');
  throw new Error(`Unknown --only value: ${only} (expected readme, hero or og)`);
}

const mascotDataUri = `data:image/png;base64,${(await readFile(MASCOT)).toString('base64')}`;

const browser = await chromium.launch();
const stale = [];

try {
  const page = await browser.newPage({ deviceScaleFactor: 1 });

  for (const target of TARGETS.filter(selected)) {
    const { file, width, height, theme, layout, jpegQuality, transparent } = target;

    if (transparent && jpegQuality) {
      throw new Error(`${file}: JPEG has no alpha channel, drop transparent or jpegQuality`);
    }

    await page.setViewportSize({ width, height });
    await page.setContent(
      buildScene({ width, height, theme, layout, mascotDataUri, transparent }),
      { waitUntil: 'load' }
    );
    // The scene masks the frame label gaps once fonts settle and flags itself
    // ready. Waiting on that also covers the mascot data URI, which `load` alone
    // does not because it is a CSS background-image.
    await page.waitForFunction(() => window.__bfSceneReady === true);

    const buffer = await page.screenshot(
      jpegQuality
        ? { type: 'jpeg', quality: jpegQuality }
        : { type: 'png', omitBackground: Boolean(transparent) }
    );

    const outPath = path.join(root, file);

    if (checkOnly) {
      const current = await readFile(outPath).catch(() => null);
      if (!current || !current.equals(buffer)) stale.push(file);
      continue;
    }

    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, buffer);
    console.log(`wrote ${file} (${width}×${height}, ${theme})`);
  }
} finally {
  await browser.close();
}

if (checkOnly) {
  if (stale.length) {
    console.error(`Brand images out of date:\n  ${stale.join('\n  ')}`);
    console.error('Run: npm run brand:images');
    process.exit(1);
  }
  console.log('Brand images up to date.');
}
