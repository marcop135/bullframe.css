---
title: Migration guide (v5 to v6)
---

<!-- bf-absent: --bf-blue, --bf-blue-light, --bf-focus-ring-color -->

# Migration guide: v5 to v6

v6 replaces Sass/SCSS with native CSS and PostCSS. Upgrading to v7? Finish this guide, then follow [v6 to v7](/migration-v7), which renames the colour tokens used below.

## What changed

| What changed     | v5                         | v6                               |
| ---------------- | -------------------------- | -------------------------------- |
| Source language  | Sass/SCSS                  | Native CSS                       |
| Variables        | `$bf-*` (Sass)             | `--bf-*` (CSS custom properties) |
| Mixins           | Sass `@mixin` / `@include` | Utility classes or direct CSS    |
| Build tool       | Vite + Sass                | Vite + PostCSS                   |
| Source directory | `src/scss/`                | `src/css/`                       |
| IE support       | Dropped in v5              | Not supported                    |

## 1. Install v6

```bash
npm install bullframe.css@6
```

The CDN link also changes:

```html
<!-- v5 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@5" />

<!-- v6: pin a version; add integrity + crossorigin for SRI (see Getting started) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.1.0/dist/css/bullframe.min.css" />
```

## 2. Replace Sass variables with custom properties

Every Sass variable (`$bf-*`) is now a CSS custom property (`--bf-*`).

```scss
/* v5 (Sass) */
$bf-blue: #007bff;
$bf-font-family-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* v6 (CSS) */
:root {
  --bf-blue: rgb(0 86 179);
  --bf-font-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Common variable renames

| v5 Sass variable             | v6 custom property         |
| ---------------------------- | -------------------------- |
| `$bf-blue`                   | `--bf-blue`                |
| `$bf-blue-light`             | `--bf-blue-light`          |
| `$bf-spacing-sm`             | `--bf-spacing-sm`          |
| `$bf-spacing-md`             | `--bf-spacing-md`          |
| `$bf-spacing-lg`             | `--bf-spacing-lg`          |
| `$bf-font-family-sans-serif` | `--bf-font-sans-serif`     |
| `$bf-body-font-size`         | `--bf-body-font-size-rem`  |
| `$bf-body-line-height`       | `--bf-body-line-height`    |
| `$bf-grid-gutter`            | `--bf-spacing-grid-gutter` |

## 3. Remove Sass mixins

v6 has no mixins. Replace each `@include` with a utility class (`.bf-clearfix`, `.bf-sr-only`, `.bf-reduced-motion`) or with plain CSS that reads the custom properties.

## 4. Update your build

Imports of the Sass sources break:

```scss
/* v5: no longer works */
@import 'bullframe.css/src/scss/bullframe';
```

```css
/* v6: import or link the built file */
@import 'bullframe.css/dist/css/bullframe.css';
```

Replace a custom Sass build with PostCSS, as described in [Customization](/theming/customization).

## 5. Check colour contrast

v6 darkened `--bf-blue` and `--bf-blue-light` to meet WCAG AA contrast (4.5:1), so links and primary buttons are a darker blue. To restore the v5 colours:

```css
:root {
  --bf-blue: rgb(0 123 255);
  --bf-blue-light: rgb(0 86 179);
}
```

## 6. Pick a dark mode build

v6 adds dark and system builds for both markup modes:

| File                                     | Behavior                       |
| ---------------------------------------- | ------------------------------ |
| `bullframe-dark.css`                     | Always dark (class-based)      |
| `bullframe-system-default.css`           | Follows `prefers-color-scheme` |
| `bullframe-classless-dark.css`           | Always dark (classless)        |
| `bullframe-classless-system-default.css` | Classless + system preference  |

See [Dark mode](/theming/dark-mode).

## 7. Review accessibility additions

v6 adds:

- `:focus-visible` keyboard-only focus indicators (every build)
- ARIA attribute styling (`aria-busy`, `aria-disabled`, `aria-hidden`) on every build
- `prefers-reduced-motion` via `.bf-reduced-motion` on class-based and utilities builds

### v6.1 notes

- Focus ring tokens: `--bf-focus-ring-color`, `--bf-focus-ring-width`, `--bf-focus-ring-offset`
- `.bf-skip-link`, `.bf-focusable`, and opt-in `.bf-scheme-*`, `.bf-target-size`, `.bf-accent-native` on class-based and utilities builds
- Classless builds stay element styles only (no `.bf-*` classes)

See [Accessibility](/accessibility). For a migration problem this guide does not cover, [open a GitHub issue](https://github.com/marcop135/bullframe.css/issues).
