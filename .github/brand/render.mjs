// repo-brand kit 1.0.0, synced from marcopontili.com/scripts/repo-brand; edit there, not here.
/**
 * Render the repo brand images listed in brand.config.json (next to this file).
 *
 * Each entry: { source, output, width, height, scale?, maxBytes?, palette?, quality? }
 * Paths are relative to this directory. `output` ending in .jpg/.jpeg is
 * written as JPEG, anything else as PNG.
 *
 * Per entry: re-embed fonts into the source SVG, load it in Chromium at the
 * exact canvas size and deviceScaleFactor, block every non-data: request, then
 * fail if a font face did not load, a <text> leaves the centered 1120x560 safe
 * area, or a run with data-fit-w measures wider than that. The output is
 * compressed with sharp and its pixel size and byte size asserted.
 *
 * Run:   node render.mjs           writes sources (fonts) and outputs
 *        node render.mjs --check   writes nothing, exits 1 if anything is stale
 *
 * Needs `playwright` and `sharp`. In a repo without package.json:
 *   npx -y -p playwright@1.61.1 -p sharp@0.35.4 node .github/brand/render.mjs
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve, delimiter, sep, relative } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { embedFonts } from './embed-fonts.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const CHECK = process.argv.includes('--check');
const SAFE = { width: 1120, height: 560 };

// `npx -p` puts its temporary node_modules/.bin on PATH but ESM resolution
// ignores it, so fall back to resolving from there.
async function load(name) {
  try {
    return await import(name);
  } catch {
    const bins = (process.env.PATH || '')
      .split(delimiter)
      .filter((p) => p.endsWith(`node_modules${sep}.bin`) || p.endsWith('node_modules/.bin'));
    for (const bin of bins) {
      try {
        const req = createRequire(join(dirname(bin), 'noop.js'));
        return await import(pathToFileURL(req.resolve(name)).href);
      } catch {
        /* next */
      }
    }
    throw new Error(`cannot resolve "${name}": install it or run through npx -p ${name}`);
  }
}

const pw = await load('playwright');
const { chromium } = pw.chromium ? pw : pw.default;
const sharpMod = await load('sharp');
const sharp = sharpMod.default ?? sharpMod;

const config = JSON.parse(readFileSync(join(HERE, 'brand.config.json'), 'utf-8'));

const page_ = (svg, w, h) =>
  `<!doctype html><html><head><meta charset="utf-8"><style>` +
  `html,body{margin:0;padding:0;background:transparent;overflow:hidden}` +
  `body{width:${w}px;height:${h}px}svg{display:block}</style></head><body>${svg}</body></html>`;

async function launch() {
  try {
    return await chromium.launch();
  } catch (err) {
    // No bundled Chromium (npx path without `playwright install`): use Chrome.
    try {
      return await chromium.launch({ channel: 'chrome' });
    } catch {
      throw err;
    }
  }
}

const failures = [];
const stale = [];
const browser = await launch();

