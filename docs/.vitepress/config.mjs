import { defineConfig } from 'vitepress';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import llmstxt from 'vitepress-plugin-llms';
import { chapters, excludeDirs } from './chapters.mjs';

const docsRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const siteUrl = 'https://bullframecss.marcopontili.com';
const siteDescription =
  'Bullframe CSS is a lightweight CSS framework for fast, responsive, accessible UIs. Semantic by default. Any stack. Classless when you want it. System dark built in. Seven builds, solid cross-browser support.';

// Derive a nav label from a doc's first H1 (falls back to a prettified filename).
function titleFor(rel) {
  try {
    const text = readFileSync(resolve(docsRoot, rel), 'utf8');
    const m = text.match(/^#\s+(.+?)\s*$/m);
    if (m) return m[1].replace(/[`*_]/g, '').trim();
  } catch {
    /* fall through to filename */
  }
  const base = rel.split('/').pop().replace(/\.md$/i, '');
  return base.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

const linkFor = (rel) => '/' + rel.replace(/\.md$/i, '');

const sidebar = chapters.map((c) => ({
  text: c.text,
  // Keep Overview open; collapse the rest so first paint stays light.
  collapsed: c.text !== 'Overview',
  items: c.files.map((f) => ({ text: titleFor(f), link: linkFor(f) })),
}));

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: 'Bullframe CSS',
      url: siteUrl,
      description: siteDescription,
      inLanguage: 'en-US',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Bullframe CSS',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      url: siteUrl,
      description: siteDescription,
      license: 'https://opensource.org/licenses/MIT',
      codeRepository: 'https://github.com/marcop135/bullframe.css',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  ],
};

/** Map clean URL path → source .md under docs/ for docs:dev Accept negotiation. */
function markdownPathFor(pathname) {
  const clean = pathname.replace(/\/$/, '') || '/';
  if (clean === '/') return resolve(docsRoot, 'index.md');
  const rel = clean.replace(/^\//, '');
  const direct = resolve(docsRoot, `${rel}.md`);
  if (existsSync(direct)) return direct;
  const asIndex = resolve(docsRoot, rel, 'index.md');
  if (existsSync(asIndex)) return asIndex;
  return null;
}

function acceptsMarkdown(accept) {
  if (!accept || !/text\/markdown/i.test(accept)) return false;
  if (/text\/markdown\s*;\s*q\s*=\s*0(?:\.0+)?(?:\s|,|$)/i.test(accept)) return false;
  return true;
}

/**
 * Serve static kitchen-sink / example HTML in docs:dev (VitePress SPA would 404 otherwise).
 * Gallery lives at VitePress /examples; templates are /examples/{slug}/.
 */
function serveStaticHtml() {
  return {
    name: 'bf-serve-static-html',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? '';
        if (url === '/demo' || url === '/demo/') {
          res.statusCode = 302;
          res.setHeader('Location', '/kitchen-sink/');
          res.end();
          return;
        }
        if (url === '/kitchen-sink' || url === '/kitchen-sink/') {
          req.url = '/kitchen-sink/index.html';
        } else {
          // Slug dirs only (not /examples/shared.css or other files).
          const ex = url.match(/^\/examples\/([^/]+)\/?$/);
          if (ex && !ex[1].includes('.')) {
            req.url = `/examples/${ex[1]}/index.html`;
          }
        }
        next();
      });
    },
  };
}

/** Dev-only Accept: text/markdown → source .md (mirrors production .htaccess). */
function negotiateMarkdownDev() {
  return {
    name: 'bf-negotiate-markdown',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? '';
        const raw = url.split('?')[0] ?? '';
        // Let Vite transform page modules (e.g. /index.md?import); do not raw-serve those.
        if (/[?&]import(?:&|=|$)/.test(url)) return next();
        if (
          raw.startsWith('/kitchen-sink') ||
          raw.startsWith('/demo') ||
          raw.startsWith('/examples/') ||
          raw.startsWith('/@') ||
          raw.startsWith('/node_modules')
        ) {
          return next();
        }
        if (/\.(?:css|js|mjs|map|png|jpe?g|webp|gif|svg|ico|woff2?|json|txt)$/i.test(raw)) {
          return next();
        }

        const accept = req.headers.accept ?? '';
        const explicitMd = raw.endsWith('.md');
        if (!explicitMd && !acceptsMarkdown(accept)) return next();

        const lookupPath = explicitMd ? raw.replace(/\.md$/i, '') || '/' : raw;
        const mdFile = markdownPathFor(lookupPath === '/index' ? '/' : lookupPath);
        if (!mdFile) return next();

        const rel = mdFile.slice(docsRoot.length).replace(/\\/g, '/').replace(/^\//, '');
        const htmlPath = rel === 'index.md' ? '/' : `/${rel.replace(/\.md$/i, '')}`;

        res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
        res.setHeader('Vary', 'Accept');
        res.setHeader('Link', `<${htmlPath}>; rel="alternate"; type="text/html"`);
        res.end(readFileSync(mdFile, 'utf8'));
      });
    },
  };
}

export default defineConfig({
  title: 'Bullframe CSS',
  description: siteDescription,
  lang: 'en-US',
  cleanUrls: true,
  base: '/',
  ignoreDeadLinks: [/^\/examples\/[^/]+\/?$/, /^\/kitchen-sink\/?$/, /^\/demo\/?$/],
  sitemap: {
    hostname: siteUrl,
  },
  markdown: {
    html: true,
  },
  srcExclude: [...excludeDirs.map((d) => `${d}/**`), '**/node_modules/**'],
  transformHead({ pageData }) {
    const rel = (pageData.relativePath || 'index.md').replace(/\\/g, '/');
    let href;
    if (rel === 'index.md') {
      href = '/index.md';
    } else if (rel.endsWith('/index.md')) {
      // VitePress + llm plugin emit components/index.md as /components.md
      href = `/${rel.slice(0, -'/index.md'.length)}.md`;
    } else {
      href = `/${rel}`;
    }
    return [['link', { rel: 'alternate', type: 'text/markdown', title: 'Markdown', href }]];
  },
  // Dev nav felt 1–3s cold: avoid watching build output, warm common pages.
  vite: {
    plugins: [
      serveStaticHtml(),
      negotiateMarkdownDev(),
      llmstxt({
        domain: siteUrl,
        generateLLMsTxt: false,
        generateLLMsFullTxt: true,
        generateLLMFriendlyDocsForEachPage: true,
        injectLLMHint: true,
        stripHTML: true,
        excludeIndexPage: false,
        ignoreFiles: ['intro.md', 'install.md'],
      }),
    ],
    server: {
      watch: {
        ignored: [
          '**/docs/.vitepress/dist/**',
          '**/docs/.vitepress/cache/**',
          '**/docs/.vitepress/.temp/**',
        ],
      },
      warmup: {
        clientFiles: [
          './.vitepress/theme/index.js',
          './.vitepress/theme/components/HomeAfterHero.vue',
          './index.md',
          './README.md',
          './getting-started.md',
          './variables.md',
          './utilities.md',
          './theming.md',
          './accessibility.md',
        ],
      },
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Bullframe CSS',
    search: { provider: 'local' },
    outline: { level: [2, 3] },
    nav: [
      { text: 'Get started', link: '/getting-started' },
      { text: 'Read the docs', link: '/README' },
      { text: 'Examples', link: '/examples' },
      { text: 'Kitchen sink', link: '/kitchen-sink/', target: '_blank', rel: 'noopener' },
    ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/marcop135/bullframe.css' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/bullframe.css' },
      {
        icon: 'codepen',
        link: 'https://codepen.io/collection/nxpjRe',
        ariaLabel: 'CodePen collection',
      },
    ],
    footer: {
      message:
        '<span class="bf-footer-brand"><img class="bf-footer-logo" src="/logo.svg" width="36" height="36" alt="" /><span class="bf-footer-text"><span class="bf-footer-name">Bullframe CSS</span><span class="bf-footer-legal">Copyright © 2026 Marco Pontili</span></span></span>',
    },
    editLink: {
      pattern: 'https://github.com/marcop135/bullframe.css/edit/v6/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
  head: [
    // Cross-browser favicons: SVG first, then ICO/PNG fallbacks, Apple, mask, manifest.
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#c2410c' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#c2410c' }],
    ['meta', { name: 'msapplication-TileColor', content: '#c2410c' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Bullframe CSS' }],
    ['meta', { property: 'og:title', content: 'Bullframe CSS' }],
    ['meta', { property: 'og:description', content: siteDescription }],
    ['meta', { property: 'og:url', content: siteUrl }],
    ['meta', { property: 'og:image', content: `${siteUrl}/og-image.jpg` }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:type', content: 'image/jpeg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Bullframe CSS' }],
    ['meta', { name: 'twitter:description', content: siteDescription }],
    ['meta', { name: 'twitter:image', content: `${siteUrl}/og-image.jpg` }],
    ['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)],
  ],
});
