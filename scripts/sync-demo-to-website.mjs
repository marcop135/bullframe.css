import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, readdirSync, statSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const distCss = path.join(repoRoot, 'dist', 'css');
const distDemo = path.join(repoRoot, 'dist', 'docs', 'demo');
const websiteStatic = path.join(repoRoot, 'website', 'static');
const targetDemo = path.join(websiteStatic, 'demo');
const targetCss = path.join(websiteStatic, 'css');

if (!existsSync(distDemo) || !existsSync(distCss)) {
  console.error('[sync-demo] Run `npm run build` first — dist/ is missing.');
  process.exit(1);
}

function copyDir(src, dest) {
  if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = path.join(src, entry);
    const destPath = path.join(dest, entry);
    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

if (existsSync(targetDemo)) rmSync(targetDemo, { recursive: true, force: true });
if (existsSync(targetCss)) rmSync(targetCss, { recursive: true, force: true });

copyDir(distDemo, targetDemo);
copyDir(distCss, targetCss);

const indexHtmlPath = path.join(targetDemo, 'index.html');
let html = readFileSync(indexHtmlPath, 'utf8');

html = html.replaceAll('/docs/demo/', '/demo/');
html = html.replaceAll('../../css/', '/css/');

writeFileSync(indexHtmlPath, html);

console.log(`[sync-demo] OK — demo → ${path.relative(repoRoot, targetDemo)}, css → ${path.relative(repoRoot, targetCss)}`);
