import {
  BRAND,
  dotGrid,
  escapeXml,
  fontStack,
  logoMark,
  monoStack,
  pill,
  themeTokens,
  titleBlock,
  wrapSvg,
} from './shared.mjs';

/** Split layout: copy left, logo glow right, subtle dot grid. */
export function render({ width, height, theme, layout }) {
  const t = themeTokens(theme);
  const wide = layout === 'wide';
  const pad = wide ? 72 : 80;
  const titleSize = wide ? 56 : 64;
  const taglineSize = wide ? 28 : 32;

  const logoSize = wide ? 280 : 360;
  const logoX = wide ? width - pad - logoSize : (width - logoSize) / 2;
  const logoY = wide ? (height - logoSize) / 2 : height * 0.42;

  const codeSnippet = wide
    ? `<text x="${pad}" y="${height - 96}" fill="${t.muted}" font-family="${monoStack()}" font-size="18" font-weight="500">&lt;main&gt; · &lt;article&gt; · &lt;form&gt;</text>
<text x="${pad}" y="${height - 64}" fill="${t.accent}" font-family="${monoStack()}" font-size="16" opacity="0.85">one stylesheet · zero runtime JS</text>`
    : '';

  const pills = wide
    ? `${pill(pad, height - 180, 'Classless', t, t.accent)}${pill(pad + 130, height - 180, 'System dark', t, t.accent)}${pill(pad + 280, height - 180, '7 builds', t, t.accent)}`
    : `${pill(width / 2 - 190, height * 0.72, 'Classless', t, t.accent)}${pill(width / 2 - 40, height * 0.72, 'System dark', t, t.accent)}${pill(width / 2 + 120, height * 0.72, '7 builds', t, t.accent)}`;

  const titleX = wide ? pad : width / 2;
  const titleY = wide ? pad + 56 : height * 0.18;
  const title = wide
    ? titleBlock({
        x: titleX,
        y: titleY,
        t,
        titleSize,
        taglineSize,
        subtitle: 'Classless when you want it. System dark built in.',
      })
    : `<text x="${titleX}" y="${titleY}" fill="${t.text}" font-family="${fontStack()}" font-size="${titleSize}" font-weight="700" text-anchor="middle" letter-spacing="-1">${escapeXml('Bullframe CSS')}</text>
<text x="${titleX}" y="${titleY + titleSize * 0.9}" fill="${t.text}" font-family="${fontStack()}" font-size="${taglineSize}" font-weight="600" text-anchor="middle">${escapeXml('Semantic by default.')}</text>
<text x="${titleX}" y="${titleY + titleSize * 0.9 + taglineSize * 1.2}" fill="${t.muted}" font-family="${fontStack()}" font-size="${taglineSize * 0.72}" font-weight="500" text-anchor="middle">${escapeXml('Any stack.')}</text>`;

  const body = `
<rect width="${width}" height="${height}" fill="${t.bg}"/>
${dotGrid(width, height, t)}
<rect x="${wide ? width * 0.52 : width * 0.08}" y="${wide ? height * 0.08 : height * 0.34}" width="${wide ? width * 0.4 : width * 0.84}" height="${wide ? height * 0.84 : height * 0.52}" rx="${wide ? 32 : 40}" fill="${t.accentSoft}"/>
<circle cx="${logoX + logoSize / 2}" cy="${logoY + logoSize / 2}" r="${logoSize * 0.42}" fill="${theme === 'dark' ? 'rgba(77,165,255,0.12)' : 'rgba(0,86,179,0.08)'}"/>
<g transform="translate(${logoX} ${logoY}) scale(${logoSize / 32})">${logoMark(t.logoPrimary, t.logoAccent)}</g>
${title}
${pills}
${codeSnippet}
<line x1="${pad}" y1="${wide ? height - 120 : height * 0.66}" x2="${wide ? pad + 220 : width - pad}" y2="${wide ? height - 120 : height * 0.66}" stroke="${t.cardBorder}" stroke-width="1" stroke-dasharray="6 8"/>
`;

  return wrapSvg(width, height, body);
}
