# Theming

Bullframe CSS provides multiple theme variants and easy customization options. Override `--bf-*` custom properties to theme without rebuilding.

## Theme variants

### Light theme (default)

<!-- sri:cdn-light:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe.min.css" integrity="sha384-2vhgKQiG2CRRhZdqNr6Co/Ht0Qw0xjmknOO3t4Y8spYV7BcN0tuC5CdWoAGLAl2r" crossorigin="anonymous" />
```

<!-- sri:cdn-light:end -->

### Dark theme

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe-dark.min.css" integrity="sha384-UYVp0OJ9catRvo8ErMkV3SYJGgEiZm5gh1HpOEPUPulPyPmtIwG+6VS7LBNKU02W" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

### System default theme

Switches between light and dark from `prefers-color-scheme`:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe-system-default.min.css" integrity="sha384-nHMJWYY0/ALF1uirH1gxfA6vJqhyn/el9nw61zI04dnv4eGFOwdF5G2pTFZChJj/" crossorigin="anonymous" />
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
