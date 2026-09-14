import { BRAND, escapeXml, fontStack, logoMark, pill, themeTokens, wrapSvg } from './shared.mjs';

/** Gradient mesh with glass card and centered mark. */
export function render({ width, height, theme, layout }) {
  const t = themeTokens(theme);
  const wide = layout === 'wide';
  const pad = 72;

  const cardW = wide ? width * 0.88 : width * 0.82;
  const cardH = wide ? height * 0.78 : height * 0.72;
  const cardX = (width - cardW) / 2;
  const cardY = (height - cardH) / 2;

  const logoSize = wide ? 120 : 160;
  const logoX = wide ? pad + 48 : width / 2 - logoSize / 2;
  const logoY = wide ? (height - logoSize) / 2 : cardY + 56;

  const titleX = wide ? pad + logoSize + 96 : width / 2;
  const titleY = wide ? height / 2 - 40 : cardY + logoSize + 72;
  const titleSize = wide ? 52 : 56;
  const taglineSize = wide ? 26 : 28;

  const title = wide
    ? `<text x="${titleX}" y="${titleY}" fill="${t.text}" font-family="${fontStack()}" font-size="${titleSize}" font-weight="700" letter-spacing="-1">${escapeXml('Bullframe CSS')}</text>
<text x="${titleX}" y="${titleY + 44}" fill="${t.muted}" font-family="${fontStack()}" font-size="${taglineSize}" font-weight="500">${escapeXml('Classless when you want it. System dark built in.')}</text>
<text x="${titleX}" y="${titleY + 84}" fill="${t.accent}" font-family="${fontStack()}" font-size="22" font-weight="600">${escapeXml('Semantic by default. Any stack.')}</text>`
    : `<text x="${titleX}" y="${titleY}" fill="${t.text}" font-family="${fontStack()}" font-size="${titleSize}" font-weight="700" text-anchor="middle" letter-spacing="-1">${escapeXml('Bullframe CSS')}</text>
<text x="${titleX}" y="${titleY + 48}" fill="${t.accent}" font-family="${fontStack()}" font-size="${taglineSize}" font-weight="600" text-anchor="middle">${escapeXml('Semantic by default.')}</text>
<text x="${titleX}" y="${titleY + 88}" fill="${t.muted}" font-family="${fontStack()}" font-size="22" font-weight="500" text-anchor="middle">${escapeXml('Any stack.')}</text>`;

  const pillsY = wide ? titleY + 120 : titleY + 120;
  const pillsX = wide ? titleX : width / 2 - 210;
  const pills = `${pill(pillsX, pillsY, 'Native CSS', t, t.accent)}${pill(pillsX + 128, pillsY, 'WCAG AA', t, t.accent)}${pill(pillsX + 248, pillsY, '~8KB gzip', t, t.accent)}`;

  const gradientStops =
    theme === 'dark'
      ? `<stop offset="0%" stop-color="${BRAND.blueDeep}"/>
<stop offset="45%" stop-color="${BRAND.ink}"/>
<stop offset="100%" stop-color="#111827"/>`
      : `<stop offset="0%" stop-color="#dbeafe"/>
<stop offset="45%" stop-color="${BRAND.paper}"/>
<stop offset="100%" stop-color="#ffffff"/>`;

  const body = `
<defs>
  <linearGradient id="bg-${theme}" x1="0%" y1="0%" x2="100%" y2="100%">${gradientStops}</linearGradient>
  <radialGradient id="orb-${theme}" cx="85%" cy="15%" r="55%">
    <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.28"/>
    <stop offset="100%" stop-color="${t.accent}" stop-opacity="0"/>
  </radialGradient>
</defs>
<rect width="${width}" height="${height}" fill="url(#bg-${theme})"/>
<rect width="${width}" height="${height}" fill="url(#orb-${theme})"/>
<rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="32" fill="${theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.72)'}" stroke="${t.cardBorder}" stroke-width="1.5"/>
<rect x="${cardX + 24}" y="${cardY + 24}" width="${cardW - 48}" height="${cardH - 48}" rx="24" fill="${theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.45)'}" stroke="${t.cardBorder}" stroke-width="1"/>
<g transform="translate(${logoX} ${logoY}) scale(${logoSize / 32})">${logoMark(t.logoPrimary, t.logoAccent)}</g>
${title}
${pills}
`;

  return wrapSvg(width, height, body);
}
