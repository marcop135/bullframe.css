import { test, expect } from '@playwright/test';

const pages = [
  { name: 'landing', path: '/' },
  { name: 'demo', path: '/demo/' },
];

for (const { name, path } of pages) {
  test(`${name} renders consistently`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  });
}
