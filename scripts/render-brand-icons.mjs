/**
 * Render transparent light brand icons and solid apple-touch / android chrome assets.
 * Run: node scripts/render-brand-icons.mjs
 *
 * Mark: side crescent bull horns on the window frame.
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

const leftHorn = `M5.5 15.5
C1.2 14.0 -0.2 8.5 1.4 4.2
L2.0 2.0
L3.6 3.6
C2.6 5.2 2.4 7.5 3.4 9.5
C4.4 11.8 5.2 13.5 6.8 14.6
L8.2 15.4
L7.2 16.0
L5.5 15.5
Z`;
const rightHorn = `M26.5 15.5
C30.8 14.0 32.2 8.5 30.6 4.2
L30.0 2.0
L28.4 3.6
C29.4 5.2 29.6 7.5 28.6 9.5
C27.6 11.8 26.8 13.5 25.2 14.6
L23.8 15.4
L24.8 16.0
L26.5 15.5
Z`;

const appleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="6" fill="#0056b3"/>
  <g transform="translate(16 16) scale(0.911 0.975) translate(-16 -13.0)">
    <path fill="#ffffff" fill-rule="evenodd" d="
      M6.2 10.2 H25.8 A1.3 1.3 0 0 1 27.1 11.5 V22.8 A1.3 1.3 0 0 1 25.8 24.1 H6.2 A1.3 1.3 0 0 1 4.9 22.8 V11.5 A1.3 1.3 0 0 1 6.2 10.2 Z
      M7.8 13.6 V21.6 H24.2 V13.6 Z"/>
    <rect x="7.8" y="10.2" width="16.4" height="3.4" fill="#ffffff"/>
    <circle cx="9.4" cy="11.9" r="0.65" fill="#0056b3"/>
    <circle cx="11.5" cy="11.9" r="0.65" fill="#0056b3"/>
    <circle cx="13.6" cy="11.9" r="0.65" fill="#0056b3"/>
    <path fill="#ffffff" d="${leftHorn}"/>
    <path fill="#ffffff" d="${rightHorn}"/>
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

for (const f of [
  'docs/public/favicon-16x16.png',
  'docs/public/favicon-32x32.png',
  'docs/public/logo-32.png',
  'src/docs/brand/logo-32.png',
  'src/docs/kitchen-sink/icons/favicon-16x16.png',
  'src/docs/kitchen-sink/icons/favicon-32x32.png',
]) {
  const abs = path.join(root, f);
  const dim = execFileSync('magick', ['identify', '-format', '%wx%h', abs], {
    encoding: 'utf8',
  });
  magick([abs, '-background', 'none', '-gravity', 'center', '-extent', dim, `PNG32:${abs}`]);
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
