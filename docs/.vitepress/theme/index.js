import DefaultTheme from 'vitepress/theme';
import { inBrowser } from 'vitepress';
import BFLayout from './BFLayout.vue';
import './custom.css';
import './components/home-after-hero.css';

export default {
  extends: DefaultTheme,
  Layout: BFLayout,
  enhanceApp({ router }) {
    if (!inBrowser) return;
    const prev = router.onBeforeRouteChange;
    router.onBeforeRouteChange = (to) => {
      const path = typeof to === 'string' ? to.split(/[?#]/)[0] : '';
      if (path === '/demo' || path.startsWith('/demo/')) {
        window.location.assign(to);
        return false;
      }
      return prev?.(to);
    };
  },
};
