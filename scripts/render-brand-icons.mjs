/**
 * Render transparent light brand icons and solid apple-touch / android chrome assets.
 * Run: node scripts/render-brand-icons.mjs
 *
 * Mark geometry: bbox ~1.4–30.6 × 1.2–24.1, center (16, 12.65).
 * Logos use scale(1.01 1.288) for even ~1.25px pad. Solid icons use scale(0.94 1.20).
 */
import { writeFileSync, copyFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logoSvg = path.join(root, 'src/docs/brand/logo.svg');
const logoDarkPublic = path.join(root, 'docs/public/logo-dark.svg');
const faviconSvgPublic = path.join(root, 'docs/public/favicon.svg');
const appleTmp = path.join(root, 'src/docs/brand/.tmp-apple.svg');

const appleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="6" fill="#0056b3"/>
  <g transform="translate(16 16) scale(0.94 1.20) translate(-16 -12.65)">
    <path fill="#ffffff" fill-rule="evenodd" d="
      M6.2 10.2 H25.8 A1.3 1.3 0 0 1 27.1 11.5 V22.8 A1.3 1.3 0 0 1 25.8 24.1 H6.2 A1.3 1.3 0 0 1 4.9 22.8 V11.5 A1.3 1.3 0 0 1 6.2 10.2 Z
      M7.8 13.6 V21.6 H24.2 V13.6 Z"/>
    <rect x="7.8" y="10.2" width="16.4" height="3.4" fill="#ffffff"/>
    <circle cx="9.4" cy="11.9" r="0.65" fill="#0056b3"/>
    <circle cx="11.5" cy="11.9" r="0.65" fill="#0056b3"/>
    <circle cx="13.6" cy="11.9" r="0.65" fill="#0056b3"/>
    <path fill="#ffffff" d="
      M7.4 11
      C4.6 6.2 2.4 3.2 1.4 2.2
      C0.7 1.4 1.8 0.7 2.8 1.2
      C6.2 2.8 9.4 7.2 11.2 10.4
      C9.8 10.5 8.4 10.7 7.4 11
      Z"/>
    <path fill="#ffffff" d="
      M24.6 11
      C27.4 6.2 29.6 3.2 30.6 2.2
      C31.3 1.4 30.2 0.7 29.2 1.2
      C25.8 2.8 22.6 7.2 20.8 10.4
      C22.2 10.5 23.6 10.7 24.6 11
      Z"/>
  </g>
</svg>`;

writeFileSync(appleTmp, appleSvg);

function magick(args) {
  execFileSync('magick', args, { stdio: 'inherit' });
}

const outs = [
  { file: 'src/docs/brand/logo-32.png', size: 32, src: logoSvg },
  { file: 'docs/public/logo-32.png', size: 32, src: logoSvg },
  { file: 'docs/public/favicon-16x16.png', size: 16, src: logoSvg },
  { file: 'docs/public/favicon-32x32.png', size: 32, src: logoSvg },
  { file: 'docs/public/apple-touch-icon.png', size: 180, src: appleTmp },
  { file: 'docs/public/android-chrome-192x192.png', size: 192, src: appleTmp },
  { file: 'docs/public/android-chrome-512x512.png', size: 512, src: appleTmp },
  { file: 'src/docs/kitchen-sink/icons/favicon-16x16.png', size: 16, src: logoSvg },
  { file: 'src/docs/kitchen-sink/icons/favicon-32x32.png', size: 32, src: logoSvg },
  { file: 'src/docs/kitchen-sink/icons/apple-touch-icon.png', size: 180, src: appleTmp },
  { file: 'src/docs/kitchen-sink/icons/android-chrome-192x192.png', size: 192, src: appleTmp },
  { file: 'src/docs/kitchen-sink/icons/android-chrome-384x384.png', size: 384, src: appleTmp },
  { file: 'src/docs/kitchen-sink/icons/mstile-150x150.png', size: 150, src: appleTmp },
];

for (const { file, size, src } of outs) {
  magick([
    '-background',
    'none',
    src,
    '-resize',
    `${size}x${size}`,
    `PNG32:${path.join(root, file)}`,
  ]);
  console.log('wrote', file);
}

magick([
  path.join(root, 'docs/public/favicon-16x16.png'),
  path.join(root, 'docs/public/favicon-32x32.png'),
  path.join(root, 'docs/public/favicon.ico'),
]);
magick([
  path.join(root, 'docs/public/favicon-16x16.png'),
  path.join(root, 'docs/public/favicon-32x32.png'),
  path.join(root, 'src/docs/kitchen-sink/icons/favicon.ico'),
]);

copyFileSync(logoSvg, path.join(root, 'docs/public/logo.svg'));
copyFileSync(logoDarkPublic, path.join(root, 'src/docs/brand/logo-dark.svg'));
copyFileSync(faviconSvgPublic, path.join(root, 'src/docs/brand/favicon.svg'));
copyFileSync(
  path.join(root, 'docs/public/safari-pinned-tab.svg'),
  path.join(root, 'src/docs/kitchen-sink/icons/safari-pinned-tab.svg')
);
copyFileSync(
  path.join(root, 'docs/public/safari-pinned-tab.svg'),
  path.join(root, 'src/docs/brand/safari-pinned-tab.svg')
);

unlinkSync(appleTmp);
console.log('done');
