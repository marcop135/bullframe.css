import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import path from "path";
import fs from "fs";
import { glob } from "glob";
import sass from "sass";
import postcss from "postcss";

function buildAllScss() {
  return {
    name: "build-all-scss",
    async closeBundle() {
      const files = await glob("src/scss/**/*.scss");

      const scssFiles = files.filter(
        (file) => !path.basename(file).startsWith("_")
      );

      for (const file of scssFiles) {
        const name = path.basename(file, ".scss");
        const outDir = "dist/css";
        const outFile = path.join(outDir, `${name}.css`);
        const minFile = path.join(outDir, `${name}.min.css`);

        const result = sass.renderSync({
          file,
          outFile,
          sourceMap: true,
          outputStyle: "expanded",
        });

        const cssWithHeader =
          `/*! bullframecss v5.0.0 | MIT License | https://github.com/marcop135/bullframe.css */\n` +
          result.css.toString();

        const postcssResult = await postcss([autoprefixer()]).process(
          cssWithHeader,
          {
            from: file,
            to: outFile,
            map: {
              prev: result.map.toString(),
              inline: false,
            },
          }
        );

        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(outFile, postcssResult.css);
        fs.writeFileSync(`${outFile}.map`, postcssResult.map.toString());

        const minified = await postcss([autoprefixer(), cssnano()]).process(
          cssWithHeader,
          {
            from: file,
            to: minFile,
            map: { inline: false },
          }
        );

        fs.writeFileSync(minFile, minified.css);
        fs.writeFileSync(`${minFile}.map`, minified.map.toString());
      }
    },
  };
}

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

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, "src/docs/demo/index.html"),
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name][extname]`,
      },
    },
    assetsDir: "", // optional: avoid dist/assets
    sourcemap: true,
  },
  plugins: [buildAllScss(), copyDocsFiles()],
  server: {
    open: "/docs/demo/index.html",
  },
});
