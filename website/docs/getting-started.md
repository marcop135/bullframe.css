---
sidebar_position: 2
---

# Getting Started

Get up and running with Bullframe CSS in minutes.

## Installation

### CDN (Recommended for Quick Start)

Add Bullframe CSS to your HTML file using a CDN link:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6/dist/css/bullframe.min.css">
```

### npm

Install Bullframe CSS via npm:

```bash
npm install bullframe.css
```

Then import it in your project:

```css
@import 'bullframe.css/dist/css/bullframe.min.css';
```

Or in JavaScript:

```javascript
import 'bullframe.css/dist/css/bullframe.min.css';
```

### Download

[Download the latest release](https://github.com/marcop135/bullframe.css/archive/master.zip) and include the CSS file in your project.

## HTML Starter Template

Here's a basic HTML template to get you started:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Bullframe CSS Starter Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6/dist/css/bullframe.min.css">
  </head>
  <body>
    <div class="bf-container">
      <h1>Hello, Bullframe CSS!</h1>
      <p>This is a starter template using Bullframe CSS.</p>
    </div>
  </body>
</html>
```

## Classless Starter Template

Bullframe CSS also works great without utility classes. Just use semantic HTML:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Bullframe CSS Classless Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@6/dist/css/bullframe-classless.min.css">
    
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
      <p>This template uses semantic HTML without utility classes.</p>
    </main>
  </body>
</html>
```

## Theme Variants

Bullframe CSS comes in multiple variants:

- **`bullframe.css`** - Light theme (default)
- **`bullframe-dark.css`** - Dark theme
- **`bullframe-system-default.css`** - Theme based on user system preference

See the [Theming](/docs/theming) section for more details.

## Next Steps

- Learn about [CSS Variables](/docs/variables)
- Explore [Utilities](/docs/utilities)
- Check out the [Demo](https://bullframecss.marcopontili.com)
