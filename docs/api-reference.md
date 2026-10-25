# API Reference

Generated from `src/css/`. Re-run `npm run docs:api-reference` after changing variables or classes.

## CSS Custom Properties

### Page

| Variable                   | Default            | Notes |
| -------------------------- | ------------------ | ----- |
| `--bf-color-bg`            | `rgb(255 255 255)` |       |
| `--bf-color-text`          | `rgb(34 34 34)`    |       |
| `--bf-color-text-muted`    | `rgb(118 118 118)` |       |
| `--bf-color-text-subtle`   | `rgb(102 102 102)` |       |
| `--bf-color-text-shadow`   | `rgb(34 34 34)`    |       |
| `--bf-color-contrast`      | `rgb(0 0 0)`       |       |
| `--bf-color-surface`       | `rgb(233 233 233)` |       |
| `--bf-color-border`        | `rgb(204 204 204)` |       |
| `--bf-color-border-strong` | `rgb(102 102 102)` |       |
| `--bf-color-overlay-bg`    | `rgb(255 255 255)` |       |
| `--bf-color-caption`       | `rgb(118 118 118)` |       |

### Primary

| Variable                          | Default               | Notes |
| --------------------------------- | --------------------- | ----- |
| `--bf-color-primary`              | `rgb(0 86 179)`       |       |
| `--bf-color-primary-hover`        | `rgb(0 65 135)`       |       |
| `--bf-color-primary-subtle`       | `rgb(190 216 254)`    |       |
| `--bf-color-primary-shadow-focus` | `rgb(0 65 135 / 35%)` |       |
| `--bf-color-on-primary`           | `rgb(255 255 255)`    |       |

### Neutral buttons

| Variable                         | Default            | Notes |
| -------------------------------- | ------------------ | ----- |
| `--bf-color-neutral`             | `rgb(204 204 204)` |       |
| `--bf-color-neutral-hover`       | `rgb(184 184 184)` |       |
| `--bf-color-on-neutral`          | `rgb(34 34 34)`    |       |
| `--bf-color-button-shadow-focus` | `rgb(0 0 0 / 15%)` |       |

### Form fields and controls

| Variable                        | Default               | Notes |
| ------------------------------- | --------------------- | ----- |
| `--bf-color-field-bg`           | `rgb(255 255 255)`    |       |
| `--bf-color-field-border`       | `rgb(138 138 138)`    |       |
| `--bf-color-field-shadow-focus` | `rgb(0 86 179 / 25%)` |       |
| `--bf-color-placeholder`        | `rgb(102 102 102)`    |       |
| `--bf-color-control-bg`         | `rgb(255 255 255)`    |       |
| `--bf-color-control-border`     | `rgb(138 138 138)`    |       |
| `--bf-color-range-track`        | `rgb(233 233 233)`    |       |
| `--bf-color-progress-track`     | `rgb(204 204 204)`    |       |

### Highlight (mark / ins)

| Variable                      | Default            | Notes |
| ----------------------------- | ------------------ | ----- |
| `--bf-color-highlight`        | `rgb(255 255 0)`   |       |
| `--bf-color-highlight-subtle` | `rgb(255 255 153)` |       |

### Invalid / error

| Variable            | Default        | Notes |
| ------------------- | -------------- | ----- |
| `--bf-color-danger` | `rgb(255 0 0)` |       |

### Tables

| Variable                  | Default            | Notes |
| ------------------------- | ------------------ | ----- |
| `--bf-color-table-border` | `rgb(138 138 138)` |       |
| `--bf-color-table-stripe` | `rgb(233 233 233)` |       |

### Focus ring (prefers-contrast: more raises colour for WCAG 1.4.11)

| Variable                 | Default          | Notes |
| ------------------------ | ---------------- | ----- |
| `--bf-color-focus-ring`  | `rgb(255 165 0)` |       |
| `--bf-focus-ring-width`  | `0.2rem`         |       |
| `--bf-focus-ring-offset` | `0.3rem`         |       |

