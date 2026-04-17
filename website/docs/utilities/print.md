---
sidebar_position: 8
title: Print
---

# Print Styles

Bullframe includes built-in print styles based on [HTML5 Boilerplate](https://github.com/h5bp/main.css). These are applied automatically via `@media print` — no extra classes needed.

## What the Print Styles Do

- Forces black text on white background for readability
- Removes box shadows and text shadows
- Underlines all links and appends the URL after link text
- Prevents page breaks inside tables, images, and paragraphs
- Expands `.bf-container` to a minimum width of 992px
- Makes responsive tables scrollable and auto-width

## Included Automatically

Print styles are bundled into all main Bullframe builds (`bullframe.css`, `bullframe-dark.css`, etc.). No additional stylesheet or class is required.

## How It Works

```css
@media print {
  /* Forces readable black-on-white output */
  * {
    background: #fff !important;
    color: #000 !important;
    box-shadow: none !important;
  }

  /* Shows link URLs in parentheses */
  a[href]::after {
    content: " (" attr(href) ")";
  }

  /* Prevents awkward page breaks */
  tr, img {
    page-break-inside: avoid;
  }
}
```

## Tips

- Test print output with your browser's Print Preview (Ctrl+P / Cmd+P)
- Use semantic HTML for the best print results
- Avoid relying on background colors for conveying information
