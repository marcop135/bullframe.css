/**
 * Output matrix for `npm run brand:images`.
 *
 * Every generated brand image is listed here exactly once, with the path that
 * ships it. Nothing under this directory is published to npm (package.json
 * `files` is `dist/css/` only). These assets serve GitHub and the docs site.
 *
 * Consumers:
 *   - README.md            → src/docs/github-readme/bf-readme-hero-*-16x9.png
 *   - docs/index.md        → /bullframe-hero.png  (via VitePress home hero)
 *   - BFLayout.vue         → /bullframe-hero-dark.png  (appearance swap)
 *   - .vitepress/config.mjs → /og-image.jpg  (og:image + twitter:image)
 */

export const TARGETS = [
  {
    file: 'src/docs/github-readme/bf-readme-hero-light-16x9.png',
    width: 1280,
    height: 720,
    theme: 'light',
    layout: 'wide',
  },
  {
    file: 'src/docs/github-readme/bf-readme-hero-dark-16x9.png',
    width: 1280,
    height: 720,
    theme: 'dark',
    layout: 'wide',
  },
  {
    // Site heroes render with no fill at all: the docs page shows through in
    // both themes, so the art never carries a backdrop that misses VitePress's.
    file: 'docs/public/bullframe-hero.png',
    width: 1024,
    height: 1024,
    theme: 'light',
    layout: 'square',
    transparent: true,
  },
  {
    file: 'docs/public/bullframe-hero-dark.png',
    width: 1024,
    height: 1024,
    theme: 'dark',
    layout: 'square',
    transparent: true,
  },
  {
    // og:image / twitter:image. JPEG because the meta tags declare image/jpeg.
    file: 'docs/public/og-image.jpg',
    width: 1200,
    height: 630,
    theme: 'light',
    layout: 'wide',
    jpegQuality: 92,
  },
  {
    // GitHub repo social preview (Settings → Social preview). GitHub asks for
    // at least 640×320 and renders 1280×640 best; upload this file by hand.
    file: 'src/docs/github-readme/bf-social-preview-1280x640.png',
    width: 1280,
    height: 640,
    theme: 'light',
    layout: 'wide',
  },
];
