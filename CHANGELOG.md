# Changes to bullframe.css

## 5.0.0 - BREAKING CHANGES! (???)

* ???

## 4.2.2 (May 28, 2025)

* Remove text indentation from table contents
* Correct table border color inheritance
* Update stylelint configuration and remove deprecated package
* Clearly define browser support in `README.md`
* Remove attempted support for GitHub Packages
* Add maps to npm package
* Ignore more common files in npm package

## 4.2.1 (April 26, 2025)

* Fix and simplify the structure of the `/docs` directory [(#42)](https://github.com/marcop135/bullframe.css/issues/42)
* Removed screenshots and screencasts from the repository to speed up npm installation
* Start support for GitHub Packages registry

## 4.2.0 (2025-04-14)

* Add support for Netlify deploy

## 4.1.2 (2024-02-23)

* Update all npm dependencies
* Fix typos in README.md

## 4.1.1 (2023-08-31)

* Update all npm dependencies
* Improve documentation

## 4.1.0 (2023-08-30)

* Move from `dark-prefers` to `system-default`, but no breaking changes!
* Update `.browserlistrc`
* Clean up and improve `README.md`

## 4.0.1 (2022-08-12)

* Update `.browserlistrc`
* Update `package.json` description and tags

## 4.0.0 (2022-08-11) - BREAKING CHANGES

* [breaking change] Drop support for IE8, IE9, and IE10
* [breaking change] Upgrade all npm packages to minor and major latest versions (e.g. gulp-sass v5 now in use)
* Clean up `README.md`

## 3.8.2 (2021-06-26)

* Upgrade cssnano, autoprefixer, and postcss plugins to major versions [(a6a9ecc)](https://github.com/marcop135/bullframe.css/commit/a6a9ecc3b52a30e1a5c4408967268d22f46a8e2c)
* Clean up `README.md`

## 3.8.1 (2021-06-22)

* [bug fixes] Add missing compiled CSS files

## 3.8.0 (2021-06-22) - BREAKING CHANGES

* [breaking change] Revert html/body `height` and `body` `min-height` to `auto` (default value) to avoid web app scrollbar issues
* Add support for Skypack CDN
* Add Synk vuln badge in `README.md`

## 3.7.0 (2021-04-24) - BREAKING CHANGES

* [breaking change] Set html/body `height` and `body` `min-height` to `100%` to help with backgrounds and centering [(8239677)](https://github.com/marcop135/bullframe.css/)
* [bug fixes] Add missing margin/padding spacing utilities to `utility-spacing.scss` [(e1cdf4c)](https://github.com/marcop135/bullframe.css/commit/e1cdf4ccfd70662a3d1babe2d5d0457b8ef6e569)
* [enhancements] Remove W3C-invalid CSS properties/values from SCSS files [(2791b83)](https://github.com/marcop135/bullframe.css/commit/2791b83eab872abe92a2fd6cc3b3bc8d684fcc36)
* [enhancements] Add Sass [@debug](https://sass-lang.com/documentation/at-rules/debug) rule to debugging utility [(969fcf3c)](https://github.com/marcop135/bullframe.css/commit/969fcf3ccb474f5bc5888841d479216b3e54de0a)

## 3.6.0 (2021-03-16)

* Add new flexbox utilities into `_utility-layout.scss` (IE10+)
* Add new `filter` utility module (≠ IE / Opera Mini)
* Add new `bf-position-sticky` utility class (≠ IE)
* Add ARIA roles appearance improvements into `_misc-accessibility.scss` (a11y)
* Remove touch action manipulation defaults in IE10
* Purge `white-space` declarations from text truncate multiline mixins and utility

## 3.5.0 (2021-02-09)

* Add new flexbox-powered grid system mixins (IE10+)
* Add new flexbox-powered align utility (IE10+)
* Add new text-truncate multiline text mixin and utility using `line-clamp` property (≠ IE)
* Add new `z-index` utility
* Add extra [debugging](https://github.com/marcop135/bullframe.css/blob/v3.4.6/src/scss/utilities/_utility-debugging.scss#L31) utility test to check performances, thanks @tkadlec

## 3.4.5 (2021-02-08)

* Moved SCSS files and `Gulpfile.js` from double quotes to single ones
* Added Prettify formatting support

## 3.4.4 (2021-02-04)

* Added missing classless/classless-ie10+ dark/dark-prefers builds

## 3.4.3 (2021-01-28)

* Added missing center alignment for `.bf-display-block-center` utility

## 3.4.2 (2021-01-27)

* Added missing ie10+ builds for dark and dark-prefers

## 3.4.1 (2021-01-24)

* Added missing v3.4.0 `CHANGELOG.md`

## 3.4.0 (2021-01-24)

* Added `input range` styling in modern browsers only
* Update video source paths accordingly to MDN [(#22)](https://github.com/marcop135/bullframe.css/issues/12)

## 3.3.9 (2020-11-29)

* Fixed broken anchors and URLs in `README.md`

## 3.3.8 (2020-11-29)

* Added `README.md` fixes and improvements
* Reinforced mixins declarations

## 3.3.7 (2020-11-27)

* Removed ie8-9 hacks and created two new builds ie10+
* Fixed missing `!important`s to `.bf-sr-only.focusable` declaration

## 3.3.6 (2020-11-20)

* Added new anchors normalization [styles](https://github.com/marcop135/bullframe.css/commit/435c8e1cade4be9f0bed65f5d8a9ed5deb2278dd)
* Improved focus outline color contrast in dark mode

## 3.3.5 (2020-09-27)

* Revert latest grid system column [fixes](https://github.com/marcop135/bullframe.css/commit/3bc68dee997c5b8530a5e498dd55dfc24347fcc3)
* Added more table normalization styles
* Added more webkit form normalization styles

## 3.3.4 (2020-09-03)

* Added an utilities reference in `README.md`
* Fixed a grid system [bug](https://github.com/marcop135/bullframe.css/commit/d26c1dd21c808bda6472913073c72a8048a56d8f) related to `.bf-col-3` and `bf-col-4` utilities
* Added support for GitHub Packages registry
* Added UNPKG CDN in `README.md`

## 3.3.3 (2020-07-22)

* Bumped version to fix npm registry

## 3.3.2 (2020-07-22)

* Deprecate this version to fix an error with npm publish

## 3.3.1 (2020-07-22)

* Fixed "What's included" and "Gulp.js" sections in `README.md`
* Fixed JSDelivr `package.json` settings
* Minor code improvements

## 3.3.0 (2020-07-09)

* Changed grid system container `max-width` to match Bootstrap Grid (now is 1140px + gutters)
* Changed margin/padding utilities naming
* Added refinements to `.bf-table` and `.bf-table-responsive` utilities
  * Added zebra striping utility
* Added more `font-weight` utilities
* Added more width-related utilities
* Changed JSDelivr CDN paths from GitHub to npm
* Updated screenshots and screencasts files
* Added GitHub, Gulp, npm and Sass minor improvements

## 3.2.0 (2020-06-16)

* Changed grid gutter width to match Bootstrap Grid
* Added support for RTL [(#12)](https://github.com/marcop135/bullframe.css/issues/12)
* Added `datalist` normalization [(#13)](https://github.com/marcop135/bullframe.css/issues/13)
* Added `progress` normalization
* Added dark theme scrollbars normalization
* Added webkit/blink/gecko/trident screenshots/screencasts
* Added quick overview of the utilities in `README.md`
* Added more examples in `index.html`
* Added SCSS file structure improvements
* Added responsive typography improvements
* Added form states (e.g. `:invalid`) improvements [(#14)](https://github.com/marcop135/bullframe.css/issues/14)
* Added `prefers-reduced-motion: reduce` improvements
* Added `line-height` improvements
* Added `font-weight` improvements

## 3.1.0 (2020-05-23)

* Fixed broken CDN URL paths [#6](https://github.com/marcop135/bullframe.css/issues/6)
* Fixed `video` `width` bug [#10](https://github.com/marcop135/bullframe.css/issues/10)
* Fixed `contributing` and `code_of_conduct` broken links and missing content
* Added `index.html` minor enhancements [commit](https://github.com/marcop135/bullframe.css/commit/96b267fed9c9507591ed115c4a78e54d79f0c121)
* Added minor package files and folders structure enhancements

## 3.0.0 (2020-05-18)

* **CSS to SCSS (Sass architecture refactoring)**
* Added `gulp.js` file processing
* Added CSS BEM syntax
* Added npm
* Added CDN
* Added Dark mode
* Added new test page
* Added HTML snippets
* Added screenshots
* Added extended browser compatiblity list
* Added proxy browsers support
* Added logo
* Added travis CI
* Added utility classes isolation
* Added reduced motion support
* Added responsive typography
* Added custom `select`
* Added custom radios and checkboxes
* Added much more information in `README.md`
* Added CONTRIBUTING.md
* Added CODE_OF_CONDUCT.md
* ...and much more!

## 2.9.0 (2020-04-13)

* Added Linux OS support to native font stack `font-family` list

## 2.8.2 (2020-04-09)

* Added `label` normalization
* Updated HTML demo content

## 2.8.1 (2020-04-03)

* Added `README.md` information
* Updated browser compatiblity list

## 2.8.0 (2020-03-22)

* Prettified HTML demo
* Prettified CSS
* Removed unsupported `datetime` input
* Added a CSS map
* Updated browser compatibility list
* Added more comments

## 2.7.0 (2020-03-17)

* Disabled form elements `pointer-events`
* Removed `progress` elements previous normalization
* Refactored `:focus` state from scratch

## 2.6.3 (2020-03-13)

* Added IE `table-responsive` scrollbar bug fix
* Removed buttons' `:active` styles
* Added GitHub sponsor information
* Added YouTube privacy-friendly `no-cookie` `iframe`

## 2.6.2 (2020-03-11)

* Added support for `font-variant` ligatures

## 2.6.1 (2020-03-04)

* Added `meta` tag for web app

## 2.6.0 (2020-02-29)

* Added support for `:focus-visible` styles

## 2.5.0 (2020-02-22)

* Refactored `::placeholder` support for better cross-browser compatibility

## 2.4.0 (2020-02-19)

* Removed custom radio buttons and checkboxes
* Added `:checked` form input normalization

## 2.3.0 (2020-02-14)

* Refactored HTML input styles
* Improved default button appearance

## 2.2.0 (2020-02-09)

* Added full table component normalization
* Added `:focus-visible` support

## 2.1.0 (2020-02-04)

* Added table component normalization
* Fixed horizontal scrollbar bug in forms

## 2.0.0 (2020-01-28)

* Changed project name from `bulldog.css` to `bullframe.css`
* Refactored for modularity, moved all SCSS components to separate files
* Improved performance
* Improved documentation

## 1.6.3 (January 31, 2014)

* Added `vertical-align` normalization on multiple elements
* Added `pre` `overflow` bug fix for all browsers
* Added `progress` normalization
* Added focused input support

## 1.6.2 (December 29, 2013)

* Updated JS Bin demo URL
* Updated HTML demo structure
* Improved `inline-block` class
* Added Google Maps `embed` `box-sizing` fix

## 1.6.1 (December 27, 2013)

* Updated monospaced font stack
* Added WebKit date, month, and week inputs normalization

## 1.6.0 (December 5, 2013)

* Added Bootstrap v3 success buttons
* Added new `display` classes
* Added updated CSS hacks reference
* Added browser compatibility list
* Emulated `box-shadow` on IE8

## 1.5.2 (October 21, 2013)

* Recompiled `select` data URI images
* Added new base font stack
* Added IE8+ grid system fixes
* Added IE10 `table-responsive` `overflow` bug fix

## 1.5.1 (October 7, 2013)

* Added `rem` units
* Moved `line-height` normalization from `body` to `html`
* Added `button` IE8 fix
* Added vertical rhythm base number _1.5_

## 1.5.0 (September 13, 2013)

* Added `label` normalization
* Normalized `button` FF `display`
* Renamed helper classes
* Added small bug fixes and enhancements to the `test.html` file

## 1.4.3 (August 1, 2013)

* Added iOS4+ compatibility (iPhone/iPod 3GS devices)
* Added IE10 `background-color` on active links normalization
* Added `vertical-align` `canvas` normalization
* Updated high resolution screen media query placeholder
* Added project scope clarification: now the framework is just a _boilerplate_

## 1.4.2 (July 4, 2013)

* Added native `audio` and `video` elements normalization

## 1.4.1 (June 7, 2013)

* Added `button` `line-height` normalization
* Improved `button` appearance
* Added headings fixes
* Added 100% IE7 responsive grid system support

## 1.4.0 (May 30, 2013)

* Updated vertical rhythm composition
* Added `readonly` and `disabled` form elements styles
* Added grid system bug fixes for IE7 and IE8
* Added `select` bug fixes
* Added `pre` IE7 fixes
* Improved form elements `:focus` state appearance

## 1.3.2 (May 17, 2013)

* Added `select` WebKit CSS hack
* Added flexible video class

## 1.3.1 (May 14, 2013)

* Added IE9+ CSS hacks
* Added `blockquote` normalization
* Added `super-clearfix` class to clear `float` in IE7 via CSS expressions

## 1.3.0 (May 7, 2013)

* Changed grid system `display` from `inline-block` to `block`
* Added grid system `float` to avoid several YUI3 bugs and quirks

## 1.2.0 (April 26, 2013)

* Added custom classes for responsive tables

## 1.1.2 (March 21, 2013)

* Merged grid system bug fixes from YUI3 v3.9.0

## 1.1.1 (March 20, 2013)

* Added `optgroup` display bug fix

## 1.1.0 (March 19, 2013)

* Added `address` normalization
* Added headings normalization
* Extended grid system styles
* Enhanced styled list classes
* Added more CSS hacks to the CSS hacks reference
* Added WordPress core styles
* Added `button` normalization
* Updated JS Bin demo URL

## 1.0.2 (March 12, 2013)

* Fixed several accessibility form bugs related to layout display

## 1.0.1 (March 12, 2013)

* Added CSS hacks for IE7, IE8, and IE9+
* Added `optgroup` `font-family` normalization
* Added `html` `word-wrap` set to `break-word`
* Added `legend` line wrapping trick for IE7+ and FF 4+
* Removed `width: 100%` from `audio` element
* Removed bottom margin from `audio` and `video` elements

## 1.0.0 (February 19, 2013)

* First public release!
* Initial commit: November 19, 2012
* The aim was to create a _bulldozer_ framework to kickstart **cross-browser responsive** HTML/CSS development.
