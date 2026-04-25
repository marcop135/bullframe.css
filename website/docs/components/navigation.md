---
sidebar_position: 6
---

# Navigation Patterns

## Header nav

```html
<header style="border-bottom: 1px solid var(--bf-gray-light);">
  <nav class="bf-container" style="display: flex; align-items: center; gap: 2rem; padding-block: 1rem;">
    <a href="/" style="font-weight: 700; font-size: 1.25rem; text-decoration: none;">Bullframe</a>
    <ul class="bf-list-unstyled" style="display: flex; gap: 1.5rem; margin: 0;">
      <li><a href="/docs">Docs</a></li>
      <li><a href="/examples">Examples</a></li>
      <li><a href="/blog">Blog</a></li>
    </ul>
    <a class="bf-btn bf-btn--primary" href="/signup" style="margin-left: auto;">Sign up</a>
  </nav>
</header>
```

`margin-left: auto` pushes the signup button to the right edge — a flexbox idiom that beats `justify-content: space-between` when you have an asymmetric layout.

## Breadcrumb

```html
<nav aria-label="Breadcrumb">
  <ol class="bf-list-unstyled" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
    <li><a href="/">Home</a></li>
    <li aria-hidden="true">/</li>
    <li><a href="/docs">Docs</a></li>
    <li aria-hidden="true">/</li>
    <li aria-current="page">Components</li>
  </ol>
</nav>
```

`aria-current="page"` marks the current item without adding visual noise. The `aria-hidden="true"` on separators keeps screen readers from announcing slashes.

## Pagination

```html
<nav aria-label="Pagination">
  <ul class="bf-list-unstyled" style="display: flex; gap: 0.5rem;">
    <li><a class="bf-btn" href="?page=1">&laquo; Prev</a></li>
    <li><a class="bf-btn" href="?page=1">1</a></li>
    <li><a class="bf-btn bf-btn--primary" href="?page=2" aria-current="page">2</a></li>
    <li><a class="bf-btn" href="?page=3">3</a></li>
    <li><a class="bf-btn" href="?page=3">Next &raquo;</a></li>
  </ul>
</nav>
```

## Skip link

The first focusable element on the page. Hidden by default; visible when keyboard-focused. Sends keyboard users past the nav to the main content.

```html
<a class="bf-sr-only focusable" href="#main">Skip to content</a>
<!-- ...header, nav... -->
<main id="main" tabindex="-1">
  <!-- content -->
</main>
```

`tabindex="-1"` on `<main>` makes it focusable when the skip link activates. Without it, the browser jumps to the anchor visually but doesn't move focus.

## Sidebar nav

Collapsible on mobile via the native `<details>` element — no JavaScript.

```html
<aside>
  <details open>
    <summary><strong>Sections</strong></summary>
    <ul class="bf-list-unstyled">
      <li><a href="#intro">Introduction</a></li>
      <li><a href="#install">Installation</a></li>
      <li><a href="#use">Usage</a></li>
    </ul>
  </details>
</aside>
```

`<details open>` keeps it expanded by default on desktop; users can toggle on smaller screens.

## Tab-style nav (using radio inputs, no JS)

```html
<div role="tablist">
  <input type="radio" name="tabs" id="tab-1" checked>
  <label for="tab-1" class="bf-btn" role="tab">Tab 1</label>

  <input type="radio" name="tabs" id="tab-2">
  <label for="tab-2" class="bf-btn" role="tab">Tab 2</label>
</div>
```

For full tab semantics (panels, keyboard arrow-key navigation), reach for a small JS component. The radio-input trick covers ~80% of cases.
