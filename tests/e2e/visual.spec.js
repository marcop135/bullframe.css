import { test, expect } from '@playwright/test';

const pages = [
  { name: 'landing', path: '/' },
  { name: 'demo', path: '/demo/' },
];

for (const { name, path } of pages) {
  test(`${name} renders consistently`, async ({ page }) => {
    // Demo HTML is large; under CI, "load"/"networkidle" and fonts.ready can hang.
    test.setTimeout(180_000);
    await page.goto(path, { waitUntil: 'domcontentloaded', timeout: 120_000 });
    await Promise.race([
      page.evaluate(() => document.fonts.ready),
      new Promise((r) => setTimeout(r, 5_000)),
    ]);
    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      timeout: 90_000,
    });
  });
}
