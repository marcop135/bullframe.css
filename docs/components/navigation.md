# Navigation patterns

Header, breadcrumb, pagination, skip link, and sidebar navigation from `.bf-*` classes and semantic HTML.

## Header nav

```html
<header style="border-bottom: 1px solid var(--bf-color-border);">
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

`margin-left: auto` pushes the signup button to the right edge.

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

`aria-current="page"` marks the current item; `aria-hidden="true"` keeps screen readers from announcing the separators.

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

Make `.bf-skip-link` the first focusable element on the page. It stays off-screen until keyboard focus reaches it, then appears at the top left without reflowing the page.

```html
<a class="bf-skip-link" href="#main">Skip to content</a>
<!-- ...header, nav... -->
<main id="main" tabindex="-1">
  <!-- content -->
</main>
```

`tabindex="-1"` on `<main>` lets it receive focus when the link activates. See [Accessibility: screen reader utilities](../accessibility#screen-reader-utilities) for the related classes.

## Sidebar nav

The native `<details>` element makes the list collapsible without JavaScript.

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

`open` renders the list expanded; users can collapse it.
