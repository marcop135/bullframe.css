---
title: Accessibility
---

# Accessibility

Bullframe ships WCAG AA contrast defaults (4.5:1 for normal text), visible `:focus-visible` rings, and ARIA attribute styling on every build. Class-based and utilities builds also include screen-reader and opt-in helpers. Guidance follows [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and common [MDN accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility) patterns.

## Color Contrast (WCAG AA)

Default tokens meet **WCAG AA** contrast (4.5:1 for normal text) on light and dark surfaces:

- **Links**: `--bf-blue` on white passes AA
- **Primary buttons**: white text on `--bf-blue` passes AA
- **Dark builds**: default foreground/background pairs meet AA
- **Form focus rings**: visible on light and dark backgrounds

To check your own color overrides, use the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Focus Indicators

Bullframe uses `:focus-visible` to show focus rings **only for keyboard navigation**, not mouse clicks. Ring appearance comes from tokens:

```css
:focus-visible {
  outline: var(--bf-focus-ring-width) solid var(--bf-focus-ring-color);
  outline-offset: var(--bf-focus-ring-offset);
}
```

Defaults match the previous orange ring. Under `prefers-contrast: more`, `--bf-focus-ring-color` rises to a darker amber so the ring meets WCAG 1.4.11 (3:1) on white, `--bf-light`, and `--bf-dark-bg`. Override the tokens on `:root` if you need a custom ring.

## Screen Reader Utilities

Class-based and utilities builds only. Classless ships element styles and has no `.bf-*` classes.

```html
<span class="bf-sr-only">This text is only visible to screen readers</span>

<!-- Preferred skip link (stays out of flow until focused) -->
<a class="bf-skip-link" href="#main">Skip to content</a>

<!-- Legacy pattern still works -->
<a class="bf-sr-only bf-focusable" href="#main">Skip to main content</a>
```

`.bf-focusable` is the prefixed alias for the older `.focusable` class; both work with `.bf-sr-only`.

## Reduced Motion

Class-based and utilities builds. Apply `.bf-reduced-motion` to `<body>` or a container:

```html
<body class="bf-reduced-motion"></body>
```

When the user has `prefers-reduced-motion: reduce`, animations and transitions inside that tree are effectively disabled. Dialog enter transitions also respect reduced motion on every build without a class.

## Opt-in Helpers

Class-based and utilities builds. Put these on `<html>` or a container when you need them:

| Class                                                      | Purpose                                                                                     |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `.bf-scheme-light` / `.bf-scheme-dark` / `.bf-scheme-auto` | Sets `color-scheme` so native widgets match the page                                        |
| `.bf-accent-native`                                        | Sets `accent-color` to `--bf-blue` on checkboxes, radios, range, and progress               |
| `.bf-target-size`                                          | Minimum 24×24px hit boxes (WCAG 2.5.8); inline links in `p` / `li` / `td` / `dd` are exempt |

## ARIA Attribute Styling

Every build styles elements based on ARIA attributes:

| Attribute                          | Effect                                                             |
| ---------------------------------- | ------------------------------------------------------------------ |
| `aria-busy="true"`                 | Shows a `progress` cursor                                          |
| `aria-disabled="true"`             | Shows a `not-allowed` cursor                                       |
| `aria-hidden="false"` + `[hidden]` | Visually hidden but accessible; removed from layout unless focused |

These styles use `:where()` for zero specificity, so they're easy to override.

## Semantic HTML

Classless builds (`bullframe-classless*.css`) style semantic HTML elements only. No `.bf-*` classes ship in those files. Write proper HTML and you get accessible base styling:

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

For skip links, screen-reader-only text, or the opt-in helpers above, use a class-based or utilities build.

## Tips

- Always use semantic HTML elements (`<nav>`, `<main>`, `<article>`, `<button>`, etc.)
- Use `<button>` for actions, `<a>` for navigation
- Provide `alt` text for images
- Test with keyboard navigation (Tab, Enter, Escape)
- Test with a screen reader (VoiceOver, NVDA, JAWS)
