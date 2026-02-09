---
sidebar_position: 1
---

# Dark Mode

Bullframe CSS includes built-in dark mode support with multiple implementation options.

## System Default Dark Mode

The `bullframe-system-default.css` build automatically switches between light and dark themes based on the user's system preference:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6/dist/css/bullframe-system-default.min.css">
```

This uses the `prefers-color-scheme` media query to detect the user's preference.

## Always Dark Theme

Use `bullframe-dark.css` for a permanent dark theme:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6/dist/css/bullframe-dark.min.css">
```

## Manual Dark Mode Toggle

You can implement your own dark mode toggle by switching between light and dark CSS files, or by overriding CSS variables:

```css
[data-theme="dark"] {
  --bf-white: rgb(34 34 34);
  --bf-dark: rgb(255 255 255);
  /* Override other variables as needed */
}
```

Then toggle the `data-theme` attribute:

```javascript
document.documentElement.setAttribute('data-theme', 'dark');
```
