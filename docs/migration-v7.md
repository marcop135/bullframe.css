---
title: Migration Guide (v6 to v7)
description: Upgrade Bullframe CSS from v6 to v7. Token renames, dark-mode overrides, and the rendering fixes that ship with 7.0.
---

<!-- bf-absent: --bf-white, --bf-light, --bf-gray-light-extra, --bf-gray-light, --bf-gray, --bf-gray-dark, --bf-gray-dark-extra, --bf-dark, --bf-dark-extra, --bf-black, --bf-yellow-light, --bf-yellow, --bf-orange, --bf-blue, --bf-blue-light, --bf-blue-light-extra, --bf-red, --bf-focus-ring-color, --bf-dark-bg, --bf-dark-link, --bf-dark-link-hover, --bf-dark-border-focus, --bf-dark-shadow-focus, --bf-dark-mark-bg, --bf-dark-ins-bg, --bf-dark-button-hover, --bf-dark-button-shadow, --bf-dark-invalid, --bf-spacing-sm, --bf-spacing-md, --bf-spacing-lg, --bf-spacing-xl, --bf-spacing-xxl, --bf-spacing-grid-gutter, --bf-font-sans-serif, --bf-font-monospace, --bf-body-font-size-rem, --bf-body-line-height -->

# Migration Guide: v6 to v7