### Spacing scale + grid gutter

| Variable            | Default   | Notes |
| ------------------- | --------- | ----- |
| `--bf-space-sm`     | `0.25rem` |       |
| `--bf-space-md`     | `0.5rem`  |       |
| `--bf-space-lg`     | `1rem`    |       |
| `--bf-space-xl`     | `2rem`    |       |
| `--bf-space-xxl`    | `3rem`    |       |
| `--bf-space-gutter` | `1.5rem`  |       |

### Type

| Variable                | Default                                                                                                                                                                                                               | Notes |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| `--bf-font-sans`        | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'` |       |
| `--bf-font-serif`       | `Georgia, Times, 'Times New Roman', serif`                                                                                                                                                                            |       |
| `--bf-font-mono`        | `SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`                                                                                                                                |       |
| `--bf-font-size-body`   | `1.6rem`                                                                                                                                                                                                              |       |
| `--bf-line-height-body` | `1.5`                                                                                                                                                                                                                 |       |

### Breakpoint tokens (documentation / tooling; media queries use literal px below)

| Variable              | Default  | Notes |
| --------------------- | -------- | ----- |
| `--bf-breakpoint-xs`  | `0`      |       |
| `--bf-breakpoint-sm`  | `576px`  |       |
| `--bf-breakpoint-md`  | `768px`  |       |
| `--bf-breakpoint-lg`  | `992px`  |       |
| `--bf-breakpoint-xl`  | `1200px` |       |
| `--bf-breakpoint-xxl` | `1400px` |       |

### Dark scheme hooks

| Variable                           | Default            | Notes                           |
| ---------------------------------- | ------------------ | ------------------------------- |
| `--bf-color-link`                  | `rgb(77 165 255)`  | light: --bf-color-primary       |
| `--bf-color-link-hover`            | `rgb(77 165 255)`  | light: --bf-color-primary-hover |
| `--bf-color-field-text`            | `rgb(204 204 204)` | light: inherited text colour    |
| `--bf-color-field-border-focus`    | `rgb(26 140 255)`  | light: --bf-color-primary       |
| `--bf-color-scrollbar-track`       | `rgb(17 17 17)`    |                                 |
| `--bf-color-scrollbar-thumb`       | `rgb(97 97 97)`    |                                 |
| `--bf-color-scrollbar-thumb-hover` | `rgb(115 115 115)` |                                 |

## Classes

Grouped by source directory under `src/css/`. Click a directory to see the full rules on GitHub.

### [miscellaneous](https://github.com/marcop135/bullframe.css/blob/main/src/css/miscellaneous)

`bf-focusable` · `bf-skip-link` · `bf-sr-only`

### [utilities](https://github.com/marcop135/bullframe.css/blob/main/src/css/utilities)

