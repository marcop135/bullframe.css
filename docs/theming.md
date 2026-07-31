# Theming

Bullframe CSS provides multiple theme variants and easy customization options. Override `--bf-*` custom properties to theme without rebuilding.

## Theme variants

### Light theme (default)

<!-- sri:cdn-light:start -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe.min.css" integrity="sha384-AYv1LjHDO3SO85iGSHCj/uz2Bi5GlLhxRtYKo5/2xkhLOuZ/23bnFTvOIU1E+gqQ" crossorigin="anonymous" />
```
<!-- sri:cdn-light:end -->

### Dark theme

<!-- sri:cdn-dark:start -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe-dark.min.css" integrity="sha384-B8ZUlnyvcDECShwEs20376tddsQ20JgqpYcBWhJkPmiOS6gUsEImHLBlGsxIMtpP" crossorigin="anonymous" />
```
<!-- sri:cdn-dark:end -->

### System default theme

Switches between light and dark from `prefers-color-scheme`:

<!-- sri:cdn-system:start -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe-system-default.min.css" integrity="sha384-KEXu8x+O/W/QmdW5aZ9UIXLDvyKyi4Xidk2L8e0dzKZYeAcR+QZ9ILAfBNQM5lcb" crossorigin="anonymous" />
```
<!-- sri:cdn-system:end -->

More on dark mode: [Dark Mode](/theming/dark-mode).

## Classless variants

The same light / dark / system themes without utility classes:

- `bullframe-classless.css`
- `bullframe-classless-dark.css`
- `bullframe-classless-system-default.css`

## Customization

See the [Customization](/theming/customization) guide for overriding tokens and building on top of Bullframe.
