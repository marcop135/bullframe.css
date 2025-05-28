# CHANGELOG

## 4.2.2 (MM? DD? YYYY?)

...

## 4.2.1 (April 26, 2025)

* Fix and simplify the structure of the `/docs` directory [(#42)](https://github.com/marcop135/bullframe.css/issues/42)
* Add support for GitHub Packages registry
* Removed screenshots and screencasts from the repository to speed up npm installation

## 4.2.0 (April 14, 2025)

* Add support for Netlify deploy

## 4.1.2 (February 23, 2024)

* Update all npm dependencies
* Fix typos in README.md

## 4.1.1 (August 31, 2023)

* Update all npm dependencies
* Improve documentation

## 4.1.0 (August 30, 2023)

* Move from `dark-prefers` to `system-default`, but no breaking changes!
* Update `.browserlistrc`
* Clean up and improve `README.md`

## 4.0.1 (August 12, 2022)

* Update `.browserlistrc`
* Update `package.json` description and tags

## 4.0.0 (August 11, 2022)

* [breaking changes] Drop support for IE8, IE9, and IE10
* [breaking changes] Upgrade all npm packages to minor and major latest versions (e.g. gulp-sass v5 now in use)
* Clean up `README.md`

## 3.8.2 (June 26, 2021)

* Upgrade cssnano, autoprefixer, and postcss plugins to major versions [(a6a9ecc)](https://github.com/marcop135/bullframe.css/commit/a6a9ecc3b52a30e1a5c4408967268d22f46a8e2c)
* Clean up `README.md`

## 3.8.1 (June 22, 2021)

* [bug fixes] Add missing compiled CSS files

## 3.8.0 (June 22, 2021)

* [breaking changes] Revert html/body `height` and `body` `min-height` to `auto` (default value) to avoid web app scrollbar issues
* Add support for Skypack CDN
* Add Synk vuln badge in `README.md`

## 3.7.0 (April 24, 2021)

* [breaking changes] Set html/body `height` and `body` `min-height` to `100%` to help with backgrounds and centering [(8239677)](https://github.com/marcop135/bullframe.css/)
* [bug fixes] Add missing margin/padding spacing utilities to `utility-spacing.scss` [(e1cdf4c)](https://github.com/marcop135/bullframe.css/commit/e1cdf4ccfd70662a3d1babe2d5d0457b8ef6e569)
* [enhancements] Remove W3C-invalid CSS properties/values from SCSS files [(2791b83)](https://github.com/marcop135/bullframe.css/commit/2791b83eab872abe92a2fd6cc3b3bc8d684fcc36)
* [enhancements] Add Sass [@debug](https://sass-lang.com/documentation/at-rules/debug) rule to debugging utility [(969fcf3c)](https://github.com/marcop135/bullframe.css/commit/969fcf3ccb474f5bc5888841d479216b3e54de0a)

## 3.6.0 (March 16, 2021)

* Add new flexbox utilities into `_utility-layout.scss` (IE10+)
* Add new `filter` utility module (≠ IE / Opera Mini)
* Add new `bf-position-sticky` utility class (≠ IE)
* Add ARIA roles appearance improvements into `_misc-accessibility.scss` (a11y)
* Remove touch action manipulation defaults in IE10
* Purge `white-space` declarations from text truncate multiline mixins and utility

## 3.5.0 (February 09, 2021)

* Add new flexbox-powered grid system mixins (IE10+)
* Add new flexbox-powered align utility (IE10+)
* Add new text-truncate multiline text mixin and utility using `line-clamp` property (≠ IE)
* Add new `z-index` utility
* Add extra [debugging](https://github.com/marcop135/bullframe.css/blob/v3.4.6/src/scss/utilities/_utility-debugging.scss#L31) utility test to check performances, thanks @tkadlec

## 3.4.5 (February 08, 2021)

* moved SCSS files and `Gulpfile.js` from double quotes to single ones
* added Prettify formatting support

## 3.4.4 (February 04, 2021)

* added missing classless/classless-ie10+ dark/dark-prefers builds

## 3.4.3 (January 28, 2021)

* added missing center alignment for `.bf-display-block-center` utility

## 3.4.2 (January 27, 2021)

* added missing ie10+ builds for dark and dark-prefers

## 3.4.1 (January 24, 2021)

* added missing v3.4.0 `CHANGELOG.md`

## 3.4.0 (January 24, 2021)

* added `input range` styling in modern browsers only
* update video source paths accordingly to MDN [(#22)](https://github.com/marcop135/bullframe.css/issues/12)

## 3.3.9 (November 29, 2020)

* fixed broken anchors and URLs in `README.md`

## 3.3.8 (November 29, 2020)

* added `README.md` fixes and improvements
* reinforced mixins declarations

## 3.3.7 (November 27, 2020)

* removed ie8-9 hacks and create two new builds ie10+
* fixed missing `!important`s to `.bf-sr-only.focusable` declaration

## 3.3.6 (November 20, 2020)

* added new anchors normalization [styles](https://github.com/marcop135/bullframe.css/commit/435c8e1cade4be9f0bed65f5d8a9ed5deb2278dd)
* improved focus outline color contrast in dark mode

## 3.3.5 (September 27, 2020)

* revert latest grid system column [fixes](https://github.com/marcop135/bullframe.css/commit/3bc68dee997c5b8530a5e498dd55dfc24347fcc3)
* added more table normalization styles
* added more webkit form normalization styles

## 3.3.4 (September 03, 2020)

* added an utilities reference in `README.md`
* fixed a grid system [bug](https://github.com/marcop135/bullframe.css/commit/d26c1dd21c808bda6472913073c72a8048a56d8f) related to `.bf-col-3` and `bf-col-4` utilities
* added support for GitHub Packages registry
* added UNPKG CDN in `README.md`

## 3.3.3 (July 22, 2020)

* bumped version to fix npm registry

## 3.3.2 (July 22, 2020)

* deprecate this version to fix an error with npm publish

## 3.3.1 (July 22, 2020)

* fixed "What's included" and "Gulp.js" sections in `README.md`
* fixed JSDelivr `package.json` settings
* minor code improvements

## 3.3.0 (July 09, 2020)

* changed grid system container `max-width` to match Bootstrap Grid (now is 1140px + gutters)
* chanced margin/padding utilities naming
* added refinements to `.bf-table` and `.bf-table-responsive` utilities
  * added zebra striping utility
* added more `font-weight` utilities
* added more width-related utilities
* changed JSDelivr CDN paths from GitHub to npm
* updated screenshots and screencasts files
* added GitHub, Gulp, npm and Sass minor improvements

## 3.2.0 (June 16, 2020)

* changed grid gutter width to match Bootstrap Grid
* added support for RTL [(#12)](https://github.com/marcop135/bullframe.css/issues/12)
* added `datalist` normalization [(#13)](https://github.com/marcop135/bullframe.css/issues/13)
* added `progress` normalization
* added dark theme scrollbars normalization
* added webkit/blink/gecko/trident screenshots/screencasts
* added quick overview of the utilities in `README.md`
* added more examples in `index.html`
* added SCSS file structure improvements
* added responsive typography improvements
* added form states (e.g. `:invalid`) improvements [(#14)](https://github.com/marcop135/bullframe.css/issues/14)
* added `prefers-reduced-motion: reduce` improvements
* added `line-height` improvements
* added `font-weight` improvements

## 3.1.0 (May 23, 2020)

* fixed broken CDN URL paths [#6](https://github.com/marcop135/bullframe.css/issues/6)
* fixed `video` `width` bug [#10](https://github.com/marcop135/bullframe.css/issues/10)
* fixed `contributing` and `code_of_conduct` broken links and missing content
* added `index.html` minor enhancements [commit](https://github.com/marcop135/bullframe.css/commit/96b267fed9c9507591ed115c4a78e54d79f0c121)
* added minor package files and folders structure enhancements

## 3.0.0 (May 18, 2020)

* **CSS to SCSS (Sass architecture refactoring)**
* added `gulp.js` file processing
* added CSS BEM syntax
* added npm
* added CDN
* added Dark mode
* added new test page
* added HTML snippets
* added screenshots
* added extended browser compatiblity list
* added proxy browsers support
* added logo
* added travis CI
* added utility classes isolation
* added reduced motion support
* added responsive typography
* added custom `select`
* added custom radios and checkboxes
* added much more information in `README.md`
* added CONTRIBUTING.md
* added CODE_OF_CONDUCT.md
* ...and much more!

## 2.9.0 (April 13, 2020)

* added Linux OS support to native font stack `font-family` list

## 2.8.2 (April 9, 2020)

* added `label` normalization
* updated HTML demo content

## 2.8.1 (April 3, 2020)

* added `README.md` information
* updated browser compatiblity list

## 2.8.0 (March 22, 2020)

* prettified HTML demo
* prettified CSS
* removed unsupported `datetime` input
* added a CSS map
* updated browser compatibility list
* added more comments

## 2.7.0 (March 17, 2020)

* disabled form elements `pointer-events`
* removed `progress` elements previous normalization
* refactored `:focus` state from stratch

## 2.6.3 (March 13, 2020)

* added IE `table-responsive` scrollbar bug fix
* removed buttons' `:active` styles
* added GitHub sponsor information
* added YouTube privacy-friendly `no-cookie` `iframe`

## 2.6.2 (March 11, 2020)

* added support for `font-variant` ligatures

## 2.6.1 (March 4, 2020)

* added `progress` normalization
* improved form elements appearance
* improved `caption` and `figcaption` appearance

## 2.5.2 (February 25, 2020)

* added `@viewport` support
* removed confusing flexible embeds screen ratios
* added better font stack
* added more comments
* updated browser compatibility

## 2.5.1 (February 11, 2020)

* updated `@print` styles
* increased main grid system wrapper `max-width`
* added `:selection` normalization
* added rem units replacements
* improved `README.md` information

## 2.4.0 (February 9, 2020)

* added youtube and vimeo flexible `embed` classes
* added `html` and `body` typography normalization
* improved `address` normalization
* added `hr` `box-sizing` bug fix
* improved `fieldset` normalization
* added workaround to render correclty all monospaced elements
* added `caption` normalization
* adddd `legend` normalization

## 2.3.1 (February 5, 2020)

* added a missing semicolumn fix

## 2.3.0 (February 3, 2020)

* removed older CSS hacks
* added `add-on` folder
* improve `img` normalization

## 2.2.0 (January 29, 2020)

* **dropped IE7 support**
* updated IE8+ normalization
* updated `html5shiv.js` polyfill to v3.7.3

## 2.1.1 (November 6, 2014)

* updated `@print` styles

## 2.1.0 (August 13, 2014)

* added JSDelivr CDN
* updated high resolution deviced media queries
* updated `index.html` demo content

## 2.0.1 (August 9, 2014)

* updated `README.md` information
* updated `index.html` demo content

## 2.0.0 (August 6, 2014)

* **dropped IE7 CSS hacks**
* updated author styles' helpers
* refactored grid system classes
* enhanced form elements styles
* refactored code indentation
* updated JS polyfills

## 1.6.3 (January 31, 2014)

* added `vertical-align` normalization on multiple elements
* added `pre` `overflow` buf fix for all browsers
* added `progress` normalization
* added focused input support

## 1.6.2 (December 29, 2013)

* updated JS Bin demo URL
* updated HTML demo structure
* improved `inline-block` class
* added Google Maps `embed` `box-sizing` fix

## 1.6.1 (December 27, 2013)

* updated monospaced font stack
* added webkit date, month and week inputs normalization

## 1.6.0 (December 5, 2013)

* added _success_ Bootstrap v3 buttons
* added new `display` classes
* added update CSS hacks reference
* added browser compatibility list
* emulated `box-shadow`on IE8

## 1.5.2 (October 21, 2013)

* recompiled `select` data uri images
* added new base font stack
* added IE8+ grid system fixes
* added IE10 `table-responsive` `overflow` bug fix

## 1.5.1 (October 7, 2013)

* added `rem` units
* moved `line-height` normalization from `body` to `html`
* added `button` IE8 fix
* added vertical rhythm base number _1.5_

## 1.5.0 (September 13, 2013)

* added `label` normalization
* normalized `button` FF `display`
* renamed helper classes
* added small bug fixes and enhancements to the `test.html` file

## 1.4.3 (August 1, 2013)

* added iOS4+ compatibility (iPhone/iPod 3GS devices)
* added IE10 `background-color` on active links normalization
* added `vertical-align` `canvas` normalization
* updated high resolution screen media query placeholder
* added project scope clarification: now the framework is just a _boilerplate_

## 1.4.2 (July 4, 2013)

* added native `audio` and `video` elements normalization

## 1.4.1 (June 7, 2013)

* added `button` `line-height` normalization
* improved `button` appearance
* added headings fixes
* added 100% IE7 responsive grid system support

## 1.4.0 (May 30, 2013)

* update vertical rhythm composition
* added `readonly` and `disabled` form elements styles
* added grid system bug fixes for IE7 and IE8
* added `select` bug fixes
* added `pre` IE7 fixes
* improved form elements `:focus` state appearance

## 1.3.2 (May 17, 2013)

* added `select` webkit CSS hack
* added flexible video class

## 1.3.1 (May 14, 2013)

* added IE9+ CSS hacks
* added `blockquote` normalization
* added `super-clearfix` class to clear `float` in IE7 via CSS expressions

## 1.3.0 (May 7, 2013)

* changed grid system `display` from `inline-block` to `block`
* added grid system `float` to avoid several YUI3 bugs and quirkes

## 1.2.0 (April 26, 2013)

* added custom classes for responsive tables

## 1.1.2 (March 21, 2013)

* merged grid system bug fixes from YUI3 v3.9.0

## 1.1.1 (March 20, 2013)

* added `optgroup` display bug fix

## 1.1.0 (March 19, 2013)

* added `address` normalization
* added headings normalization
* extended grid system styles
* enhance styled list classes
* added more CSS hacks to the CSS hacks reference
* added WordPress core styles
* added `button` normalization
* update JS Bin demo URL

## 1.0.2 (March 12, 2013)

fixed several accessiblity form bugs related to layout display

## 1.0.1 (March 12, 2013)

* added CSS hacks for IE7, IE8 and IE9+
* added `outgroup` `font-family` normalization
* added `html` `word-wrap` set to `break-word`
* added `legend` line wrapping trick for IE7+ and FF 4+
* removed `width: 100%` from `audio` element
* removed bottom margin from `audio` and `video` elements

## 1.0.0 (February 19, 2013)

First public release!

Initial commit: November 19, 2012

The aim was to create a _bulldozer_ framework to kickstart a **cross-browser responsive** HTML/CSS development.
