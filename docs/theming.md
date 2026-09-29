# Theming

Bullframe CSS provides multiple theme variants and easy customization options. Override `--bf-*` custom properties to theme without rebuilding.

## Theme variants

### Light theme (default)

<!-- sri:cdn-light:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.2.0/dist/css/bullframe.min.css" integrity="sha384-//bl7PaZimluz3HAcw49RegU8o/IMq6P749ojFQYffnn0msjv2BTxDRdKVgC/mXC" crossorigin="anonymous" />
```

<!-- sri:cdn-light:end -->

### Dark theme

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.2.0/dist/css/bullframe-dark.min.css" integrity="sha384-WlQCHTHzwUv+8/GrhhdKPJ8TrSwC8OpMPTUaFHZQ5xPBGcHyhpJArm9IHqP8glf/" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

### System default theme

Switches between light and dark from `prefers-color-scheme`:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.2.0/dist/css/bullframe-system-default.min.css" integrity="sha384-YL/iWYuI2AGjU428QTJpgEy3wzT/6HJbF65+6MUZ45ZZuaNi39gqybhxxEMwtcl6" crossorigin="anonymous" />
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
