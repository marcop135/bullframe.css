import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { glob } from 'glob';

// Copy built CSS used by the kitchen sink and examples into VitePress public.
const cssFiles = await glob('dist/css/*.min.css');
await mkdir('docs/public/css', { recursive: true });
for (const file of cssFiles) {
  await cp(file, `docs/public/css/${basename(file)}`);
}

// Kitchen sink page + assets at /kitchen-sink/.
await rm('docs/public/kitchen-sink', { recursive: true, force: true });
await mkdir('docs/public/kitchen-sink', { recursive: true });
await cp('src/docs/kitchen-sink/index.html', 'docs/public/kitchen-sink/index.html', {
  force: true,
});
await cp('src/docs/kitchen-sink/css', 'docs/public/kitchen-sink/css', {
  recursive: true,
  force: true,
});
await cp('src/docs/kitchen-sink/icons', 'docs/public/kitchen-sink/icons', {
  recursive: true,
  force: true,
});
await cp('src/docs/kitchen-sink/images', 'docs/public/kitchen-sink/images', {
  recursive: true,
  force: true,
});

// Legacy /demo/ → /kitchen-sink/ redirect.
await mkdir('docs/public/demo', { recursive: true });
await writeFile(
  'docs/public/demo/index.html',
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=/kitchen-sink/" />
    <link rel="canonical" href="/kitchen-sink/" />
    <title>Redirecting to Kitchen sink</title>
    <script>location.replace('/kitchen-sink/' + location.search + location.hash);</script>
  </head>
  <body>
    <p>Moved to <a href="/kitchen-sink/">/kitchen-sink/</a>.</p>
  </body>
</html>
`
);

// Example templates at /examples/{slug}/.
await rm('docs/public/examples', { recursive: true, force: true });
await mkdir('docs/public/examples', { recursive: true });
await cp('src/docs/examples', 'docs/public/examples', { recursive: true, force: true });

console.log(
  `Synced ${cssFiles.length} CSS files, kitchen sink, demo redirect, and examples to docs/public/`
);
