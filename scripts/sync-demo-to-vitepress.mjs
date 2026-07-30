import { cp, mkdir } from 'node:fs/promises';
import { basename } from 'node:path';
import { glob } from 'glob';

// Copy built CSS files used by the live demo to the VitePress public folder.
const cssFiles = await glob('dist/css/*.min.css');
await mkdir('docs/public/css', { recursive: true });
for (const file of cssFiles) {
  await cp(file, `docs/public/css/${basename(file)}`);
}

// Copy the interactive demo HTML so it ships at /demo/ on the docs site.
await mkdir('docs/public/demo', { recursive: true });
await cp('src/docs/demo/index.html', 'docs/public/demo/index.html');

// Copy demo assets (icons, images, extra styles).
await cp('src/docs/demo/css', 'docs/public/docs/demo/css', { recursive: true, force: true });
await cp('src/docs/demo/icons', 'docs/public/docs/demo/icons', { recursive: true, force: true });
await cp('src/docs/demo/images', 'docs/public/docs/demo/images', {
  recursive: true,
  force: true,
});

// Keep the standalone demo HTML in sync with the VitePress /demo/ route.
await mkdir('docs/public/demo', { recursive: true });
await cp('src/docs/demo/index.html', 'docs/public/demo/index.html', { force: true });

console.log(`Synced ${cssFiles.length} CSS files, demo assets, and demo HTML to docs/public/`);
