# Brand images

Source of truth for every generated Bullframe image: the GitHub README heroes,
the docs-site hero, the Open Graph card, and the GitHub social preview.

```bash
npm run brand:images          # write all targets
npm run brand:images:check    # fail if a committed target is out of date
npm run brand:images -- --only readme|hero|og
```

## How it works

`scene.mjs` builds one standalone HTML document sized to the exact output.
Chromium screenshots it at `deviceScaleFactor: 1` and the bytes go straight to
disk; nothing is resampled, recoloured or cropped afterwards. That is the whole
point: the previous heroes were post-processed rasters, which is where the soft
type, the stray dashes and the blue fringe on the mascot came from.

| File | Role |
| ---------------- | ------------------------------------------------------ |
| `tokens.mjs` | Palette mirrored from `src/css/variables.css`, per-theme surfaces, copy |
| `scene.mjs` | Geometry + HTML/CSS for the `wide` and `square` layouts |
| `targets.mjs` | Output matrix: path, size, theme, layout |
| `mascot-bull-ok.png` | The only raster input. Alpha-cut, placed, never recoloured |

Outputs are listed in `targets.mjs` and land in `src/docs/github-readme/` and
`docs/public/`. Nothing here ships to npm: `package.json` `files` is
`dist/css/` only.

`bf-social-preview-1280x640.png` is the one output nothing links to: GitHub
takes it through **Settings → Social preview**, so it has to be uploaded by
hand after a regeneration.

## Conventions

- **Whole pixels.** Every coordinate is rounded. A box or a label on a half
  pixel is the difference between a hairline and a smear.
- **No upscaling.** The mascot is capped at its native 454 px height.
- **Light viewport in both themes.** The browser mock frames a _page_, so the
  orange mascot always sits on the ground it was drawn for and its cutout never
  shows a fringe.
- **Labels punch the border.** `BODY` / `MAIN` / `ARTICLE` cut a real gap out of
  the frame with a composited mask, measured from the laid-out label once fonts
  settle. Painting a background strip behind them would look the same on an
  opaque canvas and break on the transparent site hero.
- **Transparency is per target.** `transparent: true` drops the page fill and
  the accent wash; it is PNG-only, and the generator refuses it alongside
  `jpegQuality`.

## Changing the artwork

Edit `tokens.mjs` (colour, copy) or `scene.mjs` (geometry, layout), re-run
`npm run brand:images`, and commit the regenerated files together with the
source change. Accent changes must also land in `src/css/variables.css`.
