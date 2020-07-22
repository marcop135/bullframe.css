// Gulp-starter repository
// File processing boilerplate for HTML, Sass, JS, PNG, JPEG, GIF and SVG files with Gulp.js
// https://github.com/marcop135/gulp-starter
"use strict";

// Initialize modules
// Import specific gulp API functions lets us write them below as series()
// instead of gulp.series()
const { src, dest, watch, series, parallel } = require("gulp");

// Import all the Gulp-related packages we want to use
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const browserSync = require("browser-sync");

const server = browserSync.create();

// setup the BrowserSync server
function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: "./",
      index: "./index.html",
    },
  });
  done();
}

// File paths to watch
const files = {
  htmlPath: "./*.html",
  scssPath: "src/scss/**/*.scss",
};

// Sass task
function scssTask() {
  return (
    src(files.scssPath, {
      sourcemaps: true,
    })
      // compile SCSS to CSS
      .pipe(sass.sync({ outputStyle: "expanded" }))

      // replace Node-sass auto-built charset with a useful comment
      // https://stackoverflow.com/a/51886455/4027098
      .pipe(
        replace(
          '@charset "UTF-8";',
          "/*! bullframe.css v3.3.3 | MIT License | https://github.com/marcop135/bullframe.css */"
        )
      )

      // PostCSS plugins
      .pipe(postcss([autoprefixer()]))

      // write pre-minifies styles
      .pipe(dest("dist/css"))

      // PostCSS plugins
      .pipe(postcss([cssnano()]))

      // rename files
      .pipe(
        rename({
          suffix: ".min",
        })
      )

      // put final CSS in dist folder
      .pipe(
        dest("dist/css", {
          sourcemaps: ".",
        })
      )
  );
}

// watch task: watch SCSS, JS, image and HTML files for changes
// If any change, run scss, js and image tasks simultaneously
// then reload via browsersync
function watchTask() {
  watch([files.htmlPath, files.scssPath], series(parallel(scssTask), reload));
}

// Export the default Gulp task so it can be run
// Runs the scss, js, image and cache busting tasks simultaneously
// start local server and watch tasks
exports.default = series(parallel(scssTask), serve, watchTask);
