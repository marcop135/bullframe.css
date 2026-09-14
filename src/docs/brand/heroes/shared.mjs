/** Shared tokens and logo geometry for hero SVG generation. */

export const BRAND = {
  blue: '#0056b3',
  blueDark: '#004187',
  blueDeep: '#00356d',
  blueLight: '#4da5ff',
  blueSoft: '#7eb8ff',
  ink: '#0b1220',
  inkSoft: '#1a2332',
  text: '#1a1a1a',
  muted: '#5c6670',
  paper: '#f6f8fb',
  paperWarm: '#eef2f7',
  white: '#ffffff',
};

export const VARIANTS = [
  { id: 'a', name: 'Grid', file: 'variant-a-grid.mjs' },
  { id: 'b', name: 'Semantic', file: 'variant-b-semantic.mjs' },
  { id: 'c', name: 'Glass', file: 'variant-c-glass.mjs' },
];

export function themeTokens(theme) {
  if (theme === 'dark') {
    return {
      bg: BRAND.ink,
      bgAlt: BRAND.inkSoft,
      text: '#f3f6fb',
      muted: '#9aa8b8',
      accent: BRAND.blueLight,
      accentSoft: 'rgba(77, 165, 255, 0.14)',
      logoPrimary: BRAND.blueLight,
      logoAccent: BRAND.ink,
      grid: 'rgba(77, 165, 255, 0.08)',
      card: 'rgba(255, 255, 255, 0.06)',
      cardBorder: 'rgba(255, 255, 255, 0.12)',
      shadow: 'rgba(0, 0, 0, 0.35)',
    };
  }
  return {
    bg: BRAND.paper,
    bgAlt: BRAND.paperWarm,
    text: BRAND.text,
    muted: BRAND.muted,
    accent: BRAND.blue,
    accentSoft: 'rgba(0, 86, 179, 0.08)',
    logoPrimary: BRAND.blue,
    logoAccent: BRAND.white,
    grid: 'rgba(0, 86, 179, 0.06)',
    card: '#ffffff',
    cardBorder: 'rgba(0, 86, 179, 0.12)',
    shadow: 'rgba(0, 86, 179, 0.12)',
  };
}

/** Horned window mark from logo.svg, centered on (0,0) in a 32×32 viewBox. */
export function logoMark(primary, accent) {
  return `<g transform="translate(16 16) scale(0.99 1.06) translate(-16 -13.0)">
    <path fill="${primary}" fill-rule="evenodd" d="M6.2 10.2 H25.8 A1.3 1.3 0 0 1 27.1 11.5 V22.8 A1.3 1.3 0 0 1 25.8 24.1 H6.2 A1.3 1.3 0 0 1 4.9 22.8 V11.5 A1.3 1.3 0 0 1 6.2 10.2 Z M7.8 13.6 V21.6 H24.2 V13.6 Z"/>
    <rect x="7.8" y="10.2" width="16.4" height="3.4" fill="${primary}"/>
    <circle cx="9.4" cy="11.9" r="0.65" fill="${accent}"/>
    <circle cx="11.5" cy="11.9" r="0.65" fill="${accent}"/>
    <circle cx="13.6" cy="11.9" r="0.65" fill="${accent}"/>
    <path fill="${primary}" d="M5.5 15.5 C1.2 14.0 -0.2 8.5 1.4 4.2 L2.0 2.0 L3.6 3.6 C2.6 5.2 2.4 7.5 3.4 9.5 C4.4 11.8 5.2 13.5 6.8 14.6 L8.2 15.4 L7.2 16.0 L5.5 15.5 Z"/>
    <path fill="${primary}" d="M26.5 15.5 C30.8 14.0 32.2 8.5 30.6 4.2 L30.0 2.0 L28.4 3.6 C29.4 5.2 29.6 7.5 28.6 9.5 C27.6 11.8 26.8 13.5 25.2 14.6 L23.8 15.4 L24.8 16.0 L26.5 15.5 Z"/>
  </g>`;
}

export function wrapSvg(width, height, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">${body}</svg>`;
}

export function fontStack() {
  return "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
}

export function monoStack() {
  return "ui-monospace, 'Cascadia Code', 'Segoe UI Mono', Consolas, monospace";
}

export function titleBlock({ x, y, t, titleSize, taglineSize, subtitle }) {
  return `<text x="${x}" y="${y}" fill="${t.text}" font-family="${fontStack()}" font-size="${titleSize}" font-weight="700" letter-spacing="-1">${escapeXml('Bullframe CSS')}</text>
<text x="${x}" y="${y + titleSize * 0.95}" fill="${t.text}" font-family="${fontStack()}" font-size="${taglineSize}" font-weight="600">${escapeXml('Semantic by default. Any stack.')}</text>
<text x="${x}" y="${y + titleSize * 0.95 + taglineSize * 1.35}" fill="${t.muted}" font-family="${fontStack()}" font-size="${taglineSize * 0.72}" font-weight="500">${escapeXml(subtitle)}</text>`;
}

export function pill(x, y, label, t, accent) {
  const w = label.length * 11 + 36;
  return `<rect x="${x}" y="${y}" width="${w}" height="34" rx="17" fill="${t.accentSoft}" stroke="${t.cardBorder}" stroke-width="1"/>
<text x="${x + 18}" y="${y + 22}" fill="${accent}" font-family="${fontStack()}" font-size="15" font-weight="600">${escapeXml(label)}</text>`;
}

export function dotGrid(width, height, t, step = 32) {
  let dots = '';
  for (let x = step; x < width; x += step) {
    for (let y = step; y < height; y += step) {
      dots += `<circle cx="${x}" cy="${y}" r="1.2" fill="${t.grid}"/>`;
    }
  }
  return dots;
}

export function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
