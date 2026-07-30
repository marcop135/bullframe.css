# Browser Support

Bullframe CSS supports all modern browsers. The exact browser support is defined in `.browserslistrc`.

## Supported Browsers

Bullframe CSS is tested and works in:

- **Chrome** (last 2 versions)
- **Firefox** (last 2 versions)
- **Safari** (last 2 versions)
- **Edge** (last 2 versions)
- **Opera** (last 2 versions)

## Mobile Browsers

- **iOS Safari** (last 2 versions)
- **Chrome Mobile** (last 2 versions)

## CSS features used

Core builds use:

- CSS custom properties
- Flexbox and CSS Grid
- `prefers-color-scheme`
- Modern `rgb()` color syntax

### Modern build

`bullframe-modern.css` is opt-in. It expects recent browsers (roughly 2024+) for:

- `light-dark()`
- `color-mix()` / `oklch()`
- `:has()` (form validation hint)
- Container queries (`.bf-cq-*`)

If you need the core seven builds' older baseline, keep using those files. Details: [Theming → Modern CSS variant](/theming#modern-css-variant).

## PostCSS processing

Bullframe CSS uses PostCSS with Autoprefixer to ensure compatibility with older browsers. Vendor prefixes are automatically added where needed.

## Checking Browser Support

You can check the `.browserslistrc` file in the repository for the exact browser support configuration.
