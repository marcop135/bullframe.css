---
title: Migration guide (v6 to v7)
description: Upgrade Bullframe CSS from v6 to v7. Colour token renames, dark-mode overrides and the accessibility fixes in 7.0.
---

<!-- bf-absent: --bf-white, --bf-light, --bf-gray-light-extra, --bf-gray-light, --bf-gray, --bf-gray-dark, --bf-gray-dark-extra, --bf-dark, --bf-dark-extra, --bf-black, --bf-yellow-light, --bf-yellow, --bf-orange, --bf-blue, --bf-blue-light, --bf-blue-light-extra, --bf-red, --bf-focus-ring-color, --bf-dark-bg, --bf-dark-link, --bf-dark-link-hover, --bf-dark-border-focus, --bf-dark-shadow-focus, --bf-dark-mark-bg, --bf-dark-ins-bg, --bf-dark-button-hover, --bf-dark-button-shadow, --bf-dark-invalid -->

# Migration guide: v6 to v7

v7 renames the colour tokens from hue to role, for example `--bf-blue` to `--bf-color-primary`. Builds, file names, classes, HTML and all other tokens stay the same. If you never set a `--bf-*` colour token, install v7 and read [Rendering fixes](#rendering-fixes).

::: warning Old names fail silently
v7 has no aliases. An override that still uses a v6 colour name is ignored without an error, and the default colour shows instead.
:::

## What changed

| Area                    | v6                                           | v7                                                       |
| ----------------------- | -------------------------------------------- | -------------------------------------------------------- |
| Colour tokens           | Named by hue: `--bf-blue`, `--bf-gray-light` | Named by role: `--bf-color-primary`, `--bf-color-border` |
| Dark tokens             | Separate `--bf-dark-*` set                   | The same `--bf-color-*` tokens, with dark values         |
| Light token specificity | `:root`                                      | `:where(:root)`, so your `:root` overrides always win    |

With light tokens at zero specificity, `bullframe-utilities.css` loaded after your overrides no longer resets them. Loaded after a dark build, it keeps the dark values.

## 1. Install v7

```bash
npm install bullframe.css@7
```

For the CDN, copy the pinned v7 link with SRI from [Getting started: load from a CDN](/getting-started#load-from-a-cdn).

To stay on v6 while you migrate, pin the major version. The unversioned jsDelivr URL serves the latest release, so it now loads v7.

```bash
npm install bullframe.css@6
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6/dist/css/bullframe.min.css" />
```

## 2. Find v6 colour tokens

Search your CSS, inline styles and templates. `<dir>` is your source folder. On Windows, run it in Git Bash or WSL.

```bash
grep -rnE -- '--bf-(white|light|gray|dark|black|yellow|orange|blue|red|focus-ring-color)' <dir>
```

The pattern matches every v6 colour token, including the `--bf-dark-*` set, and none of the v7 tokens.

## 3. Rename colour tokens

A v6 hue token often styled several things. Replace each use with the role token for what your rule styles. [CSS Variables](/variables) lists every token and its default.

### Colours

| v6                                     | v7                                                                                                                                                     |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--bf-blue`                            | `--bf-color-primary`. Links and focused fields follow it unless `--bf-color-link` or `--bf-color-field-border-focus` is set                            |
| `--bf-blue-light`                      | `--bf-color-primary-hover`. Link hover follows it unless `--bf-color-link-hover` is set                                                                |
| `--bf-blue-light-extra`                | `--bf-color-primary-subtle`                                                                                                                            |
| `--bf-white`                           | `--bf-color-bg` (page), `--bf-color-on-primary` (text on primary), `--bf-color-field-bg`, `--bf-color-control-bg`, `--bf-color-overlay-bg` (skip link) |
| `--bf-light`                           | Dark builds: `--bf-color-text`                                                                                                                         |
| `--bf-gray-light-extra`                | `--bf-color-surface`, `--bf-color-range-track`, `--bf-color-table-stripe`                                                                              |
| `--bf-gray-light`                      | `--bf-color-border`, `--bf-color-neutral` (button fill), `--bf-color-progress-track`. Dark builds: `--bf-color-field-text`, `--bf-color-caption`       |
| `--bf-gray`                            | `--bf-color-text-muted`, `--bf-color-caption`, `--bf-color-field-border`, `--bf-color-control-border`, `--bf-color-table-border`                       |
| `--bf-gray-dark`                       | `--bf-color-text-subtle`, `--bf-color-border-strong`, `--bf-color-placeholder`. Dark builds: `--bf-color-table-border`                                 |
| `--bf-gray-dark-extra`                 | Dark builds: `--bf-color-progress-track`, `--bf-color-table-stripe`. Elsewhere, write `rgb(51 51 51)`                                                  |
| `--bf-dark`                            | `--bf-color-text`, `--bf-color-on-neutral` (button text), `--bf-color-text-shadow`                                                                     |
| `--bf-dark-extra`                      | Dark builds: `--bf-color-field-bg`, `--bf-color-range-track`, `--bf-color-scrollbar-track`. Elsewhere, write `rgb(17 17 17)`                           |
| `--bf-black`                           | `--bf-color-contrast`. Dark builds: `--bf-color-field-border`                                                                                          |
| `--bf-yellow`                          | `--bf-color-highlight` (`mark`)                                                                                                                        |
| `--bf-yellow-light`                    | `--bf-color-highlight-subtle` (`ins`)                                                                                                                  |
| `--bf-orange`, `--bf-focus-ring-color` | `--bf-color-focus-ring`                                                                                                                                |
| `--bf-red`                             | `--bf-color-danger`                                                                                                                                    |

### Dark tokens

Set these inside a dark scope, as shown in [step 4](#_4-scope-dark-mode-overrides).

| v6                                        | v7                                                     |
| ----------------------------------------- | ------------------------------------------------------ |
| `--bf-dark-bg`                            | `--bf-color-bg`                                        |
| `--bf-dark-link` / `--bf-dark-link-hover` | `--bf-color-link` / `--bf-color-link-hover`            |
| `--bf-dark-border-focus`                  | `--bf-color-field-border-focus`                        |
| `--bf-dark-shadow-focus`                  | `--bf-color-field-shadow-focus`                        |
| `--bf-dark-mark-bg` / `--bf-dark-ins-bg`  | `--bf-color-highlight` / `--bf-color-highlight-subtle` |
| `--bf-dark-button-hover`                  | `--bf-color-neutral-hover`                             |
| `--bf-dark-button-shadow`                 | `--bf-color-button-shadow-focus`                       |
| `--bf-dark-invalid`                       | `--bf-color-danger`                                    |

### New and unchanged tokens

New in v7, with no v6 token: `--bf-color-primary-shadow-focus`, `--bf-color-button-shadow-focus` and `--bf-color-field-shadow-focus` (v6 used fixed colours for light focus shadows), plus `--bf-color-field-text` and `--bf-color-scrollbar-*` in dark builds.

Unchanged: `--bf-spacing-*`, `--bf-font-sans-serif`, `--bf-font-serif`, `--bf-font-monospace`, `--bf-body-font-size-rem`, `--bf-body-line-height`, `--bf-focus-ring-width`, `--bf-focus-ring-offset` and `--bf-breakpoint-*`.

### Example

```css
/* v6 */
:root {
  --bf-blue: rgb(0 112 74);
  --bf-blue-light: rgb(0 84 56);
  --bf-gray-light: rgb(214 222 218);
  --bf-spacing-lg: 1.5rem;
}

/* v7 */
:root {
  --bf-color-primary: rgb(0 112 74);
  --bf-color-primary-hover: rgb(0 84 56);
  --bf-color-border: rgb(214 222 218);
  --bf-color-neutral: rgb(214 222 218);
  --bf-spacing-lg: 1.5rem;
}
```

`--bf-gray-light` becomes two tokens here because v6 used it for both borders and button fills.

## 4. Scope dark-mode overrides

In v6, `--bf-white` and the other page colours changed light mode only, and `--bf-dark-*` changed dark mode only. In v7 both schemes read the same tokens. With `bullframe-system-default.css`, a `:root` override applies in light and dark mode. To change dark mode only, wrap it:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bf-color-bg: rgb(18 18 24);
    --bf-color-link: rgb(120 190 255);
  }
}
```

Use `prefers-color-scheme: light` to change light mode only. With `bullframe-dark.css` or `bullframe-classless-dark.css` the page is always dark, so a plain `:root` override is a dark override.

## 5. Check the result

1. Run the search from [step 2](#_2-find-v6-colour-tokens) again. It prints nothing once every v6 token is replaced.
2. Open your pages in light and dark mode and compare links, buttons, form fields and tables with v6.

## Rendering fixes

The default look changes only where v6 failed accessibility checks:

- Buttons, radios, checkboxes and `.bf-btn` show the `--bf-color-focus-ring` outline on keyboard focus. v6 suppressed it.
- Text fields keep their border-and-shadow focus style and add a system-colour outline in Windows forced-colours mode.
- `aria-disabled="true"` controls keep a visible focus ring.
- In classless dark builds the focus ring takes its colour from `--bf-color-focus-ring`, so your overrides and `prefers-contrast: more` apply.
- Muted text (`caption`, `blockquote small`) darkens from `rgb(153 153 153)` to `rgb(118 118 118)` for 4.5:1 contrast on white. Field, radio, checkbox and table borders darken to `rgb(138 138 138)` for 3:1. Dark builds are unchanged.
