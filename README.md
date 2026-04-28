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

**One design system. Three ways to write it. Zero JavaScript.**

Bullframe is a native-CSS framework that ships in three authoring modes — classless, class-based, and utility-first — built from a single set of `--bf-*` design tokens. Start a blog with the classless build, ship a product with the class-based build, drop the utilities into an existing app. Switch the import; your theme carries over. ~8 KB gzipped, no JavaScript, no build step required, WCAG AA on the default tokens.

> **v6 is the current line. v5 is stable** and supported for security fixes — see the [v5.1.0 release](https://github.com/marcop135/bullframe.css/releases/tag/v5.1.0) and the [migration guide](https://bullframecss.marcopontili.com/docs/migration).

### What this is

- A stylesheet you link once. Themed via CSS custom properties — no rebuild.
- Three authoring modes sharing one token set: classless (semantic HTML), class-based (`.bf-container`, `.bf-btn`), utility-first (`.bf-m-t-3`, `.bf-t-center`).
- Built around modern HTML — `<dialog>`, `<details>`, container queries, `:focus-visible` — with UA+ baselines.
- WCAG AA on default tokens; honors `prefers-reduced-motion`, `prefers-contrast`, `forced-colors`.

### What this isn't

- Not a component framework. No JS, no modals-by-data-attribute, no carousels.
- Not Tailwind. The utilities exist as a build option, not the primary API.
- Not a design system you extend with a config file. You override CSS variables.
- Not for IE11 or anything older than the latest 2 stable browser versions.

---

## Quick Start

### CDN (recommended)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest">
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

## What you get

- **Three modes, one token set.** Classless (`bullframe-classless.css`), class-based (`bullframe.css`), utility-first (`bullframe-utilities.css`). Switch the import — your theme carries over.
- **Theme with one line.** `:root { --bf-blue: rgb(0 100 255); }` — no rebuild, no config file.
- **~8 KB gzipped, 0 JavaScript, 0 dependencies.** The default build is the only file in your `<head>`.
- **WCAG AA + [UA+](https://fokus.dev/tools/uaplus/) baselines.** Accessible defaults out of the box, plus opt-in `prefers-contrast`, `forced-colors`, and `prefers-reduced-motion` rules.

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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest/dist/css/bullframe.min.css">
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest/dist/css/bullframe-classless.min.css">
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
