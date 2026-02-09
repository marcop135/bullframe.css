// Vite config tools and dependencies
import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssImport from "postcss-import";
import path from "path";
import fs from "fs";
import { glob } from "glob";
import postcss from "postcss";

// Custom PostCSS plugin: adds license header as a comment at the top of each CSS file
const addHeader = () => {
  return {
    postcssPlugin: "add-header",
    Once(root) {
      root.prepend({
        type: "comment",
        text: "! Bullframe CSS v6.0.0 | MIT License | https://github.com/marcop135/bullframe.css ",
      });
    },
  };
};
addHeader.postcss = true;

// Custom Vite plugin: compiles all CSS files (except partials) to CSS and minified CSS
function buildAllCss() {
  return {
    name: "build-all-css",
    async closeBundle() {
      // Find main entry point CSS files in src/css (exclude partials in subdirs)
      const files = await glob("src/css/*.css");
      const cssFiles = files.filter(
        (file) => !path.basename(file).startsWith("_")
      );

      // Output directory for generated CSS
      const outDir = path.resolve("dist/css");
      fs.mkdirSync(outDir, { recursive: true });

      // Compile and process each CSS file
      for (const file of cssFiles) {
        const name = path.basename(file, ".css");
        const outFile = path.join(outDir, `${name}.css`);
        const minFile = path.join(outDir, `${name}.min.css`);

        // Read CSS file
        const cssContent = fs.readFileSync(file, "utf-8");

        // Step 1: Run PostCSS with import + header + autoprefixer
        const postcssResult = await postcss([
          postcssImport(),
          addHeader(),
          autoprefixer(),
        ]).process(cssContent, {
          from: path.resolve(file),
          to: outFile,
          map: {
            inline: false,
            annotation: true,
          },
        });

        // Write normal CSS and source map
        fs.writeFileSync(outFile, postcssResult.css);
        if (postcssResult.map) {
          fs.writeFileSync(`${outFile}.map`, postcssResult.map.toString());
        }

        // Step 2: Minify with cssnano + autoprefixer (again) + source maps
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
      input: {
        main: path.resolve(__dirname, "src/index.html"), // Landing page
        demo: path.resolve(__dirname, "src/docs/demo/index.html"), // Demo page
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name][extname]`, // Keep asset file names flat
      },
    },
    assetsDir: "", // No subdir for assets
    sourcemap: true, // Enable source maps
  },
  plugins: [
    buildAllCss(), // Use the custom CSS build plugin
    copyDocsFiles(), // Copy docs files including demo
  ],
  server: {
    open: "/index.html", // Dev server opens landing page
  },
});
