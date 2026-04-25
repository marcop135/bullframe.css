---
sidebar_position: 99
---

# API Reference

Generated from `src/css/`. Re-run `npm run docs:api-reference` after changing variables or classes.

## CSS Custom Properties

### Colors - Backgrounds, texts and borders

| Variable | Default | Notes |
|----------|---------|-------|
| `--bf-white` | `rgb(255 255 255)` |  |
| `--bf-light` | `rgb(240 240 240)` |  |
| `--bf-gray-light-extra` | `rgb(233 233 233)` |  |
| `--bf-gray-light` | `rgb(204 204 204)` |  |
| `--bf-gray` | `rgb(153 153 153)` |  |
| `--bf-gray-dark` | `rgb(102 102 102)` |  |
| `--bf-gray-dark-extra` | `rgb(51 51 51)` |  |
| `--bf-dark` | `rgb(34 34 34)` |  |
| `--bf-dark-extra` | `rgb(17 17 17)` |  |
| `--bf-black` | `rgb(0 0 0)` |  |

### Colors - Mark and ins

| Variable | Default | Notes |
|----------|---------|-------|
| `--bf-yellow-light` | `rgb(255 255 153)` |  |
| `--bf-yellow` | `rgb(255 255 0)` |  |
| `--bf-orange` | `rgb(255 165 0)` |  |

### Colors - Anchors and accent

| Variable | Default | Notes |
|----------|---------|-------|
| `--bf-blue` | `rgb(0 86 179)` | Darkened from rgb(0 123 255) for WCAG AA contrast (links on white) |
| `--bf-blue-light` | `rgb(0 65 135)` | Darkened for hover states |
| `--bf-blue-light-extra` | `rgb(190 216 254)` |  |

### Colors - Invalid forms

| Variable | Default | Notes |
|----------|---------|-------|
| `--bf-red` | `rgb(255 0 0)` |  |

### Colors - Dark mode adjustments

| Variable | Default | Notes |
|----------|---------|-------|
| `--bf-dark-bg` | `rgb(28 28 28)` | dark-extra + 7.5% lightness for body background |
| `--bf-dark-link` | `rgb(77 165 255)` | blue + 20% lightness for better visibility on dark |
| `--bf-dark-link-hover` | `rgb(77 165 255)` | blue-light + 20% lightness |
| `--bf-dark-border-focus` | `rgb(26 140 255)` | blue + 10% lightness for form focus borders |
| `--bf-dark-shadow-focus` | `rgb(3 102 214 / 50%)` | blue shadow for focus states |
| `--bf-dark-mark-bg` | `rgb(230 230 0)` | yellow - 10% lightness |
| `--bf-dark-ins-bg` | `rgb(255 255 200)` | yellow-light + 45% lightness |
| `--bf-dark-button-hover` | `rgb(184 184 184)` | gray-light -10% lightness |
| `--bf-dark-button-shadow` | `rgb(255 255 255 / 45%)` | white shadow for button focus |
| `--bf-dark-invalid` | `rgb(255 38 38)` | red adjusted for dark mode visibility |

### Spacing

| Variable | Default | Notes |
|----------|---------|-------|
| `--bf-spacing-sm` | `0.25rem` |  |
| `--bf-spacing-md` | `0.5rem` |  |
| `--bf-spacing-lg` | `1rem` |  |
| `--bf-spacing-xl` | `2rem` |  |
| `--bf-spacing-xxl` | `3rem` |  |
| `--bf-spacing-grid-gutter` | `1.5rem` |  |

### Typography

| Variable | Default | Notes |
|----------|---------|-------|
| `--bf-font-sans-serif` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'` |  |
| `--bf-font-serif` | `Georgia, Times, 'Times New Roman', serif` |  |
| `--bf-font-monospace` | `SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace` |  |
| `--bf-body-font-size-rem` | `1.6rem` |  |
| `--bf-body-line-height` | `1.5` |  |

### Breakpoints

| Variable | Default | Notes |
|----------|---------|-------|
| `--bf-breakpoint-xs` | `0` |  |
| `--bf-breakpoint-sm` | `576px` |  |
| `--bf-breakpoint-md` | `768px` |  |
| `--bf-breakpoint-lg` | `992px` |  |
| `--bf-breakpoint-xl` | `1200px` |  |
| `--bf-breakpoint-xxl` | `1400px` |  |

## Classes

Grouped by source directory under `src/css/`. Open the linked file for the full rule.

### core

`bf-btn--primary` · `bf-container` · `bf-cq-lg` · `bf-cq-lg-hidden` · `bf-cq-md` · `bf-cq-md-hidden` · `bf-cq-sm` · `bf-cq-sm-hidden` · `bf-form-modern`

### forms

