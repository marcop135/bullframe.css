# Getting started

Pick a markup mode and a theme, link one stylesheet, and write HTML. The default build is about 8 KB gzipped and needs no JavaScript.

## Choose a markup mode

Both modes ship the same element styles, including focus rings, ARIA attribute styling and contrast preferences.

**Class-based** adds `.bf-*` classes for layout, buttons, forms, skip links and other helpers.

```html
<link rel="stylesheet" href="…/bullframe.min.css" />

<div class="bf-container">
  <h1 class="bf-t-center">Hello</h1>
  <button class="bf-btn bf-btn--primary">Go</button>
</div>
```

**Classless** styles elements only. The stylesheet has no `.bf-*` classes.

```html
<link rel="stylesheet" href="…/bullframe-classless.min.css" />

<h1>Hello</h1>
<p>Just semantic HTML.</p>
<form>…</form>
```

## Choose a build

Each markup mode comes in light, always-dark (`-dark`) and system (`-system-default`, follows `prefers-color-scheme`) builds. Every file has a `.min.css` twin and a source map in `dist/css/`.

| File                                     | Use when                             |
| ---------------------------------------- | ------------------------------------ |
| `bullframe.css`                          | Class-based, light                   |
| `bullframe-dark.css`                     | Class-based, always dark             |
| `bullframe-system-default.css`           | Class-based, `prefers-color-scheme`  |
| `bullframe-classless.css`                | Classless, light (elements only)     |
| `bullframe-classless-dark.css`           | Classless, always dark               |
| `bullframe-classless-system-default.css` | Classless, `prefers-color-scheme`    |
| `bullframe-utilities.css`                | `.bf-*` helpers only, no base styles |

`bullframe-utilities.css` is not a markup mode. Use it on top of your own reset when you only need the helpers.

```html
<link rel="stylesheet" href="…/bullframe-utilities.min.css" />

<div class="bf-m-t-3 bf-t-center">
  <h1 class="bf-t-weight-700">Hello</h1>
</div>
```

## Load from a CDN

<!-- sri:cdn:start -->

Bullframe is on two CDNs: [jsDelivr](https://www.jsdelivr.com/package/npm/bullframe.css) and [cdnjs](https://cdnjs.com/libraries/bullframe.css). Both serve the same files from npm, so use either one with the same integrity hash.

**Recommended for production:** pin an exact version, point at a published `.min.css` file, and add Subresource Integrity plus `crossorigin`.

::: code-group

```html [jsDelivr]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe.min.css" integrity="sha384-2vhgKQiG2CRRhZdqNr6Co/Ht0Qw0xjmknOO3t4Y8spYV7BcN0tuC5CdWoAGLAl2r" crossorigin="anonymous" />
```

```html [cdnjs]
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bullframe.css/7.0.1/bullframe.min.css" integrity="sha384-2vhgKQiG2CRRhZdqNr6Co/Ht0Qw0xjmknOO3t4Y8spYV7BcN0tuC5CdWoAGLAl2r" crossorigin="anonymous" />
```

:::

**Quick drop-in:** no integrity hash. jsDelivr serves the latest release; cdnjs has no "latest" URL, so its link names a version.

::: code-group

```html [jsDelivr]
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css" />
```

```html [cdnjs]
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bullframe.css/7.0.1/bullframe.min.css" />
```

:::

Swap the filename for another build (`bullframe-classless.min.css`, `bullframe-dark.min.css`, …). Hashes for all seven builds: [sri.json](/sri.json).
<!-- sri:cdn:end -->

## Install with npm

```bash
npm install bullframe.css
```

Import one build by its subpath, from CSS or from a bundler entry such as a Vite or React `main.js`:

| Subpath                          | File                                              |
| -------------------------------- | ------------------------------------------------- |
| `bullframe.css`                  | `dist/css/bullframe.css`                          |
| `bullframe.css/dark`             | `dist/css/bullframe-dark.css`                     |
| `bullframe.css/system`           | `dist/css/bullframe-system-default.css`           |
| `bullframe.css/classless`        | `dist/css/bullframe-classless.css`                |
| `bullframe.css/classless/dark`   | `dist/css/bullframe-classless-dark.css`           |
| `bullframe.css/classless/system` | `dist/css/bullframe-classless-system-default.css` |
| `bullframe.css/utilities`        | `dist/css/bullframe-utilities.css`                |

```css
@import 'bullframe.css/system';
```

```javascript
import 'bullframe.css/system';
```

Load one base build per page. To add `.bf-*` helpers to a classless build, load `bullframe.css/utilities` after it:

```javascript
import 'bullframe.css/classless/system';
import 'bullframe.css/utilities';
```

## Self-host

Download the [v7.0.1 archive](https://github.com/marcop135/bullframe.css/archive/refs/tags/v7.0.1.zip) and serve the files in `dist/css/`.

## Starter HTML

### Class-based

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Bullframe CSS Starter</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe.min.css" integrity="sha384-2vhgKQiG2CRRhZdqNr6Co/Ht0Qw0xjmknOO3t4Y8spYV7BcN0tuC5CdWoAGLAl2r" crossorigin="anonymous" />
  </head>
  <body>
    <a class="bf-skip-link" href="#main">Skip to content</a>
    <main id="main" class="bf-container">
      <h1>Hello, Bullframe CSS!</h1>
      <p>Class-based starter.</p>
    </main>
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
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@7.0.1/dist/css/bullframe-classless.min.css" integrity="sha384-kTXTr8P+/5Nud69c7V43cZA/H+Eu/OBVbNyNg6Q/ExFeZezL8624NPL+QEqnEb+D" crossorigin="anonymous" />
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
    <main id="main">
      <h1>Hello, Bullframe CSS!</h1>
      <p>Semantic HTML only; no utility classes.</p>
    </main>
  </body>
</html>
```

## Next

- [CSS variables](/variables)
- [Utilities](/utilities)
- [Examples](/examples)
- [Kitchen sink](/kitchen-sink/)
- Upgrading: [v6 to v7](/migration-v7), or [v5 to v6](/migration) first from v5
