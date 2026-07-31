/**
 * Generate five minimal favicon/logo variants (SVG + PNG sizes).
 * Run: node scripts/generate-logo-variants.mjs
 *
 * Requires sharp (devDependency). Falls back to writing SVG-only if missing.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'src', 'docs', 'brand', 'logo-variants');
mkdirSync(outDir, { recursive: true });

const ORANGE = '#ea580c';
const ORANGE_DEEP = '#c2410c';
const CREAM = '#f5e6c8';
const INK = '#1e272f';

const braces = `
  <polygon fill="#fff" points="13.44,5.76 9.6,5.76 7.04,7.04 7.04,12.16 5.76,14.08 3.84,15.36 3.84,16.64 5.76,17.92 7.04,19.84 7.04,24.96 9.6,26.24 13.44,26.24 13.44,23.04 10.88,23.04 10.24,22.4 10.24,19.2 8.32,17.28 6.4,16 8.32,14.72 10.24,12.8 10.24,9.6 10.88,8.96 13.44,8.96"/>
  <polygon fill="#fff" points="18.56,5.76 22.4,5.76 24.96,7.04 24.96,12.16 26.24,14.08 28.16,15.36 28.16,16.64 26.24,17.92 24.96,19.84 24.96,24.96 22.4,26.24 18.56,26.24 18.56,23.04 21.12,23.04 21.76,22.4 21.76,19.2 23.68,17.28 25.6,16 23.68,14.72 21.76,12.8 21.76,9.6 21.12,8.96 18.56,8.96"/>
`;

const variants = {
  '01-braces-circle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="${ORANGE}"/>${braces}</svg>`,
  '02-braces-rounded': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="${ORANGE}"/>${braces}</svg>`,
  '03-bull-mark': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <polygon fill="${CREAM}" points="7,13.5 3.2,3.8 10.9,10.9"/>
  <polygon fill="${CREAM}" points="25,13.5 28.8,3.8 21.1,10.9"/>
  <circle cx="16" cy="18.5" r="9" fill="${ORANGE}"/>
  <ellipse cx="16" cy="22.4" rx="5.1" ry="3.8" fill="${CREAM}"/>
  <circle cx="13.4" cy="21.8" r="1.1" fill="${INK}"/>
  <circle cx="18.6" cy="21.8" r="1.1" fill="${INK}"/>
  <circle cx="11.5" cy="15.4" r="1.4" fill="${INK}"/>
  <circle cx="20.5" cy="15.4" r="1.4" fill="${INK}"/>
</svg>`,
  '04-bull-circle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <circle cx="16" cy="16" r="16" fill="${ORANGE}"/>
  <circle cx="16" cy="19" r="10.2" fill="${ORANGE_DEEP}"/>
  <polygon fill="${CREAM}" points="6.4,12.8 2.6,3.2 10.9,10.2"/>
  <polygon fill="${CREAM}" points="25.6,12.8 29.4,3.2 21.1,10.2"/>
  <ellipse cx="16" cy="22.4" rx="5.8" ry="4.5" fill="${CREAM}"/>
  <circle cx="12.8" cy="21.8" r="1.2" fill="${INK}"/>
  <circle cx="19.2" cy="21.8" r="1.2" fill="${INK}"/>
  <circle cx="10.9" cy="14.7" r="1.6" fill="${INK}"/>
  <circle cx="21.1" cy="14.7" r="1.6" fill="${INK}"/>
</svg>`,
  '05-horns-braces': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="${ORANGE}"/>
  <polygon fill="${CREAM}" points="7,12.2 3.2,2.6 11.5,9.6"/>
  <polygon fill="${CREAM}" points="25,12.2 28.8,2.6 20.5,9.6"/>
  ${braces}
</svg>`,
};

for (const [name, svg] of Object.entries(variants)) {
  writeFileSync(path.join(outDir, `${name}.svg`), `${svg.trim()}\n`);
}

writeFileSync(
  path.join(outDir, 'README.md'),
  `# Logo / favicon variants

Minimal marks derived from the home hero bull and \`{ }\` shirt badge. Designed to stay legible at 16×16.

| ID | File stem | Idea |
| -- | --------- | ---- |
| 01 | \`01-braces-circle\` | White \`{ }\` on orange circle |
| 02 | \`02-braces-rounded\` | White \`{ }\` on rounded square |
| 03 | \`03-bull-mark\` | Geometric bull head (transparent) |
| 04 | \`04-bull-circle\` | Geometric bull head on orange circle |
| 05 | \`05-horns-braces\` | Cream horns + \`{ }\` on orange circle |

Each stem includes \`.svg\` plus \`-512.png\`, \`-180.png\`, \`-32.png\`, \`-16.png\` (PNGs from \`node scripts/generate-logo-variants.mjs\` when sharp is available).

Brand orange: \`${ORANGE}\` (small-size pop). Deep accent: \`${ORANGE_DEEP}\`.
`,
);

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  sharp = null;
}

const sizes = [512, 180, 32, 16];

if (sharp) {
  for (const [name, svg] of Object.entries(variants)) {
    const buf = Buffer.from(svg);
    for (const size of sizes) {
      await sharp(buf)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ compressionLevel: 9 })
        .toFile(path.join(outDir, `${name}-${size}.png`));
    }
    console.log(`wrote ${name}`);
  }
} else {
  const { spawnSync } = await import('node:child_process');
  for (const name of Object.keys(variants)) {
    for (const size of sizes) {
      const svgPath = path.join(outDir, `${name}.svg`);
      const pngPath = path.join(outDir, `${name}-${size}.png`);
      const r = spawnSync(
        'magick',
        ['-background', 'none', svgPath, '-resize', `${size}x${size}`, `PNG32:${pngPath}`],
        { encoding: 'utf8' },
      );
      if (r.status !== 0) {
        console.error(r.stderr || r.stdout || `magick failed for ${name}-${size}`);
        process.exit(1);
      }
    }
    console.log(`wrote ${name} (magick)`);
  }
}

console.log(`Done → ${path.relative(path.join(__dirname, '..'), outDir)}`);