v7 uses one naming scheme for `--bf-*` tokens. Builds, file names, classes and HTML are unchanged, and the default look is the same apart from the [rendering fixes](#rendering-fixes) below. If you only link a Bullframe stylesheet and never set a `--bf-*` token, there is nothing to migrate.

## Breaking Changes at a Glance

| Area          | v6                                                      | v7                                                                               |
| ------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Colour tokens | Named by hue (`--bf-blue`, `--bf-gray-light`)           | Named by role (`--bf-color-primary`, `--bf-color-border`)                        |
| Dark tokens   | Separate `--bf-dark-*` set                              | Same `--bf-color-*` tokens, dark values set by the dark sheets                   |
| Other tokens  | `--bf-spacing-*`, `--bf-font-sans-serif`, `--bf-body-*` | `--bf-space-*`, `--bf-font-sans`, `--bf-font-size-body`, `--bf-line-height-body` |
| Old names     | Supported                                               | Removed, no aliases. An old override is ignored, not an error                    |

## 1. Stay on v6 for now (CDN)

The unversioned jsDelivr URL (`https://cdn.jsdelivr.net/npm/bullframe.css`) serves the latest release, so it moves to v7. To keep v6 while you migrate, pin the major:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6/dist/css/bullframe.min.css" />
```

With npm: `npm install bullframe.css@6`.

## 2. Rename Tokens

Search your CSS, inline styles and templates for `--bf-`. The naming rule is `--bf-<category>-<role>[-<property>][-<state>]`; see [CSS Variables](/variables) for every token and its default.

### Colours

v6 hue tokens fed several roles. Pick the v7 token for what your rule styles.

| v6                                     | v7, by role                                                                                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--bf-white`                           | `--bf-color-bg` (page), `--bf-color-on-primary` (text on primary), `--bf-color-field-bg`, `--bf-color-control-bg`, `--bf-color-overlay-bg` (skip link) |
| `--bf-light`                           | `--bf-color-text` in dark mode; `--bf-color-surface` for light panels                                                                                  |
| `--bf-gray-light-extra`                | `--bf-color-surface`, `--bf-color-range-track`, `--bf-color-table-stripe`                                                                              |
| `--bf-gray-light`                      | `--bf-color-border`, `--bf-color-neutral` (button fill), `--bf-color-progress-track`, dark `--bf-color-field-text` and `--bf-color-caption`            |
| `--bf-gray`                            | `--bf-color-text-muted`, `--bf-color-caption`, `--bf-color-field-border`, `--bf-color-control-border`, `--bf-color-table-border`                       |
| `--bf-gray-dark`                       | `--bf-color-text-subtle`, `--bf-color-border-strong`, `--bf-color-placeholder`, dark `--bf-color-table-border`                                         |
| `--bf-gray-dark-extra`                 | No token; dark `--bf-color-progress-track` and `--bf-color-table-stripe` use it, or write `rgb(51 51 51)`                                              |
| `--bf-dark`                            | `--bf-color-text`, `--bf-color-on-neutral` (button text), `--bf-color-text-shadow`                                                                     |
| `--bf-dark-extra`                      | Dark `--bf-color-field-bg`, `--bf-color-range-track`, `--bf-color-scrollbar-track`, or write `rgb(17 17 17)`                                           |
| `--bf-black`                           | `--bf-color-contrast`, dark `--bf-color-field-border`                                                                                                  |
| `--bf-yellow` / `--bf-yellow-light`    | `--bf-color-highlight` (`mark`) / `--bf-color-highlight-subtle` (`ins`)                                                                                |
| `--bf-orange`, `--bf-focus-ring-color` | `--bf-color-focus-ring`                                                                                                                                |
| `--bf-blue`                            | `--bf-color-primary` (links and focused fields follow it unless you set `--bf-color-link` or `--bf-color-field-border-focus`)                          |
| `--bf-blue-light`                      | `--bf-color-primary-hover` (links follow unless you set `--bf-color-link-hover`)                                                                       |
| `--bf-blue-light-extra`                | `--bf-color-primary-subtle`                                                                                                                            |
| `--bf-red`                             | `--bf-color-danger`                                                                                                                                    |

### Dark tokens

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

New in v7 with no v6 equivalent: `--bf-color-primary-shadow-focus`, `--bf-color-button-shadow-focus`, `--bf-color-field-shadow-focus` (light focus shadows were literals), `--bf-color-field-text` and `--bf-color-scrollbar-*` (dark only).

### Spacing and type

| v6                                     | v7                                               |
| -------------------------------------- | ------------------------------------------------ |
| `--bf-spacing-sm` … `--bf-spacing-xxl` | `--bf-space-sm` … `--bf-space-xxl` (same values) |
| `--bf-spacing-grid-gutter`             | `--bf-space-gutter`                              |
| `--bf-font-sans-serif`                 | `--bf-font-sans`                                 |
| `--bf-font-monospace`                  | `--bf-font-mono`                                 |
| `--bf-body-font-size-rem`              | `--bf-font-size-body`                            |
| `--bf-body-line-height`                | `--bf-line-height-body`                          |

`--bf-font-serif`, `--bf-focus-ring-width`, `--bf-focus-ring-offset` and `--bf-breakpoint-*` keep their names.

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
  --bf-space-lg: 1.5rem;
}
```

## 3. Dark-Mode Overrides

Light and dark now read the same tokens. In v6, page colours such as `--bf-white` changed light mode only and `--bf-dark-*` changed dark mode only. In v7, with a dark or system-default build, a `:root` override loaded after Bullframe applies in both schemes. Wrap it to target one:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bf-color-bg: rgb(18 18 24);
    --bf-color-link: rgb(120 190 255);
  }
}
```

With `bullframe-dark.css` or `bullframe-classless-dark.css`, a plain `:root` override is a dark override.

## 4. Load Order

Light tokens now sit at zero specificity (`:where(:root)`). Your `:root` overrides win wherever they load; in v6, `bullframe-utilities.css` loaded after your overrides reset them. Utilities loaded after a dark or system-default build now preserve its dark token values.

## Rendering Fixes

The default look is unchanged except for these accessibility fixes:

- Keyboard focus shows the `--bf-color-focus-ring` outline on buttons, radios and checkboxes (it was suppressed). Text fields keep their border-and-shadow focus style, and gain a system-colour outline in Windows forced-colours mode.
- `aria-disabled="true"` controls keep a visible focus ring.
- Classless dark builds take the focus ring colour from `--bf-color-focus-ring`, so `prefers-contrast: more` and overrides apply.
- Muted text (`caption`, `blockquote small`) darkens from `rgb(153 153 153)` to `rgb(118 118 118)` for 4.5:1 on white; field, radio, checkbox and table borders darken to `rgb(138 138 138)` for 3:1. Dark builds are unchanged.
