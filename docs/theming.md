# Theming

Pick a theme by loading one build, then adjust it by overriding `--bf-*` tokens. No rebuild is needed.

## Theme builds

### Light (default)

<!-- sri:cdn-light:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.2/dist/css/bullframe.min.css" integrity="sha384-xFByrRCjhEUwOP1zcoRX/5wbEVVNaIRjPVaOmhO7C2emm8zmdpGHM2+QBrpYVsth" crossorigin="anonymous" />
```

<!-- sri:cdn-light:end -->

### Always dark

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.2/dist/css/bullframe-dark.min.css" integrity="sha384-+8zF6aijwtQLATKB0QLwIoCmiFvf5gr7BIds+eW1kAOs++7fzQZu194rruVXCIZR" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

### System default

Follows the operating system setting through `prefers-color-scheme`:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.2/dist/css/bullframe-system-default.min.css" integrity="sha384-/xCvTDyTMIPTf/BHIIh20CB4RZeWP5S7BtfVYJZTs4oXo4Sfg1dGmim9KDDFwoxN" crossorigin="anonymous" />
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
