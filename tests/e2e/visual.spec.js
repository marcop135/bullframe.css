import { test, expect } from '@playwright/test';

const pages = [
  { name: 'landing', path: '/' },
  { name: 'demo', path: '/demo/' },
];

for (const { name, path } of pages) {
  test(`${name} renders consistently`, async ({ page }) => {
    // Demo HTML is large; under CI load, "load"/"networkidle" can hang on late assets.
    test.setTimeout(180_000);
    await page.goto(path, { waitUntil: 'domcontentloaded', timeout: 120_000 });
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveScreenshot(`${name}.png`, {
      fullPage: true,
      timeout: 60_000,
    });
  });
}
