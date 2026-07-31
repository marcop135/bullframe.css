# Getting started

Bullframe CSS is a lightweight CSS framework for fast, accessible UIs. Semantic by default. Any stack. Seven builds, zero runtime dependencies, about 8 KB gzipped for the default build. Pick a markup mode and a theme, then add one stylesheet.

## Choose a mode

Two markup modes. Same accessible defaults in both. Pick how you write HTML.

### Class-based

`bullframe.css` (+ dark / system-default). Grid, buttons, forms, tables via `.bf-*` classes.

```html
<link rel="stylesheet" href="…/bullframe.min.css" />

<div class="bf-container">
  <h1 class="bf-t-center">Hello</h1>
  <button class="bf-btn bf-btn--primary">Go</button>
</div>
```

### Classless

`bullframe-classless.css` (+ dark / system-default). Semantic HTML only; no classes to add.

```html
<link rel="stylesheet" href="…/bullframe-classless.min.css" />

<h1>Hello</h1>
<p>Just semantic HTML.</p>
<form>…</form>
```

## Choose a theme

Each markup mode ships in three themes:

| Theme | File suffix | Behavior |
| --- | --- | --- |
| Light | (none) | Always light |
| Dark | `-dark` | Always dark |
| System | `-system-default` | Follows `prefers-color-scheme` |

Examples: `bullframe-dark.css`, `bullframe-classless-system-default.css`.

## Utilities

`bullframe-utilities.css` is a companion build, not a markup mode. Use it when you already have a reset and only want `.bf-*` helpers.

```html
<link rel="stylesheet" href="…/bullframe-utilities.min.css" />

<div class="bf-m-t-3 bf-t-center">
  <h1 class="bf-t-weight-700">Hello</h1>
</div>
```

## CDN

<!-- sri:cdn:start -->
Quick drop-in (latest published package entry):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css" />
```

**Recommended for production:** pin an exact version, point at a published `.min.css` file, and add Subresource Integrity plus `crossorigin`. Package-root / unversioned CDN URLs are not SRI-safe.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe.min.css" integrity="sha384-AYv1LjHDO3SO85iGSHCj/uz2Bi5GlLhxRtYKo5/2xkhLOuZ/23bnFTvOIU1E+gqQ" crossorigin="anonymous" />
```

Swap the filename for another build (`bullframe-classless.min.css`, `bullframe-dark.min.css`, …). Hashes for all seven builds: [sri.json](/sri.json).
<!-- sri:cdn:end -->

## npm

Subpath exports for every variant:

```bash
npm install bullframe.css
```

```css
@import 'bullframe.css';
@import 'bullframe.css/dark';
@import 'bullframe.css/classless';
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe.min.css" integrity="sha384-AYv1LjHDO3SO85iGSHCj/uz2Bi5GlLhxRtYKo5/2xkhLOuZ/23bnFTvOIU1E+gqQ" crossorigin="anonymous" />
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6.0.0/dist/css/bullframe-classless.min.css" integrity="sha384-W/W4TaN5+g2R7qgAAGMwzkMErCnE26LTZ5dqmTYUREkRQ7i7JZRhIw99O26IfOG6" crossorigin="anonymous" />
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

Seven builds. Default build is about **8 KB gzipped**. No JavaScript runtime.

| File                                     | Use when                            |
| ---------------------------------------- | ----------------------------------- |
| `bullframe.css`                          | Class-based, light                  |
| `bullframe-dark.css`                     | Class-based, always dark            |
| `bullframe-system-default.css`           | Class-based, `prefers-color-scheme` |
| `bullframe-classless.css`                | Classless, light                    |
| `bullframe-classless-dark.css`           | Classless, always dark              |
| `bullframe-classless-system-default.css` | Classless, `prefers-color-scheme`   |
| `bullframe-utilities.css`                | Utilities companion only            |

Upgrading from v5: [Migration](/migration).

## Next

- [CSS Variables](/variables)
- [Utilities](/utilities)
- [Demo](/demo/)
