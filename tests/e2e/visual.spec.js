import { test, expect } from '@playwright/test';

const pages = [
  { name: 'landing', path: '/' },
  { name: 'demo', path: '/demo/' },
];

for (const { name, path } of pages) {
  test(`${name} renders consistently`, async ({ page }) => {
    // Demo is a large static specimen; networkidle often never settles under CI load.
    await page.goto(path, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  });
}
