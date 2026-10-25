# Theming

Bullframe CSS provides multiple theme variants and easy customization options. Override `--bf-*` custom properties to theme without rebuilding.

## Theme variants

### Light theme (default)

<!-- sri:cdn-light:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.0/dist/css/bullframe.min.css" integrity="sha384-WVY8Gu/C2kVRU6YJKrtHGByv6SBjpMBvm3PvweHTvruYBFBsivROgdb9+5uDkVt5" crossorigin="anonymous" />
```

<!-- sri:cdn-light:end -->

### Dark theme

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.0/dist/css/bullframe-dark.min.css" integrity="sha384-EQs5ja2UWfmmRUJBc9vmq475VBO6yiFIppRXrHituFHanDNZMcdhIktOG0mdC5rk" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

### System default theme

Switches between light and dark from `prefers-color-scheme`:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.0/dist/css/bullframe-system-default.min.css" integrity="sha384-CKyEYpoD9DJ1HY9Yh/nvGVVgzD/BR/nZYPSzRJ1ciYu4vIJG3zMamXwtZKmZAP/b" crossorigin="anonymous" />
```

<!-- sri:cdn-system:end -->

More on dark mode: [Dark Mode](/theming/dark-mode).

## Classless variants

The same light / dark / system themes as element styles only (no `.bf-*` classes):

- `bullframe-classless.css`
- `bullframe-classless-dark.css`
- `bullframe-classless-system-default.css`

For skip links and other `.bf-*` helpers, use a class-based build or add `bullframe-utilities.css`.

## Customization

See the [Customization](/theming/customization) guide for overriding tokens and building on top of Bullframe.
