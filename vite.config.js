// Vite config tools and dependencies
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import path from "path";
import fs from "fs";
import { glob } from "glob";
import * as sass from "sass";
import postcss from "postcss";

// Custom PostCSS plugin: adds license header as a comment at the top of each CSS file
const addHeader = () => {
  return {
    postcssPlugin: "add-header",
    Once(root) {
      root.prepend({
        type: "comment",
        text: " Bullframe CSS v5.1.0 | MIT License | https://github.com/marcop135/bullframe.css ",
      });
    },
  };
};
addHeader.postcss = true;

// Custom Vite plugin: compiles all SCSS files (except partials) to CSS and minified CSS
function buildAllScss() {
  return {
    name: "build-all-scss",
    async closeBundle() {
      // Find all SCSS files in src/scss (excluding partials that start with _)
      const files = await glob("src/scss/**/*.scss");
      const scssFiles = files.filter(
        (file) => !path.basename(file).startsWith("_")
      );

      // Output directory for generated CSS
      const outDir = path.resolve("dist/css");
      fs.mkdirSync(outDir, { recursive: true });

      // Compile and process each SCSS file
      for (const file of scssFiles) {
        const name = path.basename(file, ".scss");
        const outFile = path.join(outDir, `${name}.css`);
        const minFile = path.join(outDir, `${name}.min.css`);

        // Step 1: Compile SCSS to CSS with source maps
        const result = await sass.compileAsync(file, {
          style: "expanded",
          sourceMap: true,
          sourceMapIncludeSources: true,
        });

        // Step 2: Run PostCSS with header + autoprefixer
        const postcssResult = await postcss([
          addHeader(),
          autoprefixer(),
        ]).process(result.css, {
          from: path.resolve(file),
          to: outFile,
          map: {
            prev: result.sourceMap ? JSON.stringify(result.sourceMap) : false,
            inline: false,
            annotation: true,
          },
        });

        // Write normal CSS and source map
        fs.writeFileSync(outFile, postcssResult.css);
        if (postcssResult.map) {
          fs.writeFileSync(`${outFile}.map`, postcssResult.map.toString());
        }

        // Step 3: Minify with cssnano + autoprefixer (again) + source maps
        const minified = await postcss([autoprefixer(), cssnano()]).process(
          postcssResult.css,
          {
            from: outFile,
            to: minFile,
            map: {
              prev: postcssResult.map ? postcssResult.map.toString() : false,
              inline: false,
              annotation: true,
            },
          }
        );

        // Write minified CSS and source map
        fs.writeFileSync(minFile, minified.css);
        if (minified.map) {
          fs.writeFileSync(`${minFile}.map`, minified.map.toString());
        }
      }
    },
  };
}

// Copy static files from src/docs to dist/docs (e.g. demo HTML, images, etc.)
function copyDocsFiles() {
  return {
    name: "copy-docs-files",
    closeBundle() {
      const srcDir = path.resolve(__dirname, "src/docs");
      const destDir = path.resolve(__dirname, "dist/docs");

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
  root: "src", // Vite project root
  build: {
    outDir: "../dist", // Output directory
    emptyOutDir: true, // Clean before build
    rollupOptions: {
      input: path.resolve(__dirname, "src/docs/demo/index.html"), // Entry point for HTML
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name][extname]`, // Keep asset file names flat
      },
    },
    assetsDir: "", // No subdir for assets
    sourcemap: true, // Enable source maps
  },
  plugins: [buildAllScss()], // Use the custom SCSS build plugin
  server: {
    open: "/docs/demo/index.html", // Dev server opens demo page
  },
});
