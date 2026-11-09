# Typography

Every build styles headings, body text, blockquotes, code and lists from plain HTML. Class-based and utilities builds add the classes on this page; alignment, weight, transform and truncation classes are in [Text utilities](/utilities/text).

## Headings

`h1` to `h6` get weight 600, line height 1.25 and balanced wrapping where `text-wrap: balance` is supported. Sizes: `h1` 3.6rem, `h2` 3rem, `h3` 2.4rem, `h4` 2rem, `h5` and `h6` 1.6rem.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

To give another element a heading size, use `.bf-h1` to `.bf-h6`:

```html
<p class="bf-h2">Styled like an h2</p>
```

## Body text

Body text reads `--bf-body-font-size-rem` and `--bf-body-line-height`; see [CSS variables](/variables#typography-tokens).

```html
<p>A paragraph at the default size and line height.</p>
```

## Lead paragraph

`.bf-lead` on a `p` sets the font size to 120%:

```html
<p class="bf-lead">A lead paragraph that stands out from body text.</p>
```

## Responsive font size

`.bf-responsive-typography` on `body` scales the base size with `clamp(1.5rem, 2vw, 1.8rem)`:

```html
<body class="bf-responsive-typography">
  <!-- Your content -->
</body>
```

## Blockquotes

A `small` inside a `blockquote` renders as a muted attribution line.

```html
<blockquote>
  <p>A quoted passage.</p>
  <small>Author name</small>
</blockquote>
```

## Code

Inline code uses `code`; blocks use `pre code`:

```html
<p>Set <code>--bf-color-primary</code> to change the brand colour.</p>
<pre><code>const example = 'code block';</code></pre>
```

## Lists

`ul`, `ol` and `dl` are styled without classes. `dt` is bold. To remove bullets and indentation, see [List utilities](/utilities/lists).

```html
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>

<dl>
  <dt>Term</dt>
  <dd>Description of the term</dd>
</dl>
```
