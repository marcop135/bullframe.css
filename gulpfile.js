'use strict';

// Initialize modules
const { src, dest, watch, series, parallel } = require('gulp');

// Upgrade gulp-sass to v5
const sass = require('gulp-sass')(require('sass'));

// Import all the Gulp-related packages
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const browserSync = require('browser-sync');

const server = browserSync.create();

// Setup the BrowserSync server
function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './dist/',
      index: '../docs/test-page/index.html',
    },
  });
  done();
}

// File paths to watch
const files = {
  scssPath: 'src/scss/**/*.scss',
};

// Sass task
function scssTask() {
  return src(files.scssPath, { sourcemaps: true })
    .pipe(
      sass.sync({ outputStyle: 'expanded' }).on('error', sass.logError)
    ) // Compile SCSS to CSS
    .pipe(
      replace(
        '@charset "UTF-8";',
        '/*! bullframe.css v4.2.1 | MIT License | https://github.com/marcop135/bullframe.css */'
      )
    ) // Replace Node-sass auto-built charset with a useful comment
    .pipe(postcss([autoprefixer()])) // Apply PostCSS plugins
    .pipe(dest('dist/css')) // Write pre-minified styles
    .pipe(postcss([cssnano()])) // Minify CSS
    .pipe(
      rename({
        suffix: '.min',
      })
    ) // Rename files
    .pipe(dest('dist/css', { sourcemaps: '.' })); // Output final CSS
}


// Watch task: watch SCSS, JS, image, and HTML files for changes
function watchTask() {
  watch([files.scssPath], series(parallel(scssTask), reload));
}

// Export the default Gulp task
exports.default = series(
  parallel(scssTask),
  serve,
  watchTask
);