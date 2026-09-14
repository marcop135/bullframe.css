/**
 * Scene builder for the generated brand images.
 *
 * Returns a standalone HTML document that Chromium screenshots 1:1; the output
 * PNG/JPEG is never resampled, which is what keeps the label type crisp. Every
 * coordinate is computed in whole pixels for the same reason: a box or a label
 * parked on a half pixel is the difference between a hairline and a smear.
 *
 * Two layouts share one geometry model:
 *   - `wide`   copy column on the left, artwork on the right (README 16:9, OG)
 *   - `square` artwork only (site hero: VitePress renders the copy beside it)
 *
 * The artwork is three concentric frames labelled BODY / MAIN / ARTICLE with a
 * browser mock nested inside, i.e. the document outline the framework styles.
 * Each label cuts a real gap in its frame border (see the mask script at the
 * foot of the document) rather than sitting on a line that runs through it.
 */

import { COPY, FONT_MONO, FONT_SANS, FRAME_LABELS, themeTokens } from './tokens.mjs';

/** Concentric-inset step between BODY → MAIN → ARTICLE → browser mock. */
const FRAME_STEP_RATIO = 0.062;

/** Native pixel height of mascot-bull-ok.png. Never scale it past this. */
const MASCOT_HEIGHT = 454;

/**
 * Artwork box and the derived frame/window rectangles, in canvas pixels.
 * The browser mock sits one full step inside the innermost (ARTICLE) frame, so
 * all three frames close on every side; nothing is clipped by the mock.
 */
function geometry({ width, height, layout }) {
  let box;

  if (layout === 'square') {
    const inset = Math.round(width * 0.0625);
    box = { x: inset, y: inset, w: width - inset * 2, h: height - inset * 2 };
  } else {
    const padY = Math.round(height * 0.097);
    const padR = Math.round(width * 0.0625);
    const h = height - padY * 2;
    const w = Math.round(h * 0.97);
    box = { x: width - padR - w, y: padY, w, h };
  }

  const step = Math.round(box.w * FRAME_STEP_RATIO);
  const frames = FRAME_LABELS.map((label, i) => ({
    label,
    x: box.x + step * i,
    y: box.y + step * i,
    w: box.w - step * i * 2,
    h: box.h - step * i * 2,
  }));

  const mock = {
    x: box.x + step * 3,
    y: box.y + step * 3,
    w: box.w - step * 6,
    h: box.h - step * 6,
  };
  // Title bar scales with the mock but stays in a sane band at every output size.
  mock.bar = Math.min(52, Math.max(38, Math.round(mock.w * 0.105)));
  mock.view = mock.h - mock.bar;
  // Leave headroom above the horns, and never upscale past the mascot's native
  // height: enlarging a raster is exactly the softness we are removing.
  mock.mascot = Math.min(MASCOT_HEIGHT, mock.view - Math.round(mock.view * 0.06));

  return { box, step, frames, mock };
}

/**
 * One labelled frame. `i === 0` (BODY) is dashed: the outer edge of the page.
 *
 * The label does not paint a background to hide the border behind it, and that
 * only works on an opaque canvas, and the site hero renders transparent. The
 * inline script below masks the gap out of the frame instead, measured from the
 * laid-out label, so the border is genuinely absent under the text.
 */
function frameHtml(frame, i) {
  const dashed = i === 0;
  const labelTop = frame.y - 9;
  const labelLeft = frame.x + 20;

  return `
    <div
      class="frame${dashed ? ' frame--dashed' : ''}"
      data-frame="${i}"
      style="left:${frame.x}px;top:${frame.y}px;width:${frame.w}px;height:${frame.h}px"
    ></div>
    <span class="frame-label" data-frame-label="${i}" style="left:${labelLeft}px;top:${labelTop}px">${escapeHtml(frame.label)}</span>`;
}

/**
 * Browser mock: chrome bar, light viewport, skeleton page content on the left
 * and the mascot anchored bottom-right. The skeleton bars are what make the
 * viewport read as a rendered page rather than an empty white rectangle.
 */
function mockHtml(mock, mascotDataUri) {
  return `
    <div class="mock" style="left:${mock.x}px;top:${mock.y}px;width:${mock.w}px;height:${mock.h}px">
      <div class="mock-bar" style="height:${mock.bar}px">
        <i></i><i></i><i></i>
      </div>
      <div
        class="mock-view"
        style="height:${mock.view}px;background-image:url('${mascotDataUri}');background-size:auto ${mock.mascot}px"
      >
        <div class="skeleton">
          <span class="skeleton-title"></span>
          <span class="skeleton-line"></span>
          <span class="skeleton-line skeleton-line--short"></span>
        </div>
      </div>
    </div>`;
}

