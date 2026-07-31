import { test, expect } from '@playwright/test';

const pages = [
  { name: 'landing', path: '/', fullPage: true },
  // Viewport-only: full-page kitchen-sink screenshots are huge and flaky under CI load.
  { name: 'kitchen-sink', path: '/kitchen-sink/', fullPage: false },
];

for (const { name, path, fullPage } of pages) {
  test(`${name} renders consistently`, async ({ page, browserName }) => {
    // WebKit leaves document.fonts.ready pending on the kitchen-sink page in CI,
    // and Playwright's screenshot path waits on it until the expect timeout.
    test.skip(
      browserName === 'webkit' && name === 'kitchen-sink',
      'WebKit fonts.ready hang on kitchen-sink screenshots in CI'
    );
    test.setTimeout(120_000);
    await page.goto(path, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await Promise.race([
      page.evaluate(() => document.fonts.ready),
      new Promise((r) => setTimeout(r, 3_000)),
    ]);
    await new Promise((r) => setTimeout(r, 300));
    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage,
      timeout: 60_000,
    });
  });
}
