# Session Summary – Bullframe CSS v6

Brief summary of changes, open items, and next steps. Use this file to resume work next time.

---

## Completed (This Session)

### Core migration & build
- **Sass → native CSS**: Migrated from Sass/SCSS to native CSS with PostCSS
- **Version bump**: 6.0.0 in `package.json`, README, CHANGELOG
- **PostCSS**: `postcss-import`, `autoprefixer`, `cssnano` for processing
- **Variables**: All Sass variables replaced with CSS custom properties (`--bf-*`) in `src/css/variables.css` — one file to rule them all
- **Build**: Vite builds `.css` files from `src/css/`; `src/scss/` remains but is not used by the build

### Accessibility
- **WCAG AA contrast**: `--bf-blue` and `--bf-blue-light` darkened for 4.5:1 contrast (links, primary buttons) — [breaking change?] done
- **README**: Instructions for overriding colors if needed

### Dark mode
- **Dark utility variables**: `--bf-dark-bg`, `--bf-dark-link`, `--bf-dark-border-focus`, etc. in `variables.css` for dark mode
- **Dark utilities**: `utility-global-dark.css`, `utility-global-dark-prefers.css`, `utility-global-dark-classless.css` now use variables instead of hardcoded colors (no nested mixins — native CSS)

### Docs & website
- **Docusaurus**: `website/` setup with docs, sidebar, theming (#40)
- **Color mode**: `respectPrefersColorScheme: true` and client module for system preference
- **Brand color**: Orange `#f95c1f` across docs
- **Logo**: Navbar logo updated to brand orange
- **CTA contrast**: Hero buttons adjusted for contrast on orange gradient

### Landing & demo
- **Landing page**: `src/index.html` (Vite-style, #41)
- **Demo page**: Build selector dropdown to switch between Bullframe CSS builds
- **UA+**: `uaplus-enhancements.css` integrated with attribution ([uaplus.css](https://fokus.dev/tools/uaplus/))

### Social banner
- **Spec**: `SOCIAL_BANNER_SPEC.md` with design notes
- **HTML generator**: `src/docs/social-banner-generator.html` (1200×630, screenshot-ready)

### Other
- **Dependencies**: npm packages updated
- **README**: MD060 table fixes, accessibility section, Links section, CSS variable references
- **.gitignore**: Docusaurus outputs added

---

## Requested but Not Done

1. **Social banner image**: Spec and HTML exist; no final image created via Canva Dream Lab or Microsoft Designer. Option: screenshot `src/docs/social-banner-generator.html` at 1200×630.

2. **Legacy Sass removal**: `src/scss/` still present (59 files). Build uses `src/css/` only. Decide whether to delete `src/scss/` or keep for reference.

3. **Images/screenshots**: Come up with images/screenshots (see Bootstrap, Tailwind, Obtainium repo; can use gen. AI).

4. **More CodePen examples**: e.g. filters, typography, grid system.

5. **New logo**: Get from Noun Project ("bull" keyword).

6. **API reference MD file**: Add new MD file as API ref.

7. **Pre-built components**: Add buttons, modals, forms ALA CodePen collection to demo.

8. **font-smoothing**: Typography — review/add if needed.

9. **Update changelog**: Finalize Unreleased → 6.0.0.

10. **Update bullframecss.marcopontili.com**: Deploy latest v6.

11. **Promote v6**: Awesome repos, blogs, GH forums, etc.

12. **2x Vite starters**: Add/update Vite starter templates.

13. **GitHub/npm process**: Document process for public repos.

---

## Next Steps (Prioritized)

1. **Social banner** — Screenshot HTML or create in Canva/Microsoft Designer → `website/static/img/docusaurus-social-card.jpg`
2. **Legacy Sass** — Remove `src/scss/` or document as legacy
3. **Docs deployment** — Deploy `website/` (GitHub Pages, Netlify)
4. **Update bullframecss.marcopontili.com** — Deploy v6 demo/landing
5. **CHANGELOG** — Finalize Unreleased → 6.0.0, release date
6. **npm publish** — Publish v6.0.0 when ready
7. **Images/screenshots** — For README, docs (Bootstrap/Tailwind/Obtainium style)
8. **CodePen examples** — Filters, typography, grid system
9. **API ref MD** — Add API reference documentation
10. **Pre-built components** — Buttons, modals, forms on demo
11. **Promote v6** — Awesome lists, blogs, forums

---

## Links & Resources

| Resource | URL |
|----------|-----|
| GitHub | https://github.com/marcop135/bullframe.css |
| npm | https://www.npmjs.com/package/bullframe.css |
| npm-stat | https://npm-stat.com/charts.html?package=bullframe.css |
| JSDelivr CDN | https://cdn.jsdelivr.net/npm/bullframe.css |
| CodePen collection | https://codepen.io/collection/nxpjRe |
| Live demo | https://bullframecss.marcopontili.com |
| UA+ | https://fokus.dev/tools/uaplus/ |

---

## Key Paths

| Path | Purpose |
|------|---------|
| `src/css/` | Native CSS source (build input) |
| `src/scss/` | Legacy Sass (unused by build) |
| `dist/css/` | Built CSS output |
| `website/` | Docusaurus docs |
| `src/index.html` | Landing page |
| `src/docs/demo/index.html` | Demo page |
| `SOCIAL_BANNER_SPEC.md` | Social banner design spec |
| `src/docs/social-banner-generator.html` | HTML for screenshot |

---

## Commands

```bash
npm run build          # Build CSS + HTML
npm run dev            # Vite dev server (landing + demo)
npm run docs:dev       # Docusaurus dev server
npm run docs:build     # Build Docusaurus
npm run docs:serve     # Serve built docs
```
