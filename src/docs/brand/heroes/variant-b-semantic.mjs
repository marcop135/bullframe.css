import { escapeXml, fontStack, logoMark, monoStack, themeTokens, titleBlock, wrapSvg } from './shared.mjs';

function semanticCard(x, y, w, h, label, t, depth = 0) {
  const offset = depth * 14;
  return `<rect x="${x + offset}" y="${y + offset}" width="${w}" height="${h}" rx="18" fill="${t.card}" stroke="${t.cardBorder}" stroke-width="1.5"/>
<text x="${x + offset + 18}" y="${y + offset + 28}" fill="${t.accent}" font-family="${monoStack()}" font-size="14" font-weight="600" letter-spacing="0.08em">${escapeXml(label.toUpperCase())}</text>
<rect x="${x + offset + 18}" y="${y + offset + 42}" width="${w * 0.55}" height="10" rx="5" fill="${t.accentSoft}"/>
<rect x="${x + offset + 18}" y="${y + offset + 62}" width="${w * 0.72}" height="10" rx="5" fill="${t.accentSoft}"/>
<rect x="${x + offset + 18}" y="${y + offset + 82}" width="${w * 0.48}" height="10" rx="5" fill="${t.accentSoft}"/>`;
}

/** Layered semantic UI cards with monospace labels. */
export function render({ width, height, theme, layout }) {
  const t = themeTokens(theme);
  const wide = layout === 'wide';
  const pad = 72;

  const stackW = wide ? 420 : 520;
  const stackH = wide ? 320 : 420;
  const stackX = wide ? width - pad - stackW : (width - stackW) / 2;
  const stackY = wide ? (height - stackH) / 2 : height * 0.38;

  const cards = wide
    ? `${semanticCard(stackX, stackY, stackW, stackH, 'document', t, 0)}
${semanticCard(stackX + 24, stackY + 24, stackW - 48, stackH - 48, 'main', t, 0)}
${semanticCard(stackX + 48, stackY + 48, stackW - 96, stackH - 96, 'article', t, 0)}`
    : `${semanticCard(stackX, stackY, stackW, stackH, 'document', t, 0)}
${semanticCard(stackX + 28, stackY + 28, stackW - 56, stackH - 56, 'main', t, 0)}
${semanticCard(stackX + 56, stackY + 56, stackW - 112, stackH - 112, 'article', t, 0)}`;

  const logoSize = wide ? 96 : 120;
  const logoX = wide ? pad : width / 2 - logoSize / 2;
  const logoY = wide ? pad : height * 0.12;

  const title = wide
    ? titleBlock({
        x: pad,
        y: pad + 48,
        t,
        titleSize: 54,
        taglineSize: 26,
        subtitle: 'Plain HTML first. Classes when you need them.',
      })
    : `<text x="${width / 2}" y="${height * 0.12}" fill="${t.text}" font-family="${fontStack()}" font-size="58" font-weight="700" text-anchor="middle" letter-spacing="-1">${escapeXml('Bullframe CSS')}</text>
<text x="${width / 2}" y="${height * 0.12 + 52}" fill="${t.muted}" font-family="${fontStack()}" font-size="24" font-weight="500" text-anchor="middle">${escapeXml('Semantic by default.')}</text>`;

  const accentBar = wide
    ? `<rect x="${pad}" y="${pad + 190}" width="4" height="120" rx="2" fill="${t.accent}"/>`
    : '';

  const body = `
<rect width="${width}" height="${height}" fill="${t.bg}"/>
<rect width="${width}" height="${height}" fill="url(#mesh-${theme})" opacity="${theme === 'dark' ? 0.55 : 0.35}"/>
<defs>
  <radialGradient id="mesh-${theme}" cx="20%" cy="20%" r="80%">
    <stop offset="0%" stop-color="${t.accent}" stop-opacity="0.18"/>
    <stop offset="100%" stop-color="${t.bg}" stop-opacity="0"/>
  </radialGradient>
</defs>
${accentBar}
${title}
<g transform="translate(${logoX} ${logoY}) scale(${logoSize / 32})">${logoMark(t.logoPrimary, t.logoAccent)}</g>
${cards}
${wide ? `<text x="${pad}" y="${height - 72}" fill="${t.muted}" font-family="${monoStack()}" font-size="17">&lt;nav&gt; · &lt;main&gt; · &lt;article&gt; · &lt;form&gt;</text>` : ''}
`;

  return wrapSvg(width, height, body);
}
