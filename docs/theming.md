# Theming

Bullframe CSS provides multiple theme variants and easy customization options. Override `--bf-*` custom properties to theme without rebuilding.

## Theme variants

### Light theme (default)

<!-- sri:cdn-light:start -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe.min.css" integrity="sha384-PmNrso3izTA34YeyStq0cOIHC+WeIrpAw8EIhflrUW7pZVJp4mqWXYmRC3GnWxR4" crossorigin="anonymous" />
```
<!-- sri:cdn-light:end -->

### Dark theme

<!-- sri:cdn-dark:start -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe-dark.min.css" integrity="sha384-jkBv9zPyzjYp7ExKBcp4Gm5ouJPhRo/rpqjKwkLSwTx8AUAh0RN55n+mETMMYSYu" crossorigin="anonymous" />
```
<!-- sri:cdn-dark:end -->

### System default theme

Switches between light and dark from `prefers-color-scheme`:

<!-- sri:cdn-system:start -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe-system-default.min.css" integrity="sha384-LOW8rRdon0H88bBWmI2gZ1Q72ZoEYJiaLpIsn6uFjSU3uAHZDRghhzXPkymoaRYW" crossorigin="anonymous" />
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
