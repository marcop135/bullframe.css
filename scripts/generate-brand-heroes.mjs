/**
 * Generate README, site hero, OG, and social images from SVG hero variants.
 *
 * Usage:
 *   node scripts/generate-brand-heroes.mjs
 *   node scripts/generate-brand-heroes.mjs --desktop
 *
 * Outputs review bundles under src/docs/brand/heroes/review/variant-{a,b,c}/.
 * With --desktop, also copies review bundles to ~/Desktop/bullframe-hero-variants/.
 */
import { execFileSync } from 'node:child_process';
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from '@playwright/test';
import { VARIANTS } from '../src/docs/brand/heroes/shared.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const heroesDir = path.join(root, 'src/docs/brand/heroes');
const reviewRoot = path.join(heroesDir, 'review');
const copyDesktop = process.argv.includes('--desktop');

const OUTPUTS = [
  { name: 'readme-light-16x9', width: 1280, height: 720, layout: 'wide', theme: 'light' },
  { name: 'readme-dark-16x9', width: 1280, height: 720, layout: 'wide', theme: 'dark' },
  { name: 'site-hero-light', width: 1024, height: 1024, layout: 'square', theme: 'light' },
  { name: 'site-hero-dark', width: 1024, height: 1024, layout: 'square', theme: 'dark' },
  { name: 'og-image', width: 1200, height: 630, layout: 'wide', theme: 'light', jpg: true },
  { name: 'social-image', width: 1200, height: 630, layout: 'wide', theme: 'light' },
];

async function loadVariant(id, file) {
  const mod = await import(pathToFileURL(path.join(heroesDir, file)).href);
  return mod.render;
}

function htmlForSvg(svg, width, height) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<style>
  html, body { margin: 0; padding: 0; width: ${width}px; height: ${height}px; overflow: hidden; background: transparent; }
  svg { display: block; width: ${width}px; height: ${height}px; }
</style>
</head>
<body>${svg}</body>
</html>`;
}

async function renderSvg(page, svg, { width, height, outPath, jpg = false }) {
  await page.setViewportSize({ width, height });
  await page.setContent(htmlForSvg(svg, width, height), { waitUntil: 'load' });
  const pngPath = jpg ? `${outPath}.png` : outPath;
  await page.screenshot({ path: pngPath, type: 'png', omitBackground: false });
  if (jpg) {
    execFileSync('magick', [pngPath, '-quality', '92', outPath], { stdio: 'inherit' });
    await rm(pngPath);
  }
}

await rm(reviewRoot, { recursive: true, force: true });
await mkdir(reviewRoot, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();

try {
  for (const variant of VARIANTS) {
    const render = await loadVariant(variant.id, variant.file);
    const outDir = path.join(reviewRoot, `variant-${variant.id}`);
    const svgDir = path.join(outDir, 'svg');
    await mkdir(svgDir, { recursive: true });

    for (const spec of OUTPUTS) {
      const svg = render({
        width: spec.width,
        height: spec.height,
        theme: spec.theme,
        layout: spec.layout,
      });
      const svgPath = path.join(svgDir, `${spec.name}.svg`);
      await writeFile(svgPath, svg);

      const ext = spec.jpg ? 'jpg' : 'png';
      const outPath = path.join(outDir, `${spec.name}.${ext}`);
      await renderSvg(page, svg, {
        width: spec.width,
        height: spec.height,
        outPath,
        jpg: spec.jpg,
      });
      console.log(`wrote ${path.relative(root, outPath)}`);
    }
  }
} finally {
  await browser.close();
}

if (copyDesktop) {
  const desktopDir = path.join(homedir(), 'Desktop', 'bullframe-hero-variants');
  await rm(desktopDir, { recursive: true, force: true });
  await cp(reviewRoot, desktopDir, { recursive: true });
  console.log(`copied review bundles to ${desktopDir}`);
}

console.log('Done.');
