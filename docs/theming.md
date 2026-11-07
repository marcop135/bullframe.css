# Theming

Pick a theme by loading one build, then adjust it by overriding `--bf-*` tokens. No rebuild is needed.

## Theme builds

### Light (default)

<!-- sri:cdn-light:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe.min.css" integrity="sha384-2vhgKQiG2CRRhZdqNr6Co/Ht0Qw0xjmknOO3t4Y8spYV7BcN0tuC5CdWoAGLAl2r" crossorigin="anonymous" />
```

<!-- sri:cdn-light:end -->

### Always dark

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe-dark.min.css" integrity="sha384-UYVp0OJ9catRvo8ErMkV3SYJGgEiZm5gh1HpOEPUPulPyPmtIwG+6VS7LBNKU02W" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

### System default

Follows the operating system setting through `prefers-color-scheme`:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe-system-default.min.css" integrity="sha384-nHMJWYY0/ALF1uirH1gxfA6vJqhyn/el9nw61zI04dnv4eGFOwdF5G2pTFZChJj/" crossorigin="anonymous" />
```

<!-- sri:cdn-system:end -->

See [Dark mode](/theming/dark-mode) for a manual toggle.

## Classless builds

The same three themes as element styles only, with no `.bf-*` classes:

- `bullframe-classless.css`
- `bullframe-classless-dark.css`
- `bullframe-classless-system-default.css`

For skip links and other `.bf-*` helpers, use a class-based build or add `bullframe-utilities.css` after the classless file.

## Tokens

To change colors, spacing, or type, see [Customization](/theming/customization). The full token list is in [CSS variables](/variables).
