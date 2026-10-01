// repo-brand kit 1.0.0, synced from marcopontili.com/scripts/repo-brand; edit there, not here.
/**
 * Inline fonts/*.woff2 as base64 @font-face rules into an SVG's <style>,
 * between the two marker comments:
 *
 *   <style>
 *     /* @fonts:start *\/ /* @fonts:end *\/
 *     ...the readable rules...
 *   </style>
 *
 * Everything outside the markers is left alone, so the artwork stays reviewable
 * in git and the SVG still renders identically when opened on its own.
 *
 * Run: node embed-fonts.mjs <file.svg> [...]   (rewrites the files in place)
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const START = '/* @fonts:start */';
const END = '/* @fonts:end */';

export function fontFaces(dir = HERE) {
  const tokens = JSON.parse(readFileSync(join(dir, 'tokens.json'), 'utf-8'));
  return tokens.fonts
    .map((f) => {
      const b64 = readFileSync(join(dir, 'fonts', f.file)).toString('base64');
      return (
        `@font-face{font-family:'${f.family}';font-style:normal;font-weight:${f.weight};` +
        `src:url(data:font/woff2;base64,${b64}) format('woff2');}`
      );
    })
    .join('\n');
}

export function embedFonts(svg, dir = HERE) {
  const a = svg.indexOf(START);
  const b = svg.indexOf(END);
  if (a === -1 || b === -1 || b < a) {
    throw new Error(`missing ${START} ... ${END} markers inside the SVG <style>`);
  }
  return `${svg.slice(0, a + START.length)}\n${fontFaces(dir)}\n${svg.slice(b)}`;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  for (const file of process.argv.slice(2)) {
    const before = readFileSync(file, 'utf-8');
    const after = embedFonts(before);
    if (after !== before) writeFileSync(file, after);
    console.log(after === before ? 'fonts current' : 'fonts embedded', file);
  }
}
