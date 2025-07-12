# Changes to Bullframe CSS

## ?????? 5.1.1 - (MM DD, YYYY)

- Improved HTML demo validation via [html-validate](https://html-validate.org/)
- ...

## 5.1.0 - (July 08, 2025)

- Applied the `:where` pseudo-class to normalize form element specificity to `0`
- Resolved issues with Sass source map generation
- Documented one-page demo and CodePen collection in `README.md`

## 5.0.1 - (July 07, 2025)

- Added missing LICENSE file and `.github/` folder

## 5.0.0 (July 07, 2025) - BREAKING CHANGES

- Dropped IE support
- Removed Sass 1.45+ deprecated features ([details](https://sass-lang.com/documentation/breaking-changes/import/))
- Switched build tool from Gulp to [Vite](https://vite.dev)
- Reorganized Sass architecture for better clarity
- Added `<dialog>` normalization with basic styling
- Refreshed HTML demo page with new examples
- Streamlined `README.md` copy and layout
- Updated all npm dependencies
- Updated stylelint, htmlhint, and prettier configs
- Ensured HTML demo page passed W3C validation

## 4.2.2 (May 28, 2025)

- Removed text indentation from table contents
- Corrected table border color inheritance
- Updated stylelint configuration and removed deprecated package
- Clearly defined browser support in `README.md`
- Removed attempted support for GitHub Packages
- Added maps to npm package
- Ignored more common files in npm package

## 4.2.1 (April 26, 2025)

- Fixed and simplified `/docs` directory structure [(#42)](https://github.com/marcop135/bullframe.css/issues/42)
- Removed screenshots and screencasts from repository to speed npm installation
- Started support for GitHub Packages registry

## 4.2.0 (April 14, 2025)

- Added support for Netlify deploy

## 4.1.2 (February 23, 2024)

- Updated all npm dependencies
- Fixed typos in README.md

## 4.1.1 (August 31, 2023)

- Updated all npm dependencies
- Improved documentation

## 4.1.0 (August 30, 2023)

- Moved from `dark-prefers` to `system-default` (no breaking changes)
- Updated `.browserlistrc`
- Cleaned up and improved `README.md`

## 4.0.1 (August 12, 2022)

- Updated `.browserlistrc`
- Updated `package.json` description and tags

## 4.0.0 (August 11, 2022) - BREAKING CHANGES

- Dropped support for IE8, IE9, and IE10
- Upgraded all npm packages to latest minor and major versions (e.g. gulp-sass v5)
- Cleaned up `README.md`

## 3.8.2 (June 26, 2021)

- Upgraded cssnano, autoprefixer, and postcss plugins to major versions [(a6a9ecc)](https://github.com/marcop135/bullframe.css/commit/a6a9ecc3b52a30e1a5c4408967268d22f46a8e2c)
- Cleaned up `README.md`

## 3.8.1 (June 22, 2021)

- Fixed missing compiled CSS files

## 3.8.0 (June 22, 2021) - BREAKING CHANGES

- Reverted html/body `height` and `body` `min-height` to `auto` to avoid scrollbar issues
- Added support for Skypack CDN
- Added Synk vuln badge in `README.md`

## 3.7.0 (April 24, 2021) - BREAKING CHANGES

- Set html/body `height` and `body` `min-height` to `100%` for backgrounds and centering [(8239677)](https://github.com/marcop135/bullframe.css/)
- Added missing margin/padding spacing utilities to `utility-spacing.scss` [(e1cdf4c)](https://github.com/marcop135/bullframe.css/commit/e1cdf4ccfd70662a3d1babe2d5d0457b8ef6e569)
- Removed W3C-invalid CSS properties/values from SCSS files [(2791b83)](https://github.com/marcop135/bullframe.css/commit/2791b83eab872abe92a2fd6cc3b3bc8d684fcc36)
- Added Sass [@debug](https://sass-lang.com/documentation/at-rules/debug) rule to debugging utility [(969fcf3c)](https://github.com/marcop135/bullframe.css/commit/969fcf3ccb474f5bc5888841d479216b3e54de0a)

## 3.6.0 (March 16, 2021)

- Added new flexbox utilities to `_utility-layout.scss` (IE10+)
- Added new `filter` utility module (not IE/Opera Mini)
- Added new `bf-position-sticky` utility class (not IE)
- Improved ARIA roles in `_misc-accessibility.scss`
- Removed touch action manipulation defaults in IE10
- Purged `white-space` declarations from multiline text truncate utilities

## 3.5.0 (February 09, 2021)

- Added flexbox grid system mixins (IE10+)
- Added flexbox align utility (IE10+)
- Added multiline text truncate mixin and utility using `line-clamp` (not IE)
- Added new `z-index` utility
- Added extra debugging utility test for performance (thanks @tkadlec)

## 3.4.5 (February 08, 2021)

- Moved SCSS and `Gulpfile.js` from double to single quotes
- Added Prettify formatting support

## 3.4.4 (February 04, 2021)

- Added missing classless/classless-ie10+ dark/dark-prefers builds

## 3.4.3 (January 28, 2021)

- Added missing center alignment for `.bf-display-block-center` utility

## 3.4.2 (January 27, 2021)

- Added missing ie10+ builds for dark and dark-prefers

## 3.4.1 (January 24, 2021)

- Added missing v3.4.0 `CHANGELOG.md`

## 3.4.0 (January 24, 2021)

- Added `input range` styling in modern browsers only
- Updated video source paths per MDN [(#22)](https://github.com/marcop135/bullframe.css/issues/12)

## 3.3.9 (November 29, 2020)

- Fixed broken anchors and URLs in `README.md`

## 3.3.8 (November 29, 2020)

- Improved `README.md` fixes
- Reinforced mixins declarations

## 3.3.7 (November 27, 2020)

- Removed IE8-9 hacks, created IE10+ builds
- Fixed missing `!important` in `.bf-sr-only.focusable`

## 3.3.6 (November 20, 2020)

- Added new anchors normalization styles
- Improved focus outline contrast in dark mode

## 3.3.5 (September 27, 2020)

- Reverted latest grid system column fixes
- Added more table normalization styles
- Added more webkit form normalization styles

## 3.3.4 (September 03, 2020)

- Added utilities reference in `README.md`
- Fixed grid system bug related to `.bf-col-3` and `.bf-col-4`
- Added GitHub Packages support
- Added UNPKG CDN in `README.md`

## 3.3.3 (July 22, 2020)

- Bumped version to fix npm registry

## 3.3.2 (July 22, 2020)

- Deprecated version to fix npm publish error

## 3.3.1 (July 22, 2020)

- Fixed "What's included" and "Gulp.js" sections in `README.md`
- Fixed JSDelivr `package.json` settings
- Minor code improvements

## 3.3.0 (July 09, 2020)

- Changed grid container max-width to 1140px + gutters
- Changed margin/padding utilities naming
- Added refinements to `.bf-table` and `.bf-table-responsive` utilities
  - Added zebra striping utility
- Added more `font-weight` utilities
- Added more width-related utilities
- Changed JSDelivr CDN paths from GitHub to npm
- Updated screenshots and screencasts files
- Added GitHub, Gulp, npm and Sass minor improvements

## 3.2.0 (June 16, 2020)

- Changed grid gutter width to match Bootstrap Grid
- Added support for RTL [(#12)](https://github.com/marcop135/bullframe.css/issues/12)
- Added `datalist` normalization [(#13)](https://github.com/marcop135/bullframe.css/issues/13)
- Added `progress` normalization
- Added dark theme scrollbars normalization
- Added webkit/blink/gecko/trident screenshots/screencasts
- Added quick overview of the utilities in `README.md`
- Added more examples in `index.html`
- Added SCSS file structure improvements
- Added responsive typography improvements
- Added form states (e.g. `:invalid`) improvements [(#15)](https://github.com/marcop135/bullframe.css/issues/15)

## 3.1.0 (May 06, 2020)

- Added proper `<input type=range>` styling
- Added `<kbd>` element normalization
- Added `<hr>` element normalization
- Added `<summary>` element normalization
- Added `<details>` element normalization
- Added `abbr` element normalization
- Added webkit dark scrollbars normalization
- Added support for `.dark` and `.dark-prefers`
- Updated README with utility list and examples

## 3.0.2 (March 20, 2020)

- Fixed wrong CSS for webkit scrollbars in `.dark` theme
- Updated README

## 3.0.1 (March 06, 2020)

- Fixed README typo
- Added `.bf-dark` class

## 3.0.0 (18 May 2020)

- Converted CSS to SCSS (Sass architecture refactoring)
- Added `gulp.js` file processing
- Added CSS BEM syntax
- Added npm and CDN support
- Added dark mode
- Added new test page, HTML snippets, screenshots
- Extended browser compatibility list
- Added proxy browser support
- Added logo, Travis CI, utility class isolation
- Added reduced motion support and responsive typography
- Added custom selects, radios, checkboxes
- Added much more info in README, CONTRIBUTING.md, CODE_OF_CONDUCT.md

## 2.9.0 (13 April 2020)

- Added Linux OS support to native font stack

## 2.8.2 (09 April 2020)

- Added `label` normalization
- Updated HTML demo content

## 2.8.1 (03 April 2020)

- Added `README.md` info
- Updated browser compatibility list

## 2.8.0 (22 March 2020)

- Prettified HTML demo and CSS
- Removed unsupported `datetime` input
- Added CSS map
- Updated browser compatibility list
- Added more comments

## 2.7.0 (17 March 2020)

- Disabled form elements pointer-events
- Removed previous `progress` normalization
- Refactored `:focus` state

## 2.6.3 (13 March 2020)

- Fixed IE table-responsive scrollbar bug
- Removed buttons' `:active` styles
- Added GitHub sponsor info
- Added YouTube no-cookie iframe

## 2.6.2 (11 March 2020)

- Added support for `font-variant` ligatures

## 2.6.1 (04 March 2020)

- Added `meta` tag for web app

## 2.6.0 (29 February 2020)

- Added support for `:focus-visible` styles

## 2.5.0 (22 February 2020)

- Refactored `::placeholder` support for better cross-browser compatibility

## 2.4.0 (19 February 2020)

- Removed custom radio buttons and checkboxes
- Added `:checked` form input normalization

## 2.3.0 (14 February 2020)

- Refactored HTML input styles
- Improved default button appearance

## 2.2.0 (09 February 2020)

- Added full table component normalization
- Added `:focus-visible` support

## 2.1.0 (04 February 2020)

- Added table component normalization
- Fixed horizontal scrollbar bug in forms

## 2.0.0 (28 January 2020)

- Changed project name from `bulldog.css` to `bullframe.css`
- Refactored for modularity, moved all SCSS components to separate files
- Improved performance
- Improved documentation

## 1.6.3 (31 January 2014)

- Added `vertical-align` normalization on multiple elements
- Fixed `pre` overflow bug in all browsers
- Added `progress` element normalization
- Added focused input support

## 1.6.2 (29 December 2013)

- Updated JS Bin demo URL
- Improved HTML demo structure
- Enhanced `inline-block` class
- Added Google Maps `embed` `box-sizing` fix

## 1.6.1 (27 December 2013)

- Updated monospaced font stack
- Added WebKit date, month, and week input normalization

## 1.6.0 (05 December 2013)

- Added Bootstrap v3 success button styles
- Introduced new `display` utility classes
- Updated CSS hacks reference
- Added browser compatibility list
- Emulated `box-shadow` on IE8

## 1.5.2 (21 October 2013)

- Recompiled `select` element data URI images
- Added new base font stack
- Fixed IE8+ grid system bugs
- Fixed IE10 `table-responsive` overflow issue

## 1.5.1 (07 October 2013)

- Added support for `rem` units
- Moved `line-height` normalization from `body` to `html`
- Added IE8 button fixes
- Set vertical rhythm base number to 1.5

## 1.5.0 (13 September 2013)

- Normalized `label` element
- Fixed button display in Firefox
- Renamed helper classes
- Minor bug fixes and test file improvements

## 1.4.3 (01 August 2013)

- Added iOS4+ compatibility (iPhone/iPod 3GS)
- Fixed IE10 active link background color
- Normalized `canvas` vertical alignment
- Updated high-res screen media query placeholder
- Clarified framework scope as a boilerplate

## 1.4.2 (04 July 2013)

- Normalized native `audio` and `video` elements

## 1.4.1 (07 June 2013)

- Added `button` line-height normalization
- Improved button appearance
- Fixed headings styles
- Full IE7 responsive grid system support

## 1.4.0 (30 May 2013)

- Updated vertical rhythm composition
- Styled `readonly` and `disabled` form elements
- Fixed IE7 and IE8 grid system bugs
- Fixed `select` element bugs
- Fixed IE7 `pre` formatting
- Improved form element `:focus` styles

## 1.3.2 (17 May 2013)

- Added WebKit CSS hack for `select`
- Added flexible video class

## 1.3.1 (14 May 2013)

- Added IE9+ CSS hacks
- Normalized `blockquote`
- Added `super-clearfix` class to fix IE7 float issues

## 1.3.0 (07 May 2013)

- Changed grid system `display` from `inline-block` to `block`
- Added grid system `float` to fix YUI3 bugs

## 1.2.0 (26 April 2013)

- Added custom responsive table classes

## 1.1.2 (21 March 2013)

- Merged grid system fixes from YUI3 v3.9.0

## 1.1.1 (20 March 2013)

- Fixed `optgroup` display bug

## 1.1.0 (19 March 2013)

- Added normalization for `address` and headings
- Extended grid system styles
- Enhanced styled list classes
- Added more CSS hacks reference
- Added WordPress core styles normalization
- Added `button` normalization
- Updated JS Bin demo URL

## 1.0.2 (12 March 2013)

- Fixed accessibility bugs related to form layout display

## 1.0.1 (12 March 2013)

- Added IE7, IE8, IE9+ CSS hacks
- Normalized `optgroup` font-family
- Set `html` word-wrap to `break-word`
- Fixed legend line wrapping for IE7+ and Firefox 4+
- Removed `width: 100%` from `audio`
- Removed bottom margin from `audio` and `video`

## 1.0.0 (19 February 2013)

- First public release
- Initial commit on 19 November 2012
- Framework aimed to kickstart cross-browser responsive HTML/CSS development
