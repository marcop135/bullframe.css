---
sidebar_position: 11
title: Accessibility
---

# Accessibility

Bullframe CSS is built with accessibility in mind. The framework includes sensible defaults that help you build inclusive interfaces without extra effort.

## Color Contrast (WCAG AA)

All default colors meet **WCAG AA** contrast requirements (4.5:1 ratio for normal text):

- **Links**: `--bf-blue` on white background passes AA
- **Primary buttons**: white text on `--bf-blue` background passes AA
- **Form focus rings**: clearly visible on both light and dark backgrounds

To check your own color overrides, use the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Focus Indicators

Bullframe uses `:focus-visible` to show focus rings **only for keyboard navigation**, not mouse clicks:

```css
:focus-visible {
  outline: 0.2rem solid var(--bf-orange);
  outline-offset: 0.3rem;
}
```

This avoids visual clutter for mouse users while keeping the interface navigable for keyboard users.

## Screen Reader Utilities

Hide content visually while keeping it accessible to screen readers:

```html
<span class="bf-sr-only">This text is only visible to screen readers</span>

<!-- Also focusable (e.g., skip links) -->
<a class="bf-sr-only focusable" href="#main">Skip to main content</a>
```

## Reduced Motion

For users who prefer reduced motion, apply `.bf-reduced-motion` to the `<body>` or any container:

```html
<body class="bf-reduced-motion">
```

This disables animations and transitions when the user's system has `prefers-reduced-motion: reduce` enabled:

```css
@media (prefers-reduced-motion: reduce) {
  .bf-reduced-motion * {
    animation-duration: 1ms !important;
    transition-duration: 0s !important;
    scroll-behavior: auto !important;
  }
}
```

## ARIA Attribute Styling

Bullframe automatically styles elements based on ARIA attributes:

| Attribute | Effect |
|---|---|
| `aria-busy="true"` | Shows a `progress` cursor |
| `aria-disabled="true"` | Shows a `not-allowed` cursor |
| `aria-hidden="false"` + `[hidden]` | Visually hidden but accessible; removed from layout unless focused |

These styles use `:where()` for zero specificity, so they're easy to override.

## Semantic HTML

Bullframe's classless variants (`bullframe-classless.css`) style semantic HTML elements directly. This means you get accessible, well-styled pages just by writing proper HTML:

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Content here.</p>
  </article>
</main>
```

## Tips

- Always use semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<button>`, etc.)
- Use `<button>` for actions, `<a>` for navigation
- Provide `alt` text for images
- Test with keyboard navigation (Tab, Enter, Escape)
- Test with a screen reader (VoiceOver, NVDA, JAWS)
