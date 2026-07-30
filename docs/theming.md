# Theming

Bullframe CSS provides multiple theme variants and easy customization options. All builds share the same `--bf-*` tokens; override variables to theme without rebuilding.

## Theme variants

### Light theme (default)

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest/dist/css/bullframe.min.css" />
```

### Dark theme

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest/dist/css/bullframe-dark.min.css" />
```

### System default theme

Switches between light and dark from `prefers-color-scheme`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest/dist/css/bullframe-system-default.min.css" />
```

More on dark mode: [Dark Mode](/theming/dark-mode).

## Classless variants

The same light / dark / system themes without utility classes:

- `bullframe-classless.css`
- `bullframe-classless-dark.css`
- `bullframe-classless-system-default.css`

## Modern CSS variant

`bullframe-modern.css` layers `color-scheme`, `color-mix()`, `oklch()` tokens, `:has()`, and container queries on top of the system-default build. Opt in when the project targets recent evergreen browsers. The other seven variants stay the same. It does **not** ship `light-dark()`; use `--bf-*` overrides or a system-default build for dual themes.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest/dist/css/bullframe-modern.min.css" />
```

```css
@import 'bullframe.css/modern';
```

Native control / scrollbar theming:

```css
:root {
  color-scheme: light dark;
}
```

Dim submit on invalid forms (no JavaScript): use `.bf-form-modern` as documented in [Form patterns](/components/forms#form-with-validation-hint-modern-variant).

```css
.bf-form-modern:has(:invalid) [type='submit'] {
  opacity: 0.6;
  cursor: not-allowed;
}
```

Browser notes for these features: [Browser Support](/browser-support#modern-build).

## Customization

See the [Customization](/theming/customization) guide for overriding tokens and building on top of Bullframe.
