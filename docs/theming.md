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

## Customization

See the [Customization](/theming/customization) guide for overriding tokens and building on top of Bullframe.
