# Bullframe CSS v5.x

<p>
  <a href="https://www.npmjs.com/package/bullframe.css">
    <img src="https://img.shields.io/npm/v/bullframe.css.svg?style=flat-square" alt="NPM version">
  </a>
  <a href="https://github.com/marcop135/bullframe.css/commits">
    <img src="https://img.shields.io/github/last-commit/marcop135/bullframe.css.svg?style=flat-square" alt="Last commit">
  </a>
  <a href="https://github.com/marcop135/bullframe.css/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/marcop135/bullframe.css.svg?style=flat-square" alt="MIT License">
  </a>
</p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="src/docs/github-readme/bf-logo-full-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="src/docs/github-readme/bf-logo-full-light.png">
  <img alt="Bullframe CSS logo" src="https://raw.githubusercontent.com/marcop135/bullframe.css/master/src/docs/github-readme/bf-logo-full-light.png">
</picture>

[https://github.com/marcop135/bullframe.css](https://github.com/marcop135/bullframe.css)

---

## What is Bullframe CSS?

Bullframe CSS is a lightweight Sass (SCSS) framework for building fast, responsive, and accessible UIs — semantic, themeable, and classless-friendly, with solid cross-browser support.

Perfect for landing pages, marketing sites, micro-sites, blogs, docs, product listings, and more.

**Simply add it, start building, and stay in control.**

---

## Best Features

- Responsive layout and style normalization _out of the box_
- Cross-browser form elements
- JavaScript framework-agnostic
- Sass-based architecture with BEM methodology
- Responsive typography
- Dark mode and theming support
- RTL (right-to-left) support
- Vite-friendly
- Works well with classless setups

---

## What's Included

```text
bullframe.css/
├── dist/
│   └── css/
│       ├── bullframe-classless.css
│       ├── bullframe-classless.min.css
│       ├── ...
│       ├── bullframe-dark.css
│       ├── bullframe-dark.min.css
│       ├── ...
│       ├── bullframe-utilities.css
│       ├── bullframe-utilities.min.css
│       ├── ...
│       ├── bullframe.css
│       ├── bullframe.min.css
│       ├── ...
│       ├── bullframe-classless.css.map
│       ├── bullframe.min.css.map
│       ├── ...
├── src/scss/
│   ├── forms/
│   ├── miscellaneous/
│   ├── mixins/
│   ├── typography/
│   ├── utilities/
│   ├── variables/
│   ├── bullframe-classless.scss
│   ├── bullframe-dark.scss
│   ├── bullframe-utilities.scss
│   ├── bullframe-system-default.scss
│   ├── bullframe.scss
│   └── ...
├── vite.config.js
├── index.html
└── ...
```

---

## Live Demo & Examples

- 👉 **[One-page demo](https://bullframecss.marcopontili.com)**: a complete showcase of styled HTML elements, form controls, lists, tables, media, and the responsive grid system — ideal for quick cross-browser testing and exploration
- 🧪 **[CodePen collection](https://codepen.io/collection/nxpjRe?grid_type=LIST)**: live examples of utilities, components, and prototypes — great for quick testing, remixing, and sharing ideas.

---

## Getting Started

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@5">
```

### HTML Starter Template

<details><summary>Open HTML</summary>

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Bullframe CSS v5.x HTML Starter Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@5/dist/css/bullframe.min.css">
      </head>
      <body>
        <div class="bf-container">
          <!-- Add your site or application content here -->
          <p>Hello World! This is a Bullframe CSS v5.x HTML starter template.</p>
        </div>
      </body>
    </html>

</details>

### HTML Classless Starter Template

> [!NOTE]
> What does "classless" mean?
> No utility classes or extra markup needed. Just write semantic HTML and get clean, normalized styles.

<details><summary>Open HTML</summary>

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Bullframe CSS 5.x Classless Starter Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@5/dist/css/bullframe-classless.min.css">

        <!-- Optional: center page content by default -->
        <style>
          body {
            margin-left: auto;
            margin-right: auto;
            padding: 1.5rem;
            max-width: 80rem;
          }
        </style>
      </head>
      <body>
        <div class="bf-container">
          <!-- Add your site or application content here -->
          <p>Hello World! This is a Bullframe CSS v5.x HTML classless starter template.</p>
        </div>
      </body>
    </html>

</details>

---

### npm

Make sure you have [Node.js](https://nodejs.org/en/download/) installed. Then run:

```bash
npm install bullframe.css
```

---

### Download

[Download the latest release](https://github.com/marcop135/bullframe.css/archive/master.zip)

---

## Customization

### Theming

Bullframe provides three builds for theming:

1. `bullframe.css` — light theme
2. `bullframe-dark.css` — dark theme
3. `bullframe-system-default.css` — theme based on user system preference ([`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme))

#### Light Theme CDN (Default)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@5/dist/css/bullframe.min.css">
```

#### Dark Theme CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@5/dist/css/bullframe-dark.min.css">
```

#### System-default Theme CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@5/dist/css/bullframe-system-default.min.css">
```

### Customise and Rebuild All Styles

After installing Bullframe CSS via npm, you can use [Vite.js](https://vite.dev) to rebuild the framework as you prefer, adding your custom Sass variables and styles:

```bash
# Build production-ready site/app
npm run build

# Preview production build locally
npm run preview
```

---

### Utilities

Bullframe CSS offers a set of utility classes for fine-grained control over your layout, spacing, typography, and more. Explore each category below for detailed reference.

#### Grid system

<details><summary>Open utilities</summary>

| Variable             | Value  |
| -------------------- | ------ |
| `$bf-breakpoint-xs`  | 0      |
| `$bf-breakpoint-sm`  | 576px  |
| `$bf-breakpoint-md`  | 768px  |
| `$bf-breakpoint-lg`  | 992px  |
| `$bf-breakpoint-xl`  | 1200px |
| `$bf-breakpoint-xxl` | 1400px |

| Utility class             | Description                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `.bf-container`           | Sets a centered block container with a `max-width` of 1140px, and a custom padding                                        |
| `.bf-container--fluid`    | Sets a fluid centered block container with a custom padding                                                               |
| `.bf-container--break-xs` | Collapses all the columns when the viewport is 575px and below                                                            |
| `.bf-container--break-md` | Collapses all the columns when the viewport is 767px and below                                                            |
| `.bf-container--break-lg` | Collapses all the columns when the viewport is 991px and below                                                            |
| `.bf-row`                 | Sets a block container with a custom negative margin                                                                      |
| `.bf-col-1`               | Sets a floated container with a custom padding and a `width` of `8.3333%`                                                 |
| `.bf-col-2`               | Sets a floated container with a custom padding and a `width` of `16.666666666666664%`                                     |
| `.bf-col-3`               | Sets a floated container with a custom padding and a `width` of `25%`                                                     |
| `.bf-col-4`               | Sets a floated container with a custom padding and a `width` of `33.33333333333333%`                                      |
| `.bf-col-5`               | Sets a floated container with a custom padding and a `width` of `41.66666666666667%`                                      |
| `.bf-col-6`               | Sets a floated container with a custom padding and a `width` of `50%`                                                     |
| `.bf-col-7`               | Sets a floated container with a custom padding and a `width` of `58.333333333333336%`                                     |
| `.bf-col-8`               | Sets a floated container with a custom padding and a `width` of `66.66666666666666%`                                      |
| `.bf-col-9`               | Sets a floated container with a custom padding and a `width` of `75%`                                                     |
| `.bf-col-10`              | Sets a floated container with a custom padding and a `width` of `83.33333333333334%`                                      |
| `.bf-col-11`              | Sets a floated container with a custom padding and a `width` of `91.66666666666666%`                                      |
| `.bf-col-12`              | Sets a floated container with a custom padding and a `width` of `100%`                                                    |
| `.no-gutters`             | Set `margin-left`, `margin-right`, `padding-left` and `padding-right` to `0` — to be applied to row and column containers |

</details>

#### Layout

<details><summary>Open utilities</summary>

| Utility class                      | Description                                                                                                                                                                                              |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.bf-clearfix`                     | Clears the float, [read more](http://nicolasgallagher.com/micro-clearfix-hack/)                                                                                                                          |
| `.bf-hide`                         | Sets the `display` to `none`                                                                                                                                                                             |
| `.bf-hidden`                       | Sets the `display` to `none` and the `visibility` to `hidden`                                                                                                                                            |
| `.bf-text-hide`                    | Hides a text (AKA CSS image replacement) using a font `hack` and a combination o properties                                                                                                              |
| `.bf-sr-only`                      | Shows a text only if screen reader                                                                                                                                                                       |
| `.bf-sr-only.focusable`            | Shows a text only if screen reader and focused                                                                                                                                                           |
| `.bf-invisible`                    | Sets the `visibility` to `hidden`                                                                                                                                                                        |
| `.bf-visible`                      | Sets the `visibility` to `visible`                                                                                                                                                                       |
| `.bf-display-block`                | Sets the `display` to `block`                                                                                                                                                                            |
| `.bf-display-block-center`         | Sets the `display` to `block`, the left/right margins to `auto` and `text-align` to center                                                                                                               |
| `.bf-display-inline`               | Sets the `display` to `inline`                                                                                                                                                                           |
| `.bf-display-inline-block`         | Sets the `display` to `inline-block`                                                                                                                                                                     |
| `.bf-display-flex`                 | Sets the `display` to `flex`                                                                                                                                                                             |
| `.bf-display-inline-flex`          | Sets the `display` to `inline-flex`                                                                                                                                                                      |
| `.bf-display-flex--justify-start`  | Sets `justify-content` to `flex-start`                                                                                                                                                                   |
| `.bf-display-flex--justify-end`    | Sets `justify-content` to `flex-end`                                                                                                                                                                     |
| `.bf-display-flex--justify-center` | Sets `justify-content` to `center`                                                                                                                                                                       |
| `.bf-display-flex--wrap`           | Sets `flex-wrap` to `wrap`                                                                                                                                                                               |
| `.bf-display-flex--nowrap`         | Sets `flex-wrap` to `nowrap`                                                                                                                                                                             |
| `.bf-float-left`                   | Sets the `float` to `left`                                                                                                                                                                               |
| `.bf-float-right`                  | Sets the `float` to `right`                                                                                                                                                                              |
| `.bf-position-fixed`               | Sets the `position` to `fixed`                                                                                                                                                                           |
| `.bf-align-center-unknown`         | Sets the `position` to `relative`                                                                                                                                                                        |
| `.bf-align-center-unknown--item`   | Centers an element with unknown height and width to a relative positioned parent                                                |
| `.bf-align-center-flex`            | Centers all elements with known height and width to a flexbox container |
| `.bf-width-25`                     | Sets the `width` to `25%`                                                                                                                                                                                |
| `.bf-width-33`                     | Sets the `width` to `33.33333333333333%`                                                                                                                                                                 |
| `.bf-width-50`                     | Sets the `width` to `50%`                                                                                                                                                                                |
| `.bf-width-75`                     | Sets the `width` to `75%`                                                                                                                                                                                |
| `.bf-width-100`                    | Sets the `width` to `100%`                                                                                                                                                                               |
| `.bf-width-auto`                   | Sets the `width` to `auto`                                                                                                                                                                               |
| `.bf-z-index-1`                    | Set `z-index` to 1                                                                                                                                                                                       |
| `.bf-z-index-2`                    | Set `z-index` to 2                                                                                                                                                                                       |
| `.bf-z-index-3`                    | Set `z-index` to 3                                                                                                                                                                                       |
| `.bf-z-index-4`                    | Set `z-index` to 4                                                                                                                                                                                       |
| `.bf-z-index-5`                    | Set `z-index` to 5                                                                                                                                                                                       |
| `.bf-z-index-6`                    | Set `z-index` to 6                                                                                                                                                                                       |
| `.bf-z-index-7`                    | Set `z-index` to 7                                                                                                                                                                                       |
| `.bf-z-index-8`                    | Set `z-index` to 8                                                                                                                                                                                       |
| `.bf-z-index-9`                    | Set `z-index` to 9                                                                                                                                                                                       |
| `.bf-z-index-10`                   | Set `z-index` to 10                                                                                                                                                                                      |
| `.bf-z-index-20`                   | Set `z-index` to 20                                                                                                                                                                                      |
| `.bf-z-index-30`                   | Set `z-index` to 30                                                                                                                                                                                      |
| `.bf-z-index-40`                   | Set `z-index` to 40                                                                                                                                                                                      |
| `.bf-z-index-50`                   | Set `z-index` to 50                                                                                                                                                                                      |
| `.bf-z-index-60`                   | Set `z-index` to 60                                                                                                                                                                                      |
| `.bf-z-index-70`                   | Set `z-index` to 70                                                                                                                                                                                      |
| `.bf-z-index-80`                   | Set `z-index` to 80                                                                                                                                                                                      |
| `.bf-z-index-90`                   | Set `z-index` to 90                                                                                                                                                                                      |
| `.bf-z-index-100`                  | Set `z-index` to 100                                                                                                                                                                                     |
| `.bf-z-index-200`                  | Set `z-index` to 200                                                                                                                                                                                     |
| `.bf-z-index-300`                  | Set `z-index` to 300                                                                                                                                                                                     |

</details>

#### Spacing

<details><summary>Open utilities</summary>

| Utility class | Description                                                                               |
| ------------- | ----------------------------------------------------------------------------------------- |
| `.bf-m-0`     | Sets the `margin` to `0`                                                                  |
| `.bf-m-t-0`   | Sets the `margin-top` to `0`                                                              |
| `.bf-m-t-1`   | Sets the `margin-top` to a custom medium spacing value (`$bf-spacing-md-rem`)             |
| `.bf-m-t-2`   | Sets the `margin-top` to a custom large spacing value (`$bf-spacing-lg-rem`)              |
| `.bf-m-t-3`   | Sets the `margin-top` to a custom extra large spacing value (`$bf-spacing-xl-rem`)        |
| `.bf-m-t-4`   | Sets the `margin-top` to a custom extra extra large spacing value (`$bf-spacing-xxl-rem`) |
| `.bf-m-b-0`   | Sets the `margin-bottom` to `0`                                                           |
| `.bf-m-b-1`   | Sets the `margin-bottom` to a custom value that matches the grid system gutter            |
| `.bf-m-b-2`   | Sets the `margin-bottom` to a custom value                                                |
| `.bf-m-b-3`   | Sets the `margin-bottom` to a custom value                                                |
| `.bf-m-b-4`   | Sets the `margin-bottom` to a custom value                                                |
| `.bf-m-l-0`   | Sets the `margin-left` to `0`                                                             |
| `.bf-m-r-0`   | Sets the `margin-right` to `0`                                                            |
| `.bf-p-0`     | Sets the `padding` to `0`                                                                 |
| `.bf-p-t-0`   | Sets the `padding-top` to `0`                                                             |
| `.bf-p-b-0`   | Sets the `padding-bottom` to `0`                                                          |
| `.bf-p-l-0`   | Sets the `padding-left` to `0`                                                            |
| `.bf-p-r-0`   | Sets the `padding-right` to `0`                                                           |
| `.bf-p-t-1`   | Sets the `padding-top` to a custom value that matches the grid system gutter              |
| `.bf-p-t-2`   | Sets the `padding-top` to a custom value                                                  |
| `.bf-p-t-3`   | Sets the `padding-top` to a custom value                                                  |
| `.bf-p-t-4`   | Sets the `padding-top` to a custom value                                                  |
| `.bf-p-t-1`   | Sets the `padding-bottom` to a custom value that matches the grid system gutter           |
| `.bf-p-b-2`   | Sets the `padding-bottom` to a custom value                                               |
| `.bf-p-b-3`   | Sets the `padding-bottom` to a custom value                                               |
| `.bf-p-b-4`   | Sets the `padding-bottom` to a custom value                                               |

</details>

#### Texts

<details><summary>Open utilities</summary>

| Utility class                 | Description                                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `.bf-t-transform-uppercase`   | Sets `transform` to a `uppercase` (AKA capitalizes a text)                                                                      |
| `.bf-t-transform-none`        | Sets `transform` to a `none`                                                                                                    |
| `.bf-t-left`                  | Sets `text-align` to a `left`                                                                                                   |
| `.bf-t-center`                | Sets `text-align` to a `center`                                                                                                 |
| `.bf-t-right`                 | Sets `text-align` to a `right`                                                                                                  |
| `.bf-t-shadow`                | Sets a basic text shadow                                                                                                        |
| `.bf-t-italic`                | Sets `font-style` to a `italic`                                                                                                 |
| `.bf-t-style-normal`          | Sets `font-style` to a `normal`                                                                                                 |
| `.bf-t-weight-300`            | Sets `font-weight` to `300` (AKA light)                                                                                         |
| `.bf-t-weight-400`            | Sets `font-weight` to `400` (AKA normal)                                                                                        |
| `.bf-t-weight-500`            | Sets `font-weight` to `500` (AKA medium)                                                                                        |
| `.bf-t-weight-600`            | Sets `font-weight` to `600` (AKA semi-bold)                                                                                     |
| `.bf-t-weight-700`            | Sets `font-weight` to `700` (AKA bold)                                                                                          |
| `.bf-t-weight-800`            | Sets `font-weight` to `800` (AKA black)                                                                                         |
| `.bf-text-break`              | Sets `word-wrap` to a `break-word`, applied by default to the `body`                                                            |
| `.bf-t-truncate`              | Truncates a very long text and replaces the missing text with an ellipsis                                                       |
| `.bf-t-truncate--multiline-2` | Truncates a long doubled line text and replaces the missing text with an ellipsis                                       |
| `.bf-t-truncate--multiline-3` | Truncates a long tripled line text and replaces the missing text with an ellipsis                                      |
| `.bf-no-select`               | Blocks user text selection                                                                                                      |
| `.bf-font-sans-serif`         | Sets `font-family` to a `sans-serif`, and a combination of cross-browser system UI sans-serif font families                     |
| `.bf-font-serif`              | Sets `font-family` to a `serif`, and a combination of cross-browser system UI serif font families                               |
| `.bf-font-monospace`          | Sets `font-family` to a `monospace`, a combination of widely supported monospaced font families                                 |
| `.bf-h1`                      | Matches the font styling of a `h1`                                                                                              |
| `.bf-h2`                      | Matches the font styling of a `h2`                                                                                              |
| `.bf-h3`                      | Matches the font styling of a `h3`                                                                                              |
| `.bf-h4`                      | Matches the font styling of a `h4`                                                                                              |
| `.bf-h5`                      | Matches the font styling of a `h5`                                                                                              |
| `.bf-h6`                      | Matches the font styling of a `h6`                                                                                              |
| `.bf-lead`                    | Sets `font-size` to `125%`                                                                                                      |
| `.bf-responsive-typography`   | Scales `font-size` from a minimum of `1.6rem` (AKA 16px) to a maximum of `1.9rem` using `calc` and some `CSS custom properties` |

</details>

#### Lists

<details><summary>Open utilities</summary>

| Utility class       | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| `.bf-list-unstyled` | Removes margins, paddings and `li` list styles from `ul`, `ol` and `dd` elements |

#### Tables

| Utility class                 | Description                                                              |
| ----------------------------- | ------------------------------------------------------------------------ |
| `.bf-table`                   | Sets a border and custom paddings and margins to a table                 |
| `.bf-table-responsive`        | Adds responsiveness to a table container                                 |
| `.bf-table--zebra`            | Increases a table readability adding horizontal zebra stripes            |
| `.bf-table-responsive--zebra` | Increases a responsive table readability adding horizontal zebra stripes |

</details>

#### Embeds

<details><summary>Open utilities</summary>

| Utility class                | Description                                                                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `.bf-embed-responsive`       | Adds responsiveness to an `iframe`, `embed`, `object`, `video` or _general purpouse element_ (e.g. youtube embed)                       |
| `.bf-embed-responsive--4-3`  | Sets a 4:3 ratio responsiveness to an `iframe`, `embed`, `object`, `video` or _general purpouse element_ container (e.g. youtube embed) |
| `.bf-embed-responsive--item` | A _general purpouse element_ element that behaves like a `video`                                                                        |

</details>

#### Buttons

<details><summary>Open utilities</summary>

| Utility class      | Description                                                                          |
| ------------------ | ------------------------------------------------------------------------------------ |
| `.bf-btn`          | Creates a standard gray-looking button (e.g. `<a class="bf-btn" href="...">...</a>`) |
| `.bf-btn--primary` | Creates a primary blue-looking button                                                |

</details>

#### Form states

<details><summary>Open utilities</summary>

| Utility class  | Description                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| `.bf-focused`  | Sets a blue-looking focused ring and shadow around an `input`, `textarea` or `select`                |
| `.bf-disabled` | Sets `opacity` to `0.5`, and resets a combinations of properties to the default value if is disabled |
| `.bf-invalid`  | Sets a red-looking focused ring and shadow around an invalid `input`, `textarea` or `select`         |

</details>

#### Reduced motion

<details><summary>Open utilities</summary>

| Utility class        | Description                                                                                                                                                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.bf-reduced-motion` | Adds a combinations of properties and values to an element (e.g. the `body`) removing all motion-based animations if preferred by the user, [read more](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) |

</details>

---

## Browser compatibility

### Desktop browsers

- Latest two stable versions: Firefox, Chrome, Edge, Safari, Opera

### Mobile browsers

- Latest two stable versions: Firefox, Chrome, Edge, Mobile Safari, Opera

You can check the [.browserslistrc](https://github.com/marcop135/bullframe.css/blob/master/.browserslistrc) file.

---

## Contributing

Please read the [contribution guidelines](https://github.com/marcop135/bullframe.css/blob/master/.github/CONTRIBUTING.md).

## Changelog

[Changelog](https://github.com/marcop135/bullframe.css/blob/master/CHANGELOG.md)

## Author

[Marco Pontili](https://marcopontili.com)

## License

This project is licensed under the [MIT License](LICENSE).
