import { chromium } from '@playwright/test';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const BASE = 'http://localhost:3000';
const OUT = path.resolve('tests/e2e/.design-check');
mkdirSync(OUT, { recursive: true });

const pages = [
  { name: 'landing', path: '/' },
  { name: 'kitchen-sink', path: '/kitchen-sink/' },
  { name: 'docs-getting-started', path: '/getting-started' },
  { name: 'docs-variables', path: '/variables' },
  { name: 'docs-buttons', path: '/buttons' },
  { name: 'docs-utilities', path: '/utilities' },
];

const viewports = [
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'mobile', width: 390, height: 844 },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const pg = await ctx.newPage();
  for (const p of pages) {
    const url = `${BASE}${p.path}`;
    await pg.goto(url, { waitUntil: 'networkidle' });
    await pg.evaluate(() => document.fonts.ready);
    const file = path.join(OUT, `${p.name}-${vp.name}.png`);
    await pg.screenshot({ path: file, fullPage: true });
    console.log(`[${vp.name}] ${url} -> ${file}`);
  }
  await ctx.close();
}
await browser.close();
