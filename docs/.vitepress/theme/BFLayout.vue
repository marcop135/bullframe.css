<script setup>
import DefaultTheme from 'vitepress/theme';
import { nextTick, onMounted, watch } from 'vue';
import { inBrowser, useRoute } from 'vitepress';
import HomeAfterHero from './components/HomeAfterHero.vue';

const { Layout } = DefaultTheme;
const route = useRoute();

function heroSrcForAppearance() {
  const dark = document.documentElement.classList.contains('dark');
  return dark ? '/bullframe-hero-dark.png' : '/bullframe-hero.png';
}

/** Keep home hero sharp after SPA / bfcache navigations and theme toggles. */
function syncHomeHero(force = false) {
  if (!inBrowser) return;
  if (route.path !== '/' && route.path !== '/index.html') return;
  const img = document.querySelector('.VPHome .VPHero .image-src');
  if (!(img instanceof HTMLImageElement)) return;

  const next = heroSrcForAppearance();
  const current = img.getAttribute('src') || '';
  const needsSwap = force || !current.endsWith(next);
  if (needsSwap) {
    // Drop stale decoded bitmap, then assign a clean absolute URL.
    img.removeAttribute('src');
    img.src = new URL(next, window.location.origin).href;
  }

  // Nudge layout after paint (bfcache / back-forward often leaves a soft frame).
  const sharpen = () => {
    img.style.opacity = '0.999';
    requestAnimationFrame(() => {
      img.style.opacity = '';
    });
  };
  if (img.complete && img.naturalWidth > 0) {
    sharpen();
  } else {
    img.addEventListener('load', sharpen, { once: true });
  }
}

onMounted(() => {
  if (!inBrowser) return;

  const run = (force = false) => {
    nextTick(() => syncHomeHero(force));
  };

  run(true);

  watch(
    () => route.path,
    (path) => {
      if (path === '/' || path === '/index.html') run(true);
    },
  );

  new MutationObserver(() => run(false)).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) run(true);
  });

  // Static /kitchen-sink/ and /examples/{slug}/ are not VitePress pages; SPA 404s.
  // Kitchen sink opens in a new tab; example pages stay a same-tab full load.
  const isKitchenSinkPath = (pathname) =>
    pathname === '/kitchen-sink' || pathname.startsWith('/kitchen-sink/');
  const isLegacyDemoPath = (pathname) => pathname === '/demo' || pathname.startsWith('/demo/');
  const isExamplePagePath = (pathname) =>
    pathname.startsWith('/examples/') && pathname !== '/examples/';

  document.addEventListener(
    'click',
    (event) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const a = event.target?.closest?.('a[href]');
      if (!a || a.hasAttribute('download')) return;
      try {
        const url = new URL(a.href, location.href);
        if (url.origin !== location.origin) return;
        if (isLegacyDemoPath(url.pathname)) {
          event.preventDefault();
          window.open(`/kitchen-sink/${url.search}${url.hash}`, '_blank', 'noopener,noreferrer');
          return;
        }
        if (isKitchenSinkPath(url.pathname)) {
          if (a.target === '_blank') return;
          event.preventDefault();
          window.open(url.href, '_blank', 'noopener,noreferrer');
          return;
        }
        if (!isExamplePagePath(url.pathname)) return;
        if (a.target === '_blank') return;
        event.preventDefault();
        window.location.assign(url.href);
      } catch {
        /* ignore */
      }
    },
    true,
  );

  const warm = (path) => {
    const md = path === '/' ? '/index.md' : `${path.replace(/\/$/, '')}.md`;
    import(/* @vite-ignore */ `${md}?import`).catch(() => {});
  };

  const top = ['/getting-started', '/README', '/examples', '/variables', '/utilities', '/theming'];
  const rIC = window.requestIdleCallback || ((cb) => setTimeout(cb, 200));
  rIC(() => top.forEach(warm));

  document.addEventListener(
    'pointerenter',
    (event) => {
      const a = event.target?.closest?.('a[href]');
      if (!a || a.target === '_blank') return;
      try {
        const url = new URL(a.href, location.href);
        if (url.origin !== location.origin) return;
        if (url.pathname === location.pathname) return;
        if (isKitchenSinkPath(url.pathname) || isLegacyDemoPath(url.pathname) || isExamplePagePath(url.pathname))
          return;
        warm(url.pathname);
      } catch {
        /* ignore */
      }
    },
    true,
  );
});
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <HomeAfterHero />
    </template>
  </Layout>
</template>
