# Getting started

Bullframe CSS is a lightweight CSS framework: eight builds, shared `--bf-*` tokens, zero runtime dependencies, and about 8 KB gzipped for the default build. Works with any stack. Pick an authoring mode, then add one stylesheet.

## Choose a mode

Same tokens and accessible defaults in every mode. Pick how you write HTML.

### Classless

`bullframe-classless.css` (+ dark / system-default). Semantic HTML only; no classes to add.

```html
<link rel="stylesheet" href="…/bullframe-classless.min.css" />

<h1>Hello</h1>
<p>Just semantic HTML.</p>
<form>…</form>
```

### Class-based

`bullframe.css` (+ dark / system-default). Grid, buttons, forms, tables via `.bf-*` classes.

```html
<link rel="stylesheet" href="…/bullframe.min.css" />

<div class="bf-container">
  <h1 class="bf-t-center">Hello</h1>
  <button class="bf-btn bf-btn--primary">Go</button>
</div>
```

### Utility-first

`bullframe-utilities.css`. You already have a reset; you just want `.bf-*` helpers.

```html
<link rel="stylesheet" href="…/bullframe-utilities.min.css" />

<div class="bf-m-t-3 bf-t-center">
  <h1 class="bf-t-weight-700">Hello</h1>
</div>
```

## CDN

Fastest path. Pin to `@6` once the v6 release is on npm if you need a fixed major.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest" />
```

For a specific build, use the full path and swap the filename (`bullframe-classless.min.css`, `bullframe-modern.min.css`, …):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest/dist/css/bullframe.min.css" />
```

## npm

Subpath exports for every variant:

```bash
npm install bullframe.css
```

```css
@import 'bullframe.css';
@import 'bullframe.css/dark';
@import 'bullframe.css/classless';
@import 'bullframe.css/modern';
@import 'bullframe.css/utilities';
```

```javascript
import 'bullframe.css';
import 'bullframe.css/classless';
```

## Download

Self-host from the [latest v6 archive](https://github.com/marcop135/bullframe.css/archive/refs/heads/v6.zip). Source maps ship beside the minified CSS in `dist/css/`.

## Starter HTML

### Class-based

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Bullframe CSS Starter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest/dist/css/bullframe.min.css" />
  </head>
  <body>
    <div class="bf-container">
      <h1>Hello, Bullframe CSS!</h1>
      <p>Class-based starter.</p>
    </div>
  </body>
</html>
```

### Classless

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Bullframe CSS Classless Starter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest/dist/css/bullframe-classless.min.css" />
    <style>
      body {
        margin-left: auto;
        margin-right: auto;
        padding: 1.5rem;
        max-width: 80rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Hello, Bullframe CSS!</h1>
      <p>Semantic HTML only; no utility classes.</p>
    </main>
  </body>
</html>
```

## Builds

Eight files share the same `--bf-*` tokens. Default build is about **8 KB gzipped**. No JavaScript runtime.

| File                                     | Mode                                |
| ---------------------------------------- | ----------------------------------- |
| `bullframe.css`                          | Class-based, light                  |
| `bullframe-dark.css`                     | Class-based, always dark            |
| `bullframe-system-default.css`           | Class-based, `prefers-color-scheme` |
| `bullframe-classless.css`                | Semantic HTML, light                |
| `bullframe-classless-dark.css`           | Classless, always dark              |
| `bullframe-classless-system-default.css` | Classless, `prefers-color-scheme`   |
| `bullframe-utilities.css`                | Utilities only                      |
| `bullframe-modern.css`                   | System-default plus modern CSS      |

Modern CSS (`light-dark()`, `oklch()`, `:has()`, container queries): [Theming](/theming#modern-css-variant). Upgrading from v5: [Migration](/migration).

## Next

- [CSS Variables](/variables)
- [Utilities](/utilities)
- [Demo](/demo/)
