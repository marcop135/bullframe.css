---
sidebar_position: 2
---

# Customization

Customize Bullframe CSS by overriding CSS variables or rebuilding the framework.

## Overriding CSS Variables

The easiest way to customize Bullframe CSS is to override CSS variables:

```css
:root {
  /* Override primary color */
  --bf-blue: rgb(100 200 255);
  
  /* Override spacing */
  --bf-spacing-lg: 1.5rem;
  
  /* Override typography */
  --bf-body-font-size-rem: 1.8rem;
}
```

## Scoped Customization

You can also scope variables to specific components:

```css
.my-component {
  --bf-blue: rgb(255 0 0);
  /* This component will use red instead of blue */
}
```

## Rebuilding from Source

For more advanced customization, you can rebuild Bullframe CSS from source:

1. Clone the repository:
```bash
git clone https://github.com/marcop135/bullframe.css.git
cd bullframe.css
```

2. Install dependencies:
```bash
npm install
```

3. Modify variables in `src/css/variables.css`

4. Build:
```bash
npm run build
```

The built files will be in the `dist/css/` directory.

## Custom Builds

You can create custom builds by:

1. Modifying `src/css/variables.css`
2. Adding custom CSS files
3. Importing them in `src/css/bullframe.css`
4. Running `npm run build`
