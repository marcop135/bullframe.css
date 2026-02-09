---
sidebar_position: 4
---

# Typography

Bullframe CSS provides semantic typography styles for all HTML elements out of the box.

## Headings

All heading levels (`h1` through `h6`) are styled with appropriate font sizes and spacing:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Body Text

Body text uses the `--bf-body-font-size-rem` and `--bf-body-line-height` variables:

```html
<p>This is a paragraph of body text. It uses the default font size and line height.</p>
```

## Lead Paragraphs

Use the `.bf-lead` class for emphasized introductory text:

```html
<p class="bf-lead">This is a lead paragraph that stands out from regular body text.</p>
```

## Text Alignment

Use utility classes for text alignment:

```html
<p class="bf-t-center">Centered text</p>
<p class="bf-t-left">Left-aligned text</p>
<p class="bf-t-right">Right-aligned text</p>
```

## Text Transform

```html
<p class="bf-t-transform-uppercase">UPPERCASE TEXT</p>
<p class="bf-t-transform-lowercase">lowercase text</p>
<p class="bf-t-transform-capitalize">capitalized text</p>
```

## Blockquotes

```html
<blockquote>
  <p>This is a blockquote. It's styled to stand out from regular paragraphs.</p>
</blockquote>
```

## Code

Inline code uses `<code>`:

```html
<p>Use the <code>--bf-blue</code> variable for primary colors.</p>
```

Code blocks use `<pre><code>`:

```html
<pre><code>const example = 'code block';</code></pre>
```

## Lists

### Unordered Lists

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

### Ordered Lists

```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### Description Lists

```html
<dl>
  <dt>Term</dt>
  <dd>Description of the term</dd>
</dl>
```

## Responsive Typography

Add the `.bf-responsive-typography` class to the `<body>` tag for responsive font sizing:

```html
<body class="bf-responsive-typography">
  <!-- Your content -->
</body>
```
