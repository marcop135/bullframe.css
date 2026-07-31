# Dark Mode

Bullframe CSS includes built-in dark mode with no JavaScript. System-default builds follow [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme); always-dark builds lock the theme.

## System Default Dark Mode

The `bullframe-system-default.css` build automatically switches between light and dark themes based on the user's system preference:

<!-- sri:cdn-system:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe-system-default.min.css" integrity="sha384-LOW8rRdon0H88bBWmI2gZ1Q72ZoEYJiaLpIsn6uFjSU3uAHZDRghhzXPkymoaRYW" crossorigin="anonymous" />
```

<!-- sri:cdn-system:end -->

This uses the `prefers-color-scheme` media query to detect the user's preference.

## Always Dark Theme

Use `bullframe-dark.css` for a permanent dark theme:

<!-- sri:cdn-dark:start -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe-dark.min.css" integrity="sha384-jkBv9zPyzjYp7ExKBcp4Gm5ouJPhRo/rpqjKwkLSwTx8AUAh0RN55n+mETMMYSYu" crossorigin="anonymous" />
```

<!-- sri:cdn-dark:end -->

## Manual dark mode (advanced)

Default path: pick a dark or system-default build by filename. No script.

If you need a runtime toggle on top of the light build, override tokens and set `data-theme` yourself:

```css
[data-theme='dark'] {
  --bf-white: rgb(34 34 34);
  --bf-dark: rgb(255 255 255);
  /* Override other variables as needed */
}
```

```javascript
document.documentElement.setAttribute('data-theme', 'dark');
```

This is DIY theming, not a built-in Bullframe API. Prefer `bullframe-dark.css` or `bullframe-system-default.css` when a static theme is enough.
