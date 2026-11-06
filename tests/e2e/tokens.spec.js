import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';

const builds = [
  'bullframe',
  'bullframe-dark',
  'bullframe-system-default',
  'bullframe-classless',
  'bullframe-classless-dark',
  'bullframe-classless-system-default',
  'bullframe-utilities',
];
const css = (build) => readFileSync(`dist/css/${build}.css`, 'utf8');
const controls = `
  <button id="button">Button</button>
  <input id="submit" type="submit" value="Submit">
  <input id="checkbox" type="checkbox" aria-label="Checkbox">
  <input id="radio" type="radio" aria-label="Radio">
  <a id="link" class="bf-btn" href="#">Link button</a>
  <button id="disabled" aria-disabled="true">Unavailable</button>
  <input id="field" type="text" aria-label="Text">
  <input id="disabled-field" type="text" aria-label="Unavailable text" aria-disabled="true">
`;

for (const build of builds) {
  test(`${build} preserves scheme tokens when utilities load last`, async ({ page }) => {
    for (const scheme of ['light', 'dark']) {
      await page.emulateMedia({ colorScheme: scheme });
      await page.setContent('<blockquote><small>Muted</small></blockquote>');
      await page.addStyleTag({ content: css(build) });
      await page.addStyleTag({ content: css('bullframe-utilities') });
      const dark =
        build.endsWith('-dark') || (build.endsWith('-system-default') && scheme === 'dark');
      const values = await page.evaluate(() => {
        const style = getComputedStyle(document.documentElement);
        return Object.fromEntries(
          ['bg', 'text-muted', 'control-border', 'table-border'].map((role) => [
            role,
            style.getPropertyValue(`--bf-color-${role}`).trim(),
          ])
        );
      });
      expect(values).toEqual({
        bg: dark ? 'rgb(28 28 28)' : 'rgb(255 255 255)',
        'text-muted': dark ? 'rgb(153 153 153)' : 'rgb(118 118 118)',
        'control-border': dark ? 'rgb(153 153 153)' : 'rgb(138 138 138)',
        'table-border': dark ? 'rgb(102 102 102)' : 'rgb(138 138 138)',
      });
    }
  });

  if (build === 'bullframe-utilities') continue;

  test(`${build} keeps keyboard focus visible on controls`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setContent(controls);
    await page.addStyleTag({ content: css(build) });
    for (const id of [
      'button',
      'submit',
      'checkbox',
      'radio',
      'link',
      'disabled',
      'field',
      'disabled-field',
    ]) {
      await page.keyboard.press('Tab');
      await expect(page.locator(`#${id}`)).toBeFocused();
      const focus = await page.locator(`#${id}`).evaluate((el) => {
        const s = getComputedStyle(el);
        return {
          outline: s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0,
          shadow: s.boxShadow !== 'none',
        };
      });
      expect(focus.outline || focus.shadow, id).toBe(true);
      if (id !== 'field') expect(focus.outline, id).toBe(true);
    }
  });

  test(`${build} restores focused fields in forced colors`, async ({ page, browserName }) => {
    test.skip(browserName === 'webkit', 'WebKit does not emulate Windows forced colors');
    await page.emulateMedia({ forcedColors: 'active' });
    await page.setContent(controls);
    await page.addStyleTag({ content: css(build) });
    for (const id of ['field', 'disabled-field']) {
      await page.locator(`#${id}`).focus();
      await expect(page.locator(`#${id}`)).toHaveCSS('outline-style', 'solid');
      await expect(page.locator(`#${id}`)).toHaveCSS('outline-width', '2px');
    }
  });
}

for (const build of ['bullframe-classless-dark', 'bullframe-classless-system-default']) {
  test(`${build} preserves dark and contrast-more focus colors with utilities`, async ({
    page,
  }) => {
    for (const contrast of ['no-preference', 'more']) {
      await page.emulateMedia({ colorScheme: 'dark', contrast });
      await page.setContent('<button>Focus</button>');
      await page.addStyleTag({ content: css(build) });
      await page.addStyleTag({ content: css('bullframe-utilities') });
      await page.keyboard.press('Tab');
      await expect(page.locator('button')).toHaveCSS(
        'outline-color',
        contrast === 'more' ? 'rgb(184, 115, 0)' : 'rgb(214, 140, 0)'
      );
    }
  });
}