`bf-disabled` · `bf-invalid`

### miscellaneous

`bf-btn`

### utilities

`bf-align-center-flex` · `bf-align-center-unknown` · `bf-align-center-unknown--item` · `bf-antialiased` · `bf-clearfix` · `bf-col-1` · `bf-col-10` · `bf-col-11` · `bf-col-12` · `bf-col-2` · `bf-col-3` · `bf-col-4` · `bf-col-5` · `bf-col-6` · `bf-col-7` · `bf-col-8` · `bf-col-9` · `bf-container--break-lg` · `bf-container--break-md` · `bf-container--break-xs` · `bf-container--fluid` · `bf-cursive--handwritten` · `bf-display-block` · `bf-display-block-center` · `bf-display-flex` · `bf-display-flex--justify-center` · `bf-display-flex--justify-end` · `bf-display-flex--justify-start` · `bf-display-flex--nowrap` · `bf-display-flex--wrap` · `bf-display-inline` · `bf-display-inline-block` · `bf-display-inline-flex` · `bf-embed-responsive` · `bf-embed-responsive--4-3` · `bf-embed-responsive--item` · `bf-filter-blur` · `bf-filter-dim-images` · `bf-filter-grayscale` · `bf-filter-invert` · `bf-filter-none` · `bf-float-left` · `bf-float-right` · `bf-focused` · `bf-font-monospace` · `bf-font-sans-serif` · `bf-font-serif` · `bf-h1` · `bf-h2` · `bf-h3` · `bf-h4` · `bf-h5` · `bf-h6` · `bf-hidden` · `bf-hide` · `bf-invisible` · `bf-lead` · `bf-list-unstyled` · `bf-m-0` · `bf-m-1` · `bf-m-2` · `bf-m-3` · `bf-m-4` · `bf-m-b-0` · `bf-m-b-1` · `bf-m-b-2` · `bf-m-b-3` · `bf-m-b-4` · `bf-m-l-0` · `bf-m-r-0` · `bf-m-t-0` · `bf-m-t-1` · `bf-m-t-2` · `bf-m-t-3` · `bf-m-t-4` · `bf-monospace--code` · `bf-monospace--slab` · `bf-no-gutters` · `bf-no-select` · `bf-p-0` · `bf-p-1` · `bf-p-2` · `bf-p-3` · `bf-p-4` · `bf-p-b-0` · `bf-p-b-1` · `bf-p-b-2` · `bf-p-b-3` · `bf-p-b-4` · `bf-p-l-0` · `bf-p-r-0` · `bf-p-t-0` · `bf-p-t-1` · `bf-p-t-2` · `bf-p-t-3` · `bf-p-t-4` · `bf-position-fixed` · `bf-position-relative` · `bf-position-sticky` · `bf-reduced-motion` · `bf-responsive-typography` · `bf-row` · `bf-sans-serif--classical` · `bf-sans-serif--geometric` · `bf-sans-serif--humanist` · `bf-sans-serif--industrial` · `bf-sans-serif--neo-grotesque` · `bf-sans-serif--rounded` · `bf-sans-serif--system` · `bf-serif--antique` · `bf-serif--didone` · `bf-serif--oldstyle` · `bf-serif--slab` · `bf-serif--transitional` · `bf-sr-only` · `bf-subpixel-antialiased` · `bf-t-center` · `bf-t-italic` · `bf-t-left` · `bf-t-right` · `bf-t-shadow` · `bf-t-style-normal` · `bf-t-transform-none` · `bf-t-transform-uppercase` · `bf-t-truncate` · `bf-t-truncate--multiline-2` · `bf-t-truncate--multiline-3` · `bf-t-weight-300` · `bf-t-weight-400` · `bf-t-weight-500` · `bf-t-weight-600` · `bf-t-weight-700` · `bf-t-weight-800` · `bf-table` · `bf-table--zebra` · `bf-table-responsive` · `bf-table-responsive--zebra` · `bf-text-break` · `bf-text-hide` · `bf-visible` · `bf-width-100` · `bf-width-25` · `bf-width-33` · `bf-width-50` · `bf-width-75` · `bf-width-auto` · `bf-z-index-1` · `bf-z-index-10` · `bf-z-index-100` · `bf-z-index-2` · `bf-z-index-20` · `bf-z-index-200` · `bf-z-index-3` · `bf-z-index-30` · `bf-z-index-300` · `bf-z-index-4` · `bf-z-index-40` · `bf-z-index-5` · `bf-z-index-50` · `bf-z-index-6` · `bf-z-index-60` · `bf-z-index-7` · `bf-z-index-70` · `bf-z-index-8` · `bf-z-index-80` · `bf-z-index-9` · `bf-z-index-90`

---

_179 classes, 44 CSS custom properties._