`bf-accent-native` · `bf-align-center-flex` · `bf-align-center-unknown` · `bf-align-center-unknown--item` · `bf-antialiased` · `bf-btn` · `bf-btn--primary` · `bf-clearfix` · `bf-col-1` · `bf-col-10` · `bf-col-11` · `bf-col-12` · `bf-col-2` · `bf-col-3` · `bf-col-4` · `bf-col-5` · `bf-col-6` · `bf-col-7` · `bf-col-8` · `bf-col-9` · `bf-container` · `bf-container--break-lg` · `bf-container--break-md` · `bf-container--break-xs` · `bf-container--fluid` · `bf-cursive--handwritten` · `bf-disabled` · `bf-display-block` · `bf-display-block-center` · `bf-display-flex` · `bf-display-flex--justify-center` · `bf-display-flex--justify-end` · `bf-display-flex--justify-start` · `bf-display-flex--nowrap` · `bf-display-flex--wrap` · `bf-display-inline` · `bf-display-inline-block` · `bf-display-inline-flex` · `bf-embed-responsive` · `bf-embed-responsive--4-3` · `bf-embed-responsive--item` · `bf-filter-blur` · `bf-filter-dim-images` · `bf-filter-grayscale` · `bf-filter-invert` · `bf-filter-none` · `bf-float-left` · `bf-float-right` · `bf-focused` · `bf-font-monospace` · `bf-font-sans-serif` · `bf-font-serif` · `bf-h1` · `bf-h2` · `bf-h3` · `bf-h4` · `bf-h5` · `bf-h6` · `bf-hidden` · `bf-hide` · `bf-invalid` · `bf-invisible` · `bf-lead` · `bf-list-unstyled` · `bf-m-0` · `bf-m-1` · `bf-m-2` · `bf-m-3` · `bf-m-4` · `bf-m-b-0` · `bf-m-b-1` · `bf-m-b-2` · `bf-m-b-3` · `bf-m-b-4` · `bf-m-l-0` · `bf-m-r-0` · `bf-m-t-0` · `bf-m-t-1` · `bf-m-t-2` · `bf-m-t-3` · `bf-m-t-4` · `bf-monospace--code` · `bf-monospace--slab` · `bf-no-gutters` · `bf-no-select` · `bf-p-0` · `bf-p-1` · `bf-p-2` · `bf-p-3` · `bf-p-4` · `bf-p-b-0` · `bf-p-b-1` · `bf-p-b-2` · `bf-p-b-3` · `bf-p-b-4` · `bf-p-l-0` · `bf-p-r-0` · `bf-p-t-0` · `bf-p-t-1` · `bf-p-t-2` · `bf-p-t-3` · `bf-p-t-4` · `bf-position-fixed` · `bf-position-relative` · `bf-position-sticky` · `bf-reduced-motion` · `bf-responsive-typography` · `bf-row` · `bf-sans-serif--classical` · `bf-sans-serif--geometric` · `bf-sans-serif--humanist` · `bf-sans-serif--industrial` · `bf-sans-serif--neo-grotesque` · `bf-sans-serif--rounded` · `bf-sans-serif--system` · `bf-scheme-auto` · `bf-scheme-dark` · `bf-scheme-light` · `bf-serif--antique` · `bf-serif--didone` · `bf-serif--oldstyle` · `bf-serif--slab` · `bf-serif--transitional` · `bf-subpixel-antialiased` · `bf-t-center` · `bf-t-italic` · `bf-t-left` · `bf-t-right` · `bf-t-shadow` · `bf-t-style-normal` · `bf-t-transform-none` · `bf-t-transform-uppercase` · `bf-t-truncate` · `bf-t-truncate--multiline-2` · `bf-t-truncate--multiline-3` · `bf-t-weight-300` · `bf-t-weight-400` · `bf-t-weight-500` · `bf-t-weight-600` · `bf-t-weight-700` · `bf-t-weight-800` · `bf-table` · `bf-table--zebra` · `bf-table-responsive` · `bf-table-responsive--zebra` · `bf-target-size` · `bf-text-break` · `bf-text-hide` · `bf-visible` · `bf-width-100` · `bf-width-25` · `bf-width-33` · `bf-width-50` · `bf-width-75` · `bf-width-auto` · `bf-z-index-1` · `bf-z-index-10` · `bf-z-index-100` · `bf-z-index-2` · `bf-z-index-20` · `bf-z-index-200` · `bf-z-index-3` · `bf-z-index-30` · `bf-z-index-300` · `bf-z-index-4` · `bf-z-index-40` · `bf-z-index-5` · `bf-z-index-50` · `bf-z-index-6` · `bf-z-index-60` · `bf-z-index-7` · `bf-z-index-70` · `bf-z-index-8` · `bf-z-index-80` · `bf-z-index-9` · `bf-z-index-90`

---

_179 classes, 60 CSS custom properties._
