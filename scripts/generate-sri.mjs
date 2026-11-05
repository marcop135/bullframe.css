/**
 * Generate Subresource Integrity (SRI) hashes for the seven published min builds.
 *
 * Reads dist/css/*.min.css, writes docs/public/sri.json, and refreshes the
 * recommended CDN snippets in README / getting-started / theming docs (not the
 * docs home install tab, which keeps the short package CDN URL).
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

// cdnjs autoupdates from npm (dist/css flattened), so files and hashes match jsDelivr.
function cdnjsUrl(file) {
  return `https://cdnjs.cloudflare.com/ajax/libs/bullframe.css/${version}/${file}`;
}

function linkTag(file, integrity, { selfClosing = true, href = cdnUrl(file) } = {}) {
  const close = selfClosing ? ' />' : '>';
  return `<link rel="stylesheet" href="${href}" integrity="${integrity}" crossorigin="anonymous"${close}`;
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
        cdnjs: cdnjsUrl(file),
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

const cdnSectionMd = `Bullframe is on two CDNs: [jsDelivr](https://www.jsdelivr.com/package/npm/bullframe.css) and [cdnjs](https://cdnjs.com/libraries/bullframe.css). Both serve the same files from npm, so use either one with the same integrity hash.

**Recommended for production:** pin an exact version, point at a published \`.min.css\` file, and add Subresource Integrity plus \`crossorigin\`.

::: code-group

\`\`\`html [jsDelivr]
${defaultLinkSlash}
\`\`\`

\`\`\`html [cdnjs]
${linkTag(defaultFile, defaultIntegrity, { href: cdnjsUrl(defaultFile) })}
\`\`\`

:::

**Quick drop-in:** no integrity hash. jsDelivr serves the latest release; cdnjs has no "latest" URL, so its link names a version.

::: code-group

\`\`\`html [jsDelivr]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css" />
\`\`\`

\`\`\`html [cdnjs]
<link rel="stylesheet" href="${cdnjsUrl(defaultFile)}" />
\`\`\`

:::

Swap the filename for another build (\`bullframe-classless.min.css\`, \`bullframe-dark.min.css\`, …). Hashes for all seven builds: [sri.json](/sri.json).`;

patchMarked('docs/getting-started.md', 'sri:cdn', cdnSectionMd);

// README keeps the short package-root CDN URL; prose around it is hand-written.
// README.md is the sole entry in .prettierignore, so it is never passed to prettier.
patchMarked(
  'README.md',
  'sri:cdn',
  '```html\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css">\n```'
);

function fenceLink(file) {
  return `\`\`\`html\n${linkTag(file, hashes[file], { selfClosing: true })}\n\`\`\``;
}

patchMarked('docs/theming.md', 'sri:cdn-light', fenceLink('bullframe.min.css'));
patchMarked('docs/theming.md', 'sri:cdn-dark', fenceLink('bullframe-dark.min.css'));
patchMarked('docs/theming.md', 'sri:cdn-system', fenceLink('bullframe-system-default.min.css'));

patchMarked(
  'docs/theming/dark-mode.md',
  'sri:cdn-system',
  fenceLink('bullframe-system-default.min.css')
);
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
