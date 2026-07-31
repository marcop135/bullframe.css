// Vite config tools and dependencies
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssImport from 'postcss-import';
import path from 'path';
import fs from 'fs';
import { glob } from 'glob';
import postcss from 'postcss';

// Read the version from package.json so the dist/ header stays in lockstep with
// whatever `npm version` produces — no more hardcoded "v6.0.0" drifting out of sync.
const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));
const pkgVersion = pkg.version;

// Custom PostCSS plugin: adds license header as a comment at the top of each CSS file
const addHeader = () => {
  return {
    postcssPlugin: 'add-header',
    Once(root) {
      root.prepend({
        type: 'comment',
        text: `! Bullframe CSS v${pkgVersion} | MIT License | https://github.com/marcop135/bullframe.css `,
      });
    },
  };
};
addHeader.postcss = true;

// Compile a single CSS entry file through the same PostCSS pipeline used in
// production. Returns the processed CSS string and source map (when requested).
async function compileCss(file, { minified = false } = {}) {
  const from = path.resolve(__dirname, file);
  const cssContent = fs.readFileSync(from, 'utf-8');

  const postcssResult = await postcss([postcssImport(), addHeader(), autoprefixer()]).process(
    cssContent,
    {
      from,
      to: from,
      map: { inline: false, annotation: false },
    }
  );

  if (minified) {
    const minifiedResult = await postcss([autoprefixer(), cssnano()]).process(postcssResult.css, {
      from,
      to: from,
      map: { inline: false, annotation: false },
    });
    return { css: minifiedResult.css, map: minifiedResult.map };
  }

  return { css: postcssResult.css, map: postcssResult.map };
}

// Find the entry-point CSS files that should be exposed as build artifacts.
async function listEntryCss() {
  const files = await glob('src/css/*.css', { cwd: __dirname });
  return files.filter((file) => !path.basename(file).startsWith('_'));
}

// Custom Vite plugin: compiles all CSS files (except partials) to CSS and minified CSS
function buildAllCss() {
  return {
    name: 'build-all-css',
    async configureServer(server) {
      // Serve compiled CSS during dev so the kitchen sink links to
      // /css/bullframe-*.min.css resolve without a prior production build.
      server.middlewares.use(async (req, res, next) => {
        const match = req.url?.match(/^\/css\/(.+?)\.min\.css(?:\?.*)?$/);
        if (!match) return next();

        const name = match[1];
        const srcFile = path.join(__dirname, 'src/css', `${name}.css`);
        if (!fs.existsSync(srcFile)) return next();

        try {
          const { css } = await compileCss(srcFile, { minified: true });
          res.setHeader('Content-Type', 'text/css');
          res.setHeader('Cache-Control', 'no-cache');
          res.end(css);
        } catch (err) {
          res.statusCode = 500;
          res.end(`/* CSS build error: ${err.message} */`);
        }
      });
    },
    async closeBundle() {
      const cssFiles = await listEntryCss();
      const outDir = path.resolve(__dirname, 'dist/css');
      fs.mkdirSync(outDir, { recursive: true });

      for (const file of cssFiles) {
        const name = path.basename(file, '.css');
        const outFile = path.join(outDir, `${name}.css`);
        const minFile = path.join(outDir, `${name}.min.css`);

        const { css, map } = await compileCss(file, { minified: false });
        fs.writeFileSync(outFile, css);
        if (map) fs.writeFileSync(`${outFile}.map`, map.toString());

        const { css: minCss, map: minMap } = await compileCss(file, { minified: true });
        fs.writeFileSync(minFile, minCss);
        if (minMap) fs.writeFileSync(`${minFile}.map`, minMap.toString());
      }
    },
  };
}

// Copy static files from src/docs to dist/docs (kitchen sink HTML, images, etc.)
function copyDocsFiles() {
  return {
    name: 'copy-docs-files',
    closeBundle() {
      const srcDir = path.resolve(__dirname, 'src/docs');
      const destDir = path.resolve(__dirname, 'dist/docs');

      function copyRecursive(src, dest) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

        const entries = fs.readdirSync(src, { withFileTypes: true });

        for (const entry of entries) {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);

          if (entry.isDirectory()) {
            copyRecursive(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      }

      copyRecursive(srcDir, destDir);
    },
  };
}

// Main Vite config
export default defineConfig({
  root: 'src', // Vite project root
  build: {
    outDir: '../dist', // Output directory
    emptyOutDir: true, // Clean before build
    rollupOptions: {
      // Avoid HTML MPA input: Vite's html-inline-proxy breaks on Windows with
      // inline <style> in the kitchen sink. Docs HTML is copied by the plugin.
      input: path.resolve(__dirname, 'scripts/vite-css-entry.js'),
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name][extname]`,
      },
    },
    assetsDir: '',
    sourcemap: false, // CSS source maps are generated by buildAllCss; JS is trivial
  },
  plugins: [
    buildAllCss(),
    copyDocsFiles(),
    {
      name: 'omit-noop-entry',
      generateBundle(_options, bundle) {
        for (const fileName of Object.keys(bundle)) {
          if (fileName.includes('vite-css-entry')) delete bundle[fileName];
        }
      },
    },
  ],
  server: {
    open: '/docs/kitchen-sink/',
  },
});
