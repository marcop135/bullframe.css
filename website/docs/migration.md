---
sidebar_position: 99
title: Migration Guide (v5 to v6)
---

# Migration Guide: v5 to v6

Bullframe CSS v6 is a major rewrite. The framework has been migrated from **Sass/SCSS to native CSS with PostCSS**. This guide covers everything you need to update.

## Breaking Changes at a Glance

| What changed | v5 | v6 |
|---|---|---|
| Source language | Sass/SCSS | Native CSS |
| Variables | `$bf-*` (Sass) | `--bf-*` (CSS custom properties) |
| Mixins | Sass `@mixin` / `@include` | Utility classes or direct CSS |
| Build tool | Vite + Sass | Vite + PostCSS |
| Source directory | `src/scss/` | `src/css/` |
| IE support | Dropped in v5 | Not supported |

## 1. Update Your Install

```bash
npm install bullframe.css@6
```

The CDN link also changes:

```html
<!-- v5 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@5">

<!-- v6 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6">
```

## 2. Replace Sass Variables with CSS Custom Properties

All Sass variables (`$bf-*`) are now CSS custom properties (`--bf-*`).

```scss
/* v5 (Sass) */
$bf-blue: #007bff;
$bf-font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* v6 (CSS) */
:root {
  --bf-blue: rgb(0 102 204);
  --bf-font-family-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
```

### Common Variable Renames

| v5 Sass Variable | v6 CSS Custom Property |
|---|---|
| `$bf-blue` | `--bf-blue` |
| `$bf-blue-light` | `--bf-blue-light` |
| `$bf-spacing-sm` | `--bf-spacing-sm` |
| `$bf-spacing-md` | `--bf-spacing-md` |
| `$bf-spacing-lg` | `--bf-spacing-lg` |
| `$bf-font-family-sans-serif` | `--bf-font-family-sans-serif` |
| `$bf-body-font-size` | `--bf-body-font-size` |
| `$bf-body-line-height` | `--bf-body-line-height` |
| `$bf-grid-gutter` | `--bf-grid-gutter` |

## 3. Remove Sass Mixins

Sass mixins no longer exist. Replace them with:

- **Utility classes** (e.g., `.bf-clearfix`, `.bf-sr-only`, `.bf-reduced-motion`)
- **Direct CSS** using the custom properties

## 4. Update Your Build

If you were importing Sass files directly:

```scss
/* v5 — no longer works */
@import 'bullframe.css/src/scss/bullframe';
```

```css
/* v6 — use CSS imports or just link the built file */
@import 'bullframe.css/dist/css/bullframe.css';
```

If you had a custom Sass build, replace it with PostCSS. See [Customization](/docs/theming/customization) for details.

## 5. Color Contrast Changes

v6 darkened `--bf-blue` and `--bf-blue-light` to meet **WCAG AA** contrast requirements (4.5:1 ratio). Links and primary buttons are slightly darker blue.

To restore the brighter v5 colors:

```css
:root {
  --bf-blue: rgb(0 123 255);
  --bf-blue-light: rgb(0 86 179);
}
```

## 6. New Dark Mode Variants

v6 introduces three dark mode build variants:

| File | Behavior |
|---|---|
| `bullframe-dark.css` | Always dark |
| `bullframe-system-default.css` | Follows `prefers-color-scheme` |
| `bullframe-dark-prefers.css` | Dark when system prefers dark |

See [Dark Mode](/docs/theming/dark-mode) for implementation details.

## 7. New Accessibility Features

v6 adds built-in support for:

- `:focus-visible` keyboard-only focus indicators
- `prefers-reduced-motion` via `.bf-reduced-motion`
- ARIA attribute styling (`aria-busy`, `aria-disabled`, `aria-hidden`)

These are included automatically — no migration needed.

## Need Help?

If you run into issues migrating, [open an issue on GitHub](https://github.com/marcop135/bullframe.css/issues).
