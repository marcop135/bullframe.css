# Dark Mode

Bullframe CSS includes built-in dark mode with no JavaScript. System-default builds follow [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme); always-dark builds lock the theme.

## System Default Dark Mode

The `bullframe-system-default.css` build automatically switches between light and dark themes based on the user's system preference:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.0/dist/css/bullframe-system-default.min.css" integrity="sha384-CKyEYpoD9DJ1HY9Yh/nvGVVgzD/BR/nZYPSzRJ1ciYu4vIJG3zMamXwtZKmZAP/b" crossorigin="anonymous" />
```

<!-- sri:cdn-system:end -->

This uses the `prefers-color-scheme` media query to detect the user's preference.

## Always Dark Theme

Use `bullframe-dark.css` for a permanent dark theme:

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.0/dist/css/bullframe-dark.min.css" integrity="sha384-EQs5ja2UWfmmRUJBc9vmq475VBO6yiFIppRXrHituFHanDNZMcdhIktOG0mdC5rk" crossorigin="anonymous" />
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
