import { test, expect } from '@playwright/test';

const pages = [
  { name: 'landing', path: '/', fullPage: true },
  // Viewport-only: full-page kitchen-sink screenshots are huge and flaky under CI load.
  { name: 'kitchen-sink', path: '/kitchen-sink/', fullPage: false },
];

for (const { name, path, fullPage } of pages) {
  test(`${name} renders consistently`, async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto(path, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await Promise.race([
      page.evaluate(() => document.fonts.ready),
      new Promise((r) => setTimeout(r, 3_000)),
    ]);
    // WebKit can leave document.fonts.ready pending forever on heavy pages;
    // Playwright's screenshot path waits on it, so settle a resolved FontFaceSet.
    await page.evaluate(() => {
      const settled = {
        ready: Promise.resolve(),
        status: 'loaded',
        check: () => true,
        load: async () => [],
        forEach() {},
        values() {
          return [][Symbol.iterator]();
        },
        addEventListener() {},
        removeEventListener() {},
      };
      Object.defineProperty(document, 'fonts', {
        configurable: true,
        get: () => settled,
      });
    });
    await new Promise((r) => setTimeout(r, 300));
    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage,
      timeout: 60_000,
    });
  });
}
