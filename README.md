# bullframe.css

<p>
  <a href="https://www.npmjs.com/package/bullframe.css"><img src="https://img.shields.io/npm/v/bullframe.css.svg?style=flat-square" alt="NPM page"></a>
  <a href="https://github.com/marcop135/bullframe.css/commits"><img src="https://img.shields.io/github/last-commit/marcop135/bullframe.css?style=flat-square" alt="GitHub last commit"></a>
  <a href="https://github.com/marcop135/bullframe.css/blob/master/LICENSE"><img src="https://img.shields.io/github/license/marcop135/bullframe.css.svg?style=flat-square" alt="MIT license"></a>
</p>

<br>

![bullframe.css logo](./docs/images-readme/logo-full.png)

[https://github.com/marcop135/bullframe.css](https://github.com/marcop135/bullframe.css)

bullframe.css is a Sass (SCSS) framework that works in a wide range of desktop and mobile browsers (IE11+).

It's a cross-browser and responsive collection of default HTML UI elements ([atoms](https://bradfrost.com/blog/post/atomic-web-design)) for your Sass project.

**Just add bullframe.css, write semantic HTML5, and you are ready to go everywhere!**

<br>

## Best features

- Wide range of desktop and mobile browsers support
- Add responsive-ness and normalize as much as possible HTML elements *out-of-the-box*
- Progressive responsive web design focused
- Responsive, cross-browser, HTML5 form elements by default
- A simple 12-columns fluid grid system
- Sass architecture
- CSS BEM
- Responsive typography
- Dark mode
- RTL support
- Get utility classes (e.g. `<h2 class="bf-h1">`) or not (no-class / classless framework)
- Isolated utility classes to avoid conflicts between frameworks' classes
- [`bullframe-classless.min.css`](https://github.com/marcop135/bullframe.css/blob/master/dist/css/bullframe-classless.min.css) is just 10KB~ min+gzip 🎉

## What's included

You'll see something like this:

```text
bullframe.css/
└── dist/
    ├── css/
    │   ├── bullframe-classless.css
    │   ├── bullframe-classless.min.css
    │   ├── ...
    │   ├── bullframe-dark.css
    │   ├── bullframe-dark.min.css
    │   ├── bullframe-dark-prefers.css
    │   ├── bullframe-dark-prefers.min.css
    │   ├── ...
    │   ├── bullframe-utilities.css
    │   ├── bullframe-utilities.min.css
    │   ├── ...
    │   ├── bullframe.css
    │   ├── bullframe.min.css
    │   ├── ...
    │   ├── bullframe-classless.css.map
    │   ├── bullframe.min.css.map
    │   ├── ...
└── src/scss/
    └── forms/
    └── miscellaneous/
    └── mixins/
    └── typography/
    └── utilities/
    └── variables/
    ...
    ├── bullframe-classless.scss
    ├── bullframe-dark-prefers.scss
    ├── bullframe-dark.scss
    ├── bullframe-utilities.scss
    ├── bullframe.scss
    ...
└── gulpfile.js
└── index.html
...
```

<br>

---

## Getting started

### Download

[Download the latest release](https://github.com/marcop135/bullframe.css/archive/master.zip)

### CDN

JSDelivr (latest release, ready for production)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css">
```

Skypack (latest release, ready for production)

```html
<link rel="stylesheet" href="https://cdn.skypack.dev/bullframe.css/dist/css/bullframe.min.css">
```

UNPKG (latest release, not ready for production)

```html
<link rel="stylesheet" href="https://unpkg.com/bullframe.css">
```


### npm

Once you have installed [Node.js](https://nodejs.org/en/download/), you can run this command to install bullframe.css into your project:

``` bash
# create a package.json file
# $ npm init

npm install bullframe.css
```

[What is Node?](https://en.m.wikipedia.org/wiki/Nodejs)

[What is npm?](https://www.npmjs.com/get-npm)

### Gulp.js

After installing bullframe.css from npm, you may use [gulp.js](https://gulpjs.com/docs/en/getting-started/quick-start) to re-compile all files, and customize your Sass project as needed.

``` bash
# navigate to /node_modules/bullframe.css

# install all dependencies
npm install

# run gulp and have fun!
gulp
```

[What is gulp.js?](https://en.m.wikipedia.org/wiki/Gulp.js)

### HTML

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>bullframe.css starter template</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
  <!-- bullframe.css: use latest compiled and minified version -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-ie10+.min.css">
</head>

<body>
  <div class="bf-container">
    <!-- Add your site or application content here -->
    <p>Hello world! This is a bullframe.css starter template</p>
  </div>
  
</body>
</html>
```

## Codepen

Take a look at this [CodePen collection](https://codepen.io/collection/nxpjRe) and fork a ready-made templates of your choice.

### Use bullframe.css as a CodePen template

Click on the links below, and start a new pen in CodePen using bullframe.css.

- [Light theme (default)](https://codepen.io/pen?template=WNrwNNM)
- [Dark theme](https://codepen.io/pen?template=ExPmzBV)
- [Dark `prefers-color-scheme`](https://codepen.io/pen?template=NWxjVQO)

<br>

---

## Customization

### No classes (class-less)

What means "classless"?
No classes, no utilities. Feel free to add yours and create your custom components.
Read more on [css-tricks.com](https://css-tricks.com/no-class-css-frameworks/).

Just drop the snippet below in the `<head>` of your webpage, and the job is done!
Write semantic HTML and get nice styles and cross-browser normalization.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-classless.min.css">

<!-- Center the page (optional)  -->
<style>
  body {
    margin-left: auto;
    margin-right: auto;
    padding: 1.5rem;
    max-width: 80rem;
  }
</style>
```

### Dark themes

There are two builds that enable a dark (dark mode) theme by default in all browsers.

`bullframe-dark.css`

CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-dark.min.css">
```

`bullframe-dark-prefers.css`

Enables dark only if the user prefers it, in browsers that support the `prefers-color-scheme` media query.
Read more [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css/dist/css/bullframe-dark-prefers.min.css">
```

### Utilities - Reference

A set of utilities to create and customise bullframe.css:

#### Grid system

*Breakpoints: 576, 768, 992 and 1200 pixels*

| Utility class | Description |
| ------------- | ----------- |
| `.bf-container` | Sets a centered block container with a `max-width` of 1140px, and a custom padding |
| `.bf-container--fluid` | Sets a fluid centered block container with a custom padding |
| `.bf-container--break-xs` | Collapses all the columns when the viewport is 575px and below |
| `.bf-container--break-md` | Collapses all the columns when the viewport is 767px and below |
| `.bf-container--break-lg` | Collapses all the columns when the viewport is 991px and below |
| `.bf-row` | Sets a block container with a custom negative margin |
| `.bf-col-1` | Sets a floated container with a custom padding and a `width` of `8.3333%` |
| `.bf-col-2` | Sets a floated container with a custom padding and a `width` of `16.666666666666664%` |
| `.bf-col-3` | Sets a floated container with a custom padding and a `width` of `25%` |
| `.bf-col-4` | Sets a floated container with a custom padding and a `width` of `33.33333333333333%` |
| `.bf-col-5` | Sets a floated container with a custom padding and a `width` of `41.66666666666667%` |
| `.bf-col-6` | Sets a floated container with a custom padding and a `width` of `50%` |
| `.bf-col-7` | Sets a floated container with a custom padding and a `width` of `58.333333333333336%` |
| `.bf-col-8` | Sets a floated container with a custom padding and a `width` of `66.66666666666666%` |
| `.bf-col-9` | Sets a floated container with a custom padding and a `width` of `75%` |
| `.bf-col-10` | Sets a floated container with a custom padding and a `width` of `83.33333333333334%` |
| `.bf-col-11` | Sets a floated container with a custom padding and a `width` of `91.66666666666666%` |
| `.bf-col-12` | Sets a floated container with a custom padding and a `width` of `100%` |
| `.no-gutters` | Set `margin-left`, `margin-right`, `padding-left` and `padding-right` to `0` — to be applied to row and column containers |

#### Layout

| Utility class       | Description         |
| -------------       | -------------       |
| `.bf-clearfix` | Clears the float, [read more](http://nicolasgallagher.com/micro-clearfix-hack/) |
| `.bf-hide` | Sets the `display` to `none` |
| `.bf-hidden` | Sets the `display` to `none` and the `visibility` to `hidden` |
| `.bf-text-hide` | Hides a text (AKA CSS image replacement) using a font `hack` and a combination o properties |
| `.bf-sr-only` | Shows a text only if screen reader |
| `.bf-sr-only.focusable` | Shows a text only if screen reader and focused |
| `.bf-invisible` | Sets the `visibility` to `hidden` |
| `.bf-visible` | Sets the `visibility` to `visible` |
| `.bf-display-block` | Sets the `display` to `block` |
| `.bf-display-block-center` | Sets the `display` to `block`, the left/right margins to `auto` and `text-align` to center |
| `.bf-display-inline` | Sets the `display` to `inline` |
| `.bf-display-inline-block` | Sets the `display` to `inline-block` |
| `.bf-display-flex` | Sets the `display` to `flex` |
| `.bf-display-inline-flex` | Sets the `display` to `inline-flex` |
| `.bf-display-flex--justify-start` | Sets `justify-content` to `flex-start` |
| `.bf-display-flex--justify-end` | Sets `justify-content` to `flex-end` |
| `.bf-display-flex--justify-center` | Sets `justify-content` to `center` |
| `.bf-display-flex--wrap` | Sets `flex-wrap` to `wrap` |
| `.bf-display-flex--nowrap` | Sets `flex-wrap` to `nowrap` |
| `.bf-float-left` | Sets the `float` to `left` |
| `.bf-float-right` | Sets the `float` to `right` |
| `.bf-position-fixed` | Sets the `position` to `fixed` |
| `.bf-align-center-unknown` | Sets the `position` to `relative` |
| `.bf-align-center-unknown--item` | Centers an element with unknown height and width to a relative positioned parent, IE10+, [read more](https://css-tricks.com/centering-css-complete-guide) |
| `.bf-align-center-flex` | Centers all elements with known height and width to a flexbox container, IE10+, [read more](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) |
| `.bf-width-25` | Sets the `width` to `25%` |
| `.bf-width-33` | Sets the `width` to `33.33333333333333%` |
| `.bf-width-50` | Sets the `width` to `50%` |
| `.bf-width-75` | Sets the `width` to `75%` |
| `.bf-width-100` | Sets the `width` to `100%` |
| `.bf-width-auto` | Sets the `width` to `auto` |
| `.bf-z-index-1` | Set `z-index` to 1 |
| `.bf-z-index-2` | Set `z-index` to 2 |
| `.bf-z-index-3` | Set `z-index` to 3 |
| `.bf-z-index-4` | Set `z-index` to 4 |
| `.bf-z-index-5` | Set `z-index` to 5 |
| `.bf-z-index-6` | Set `z-index` to 6 |
| `.bf-z-index-7` | Set `z-index` to 7 |
| `.bf-z-index-8` | Set `z-index` to 8 |
| `.bf-z-index-9` | Set `z-index` to 9 |
| `.bf-z-index-10` | Set `z-index` to 10 |
| `.bf-z-index-20` | Set `z-index` to 20 |
| `.bf-z-index-30` | Set `z-index` to 30 |
| `.bf-z-index-40` | Set `z-index` to 40 |
| `.bf-z-index-50` | Set `z-index` to 50 |
| `.bf-z-index-60` | Set `z-index` to 60 |
| `.bf-z-index-70` | Set `z-index` to 70 |
| `.bf-z-index-80` | Set `z-index` to 80 |
| `.bf-z-index-90` | Set `z-index` to 90 |
| `.bf-z-index-100` | Set `z-index` to 100 |
| `.bf-z-index-200` | Set `z-index` to 200 |
| `.bf-z-index-300` | Set `z-index` to 300 |

#### Spacing

  | Utility class | Description |
| ------------- | ----------- |
| `.bf-m-0` | Sets the `margin` to `0` |
| `.bf-m-t-0` | Sets the `margin-top` to `0` |
| `.bf-m-b-0` | Sets the `margin-bottom` to `0` |
| `.bf-m-l-0` | Sets the `margin-left` to `0` |
| `.bf-m-r-0` | Sets the `margin-right` to `0` |
| `.bf-m-b-1` | Sets the `margin-bottom` to a custom value that matches the grid system gutter |
| `.bf-m-b-2` | Sets the `margin-bottom` to a custom value |
| `.bf-m-b-3` | Sets the `margin-bottom` to a custom value |
| `.bf-m-b-4` | Sets the `margin-bottom` to a custom value |
| `.bf-p-0` | Sets the `padding` to `0` |
| `.bf-p-t-0` | Sets the `padding-top` to `0` |
| `.bf-p-b-0` | Sets the `padding-bottom` to `0` |
| `.bf-p-l-0` | Sets the `padding-left` to `0` |
| `.bf-p-r-0` | Sets the `padding-right` to `0` |
| `.bf-p-t-1` | Sets the `padding-top` to a custom value that matches the grid system gutter |
| `.bf-p-t-2` | Sets the `padding-top` to a custom value |
| `.bf-p-t-3` | Sets the `padding-top` to a custom value |
| `.bf-p-t-4` | Sets the `padding-top` to a custom value |
| `.bf-p-t-1` | Sets the `padding-bottom` to a custom value that matches the grid system gutter |
| `.bf-p-b-2` | Sets the `padding-bottom` to a custom value |
| `.bf-p-b-3` | Sets the `padding-bottom` to a custom value |
| `.bf-p-b-4` | Sets the `padding-bottom` to a custom value |

#### Texts

| Utility class | Description |
| ------------- | ----------- |
| `.bf-t-transform-uppercase` | Sets `transform` to a `uppercase` (AKA capitalizes a text) |
| `.bf-t-transform-none` | Sets `transform` to a `none` |
| `.bf-t-left` | Sets `text-align` to a `left` |
| `.bf-t-center` | Sets `text-align` to a `center` |
| `.bf-t-right` | Sets `text-align` to a `right` |
| `.bf-t-shadow` | Sets a basic text shadow |
| `.bf-t-italic` | Sets `font-style` to a `italic` |
| `.bf-t-style-normal` | Sets `font-style` to a `normal` |
| `.bf-t-weight-300` | Sets `font-weight` to `300` (AKA light) |
| `.bf-t-weight-400` | Sets `font-weight` to `400` (AKA normal) |
| `.bf-t-weight-500` | Sets `font-weight` to `500` (AKA medium) |
| `.bf-t-weight-600` | Sets `font-weight` to `600` (AKA semi-bold) |
| `.bf-t-weight-700` | Sets `font-weight` to `700` (AKA bold) |
| `.bf-t-weight-800` | Sets `font-weight` to `800` (AKA black) |
| `.bf-text-break` | Sets `word-wrap` to a `break-word`, applied by default to the `body` |
| `.bf-t-truncate` | Truncates a very long text and replaces the missing text with an ellipsis |
| `.bf-t-truncate--multiline-2` | Truncates a long doubled line text and replaces the missing text with an ellipsis (no IE) |
| `.bf-t-truncate--multiline-3` | Truncates a long tripled line text and replaces the missing text with an ellipsis (no IE) |
| `.bf-no-select` | Blocks user text selection |
| `.bf-font-sans-serif` | Sets `font-family` to a `sans-serif`, and a combination of cross-browser system UI sans-serif font families  |
| `.bf-font-serif` | Sets `font-family` to a `serif`, and a combination of cross-browser system UI serif font families |
| `.bf-font-monospace` | Sets `font-family` to a `monospace`, a combination of widely supported monospaced font families |
| `.bf-h1` | Matches the font styling of a `h1` |
| `.bf-h2` | Matches the font styling of a `h2` |
| `.bf-h3` | Matches the font styling of a `h3` |
| `.bf-h4` | Matches the font styling of a `h4` |
| `.bf-h5` | Matches the font styling of a `h5` |
| `.bf-h6` | Matches the font styling of a `h6` |
| `.bf-lead` | Sets `font-size` to `125%` |
| `.bf-responsive-typography` | Scales `font-size` from a minimum of `1.6rem` (AKA 16px) to a maximum of `1.9rem` using `calc` and some `CSS custom properties` |

#### Lists

| Utility class | Description |
| ------------- | ----------- |
| `.bf-list-unstyled` | Removes margins, paddings and `li` list styles from `ul`, `ol` and `dd` elements |

#### Tables

| Utility class | Description |
| ------------- | ----------- |
| `.bf-table` | Sets a border and custom paddings and margins to a table |
| `.bf-table-responsive` | Adds responsiveness to a table container |
| `.bf-table--zebra` | Increases a table readability adding horizontal zebra stripes |
| `.bf-table-responsive--zebra` | Increases a responsive table readability adding horizontal zebra stripes |

#### Embeds

| Utility class | Description |
| ------------- | ----------- |
| `.bf-embed-responsive` | Adds responsiveness to an `iframe`, `embed`, `object`, `video` or _general purpouse element_ (e.g. youtube embed)  |
| `.bf-embed-responsive--4-3` | Sets a 4:3 ratio responsiveness to an `iframe`, `embed`, `object`, `video` or _general purpouse element_ container (e.g. youtube embed) |
| `.bf-embed-responsive--item` | A _general purpouse element_ element that behaves like a `video` |

#### Buttons

| Utility class | Description |
| ------------- | ----------- |
| `.bf-btn` | Creates a standard gray-looking button (e.g. `<a class="bf-btn" href="...">...</a>`)|
| `.bf-btn--primary` | Creates a primary blue-looking button |

#### Form states

| Utility class | Description |
| ------------- | ----------- |
| `.bf-focused` | Sets a blue-looking focused ring and shadow around an `input`, `textarea` or `select` |
| `.bf-disabled` | Sets `opacity` to `0.5`, and resets a combinations of properties to the default value if is disabled  |
| `.bf-invalid` | Sets a red-looking focused ring and shadow around an invalid `input`, `textarea` or `select` |

#### Reduced motion

| Utility class | Description |
| ------------- | ----------- |
| `.bf-reduced-motion` | Adds a combinations of properties and values to an element (e.g. the `body`) removing all motion-based animations if preferred by the user, [read more](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) |

<br>

---

## Browser compatibility

### Desktop browsers

- IE 11+
- Latest stable two: Firefox, Chrome, Edge, Safari, Opera

### Mobile browsers

- Latest stable: Firefox, Chrome, Edge, Opera, Mobile Safari

You might take a look at the [.browserslistrc](https://github.com/marcop135/bullframe.css/blob/master/.browserslistrc) file for [Autoprefixer](https://github.com/postcss/autoprefixer)

### Screenshots

How can I quickly see if every HTML element works well on all browsers?

Take a look at some [screenshots and screencasts](https://github.com/marcop135/bullframe.css/tree/master/docs/screenshots-screencasts), organized by rendering engines (blink, gecko, trident, webkit).

## Contributors

[@englishextra](https://github.com/englishextra) the project is still live thanks to you!

## Contributing

Please read the [contribution guidelines](https://github.com/marcop135/bullframe.css/blob/master/.github/CONTRIBUTING.md).

## Changelog

[Changelog](https://github.com/marcop135/bullframe.css/blob/master/CHANGELOG.md)

## Acknowledgements

bullframe.css incorporates some of the styles found on some amazing CSS boilerplates and frameworks across the web. _Thank you!_

- @necolas [/normalize.css](https://github.com/necolas/normalize.css) for the extensive old browsers bug fixing documentation
- @h5bp [/main.css](https://github.com/h5bp/main.css) for the excellent print styles base and the keyboard utilities
- @twbs [/bootstrap](https://github.com/twbs/bootstrap) for some neat typography tricks, responsive embeds, reboot styles, base24 SVG icons, button styles, grid system breakpoints and spacing utilities _(a lot!)_
- @kognise [/water.css](https://github.com/kognise/water.css) for the "classless" concept inspiration and some form tricks
- @csswizardry @inuitcss [/inuit.css](https://github.com/inuitcss/inuitcss) for some advanced Sass tips and tricks
- @jensimmons [/cssremedy](https://github.com/jensimmons/cssremedy) for the prefers-reduced-motion snippet

## License

The MIT License (MIT) - [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT) "The MIT License"
