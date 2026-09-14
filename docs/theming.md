# Theming

Bullframe CSS provides multiple theme variants and easy customization options. Override `--bf-*` custom properties to theme without rebuilding.

## Theme variants

### Light theme (default)

<!-- sri:cdn-light:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.1.0/dist/css/bullframe.min.css" integrity="sha384-UXvhLVyH1oK8aPptQI5JFQy0NBIPo4iW5KCOfj9N2dHOhmwoAlX2XKyAwZLy27DS" crossorigin="anonymous" />
```

<!-- sri:cdn-light:end -->

### Dark theme

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.1.0/dist/css/bullframe-dark.min.css" integrity="sha384-yt2H5woAQDAF5yOwoeqTsT9gHnNy2K5z1agtrhYiip5eTtGzRNreZNozDUr7CHZ1" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

### System default theme

Switches between light and dark from `prefers-color-scheme`:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.1.0/dist/css/bullframe-system-default.min.css" integrity="sha384-Oc2OGESnGoNygg5hfUoaHHaxhbtPzJmMGj91fBX3S4QUgUcsxRWYBJjMhCqny5tG" crossorigin="anonymous" />
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
