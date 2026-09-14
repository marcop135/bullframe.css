/**
 * Brand-image design tokens.
 *
 * Mirrors the framework's own `--bf-*` tokens (src/css/variables.css) so the
 * README / site / OG artwork can never drift from the stylesheet it advertises.
 * Values are duplicated as plain hex because the renderer paints a standalone
 * HTML document, not a page that links a Bullframe build.
 *
 * Keep in sync with src/css/variables.css when the accent changes.
 */

/** Raw palette, straight from src/css/variables.css. */
export const BF = {
  blue: '#0056b3', // --bf-blue       (AA on white, links + primary buttons)
  blueDark: '#4da5ff', // --bf-dark-link  (dark-mode link colour)
  white: '#ffffff', // --bf-white
};

/**
 * Per-theme surface tokens.
 *
 * `viewport` is deliberately light in BOTH themes: the browser mock frames a
 * *page*, and a light page inside dark chrome keeps the orange mascot on the
 * ground it was drawn for. It also means the mascot cutout never shows a fringe.
 */
export function themeTokens(theme) {
  if (theme === 'dark') {
    return {
      bg: '#12161c',
      glow: 'rgba(77, 165, 255, 0.16)',
      text: '#f2f6fb',
      muted: '#94a3b5',
      accent: BF.blueDark,
      frame: 'rgba(77, 165, 255, 0.42)',
      frameSoft: 'rgba(77, 165, 255, 0.24)',
      chrome: '#1b222c',
      chromeEdge: 'rgba(255, 255, 255, 0.10)',
      viewport: '#f7f9fc',
      shadow: '0 24px 60px rgba(0, 0, 0, 0.45)',
    };
  }

  return {
    bg: '#f6f8fb',
    glow: 'rgba(0, 86, 179, 0.10)',
    text: '#111827',
    muted: '#5c6670',
    accent: BF.blue,
    frame: 'rgba(0, 86, 179, 0.38)',
    frameSoft: 'rgba(0, 86, 179, 0.20)',
    chrome: '#1f2733',
    chromeEdge: 'rgba(255, 255, 255, 0.08)',
    viewport: BF.white,
    shadow: '0 24px 60px rgba(15, 32, 56, 0.16)',
  };
}

/** Same stacks the framework ships, so the artwork matches rendered docs. */
export const FONT_SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif";
export const FONT_MONO =
  "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";

/** Marketing copy. Single source for every generated image. */
export const COPY = {
  name: 'Bullframe CSS',
  slogan: 'Semantic by default. Any stack.',
};

/** Labels on the nested frames, outermost first. */
export const FRAME_LABELS = ['body', 'main', 'article'];
