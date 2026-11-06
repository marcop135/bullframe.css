# Dark Mode

Bullframe CSS includes built-in dark mode with no JavaScript. System-default builds follow [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme); always-dark builds lock the theme.

## System Default Dark Mode

The `bullframe-system-default.css` build automatically switches between light and dark themes based on the user's system preference:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe-system-default.min.css" integrity="sha384-nHMJWYY0/ALF1uirH1gxfA6vJqhyn/el9nw61zI04dnv4eGFOwdF5G2pTFZChJj/" crossorigin="anonymous" />
```

<!-- sri:cdn-system:end -->

This uses the `prefers-color-scheme` media query to detect the user's preference.

## Always Dark Theme

Use `bullframe-dark.css` for a permanent dark theme:

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe-dark.min.css" integrity="sha384-UYVp0OJ9catRvo8ErMkV3SYJGgEiZm5gh1HpOEPUPulPyPmtIwG+6VS7LBNKU02W" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

## Manual dark mode (advanced)

Default path: pick a dark or system-default build by filename. No script.

If you need a runtime toggle on top of the light build, override tokens and set `data-theme` yourself:

```css
[data-theme='dark'] {
  --bf-color-bg: rgb(28 28 28);
  --bf-color-text: rgb(240 240 240);
  --bf-color-link: rgb(77 165 255);
  --bf-color-link-hover: rgb(77 165 255);
  /* Override other variables as needed */
}
```

```javascript
document.documentElement.setAttribute('data-theme', 'dark');
```

This is DIY theming, not a built-in Bullframe API. Prefer `bullframe-dark.css` or `bullframe-system-default.css` when a static theme is enough.
