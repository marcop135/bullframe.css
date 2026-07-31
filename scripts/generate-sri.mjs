/**
 * Generate Subresource Integrity (SRI) hashes for the seven published min builds.
 *
 * Reads dist/css/*.min.css, writes docs/public/sri.json, and refreshes the
 * recommended CDN snippets in getting-started / theming docs (not README or
 * the docs home install tab, which keep the short package CDN URL).
 *
 * Run after `npm run build` (hashes must match the files you publish):
 *   npm run docs:sri
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const pkg = JSON.parse(readFileSync(path.join(repoRoot, 'package.json'), 'utf8'));
const version = pkg.version;

const builds = [
  'bullframe.min.css',
  'bullframe-dark.min.css',
  'bullframe-system-default.min.css',
  'bullframe-classless.min.css',
  'bullframe-classless-dark.min.css',
  'bullframe-classless-system-default.min.css',
  'bullframe-utilities.min.css',
];

function sriFor(filePath) {
  const buf = readFileSync(filePath);
  return `sha384-${createHash('sha384').update(buf).digest('base64')}`;
}

function cdnUrl(file) {
  return `https://cdn.jsdelivr.net/npm/bullframe.css@${version}/dist/css/${file}`;
}

function linkTag(file, integrity, { selfClosing = true } = {}) {
  const close = selfClosing ? ' />' : '>';
  return `<link rel="stylesheet" href="${cdnUrl(file)}" integrity="${integrity}" crossorigin="anonymous"${close}`;
}

const hashes = {};
for (const file of builds) {
  const full = path.join(repoRoot, 'dist', 'css', file);
  if (!existsSync(full)) {
    console.error(`Missing ${full}. Run npm run build first.`);
    process.exit(1);
  }
  hashes[file] = sriFor(full);
}

const out = {
  version,
  algorithm: 'sha384',
  generatedAt: new Date().toISOString(),
  files: Object.fromEntries(
    builds.map((file) => [
      file,
      {
        href: cdnUrl(file),
        integrity: hashes[file],
        crossorigin: 'anonymous',
      },
    ])
  ),
};

const sriJsonPath = path.join(repoRoot, 'docs', 'public', 'sri.json');
writeFileSync(sriJsonPath, `${JSON.stringify(out, null, 2)}\n`);
console.log(`Wrote ${path.relative(repoRoot, sriJsonPath)}`);

const defaultFile = 'bullframe.min.css';
const defaultIntegrity = hashes[defaultFile];
const defaultLinkSlash = linkTag(defaultFile, defaultIntegrity, { selfClosing: true });

function patchMarked(fileRel, marker, body) {
  const full = path.join(repoRoot, fileRel);
  if (!existsSync(full)) {
    console.warn(`Skip missing ${fileRel}`);
    return;
  }
  const start = `<!-- ${marker}:start -->`;
  const end = `<!-- ${marker}:end -->`;
  const src = readFileSync(full, 'utf8');
  if (!src.includes(start) || !src.includes(end)) {
    console.warn(`Skip ${fileRel}: missing ${marker} markers`);
    return;
  }
  const next = src.replace(
    new RegExp(`${escapeRegExp(start)}[\\s\\S]*?([ \\t]*)${escapeRegExp(end)}`),
    `${start}\n${body}\n$1${end}`
  );
  writeFileSync(full, next);
  console.log(`Patched ${fileRel}`);
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const cdnSectionMd = `Quick drop-in (latest published package entry):

\`\`\`html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css" />
\`\`\`

**Recommended for production:** pin an exact version, point at a published \`.min.css\` file, and add Subresource Integrity plus \`crossorigin\`. Package-root / unversioned CDN URLs are not SRI-safe.

\`\`\`html
${defaultLinkSlash}
\`\`\`

Swap the filename for another build (\`bullframe-classless.min.css\`, \`bullframe-dark.min.css\`, …). Hashes for all seven builds: [sri.json](/sri.json).`;

patchMarked('docs/getting-started.md', 'sri:cdn', cdnSectionMd);

function fenceLink(file) {
  return `\`\`\`html\n${linkTag(file, hashes[file], { selfClosing: true })}\n\`\`\``;
}

patchMarked('docs/theming.md', 'sri:cdn-light', fenceLink('bullframe.min.css'));
patchMarked('docs/theming.md', 'sri:cdn-dark', fenceLink('bullframe-dark.min.css'));
patchMarked('docs/theming.md', 'sri:cdn-system', fenceLink('bullframe-system-default.min.css'));

patchMarked('docs/theming/dark-mode.md', 'sri:cdn-system', fenceLink('bullframe-system-default.min.css'));
patchMarked('docs/theming/dark-mode.md', 'sri:cdn-dark', fenceLink('bullframe-dark.min.css'));

function patchCdnLinksInFile(fileRel) {
  const full = path.join(repoRoot, fileRel);
  if (!existsSync(full)) return;
  let src = readFileSync(full, 'utf8');
  const before = src;
  src = src.replace(
    /^([ \t]*)<link\s+rel="stylesheet"\s+href="https:\/\/cdn\.jsdelivr\.net\/npm\/bullframe\.css@[^"]+\/dist\/css\/([^"]+\.min\.css)"[^>]*>/gm,
    (match, indent, file) => {
      if (!hashes[file]) return match;
      const selfClosing = /\/>\s*$/.test(match);
      return `${indent}${linkTag(file, hashes[file], { selfClosing })}`;
    }
  );
  if (src !== before) {
    writeFileSync(full, src);
    console.log(`Refreshed CDN link tags in ${fileRel}`);
  }
}

patchCdnLinksInFile('docs/getting-started.md');

console.log('Done.');