for (const entry of config.outputs) {
  const { source, output, width, height, scale = 1, maxBytes, palette = false, quality = 90 } = entry;
  const srcPath = resolve(HERE, source);
  const outPath = resolve(HERE, output);
  const label = relative(process.cwd(), outPath);

  const raw = readFileSync(srcPath, 'utf-8');
  const svg = embedFonts(raw, HERE);
  if (svg !== raw) {
    if (CHECK) stale.push(`${relative(process.cwd(), srcPath)} (fonts not embedded)`);
    else writeFileSync(srcPath, svg);
  }

  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: scale });
  const page = await ctx.newPage();
  await page.route('**/*', (route) =>
    route.request().url().startsWith('data:') ? route.continue() : route.abort()
  );
  const blocked = [];
  page.on('requestfailed', (r) => blocked.push(r.url()));
  await page.setContent(page_(svg, width, height), { waitUntil: 'load' });

  const report = await page.evaluate(
    async ({ width, height, safe }) => {
      const faces = [...document.fonts];
      await Promise.all(faces.map((f) => f.load().catch(() => null)));
      await document.fonts.ready;
      const families = new Set(faces.map((f) => f.family.replace(/["']/g, '')));
      const badFaces = faces.filter((f) => f.status !== 'loaded').map((f) => `${f.family} ${f.weight}`);

      const svgEl = document.querySelector('svg');
      const vb = svgEl.viewBox.baseVal;
      const box = svgEl.getBoundingClientRect();
      const k = box.width / (vb && vb.width ? vb.width : width);
      const sx = (width - safe.width) / 2;
      const sy = (height - safe.height) / 2;

      const problems = [];
      if (!vb || vb.width !== width || vb.height !== height) {
        problems.push(`viewBox is ${vb ? `${vb.width}x${vb.height}` : 'missing'}, canvas is ${width}x${height}`);
      }
      if (faces.length === 0) problems.push('no @font-face rules embedded');
      for (const t of document.querySelectorAll('text')) {
        const text = t.textContent.trim();
        if (!text) continue;
        const family = getComputedStyle(t).fontFamily.split(',')[0].trim().replace(/["']/g, '');
        if (!families.has(family)) problems.push(`"${text}" uses font "${family}", not an embedded face`);
        const r = t.getBoundingClientRect();
        const l = (r.left - box.left) / k;
        const top = (r.top - box.top) / k;
        const right = l + r.width / k;
        const bottom = top + r.height / k;
        const eps = 0.5;
        if (l < sx - eps || top < sy - eps || right > sx + safe.width + eps || bottom > sy + safe.height + eps) {
          problems.push(
            `"${text}" leaves the safe area: ${l.toFixed(1)},${top.toFixed(1)} -> ` +
              `${right.toFixed(1)},${bottom.toFixed(1)} (safe ${sx},${sy} -> ${sx + safe.width},${sy + safe.height})`
          );
        }
        if (t.dataset.fitW) {
          const len = t.getComputedTextLength();
          if (len > Number(t.dataset.fitW)) {
            problems.push(`"${text}" is ${len.toFixed(1)} wide, data-fit-w is ${t.dataset.fitW}`);
          }
        }
      }
      return { badFaces, problems };
    },
    { width, height, safe: SAFE }
  );

  for (const f of report.badFaces) failures.push(`${label}: font face failed to load: ${f}`);
  for (const p of report.problems) failures.push(`${label}: ${p}`);
  for (const u of blocked) failures.push(`${label}: external request blocked: ${u.slice(0, 80)}`);

  const shot = await page.screenshot({ clip: { x: 0, y: 0, width, height } });
  await ctx.close();

  const isJpeg = /\.jpe?g$/i.test(outPath);
  const img = sharp(shot);
  const buf = isJpeg
    ? await img.flatten({ background: '#000000' }).jpeg({ quality, mozjpeg: true }).toBuffer()
    : await img.png({ compressionLevel: 9, effort: 10, palette }).toBuffer();

  const meta = await sharp(buf).metadata();
  const want = [width * scale, height * scale];
  if (meta.width !== want[0] || meta.height !== want[1]) {
    failures.push(`${label}: is ${meta.width}x${meta.height}, expected ${want[0]}x${want[1]}`);
  }
  if (maxBytes && buf.length > maxBytes) {
    failures.push(`${label}: ${buf.length} bytes, limit ${maxBytes}`);
  }

  if (CHECK) {
    if (!existsSync(outPath) || !readFileSync(outPath).equals(buf)) stale.push(label);
  } else {
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, buf);
  }
  console.log(`${CHECK ? 'checked' : 'wrote'} ${label} ${meta.width}x${meta.height} ${(buf.length / 1024).toFixed(0)} KB`);
}

await browser.close();

if (failures.length) {
  console.error(`\nFAIL ${failures.length} problem(s):`);
  for (const f of failures) console.error(`  ${f}`);
}
if (stale.length) {
  console.error(`\nSTALE, run render.mjs without --check and commit:`);
  for (const s of stale) console.error(`  ${s}`);
}
process.exit(failures.length || stale.length ? 1 : 0);
