---
sidebar_position: 3
---

# CSS Variables

Bullframe CSS uses CSS custom properties (variables) for easy customization. All variables use the `--bf-*` prefix and are defined in `:root`.

## Color Variables

### Backgrounds, Texts, and Borders

```css
:root {
  --bf-white: rgb(255 255 255);
  --bf-light: rgb(240 240 240);
  --bf-gray-light-extra: rgb(233 233 233);
  --bf-gray-light: rgb(204 204 204);
  --bf-gray: rgb(153 153 153);
  --bf-gray-dark: rgb(102 102 102);
  --bf-gray-dark-extra: rgb(51 51 51);
  --bf-dark: rgb(34 34 34);
  --bf-dark-extra: rgb(17 17 17);
  --bf-black: rgb(0 0 0);
}
```

### Mark and Ins Elements

```css
:root {
  --bf-yellow-light: rgb(255 255 153);
  --bf-yellow: rgb(255 255 0);
  --bf-orange: rgb(255 165 0);
}
```

### Anchors and Accent Colors

```css
:root {
  --bf-blue: rgb(0 86 179); /* Darkened for WCAG AA contrast */
  --bf-blue-light: rgb(0 65 135);
  --bf-blue-light-extra: rgb(190 216 254);
}
```

### Invalid Forms

```css
:root {
  --bf-red: rgb(255 0 0);
}
```

## Spacing Variables

```css
:root {
  --bf-spacing-sm: 0.25rem;
  --bf-spacing-md: 0.5rem;
  --bf-spacing-lg: 1rem;
  --bf-spacing-xl: 2rem;
  --bf-spacing-xxl: 3rem;
  --bf-spacing-grid-gutter: 1.5rem;
}
```

## Typography Variables

```css
:root {
  --bf-font-sans-serif: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif, 
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --bf-font-serif: Georgia, Times, 'Times New Roman', serif;
  --bf-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 
    'Liberation Mono', 'Courier New', monospace;
  --bf-body-font-size-rem: 1.6rem;
  --bf-body-line-height: 1.5;
}
```

## Breakpoint Variables

```css
:root {
  --bf-breakpoint-xs: 0;
  --bf-breakpoint-sm: 576px;
  --bf-breakpoint-md: 768px;
  --bf-breakpoint-lg: 992px;
  --bf-breakpoint-xl: 1200px;
  --bf-breakpoint-xxl: 1400px;
}
```

## Customizing Variables

You can override any variable by redefining it in your CSS:

```css
:root {
  --bf-blue: rgb(100 200 255); /* Custom blue */
  --bf-spacing-lg: 1.5rem; /* Custom spacing */
}
```

Or scope variables to specific elements:

```css
.my-component {
  --bf-blue: rgb(255 0 0); /* Red for this component only */
}
```
