<div align="center">

![Bullframe CSS](https://raw.githubusercontent.com/marcop135/bullframe.css/main/src/docs/github-readme/bf-readme-hero-light-16x9.png#gh-light-mode-only)
![Bullframe CSS](https://raw.githubusercontent.com/marcop135/bullframe.css/main/src/docs/github-readme/bf-readme-hero-dark-16x9.png#gh-dark-mode-only)

# Bullframe CSS

Semantic by default. Any stack.

</div>

<p align="center">
  <a href="https://www.npmjs.com/package/bullframe.css"><img src="https://img.shields.io/npm/v/bullframe.css.svg?style=flat-square" alt="npm version"></a>
  <a href="https://github.com/marcop135/bullframe.css/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/marcop135/bullframe.css/ci.yml?branch=main&style=flat-square" alt="CI status"></a>
  <a href="https://bullframecss.marcopontili.com/"><img src="https://img.shields.io/badge/docs-online-0056b3?style=flat-square" alt="Docs"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/marcop135/bullframe.css.svg?style=flat-square" alt="MIT License"></a>
</p>

<p align="center">
  <a href="https://bullframecss.marcopontili.com/">Docs</a> ·
  <a href="https://bullframecss.marcopontili.com/examples">Examples</a> ·
  <a href="https://bullframecss.marcopontili.com/kitchen-sink/">Kitchen sink</a> ·
  <a href="./CHANGELOG.md">Changelog</a>
</p>

---

Bullframe CSS is a lightweight CSS framework for fast, responsive, accessible UIs. One stylesheet covers reset, typography, forms, tables, and layout, so ordinary semantic HTML looks finished before you write a single class. Seven prebuilt files, shared `--bf-*` custom properties, no build step required, and no runtime JavaScript.

## Scope

Built for pages and forms, not complex application UIs: documentation, blogs, landing pages, help centers, listings, micro-sites. Use it class-based or classless. There is no utility-first pipeline to configure and nothing to purge.

## Install

### npm

```bash
npm install bullframe.css
```

```js
import 'bullframe.css';
```

The bare specifier resolves to the default class-based light build. Every other build has its own subpath; see [Pick a build](#pick-a-build).

### CDN

Pin an exact version, point at a published `.min.css`, and include Subresource Integrity. Package-root CDN URLs such as `https://cdn.jsdelivr.net/npm/bullframe.css` resolve to the latest release and are not SRI-safe.

<!-- sri:cdn:start -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe.min.css" integrity="sha384-PmNrso3izTA34YeyStq0cOIHC+WeIrpAw8EIhflrUW7pZVJp4mqWXYmRC3GnWxR4" crossorigin="anonymous" />
```
<!-- sri:cdn:end -->

Swap the filename for any other build. Hashes for all seven: [sri.json](https://bullframecss.marcopontili.com/sri.json).

## Pick a build

Seven builds ship in `dist/css/`, each with a minified twin and a source map. Pick one; they are not meant to be combined, apart from the utilities companion.

| Build                                    | npm subpath                      | Use when                             |   gzip |
| ---------------------------------------- | -------------------------------- | ------------------------------------ | -----: |
| `bullframe.css`                          | `bullframe.css`                  | Class-based, light                   | 8.4 kB |
| `bullframe-dark.css`                     | `bullframe.css/dark`             | Class-based, always dark             | 8.9 kB |
| `bullframe-system-default.css`           | `bullframe.css/system`           | Class-based, `prefers-color-scheme`  | 8.9 kB |
| `bullframe-classless.css`                | `bullframe.css/classless`        | Classless, light                     | 5.1 kB |
| `bullframe-classless-dark.css`           | `bullframe.css/classless/dark`   | Classless, always dark               | 5.5 kB |
| `bullframe-classless-system-default.css` | `bullframe.css/classless/system` | Classless, `prefers-color-scheme`    | 5.7 kB |
| `bullframe-utilities.css`                | `bullframe.css/utilities`        | `.bf-*` helpers only, no base styles | 4.8 kB |

**Classless** builds ship the element styles and the accessibility helpers, nothing else: write plain HTML. **Class-based** builds add the `.bf-*` grid, spacing, and utility layer on top.

## What you get

- **Semantic HTML first:** headings, forms, tables, and links are styled without a pile of classes
- **Classless when you want it:** swap in a `bullframe-classless*.css` build and keep markup as plain HTML
- **Dark without a script:** always-dark builds, or system-default builds that follow `prefers-color-scheme`
- **Accessibility built in:** `:focus-visible` rings, `.bf-skip-link`, `prefers-reduced-motion` and `prefers-contrast` support, and AA contrast on default links and primary buttons
- **Themeable by token:** override any `--bf-*` custom property on `:root`; no preprocessor, no config file
- **Native CSS, any stack:** PostCSS builds, no Sass, no runtime JavaScript

## Browser support

Builds target the Browserslist [`defaults`](.browserslistrc) query, and Autoprefixer runs on that same query. Progressive CSS is gated behind `@supports`; there are no polyfills. See [Browser support](https://bullframecss.marcopontili.com/browser-support).

## Documentation

| | |
| --------------------------------------------------------------------------- | ------------------------------------------- |
| [Getting started](https://bullframecss.marcopontili.com/getting-started)     | Install, starter HTML, the seven builds     |
| [Variables](https://bullframecss.marcopontili.com/variables)                 | The `--bf-*` token set                      |
| [Utilities](https://bullframecss.marcopontili.com/utilities)                 | Grid, spacing, text, and helper classes     |
| [Components](https://bullframecss.marcopontili.com/components/)              | Cards, modals, navigation, button patterns  |
| [Theming](https://bullframecss.marcopontili.com/theming)                     | Custom themes and dark mode                 |
| [Accessibility](https://bullframecss.marcopontili.com/accessibility)         | What ships by default and what to opt into  |
| [Migration](https://bullframecss.marcopontili.com/migration)                 | Upgrading from v5 (Sass to native CSS)      |
| [API reference](https://bullframecss.marcopontili.com/api-reference)         | Every token and utility, generated from source |

## Contributing

Branch off `develop` and open pull requests into `develop`. See [CONTRIBUTING.md](./.github/CONTRIBUTING.md). Bug reports and feature requests go through [issues](https://github.com/marcop135/bullframe.css/issues); for CSS bugs, a [reduced test case](https://codepen.io/collection/nxpjRe) helps most.

Requires Node `>=20` to build. Consuming the published CSS requires nothing.

## License

[MIT](./LICENSE) © [Marco Pontili](https://marcopontili.com)
