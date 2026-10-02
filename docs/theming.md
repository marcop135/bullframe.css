# Theming

Bullframe CSS provides multiple theme variants and easy customization options. Override `--bf-*` custom properties to theme without rebuilding.

## Theme variants

### Light theme (default)

<!-- sri:cdn-light:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.2.2/dist/css/bullframe.min.css" integrity="sha384-BhYzNPmgYBaxx3Ovu2oxCblRVNUS2uq4YWb6q8FtV6YCLZ9y/5VMRVpqz8l3TFh4" crossorigin="anonymous" />
```

<!-- sri:cdn-light:end -->

### Dark theme

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.2.2/dist/css/bullframe-dark.min.css" integrity="sha384-7AtSvUjEjHp0wc6IBvtz+MfmBxglADw2GnlgPKOryTDE8YPGoxTo8rvectm5nJqd" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

### System default theme

Switches between light and dark from `prefers-color-scheme`:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.2.2/dist/css/bullframe-system-default.min.css" integrity="sha384-Auun6ZESNGdPZw2s9kfQ7sppDm4QMuZUg7MJPG3cBDwT8MsGbDpaRbwei4lwpNV2" crossorigin="anonymous" />
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
