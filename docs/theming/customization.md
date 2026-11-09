# Customization

Change Bullframe's colors, spacing, and type by overriding `--bf-*` tokens in your own stylesheet. Rebuild from source only when you need to change the framework rules themselves.

## Override tokens

Set tokens on `:root` in a stylesheet loaded after the Bullframe build. Defaults sit in `:where(:root)` at zero specificity, but dark builds set their dark values on `:root`, so load order decides between those and yours.

```css
:root {
  --bf-color-primary: rgb(100 200 255);
  --bf-spacing-lg: 1.5rem;
  --bf-body-font-size-rem: 1.8rem;
}
```

The root font size is `62.5%`, so `1.8rem` is about 18px. Every token and its default is listed in [CSS variables](/variables).

## Scope overrides to a component

Set tokens on any selector to change only that subtree:

```css
.my-component {
  --bf-color-primary: rgb(200 0 0);
}
```

## Rebuild from source

1. Clone the repository and install its dependencies:

   ```bash
   git clone https://github.com/marcop135/bullframe.css.git
   cd bullframe.css
   npm ci
   ```

2. Edit token defaults in `src/css/variables.css`, or add a partial under `src/css/` and `@import` it from the entry file you use, such as `src/css/bullframe.css`.

3. Build all seven files into `dist/css/`:

   ```bash
   npm run build
   ```