/**
 * Left-hand copy column. Wide layouts only.
 *
 * `top` is derived from the measured block height rather than a flex centre:
 * flex would land the text on a half pixel at some output sizes and soften it.
 */
function copyHtml({ width, height, box, type }) {
  const left = Math.round(width * 0.0656);
  const maxWidth = box.x - left - Math.round(width * 0.031);
  const blockHeight = Math.round(Math.max(type.title, type.mark) + 26 + type.slogan * 1.25);
  const top = Math.round((height - blockHeight) / 2);

  return `
    <div class="copy" style="left:${left}px;top:${top}px;width:${maxWidth}px">
      <div class="wordmark">${logoSvg(type.mark)}<h1>${escapeHtml(COPY.name)}</h1></div>
      <p class="slogan">${escapeHtml(COPY.slogan)}</p>
    </div>`;
}

/**
 * Horned-window mark from src/docs/brand/logo.svg, recoloured per theme.
 * Inlined rather than linked so the renderer needs no asset resolution.
 */
function logoSvg(size) {
  return `<svg class="mark" width="${size}" height="${size}" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <g transform="translate(16 16) scale(0.99 1.06) translate(-16 -13.0)">
      <path class="mark-fg" fill-rule="evenodd" d="M6.2 10.2 H25.8 A1.3 1.3 0 0 1 27.1 11.5 V22.8 A1.3 1.3 0 0 1 25.8 24.1 H6.2 A1.3 1.3 0 0 1 4.9 22.8 V11.5 A1.3 1.3 0 0 1 6.2 10.2 Z M7.8 13.6 V21.6 H24.2 V13.6 Z"/>
      <rect class="mark-fg" x="7.8" y="10.2" width="16.4" height="3.4"/>
      <circle class="mark-bg" cx="9.4" cy="11.9" r="0.65"/>
      <circle class="mark-bg" cx="11.5" cy="11.9" r="0.65"/>
      <circle class="mark-bg" cx="13.6" cy="11.9" r="0.65"/>
      <path class="mark-fg" d="M5.5 15.5 C1.2 14.0 -0.2 8.5 1.4 4.2 L2.0 2.0 L3.6 3.6 C2.6 5.2 2.4 7.5 3.4 9.5 C4.4 11.8 5.2 13.5 6.8 14.6 L8.2 15.4 L7.2 16.0 L5.5 15.5 Z"/>
      <path class="mark-fg" d="M26.5 15.5 C30.8 14.0 32.2 8.5 30.6 4.2 L30.0 2.0 L28.4 3.6 C29.4 5.2 29.6 7.5 28.6 9.5 C27.6 11.8 26.8 13.5 25.2 14.6 L23.8 15.4 L24.8 16.0 L26.5 15.5 Z"/>
    </g>
  </svg>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * @param {object} options
 * @param {number} options.width          Output width in CSS px (== output px).
 * @param {number} options.height         Output height in CSS px.
 * @param {'light'|'dark'} options.theme
 * @param {'wide'|'square'} options.layout
 * @param {string} options.mascotDataUri  `data:image/png;base64,…` for the mascot.
 * @param {boolean} [options.transparent] Drop the page fill and the accent wash
 *   so the art sits directly on whatever renders it. Used by the docs-site hero,
 *   which then needs no theme-matched backdrop. PNG only, since JPEG has no alpha.
 * @returns {string} A complete HTML document sized exactly to the output.
 */
export function buildScene({ width, height, theme, layout, mascotDataUri, transparent = false }) {
  const t = themeTokens(theme);
  const { box, frames, mock } = geometry({ width, height, layout });
  const wide = layout === 'wide';

  const type = {
    title: Math.round(height * 0.083),
    slogan: Math.round(height * 0.047),
    mark: Math.round(height * 0.092),
  };

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(COPY.name)}</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html, body {
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
    background: ${transparent ? 'transparent' : t.bg};
    font-family: ${FONT_SANS};
    /* Grayscale AA only: subpixel AA fringes on a PNG that is later shown on
       an unknown background (GitHub light/dark, social cards). */
    -webkit-font-smoothing: antialiased;
    text-rendering: geometricPrecision;
  }

  .stage { position: relative; width: ${width}px; height: ${height}px; }

  /* Soft accent wash behind the artwork; never crosses the copy column. */
  .glow {
    position: absolute;
    left: ${box.x - Math.round(box.w * 0.18)}px;
    top: ${box.y - Math.round(box.h * 0.18)}px;
    width: ${Math.round(box.w * 1.36)}px;
    height: ${Math.round(box.h * 1.36)}px;
    background: radial-gradient(circle at 50% 45%, ${t.glow} 0%, transparent 68%);
  }

  /* ---- nested document frames --------------------------------------- */
  .frame {
    position: absolute;
    border: 1.5px solid ${t.frame};
    border-radius: 18px;
  }
  .frame--dashed {
    border-style: dashed;
    border-color: ${t.frameSoft};
  }
  .frame-label {
    position: absolute;
    height: 18px;
    line-height: 18px;
    padding: 0 9px;
    color: ${t.accent};
    font-family: ${FONT_MONO};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  /* ---- browser mock --------------------------------------------------- */
  .mock {
    position: absolute;
    overflow: hidden;
    border-radius: 14px;
    background: ${t.chrome};
    box-shadow: ${t.shadow};
  }
  .mock-bar {
    display: flex;
    align-items: center;
    gap: 9px;
    padding-left: 18px;
    border-bottom: 1px solid ${t.chromeEdge};
  }
  .mock-bar i {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: ${t.accent};
  }
  .mock-bar i:nth-child(2) { opacity: 0.72; }
  .mock-bar i:nth-child(3) { opacity: 0.48; }
  .mock-view {
    position: relative;
    background-color: ${t.viewport};
    /* Mascot is drawn flush to its own right/bottom edge: anchor it there and
       scale by height only, so it never stretches. Height comes from geometry()
       and is capped at the source's native 454px: no upscaling, no softness. */
    background-repeat: no-repeat;
    background-position: right bottom;
  }

  /* Skeleton page content: a heading rule and two text lines, so the mock
     frames a page instead of an empty white box. Neutral greys, because the
     viewport is light in both themes. */
  .skeleton {
    position: absolute;
    left: ${Math.round(mock.w * 0.075)}px;
    top: ${Math.round(mock.view * 0.115)}px;
    width: ${Math.round(mock.w * 0.42)}px;
  }
  .skeleton span { display: block; border-radius: 6px; }
  .skeleton-title {
    height: 13px;
    width: 82%;
    background: ${t.accent};
    opacity: 0.85;
  }
  .skeleton-line {
    height: 9px;
    width: 100%;
    margin-top: 16px;
    background: #d9dfe7;
  }
  .skeleton-line--short { width: 68%; margin-top: 11px; }

  /* ---- copy column ---------------------------------------------------- */
  .copy { position: absolute; }
  .wordmark { display: flex; align-items: center; gap: 18px; }
  .mark-fg { fill: ${t.accent}; }
  .mark-bg { fill: ${t.bg}; }
  .copy h1 {
    color: ${t.text};
    font-size: ${type.title}px;
    font-weight: 700;
    letter-spacing: -0.022em;
    line-height: 1;
  }
  .slogan {
    margin-top: 26px;
    color: ${t.muted};
    font-size: ${type.slogan}px;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.01em;
  }
</style>
</head>
<body>
  <div class="stage">
    ${transparent ? '' : '<div class="glow"></div>'}
    ${frames.map(frameHtml).join('')}
    ${mockHtml(mock, mascotDataUri)}
    ${wide ? copyHtml({ width, height, box, type }) : ''}
  </div>
<script>
  // Punch the label gap out of each frame border with a composited mask, so the
  // cut is real rather than a painted-over strip. Measured after fonts settle:
  // the label's width depends on the resolved face, not on an estimate.
  document.fonts.ready.then(() => {
    for (const frame of document.querySelectorAll('[data-frame]')) {
      const label = document.querySelector(
        '[data-frame-label="' + frame.dataset.frame + '"]'
      );
      const f = frame.getBoundingClientRect();
      const l = label.getBoundingClientRect();
      const x = Math.round(l.left - f.left);
      const y = Math.round(l.top - f.top);
      const w = Math.ceil(l.width);
      const h = Math.ceil(l.height);

      frame.style.maskImage = 'linear-gradient(#000 0 0), linear-gradient(#000 0 0)';
      frame.style.maskPosition = '0 0, ' + x + 'px ' + y + 'px';
      frame.style.maskSize = '100% 100%, ' + w + 'px ' + h + 'px';
      frame.style.maskRepeat = 'no-repeat, no-repeat';
      frame.style.maskComposite = 'exclude';
    }
    window.__bfSceneReady = true;
  });
</script>
</body>
</html>`;
}
