# Dark mode

Choose dark mode by build filename; no JavaScript is involved. System-default builds follow [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), always-dark builds stay dark. Classless builds have the same pair: `bullframe-classless-system-default.css` and `bullframe-classless-dark.css`.

## Follow the system setting

`bullframe-system-default.css` switches between light and dark with the operating system:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe-system-default.min.css" integrity="sha384-nHMJWYY0/ALF1uirH1gxfA6vJqhyn/el9nw61zI04dnv4eGFOwdF5G2pTFZChJj/" crossorigin="anonymous" />
```

<!-- sri:cdn-system:end -->

## Always dark

`bullframe-dark.css` is dark regardless of the system setting:

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe-dark.min.css" integrity="sha384-UYVp0OJ9catRvo8ErMkV3SYJGgEiZm5gh1HpOEPUPulPyPmtIwG+6VS7LBNKU02W" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

## Add a manual toggle

Bullframe has no toggle API. To switch at runtime on top of the light build, set a `data-theme` attribute and override the tokens under it. The values below are the ones the dark builds use:

```css
[data-theme='dark'] {
  --bf-color-bg: rgb(28 28 28);
  --bf-color-text: rgb(240 240 240);
  --bf-color-link: rgb(77 165 255);
  --bf-color-link-hover: rgb(77 165 255);
  /* add the other tokens you need from CSS variables */
}
```

```javascript
document.documentElement.setAttribute('data-theme', 'dark');
```

This overrides tokens only; element rules that the dark builds add, such as scrollbars, do not change. See [CSS variables](/variables) for the token list.
