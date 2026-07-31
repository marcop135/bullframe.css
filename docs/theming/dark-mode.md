# Dark Mode

Bullframe CSS includes built-in dark mode with no JavaScript. System-default builds follow [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme); always-dark builds lock the theme.

## System Default Dark Mode

The `bullframe-system-default.css` build automatically switches between light and dark themes based on the user's system preference:

<!-- sri:cdn-system:start -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe-system-default.min.css" integrity="sha384-KEXu8x+O/W/QmdW5aZ9UIXLDvyKyi4Xidk2L8e0dzKZYeAcR+QZ9ILAfBNQM5lcb" crossorigin="anonymous" />
```
<!-- sri:cdn-system:end -->

This uses the `prefers-color-scheme` media query to detect the user's preference.

## Always Dark Theme

Use `bullframe-dark.css` for a permanent dark theme:

<!-- sri:cdn-dark:start -->
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe-dark.min.css" integrity="sha384-B8ZUlnyvcDECShwEs20376tddsQ20JgqpYcBWhJkPmiOS6gUsEImHLBlGsxIMtpP" crossorigin="anonymous" />
```
<!-- sri:cdn-dark:end -->

## Manual Dark Mode Toggle

You can implement your own dark mode toggle by switching between light and dark CSS files, or by overriding CSS variables:

```css
[data-theme='dark'] {
  --bf-white: rgb(34 34 34);
  --bf-dark: rgb(255 255 255);
  /* Override other variables as needed */
}
```

Then toggle the `data-theme` attribute:

```javascript
document.documentElement.setAttribute('data-theme', 'dark');
```
