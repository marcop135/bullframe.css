# Bullframe CSS

<p>
  <a href="https://www.npmjs.com/package/bullframe.css">
    <img src="https://img.shields.io/npm/v/bullframe.css.svg?style=flat-square" alt="npm version">
  </a>
  <a href="https://github.com/marcop135/bullframe.css/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/marcop135/bullframe.css/ci.yml?branch=main&style=flat-square&label=CI" alt="CI status">
  </a>
  <a href="https://github.com/marcop135/bullframe.css/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/marcop135/bullframe.css.svg?style=flat-square" alt="MIT License">
  </a>
</p>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="src/docs/github-readme/bf-readme-hero-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="src/docs/github-readme/bf-readme-hero-light.png">
  <img alt="Bullframe CSS" src="https://raw.githubusercontent.com/marcop135/bullframe.css/v6/src/docs/github-readme/bf-readme-hero-light.png">
</picture>

**Lightweight CSS for fast, accessible UIs.** Semantic, themeable, classless-friendly. Three authoring modes, eight build files, zero JavaScript. ~8 KB gzipped.

> **v6 is current. v5 is stable** (security fixes). See the [migration guide](https://bullframecss.marcopontili.com/migration).

## Install

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest">
```

```bash
npm install bullframe.css
```

```css
@import 'bullframe.css';
```

## Builds

| Mode | File | Notes |
|------|------|-------|
| Class-based | `bullframe.css` / `-dark` / `-system-default` | `.bf-container`, `.bf-btn`, `.bf-row`, … |
| Classless | `bullframe-classless.css` (+ dark / system) | Semantic HTML, no utility classes |
| Utilities | `bullframe-utilities.css` | Utilities only |
| Modern | `bullframe-modern.css` | System-default + oklch, color-mix, `:has`, container queries |

All variants share `--bf-*` tokens. Override variables to theme; no rebuild required.

## Docs

[bullframecss.marcopontili.com](https://bullframecss.marcopontili.com) · [API reference](https://bullframecss.marcopontili.com/api-reference) · [Demo](https://bullframecss.marcopontili.com/demo/) · [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE) · [Marco Pontili](https://marcopontili.com)
