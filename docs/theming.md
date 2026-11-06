# Theming

Bullframe CSS provides multiple theme variants and easy customization options. Override `--bf-*` custom properties to theme without rebuilding.

## Theme variants

### Light theme (default)

<!-- sri:cdn-light:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.0/dist/css/bullframe.min.css" integrity="sha384-jnryRG7s0dO9zv1Yx/CyInrj1muB1+7jRCL3csHukGIgI+mjtv4F2n97DJMkN/lZ" crossorigin="anonymous" />
```

<!-- sri:cdn-light:end -->

### Dark theme

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.0/dist/css/bullframe-dark.min.css" integrity="sha384-3aEaZ9ctFnS3eobMc/yCx0wbm+T4NQ312YqCyw3xovEBDRpK1ZfUZU9Z6OJQ7t2M" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

### System default theme

Switches between light and dark from `prefers-color-scheme`:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.0/dist/css/bullframe-system-default.min.css" integrity="sha384-91qriDZ6oLhp47Q31STJ6m3yhrVdqzIWCvOoCfnhqIjjHCD4hSklokhTtKjAM1Q1" crossorigin="anonymous" />
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
