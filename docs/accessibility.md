---
title: Accessibility
---

# Accessibility

What Bullframe does for accessibility on each build, and the classes you add yourself. Every build ships WCAG AA contrast defaults, `:focus-visible` rings, preference queries, and ARIA attribute styling; class-based and utilities builds add screen-reader and opt-in helpers. References: [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and [MDN accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility).

## Color contrast

Default tokens meet WCAG AA (4.5:1 for normal text):

- Links: `--bf-color-primary` on white.
- Primary buttons: `--bf-color-on-primary` (white) on `--bf-color-primary`.
- Dark builds: the default text and link colors on `--bf-color-bg`.

Overrides are yours to check, for example with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

## Focus indicators

`:focus-visible` shows the ring for keyboard focus, not mouse clicks. The ring comes from tokens:

```css
:focus-visible {
  outline: var(--bf-focus-ring-width) solid var(--bf-color-focus-ring);
  outline-offset: var(--bf-focus-ring-offset);
}
```

Override `--bf-color-focus-ring`, `--bf-focus-ring-width`, and `--bf-focus-ring-offset` on `:root` for a custom ring.

## Contrast and color preferences

Every build responds to `prefers-contrast: more`: links are underlined, the focus ring turns a darker amber that meets WCAG 1.4.11 (3:1) on the light and dark `--bf-color-bg`, the ring grows thicker, and text fields and tables get a solid border. Under `forced-colors: active`, focus rings use the system `Highlight` color, text fields regain a focus outline, links are underlined, and buttons keep a `ButtonText` border.

## Screen reader utilities

Class-based and utilities builds only.

```html
<span class="bf-sr-only">This text is only visible to screen readers</span>

<!-- Preferred skip link (stays out of flow until focused) -->
<a class="bf-skip-link" href="#main">Skip to content</a>

<!-- Legacy pattern still works -->
<a class="bf-sr-only bf-focusable" href="#main">Skip to main content</a>
```

`.bf-skip-link` stays out of the layout when revealed; `.bf-sr-only.bf-focusable` returns to the flow and shifts content. `.focusable` is the legacy name for `.bf-focusable`. For a complete skip-link snippet, see [Navigation patterns: skip link](./components/navigation#skip-link).

## Reduced motion

Class-based and utilities builds. Add `.bf-reduced-motion` to `<body>` or a container:

```html
<body class="bf-reduced-motion"></body>
```

When the user has `prefers-reduced-motion: reduce`, animations and transitions inside that tree are cut to near zero. The dialog fade-in skips reduced-motion users on every build, without the class.

## Opt-in helpers

Class-based and utilities builds. Put these on `<html>` or a container when you need them:

| Class                                                      | Purpose                                                                                     |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `.bf-scheme-light` / `.bf-scheme-dark` / `.bf-scheme-auto` | Sets `color-scheme` so native widgets match the page                                        |
| `.bf-accent-native`                                        | Sets `accent-color` to `--bf-color-primary` on checkboxes, radios, range, and progress      |
| `.bf-target-size`                                          | Minimum 24×24px hit boxes (WCAG 2.5.8); inline links in `p` / `li` / `td` / `dd` are exempt |

## ARIA attribute styling

Every build styles elements based on ARIA attributes:

| Attribute                          | Effect                                                             |
| ---------------------------------- | ------------------------------------------------------------------ |
| `aria-busy="true"`                 | Shows a `progress` cursor                                          |
| `aria-disabled="true"`             | Shows a `not-allowed` cursor                                       |
| `aria-hidden="false"` + `[hidden]` | Visually hidden but accessible; removed from layout unless focused |

These rules use `:where()`, so any selector overrides them.

## Semantic HTML

Classless builds (`bullframe-classless*.css`) style elements only, so semantic markup gets the accessible base styling with no classes:

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

## Checklist

- Use `<button>` for actions and `<a>` for navigation.
- Give every meaningful image `alt` text; use `alt=""` for decorative ones.
- Test with the keyboard alone (`Tab`, `Enter`, `Esc`).
- Test with a screen reader such as VoiceOver, NVDA, or JAWS.
