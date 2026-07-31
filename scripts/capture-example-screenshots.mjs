/**
 * Capture desktop screenshots for the Examples gallery cards.
 *
 * Prerequisites: `npm run build && npm run docs:sync-public`
 * Usage: `npm run examples:shots`
 */
import { createServer } from 'node:http';
import { readFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';
import examples from '../src/docs/examples/examples.json' with { type: 'json' };

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'docs', 'public');
const outDir = join(root, 'src', 'docs', 'examples', 'screenshots');

const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.webp': 'image/webp',
};

function startStaticServer(dir) {
  const server = createServer((req, res) => {
    try {
      let urlPath = decodeURIComponent((req.url ?? '/').split('?')[0]);
      if (urlPath.endsWith('/')) urlPath += 'index.html';
      const filePath = normalize(join(dir, urlPath));
      if (!filePath.startsWith(normalize(dir + sep))) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }
      if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const type = mime[extname(filePath).toLowerCase()] ?? 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type });
      res.end(readFileSync(filePath));
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, port });
    });
  });
}

mkdirSync(outDir, { recursive: true });

const cssOk = existsSync(join(publicDir, 'css', 'bullframe.min.css'));
const starterOk = existsSync(join(publicDir, 'examples', 'starter', 'index.html'));
if (!cssOk || !starterOk) {
  console.error('Missing docs/public assets. Run: npm run build && npm run docs:sync-public');
  process.exit(1);
}

const { server, port } = await startStaticServer(publicDir);
const base = `http://127.0.0.1:${port}`;
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1200, height: 750 },
  deviceScaleFactor: 1,
});

try {
  for (const ex of examples) {
    const url = `${base}/examples/${ex.slug}/`;
    await page.goto(url, { waitUntil: 'networkidle' });
    const out = join(outDir, `${ex.slug}.png`);
    await page.screenshot({ path: out, type: 'png' });
    console.log(`Wrote ${out}`);
  }
} finally {
  await browser.close();
  server.close();
}

console.log(`Captured ${examples.length} example screenshots.`);
