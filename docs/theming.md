# Theming

Pick a theme by loading one build, then adjust it by overriding `--bf-*` tokens. No rebuild is needed.

## Theme builds

### Light (default)

<!-- sri:cdn-light:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.3/dist/css/bullframe.min.css" integrity="sha384-HJtuqd6G8ppu9fzFd7MPLwcpA/fFWtKI9V+lBibY2PZaimFGaqMa9V8wR6jeVuiZ" crossorigin="anonymous" />
```

<!-- sri:cdn-light:end -->

### Always dark

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.3/dist/css/bullframe-dark.min.css" integrity="sha384-5kgvN1LvHqDM23hdIoX/YXlPbycqJaTXLqAOMZuim4LVInEjfXTYU2T3lzciPmry" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

### System default

Follows the operating system setting through `prefers-color-scheme`:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.3/dist/css/bullframe-system-default.min.css" integrity="sha384-MFi/HTLVjVrk8ZM52qk5I67jc3ZIVep+BwX/qDnxnv31CTBZyrwmR8uz5rrsYSAe" crossorigin="anonymous" />
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
