# Theming

Bullframe CSS provides multiple theme variants and easy customization options. Override `--bf-*` custom properties to theme without rebuilding.

## Theme variants

### Light theme (default)

<!-- sri:cdn-light:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.4.0/dist/css/bullframe.min.css" integrity="sha384-mv3MJZxSCrTCzF0SkbCDi4L7TOb+pJEDCZOhfqSKD4rnhf2ApUun8NCOhnLiiNVA" crossorigin="anonymous" />
```

<!-- sri:cdn-light:end -->

### Dark theme

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.4.0/dist/css/bullframe-dark.min.css" integrity="sha384-+7iudbAp8kLt8Skh+KzsENdg1Cmi53WAyIv+2Hv6em4dlLrfI//CQwwkv09uFpBz" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

### System default theme

Switches between light and dark from `prefers-color-scheme`:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.4.0/dist/css/bullframe-system-default.min.css" integrity="sha384-4hx/ws1jm8zy7qEe7UZAP6lgTLwRef/55y9VepgmDcyc+65/td6WkAU7cA+1Igmt" crossorigin="anonymous" />
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
