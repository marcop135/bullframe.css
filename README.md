# Bullframe CSS

<p>
  <a href="https://www.npmjs.com/package/bullframe.css">
    <img src="https://img.shields.io/npm/v/bullframe.css.svg?style=flat-square" alt="npm version">
  </a>
  <a href="https://github.com/marcop135/bullframe.css/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/marcop135/bullframe.css/ci.yml?branch=master&style=flat-square&label=CI" alt="CI status">
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

**A lightweight CSS framework for building fast, responsive, and accessible UIs** — semantic, themeable, and classless-friendly, with solid cross-browser support.

Perfect for landing pages, marketing sites, blogs, docs, and prototypes. Simply add it and start building.

> **v6 is the current line** — native CSS, modern features (`light-dark()`, `color-mix()`, `oklch()`, `:has()`), accessible defaults.
> **v5 is stable** and supported for security fixes — see the [v5.1.0 release](https://github.com/marcop135/bullframe.css/releases/tag/v5.1.0) and the [migration guide](https://bullframecss.marcopontili.com/docs/migration). Existing v5 users: nothing breaks until you opt in to v6.

---

## Quick Start

### CDN (recommended)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6">
```

### npm

```bash
npm install bullframe.css
```

```css
/* In your CSS */
@import 'bullframe.css';
```

### Download

[Download the latest release](https://github.com/marcop135/bullframe.css/releases)

---

## Features

- **Native CSS** — no Sass, no preprocessor lock-in. Built with PostCSS.
- **CSS Custom Properties** — easy theming via `--bf-*` variables, no rebuild needed.
- **Responsive** — mobile-first layout with a flexible 12-column grid system.
- **Dark Mode** — three variants: always-dark, system-preference, and classless.
- **Accessible** — WCAG AA color contrast, `:focus-visible`, `prefers-reduced-motion`, ARIA styling.
- **Classless-Friendly** — write semantic HTML, get clean styles. No classes required.
- **Lightweight** — ~8 KB gzipped. Zero JavaScript. Zero dependencies.
- **Cross-Browser** — latest 2 stable versions of all major browsers.
- **RTL Support** — right-to-left layouts work out of the box.
- **Framework-Agnostic** — works with React, Vue, Svelte, plain HTML, or anything else.

---

## Build Variants

| Variant | Description |
|---------|-------------|
| `bullframe.css` | Light theme (default) |
| `bullframe-dark.css` | Always-dark theme |
| `bullframe-system-default.css` | Follows system `prefers-color-scheme` |
| `bullframe-classless.css` | Classless light theme |
| `bullframe-classless-dark.css` | Classless always-dark |
| `bullframe-classless-system-default.css` | Classless system preference |
| `bullframe-utilities.css` | Utility classes only |

All variants available as `.css` and `.min.css` with source maps.

---

## Starter Templates

<details><summary>Standard template</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Bullframe CSS Starter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6/dist/css/bullframe.min.css">
  </head>
  <body>
    <div class="bf-container">
      <h1>Hello, Bullframe!</h1>
      <p>Start building your project.</p>
    </div>
  </body>
</html>
```

</details>

<details><summary>Classless template</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Bullframe CSS Classless Starter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6/dist/css/bullframe-classless.min.css">
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
    <h1>Hello, Bullframe!</h1>
    <p>No classes needed. Just semantic HTML.</p>
  </body>
</html>
```

</details>

---

## Documentation

Full documentation, utility reference, and theming guides:

**[bullframecss.marcopontili.com](https://bullframecss.marcopontili.com)**

Covers: [Getting Started](https://bullframecss.marcopontili.com/docs/getting-started) | [CSS Variables](https://bullframecss.marcopontili.com/docs/variables) | [Typography](https://bullframecss.marcopontili.com/docs/typography) | [Layout & Grid](https://bullframecss.marcopontili.com/docs/layout) | [Forms](https://bullframecss.marcopontili.com/docs/forms) | [Buttons](https://bullframecss.marcopontili.com/docs/buttons) | [Dark Mode](https://bullframecss.marcopontili.com/docs/theming/dark-mode) | [Customization](https://bullframecss.marcopontili.com/docs/theming/customization) | [Migration Guide](https://bullframecss.marcopontili.com/docs/migration)

---

## Customization

Override any CSS variable — no rebuild required:

```css
:root {
  --bf-blue: rgb(0 123 255);
  --bf-font-family-sans-serif: 'Inter', system-ui, sans-serif;
  --bf-body-font-size: 1.8rem;
}
```

Or rebuild from source:

```bash
git clone https://github.com/marcop135/bullframe.css.git
cd bullframe.css
npm install
# Edit src/css/variables.css
npm run build
```

---

## Links

| Resource | |
|----------|---|
| [Documentation](https://bullframecss.marcopontili.com) | Guides, API, examples |
| [npm](https://www.npmjs.com/package/bullframe.css) | Package registry |
| [JSDelivr CDN](https://cdn.jsdelivr.net/npm/bullframe.css) | CDN delivery |
| [CodePen Collection](https://codepen.io/collection/nxpjRe) | Live examples |
| [npm-stat](https://npm-stat.com/charts.html?package=bullframe.css) | Download stats |

---

## Browser Support

Latest 2 stable versions: Chrome, Firefox, Safari, Edge, Opera (desktop & mobile).

See [.browserslistrc](.browserslistrc) for details.

---

## Contributing

Please read the [contribution guidelines](.github/CONTRIBUTING.md).

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for all releases.

## Author

[Marco Pontili](https://marcopontili.com)

## License

[MIT](LICENSE)
