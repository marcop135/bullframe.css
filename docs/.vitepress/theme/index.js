import DefaultTheme from 'vitepress/theme';
import { inBrowser } from 'vitepress';
import BFLayout from './BFLayout.vue';
import ExamplesGallery from './components/ExamplesGallery.vue';
import './custom.css';
import './components/home-after-hero.css';
import './components/examples-gallery.css';

export default {
  extends: DefaultTheme,
  Layout: BFLayout,
  enhanceApp({ app, router }) {
    app.component('ExamplesGallery', ExamplesGallery);
    if (!inBrowser) return;
    const prev = router.onBeforeRouteChange;
    router.onBeforeRouteChange = (to) => {
      const path = typeof to === 'string' ? to.split(/[?#]/)[0] : '';
      if (path === '/demo' || path.startsWith('/demo/')) {
        window.open('/kitchen-sink/', '_blank', 'noopener,noreferrer');
        return false;
      }
      if (path === '/kitchen-sink' || path.startsWith('/kitchen-sink/')) {
        window.open(to, '_blank', 'noopener,noreferrer');
        return false;
      }
      if (path.startsWith('/examples/') && path !== '/examples/') {
        window.location.assign(to);
        return false;
      }
      return prev?.(to);
    };
    // /matomo.js counts the first load; count client-side navigations here.
    let trackedPath = window.location.pathname;
    const prevAfter = router.onAfterRouteChange;
    router.onAfterRouteChange = (to) => {
      prevAfter?.(to);
      const path = window.location.pathname;
      if (path === trackedPath || !window._paq) return;
      trackedPath = path;
      // Defer one tick so the head (title) reflects the new page.
      setTimeout(() => {
        window._paq.push(['setCustomUrl', window.location.href]);
        window._paq.push(['setDocumentTitle', document.title]);
        window._paq.push(['trackPageView']);
      }, 0);
    };
  },
};
