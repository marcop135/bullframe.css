import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcPath = path.join(root, 'src/docs/demo/index.html');
const outDir = path.join(root, 'src/docs/demo/variants');
const html = fs.readFileSync(srcPath, 'utf8');

const mainMatch = html.match(/<main id="main-content">([\s\S]*?)<\/main>/);
if (!mainMatch) throw new Error('main not found');
let mainInner = mainMatch[1];

const scriptsMatch = html.match(
  /<!-- Enable <dialog>[\s\S]*<\/script>\s*<script>[\s\S]*?<\/script>/
);
if (!scriptsMatch) throw new Error('scripts not found');
let scripts = scriptsMatch[0].trim();

// Support multiple build selectors (sidebar + end nav) and .current-build marks
scripts = scripts.replace(
  /\/\/ Build selector functionality\s*\(function \(\) \{[\s\S]*?\}\)\(\);/,
  `// Build selector functionality
      (function () {
        const buildSelectors = Array.from(document.querySelectorAll('[data-build-selector]'));
        const cssLink = document.getElementById('bullframe-css');
        const currentBuildDisplays = Array.from(document.querySelectorAll('.current-build'));

        const buildNames = {
          'bullframe-system-default.min.css': 'bullframe-system-default.min.css',
          'bullframe.min.css': 'bullframe.min.css',
          'bullframe-dark.min.css': 'bullframe-dark.min.css',
          'bullframe-classless.min.css': 'bullframe-classless.min.css',
          'bullframe-classless-dark.min.css': 'bullframe-classless-dark.min.css',
          'bullframe-classless-system-default.min.css': 'bullframe-classless-system-default.min.css',
          'bullframe-utilities.min.css': 'bullframe-utilities.min.css',
          'bullframe-modern.min.css': 'bullframe-modern.min.css',
        };

        if (!buildSelectors.length || !cssLink) return;

        const savedBuild = localStorage.getItem('bullframe-demo-build');
        if (savedBuild && buildNames[savedBuild]) {
          switchBuild(savedBuild);
        }

        for (const el of buildSelectors) {
          el.addEventListener('change', function () {
            const selectedBuild = this.value;
            switchBuild(selectedBuild);
            localStorage.setItem('bullframe-demo-build', selectedBuild);
          });
        }

        function switchBuild(buildName) {
          cssLink.href = '/css/' + buildName + '?v6';

          for (const display of currentBuildDisplays) {
            display.textContent = '';
            const codeElement = document.createElement('code');
            codeElement.textContent = buildNames[buildName];
            display.appendChild(codeElement);
          }

          for (const el of buildSelectors) {
            if (el.value !== buildName) el.value = buildName;
          }
        }
      })();`
);

function cleanSpecimens(inner) {
  let s = inner;

  s = s.replace(/ class="h2--section"/g, ' class="bf-m-t-4 bf-m-b-2"');

  s = s.replace(
    /<div class="col-wrapper">(?:<strong>)?([^<]*?)(?:<\/strong>)?<\/div>/g,
    '<p class="bf-t-center bf-m-t-2 bf-m-b-2 bf-p-2 grid-cell">$1</p>'
  );
  s = s.replace(
    /(<p class="[^"]*\bgrid-cell\b[^"]*">)<strong>([^<]*)<\/strong>(<\/p>)/g,
    '$1$2$3'
  );
  s = s.replace(
    /<p class="bf-t-center bf-m-b-2 bf-p-2 grid-cell">/g,
    '<p class="bf-t-center bf-m-t-2 bf-m-b-2 bf-p-2 grid-cell">'
  );
  s = s.replace(
    /<h2 id="components" class="bf-m-t-4 bf-m-b-2">Pre-built Components<\/h2>\s*<p class="bf-lead">Ready-to-use components you can copy and paste into your projects\.<\/p>/,
    '<h2 id="components" class="bf-sr-only">Components</h2>'
  );
  s = s.replace(/<h3 id="button-components">Button Components<\/h3>/g, '');
  s = s.replace(/<h3 id="modal-components">Modal\/Dialog Components<\/h3>/g, '<h3 id="modal-components">Modal/Dialog</h3>');
  s = s.replace(
    /\s*<div class="bf-col-12">\s*<h4>Code Example<\/h4>\s*<pre><code>&lt;!-- Basic Modal --&gt;[\s\S]*?&lt;\/script&gt;<\/code><\/pre>\s*<\/div>/,
    ''
  );
  s = s.replace(/<nav>\s*<ul>/g, '<nav aria-label="Example navigation">\n              <ul>');
  s = s.replace(/\s*<!-- Button Components -->\s*<div class="bf-row">\s*<div class="bf-col-12">\s*<\/div>\s*<\/div>/, '');
  s = s.replace(/\s*<!-- Form Components -->/g, '');
  s = s.replace(/\s*<!-- Modal\/Dialog Components -->/g, '');
  s = s.replace(/<h3>/g, '<h3 class="bf-m-b-1">');
  s = s.replace(/<h4>/g, '<h4 class="bf-m-b-1">');
  s = s.replace(/<div class="grid bf-m-b-4">/g, '<div class="bf-m-b-4" id="grid-specimen">');
  // Space grid specimen rows so column spans read clearly
  s = s.replace(
    /(<div class="bf-m-b-4" id="grid-specimen">)([\s\S]*?)(<\/div>\s*)$/,
    (_match, open, body, close) => {
      const spaced = body.replace(/<div class="bf-row">/g, '<div class="bf-row bf-m-b-2">');
      return open + spaced + close;
    }
  );

  s = s.replace(
    / class="bf-m-b-3" style="display: flex; gap: 0\.5rem; flex-wrap: wrap"/g,
    ' class="bf-m-b-3 bf-display-flex bf-display-flex--wrap"'
  );
  s = s.replace(
    / class="bf-m-b-3" style="display: flex; gap: 0\.5rem; flex-wrap: wrap; align-items: center"/g,
    ' class="bf-m-b-3"'
  );
  s = s.replace(
    / class="bf-d-flex" style="gap: 0\.5rem"/g,
    ' class="bf-display-flex bf-display-flex--wrap"'
  );

  s = s.replace(/ class="bf-m-b-4" style="max-width: 400px"/g, ' class="bf-m-b-4 bf-width-50"');

  s = s.replace(
    /<div style="border: 1px solid var\(--bf-gray-light\); border-radius: 0\.5rem; padding: 1\.5rem; margin-bottom: 1rem">\s*<h4>Card Title<\/h4>\s*<p>This is a simple card component with border and padding\.<\/p>\s*<button class="bf-btn bf-btn--primary">Action<\/button>\s*<\/div>/,
    `<article class="bf-m-b-3 bf-p-3">
              <h4 class="bf-m-t-0">Card Title</h4>
              <p>Simple card composed from spacing utilities and a button. No card class required.</p>
              <button type="button" class="bf-btn bf-btn--primary">Action</button>
            </article>`
  );
  s = s.replace(
    /<div style="border: 1px solid var\(--bf-gray-light\); border-radius: 0\.5rem; padding: 1\.5rem; margin-bottom: 1rem">\s*<h4>Card with Image<\/h4>\s*<img src="\/docs\/demo\/images\/placeholder-img-800x400\.jpg" alt="Card image" style="width: 100%; height: auto; margin-bottom: 1rem; border-radius: 0\.25rem" \/>\s*<p>Card content with an image\.<\/p>\s*<a href="#" class="bf-btn">Learn More<\/a>\s*<\/div>/,
    `<article class="bf-m-b-3">
              <img class="bf-width-100 bf-m-b-2" src="/docs/demo/images/placeholder-img-800x400.jpg" alt="Card image" loading="lazy" />
              <div class="bf-p-3">
                <h4 class="bf-m-t-0">Card with Image</h4>
                <p>Card content with an image.</p>
                <a href="#" class="bf-btn">Learn More</a>
              </div>
            </article>`
  );

  s = s.replace(
    /&lt;div style="border: 1px solid var\(--bf-gray-light\); border-radius: 0\.5rem; padding: 1\.5rem;"&gt;\s*&lt;h4&gt;Card Title&lt;\/h4&gt;\s*&lt;p&gt;Card content goes here\.&lt;\/p&gt;\s*&lt;button class="bf-btn bf-btn--primary"&gt;Action&lt;\/button&gt;\s*&lt;\/div&gt;/,
    `&lt;article class="bf-m-b-3 bf-p-3"&gt;
  &lt;h4 class="bf-m-t-0"&gt;Card Title&lt;/h4&gt;
  &lt;p&gt;Card content goes here.&lt;/p&gt;
  &lt;button class="bf-btn bf-btn--primary"&gt;Action&lt;/button&gt;
&lt;/article&gt;`
  );

  s = s.replace(
    /<div class="bf-m-b-3 bf-display-flex bf-display-flex--wrap">\s*<button class="bf-btn bf-btn--primary">Primary<\/button>\s*<button class="bf-btn">Default<\/button>\s*<button class="bf-btn bf-btn--secondary">Secondary<\/button>\s*<button class="bf-btn bf-btn--outline">Outline<\/button>\s*<\/div>/,
    `<div class="bf-m-b-3">
              <div class="bf-m-b-2"><button type="button" class="bf-btn bf-btn--primary">Primary</button></div>
              <div class="bf-m-b-2"><button type="button" class="bf-btn">Default</button></div>
              <div class="bf-m-b-2"><button type="button" class="bf-btn" disabled>Disabled</button></div>
            </div>`
  );
  s = s.replace(
    /<div class="bf-m-b-3">\s*<button class="bf-btn bf-btn--primary bf-btn--sm">Small<\/button>\s*<button class="bf-btn bf-btn--primary">Default<\/button>\s*<button class="bf-btn bf-btn--primary bf-btn--lg">Large<\/button>\s*<\/div>/,
    `<div class="bf-m-b-3">
              <div class="bf-m-b-2"><button type="button" class="bf-btn bf-btn--primary">Primary</button></div>
              <div class="bf-m-b-2"><button type="button" class="bf-btn">Default</button></div>
            </div>`
  );
  s = s.replace(
    /<div class="bf-m-b-3 bf-display-flex bf-display-flex--wrap bf-align-center-flex">\s*<button class="bf-btn bf-btn--primary bf-btn--sm">Small<\/button>\s*<button class="bf-btn bf-btn--primary">Default<\/button>\s*<button class="bf-btn bf-btn--primary bf-btn--lg">Large<\/button>\s*<\/div>/,
    `<div class="bf-m-b-3">
              <div class="bf-m-b-2"><button type="button" class="bf-btn bf-btn--primary">Primary</button></div>
              <div class="bf-m-b-2"><button type="button" class="bf-btn">Default</button></div>
            </div>`
  );
  s = s.replace(
    /<div class="bf-m-b-3">\s*<div class="bf-btn-group">\s*<button class="bf-btn">Left<\/button>\s*<button class="bf-btn">Middle<\/button>\s*<button class="bf-btn">Right<\/button>\s*<\/div>\s*<\/div>/,
    `<div class="bf-m-b-3">
              <div class="bf-m-b-2"><button type="button" class="bf-btn">Left</button></div>
              <div class="bf-m-b-2"><button type="button" class="bf-btn">Middle</button></div>
              <div class="bf-m-b-2"><button type="button" class="bf-btn">Right</button></div>
            </div>`
  );
  s = s.replace(
    /<button class="bf-btn bf-btn--primary bf-btn--block">Full Width Button<\/button>/,
    '<button type="button" class="bf-btn bf-btn--primary bf-width-100">Full Width Button</button>'
  );
  s = s.replace(
    /class="bf-btn bf-btn--primary bf-btn--block"/g,
    'class="bf-btn bf-btn--primary bf-width-100"'
  );

  // Align code samples with real button API
  s = s.replace(
    /&lt;!-- Button Variants --&gt;[\s\S]*?&lt;!-- Full Width --&gt;\s*&lt;button class="bf-btn bf-btn--primary bf-width-100"&gt;Full Width&lt;\/button&gt;/,
    `&lt;button class="bf-btn bf-btn--primary"&gt;Primary&lt;/button&gt;
&lt;button class="bf-btn"&gt;Default&lt;/button&gt;
&lt;button class="bf-btn" disabled&gt;Disabled&lt;/button&gt;

&lt;button class="bf-btn"&gt;Left&lt;/button&gt;
&lt;button class="bf-btn"&gt;Middle&lt;/button&gt;
&lt;button class="bf-btn"&gt;Right&lt;/button&gt;

&lt;button class="bf-btn bf-btn--primary bf-width-100"&gt;Full Width&lt;/button&gt;`
  );

  // Fallback if Full Width still uses bf-btn--block in the sample
  s = s.replace(
    /&lt;!-- Button Variants --&gt;[\s\S]*?&lt;button class="bf-btn bf-btn--primary bf-btn--block"&gt;Full Width&lt;\/button&gt;/,
    `&lt;button class="bf-btn bf-btn--primary"&gt;Primary&lt;/button&gt;
&lt;button class="bf-btn"&gt;Default&lt;/button&gt;
&lt;button class="bf-btn" disabled&gt;Disabled&lt;/button&gt;

&lt;button class="bf-btn bf-btn--primary bf-width-100"&gt;Full Width&lt;/button&gt;`
  );

  // Clickable inputs / button fieldsets: space each control
  s = s.replace(
    /(<h3>Clickable inputs<\/h3>\s*<fieldset class="bf-m-b-3">)([\s\S]*?)(<\/fieldset>\s*<fieldset disabled>)/,
    (_m, open, body, close) => open + spaceControlDivs(body) + close
  );
  s = s.replace(
    /(<fieldset disabled>\s*<legend>Click the buttons below<\/legend>\s*<h3>Clickable inputs \(disabled\)<\/h3>)([\s\S]*?)(<\/fieldset>)/,
    (_m, open, body, close) => open + spaceControlDivs(body) + close
  );
  s = s.replace(
    /(<h3>Buttons<\/h3>\s*<fieldset class="bf-m-b-3">\s*<legend>Click the buttons below<\/legend>)([\s\S]*?)(<\/fieldset>\s*<h3>Buttons \(\.bf-disabled\)<\/h3>)/,
    (_m, open, body, close) => open + addButtonMargin(spaceControlDivs(body)) + close
  );
  s = s.replace(
    /(<h3>Buttons \(\.bf-disabled\)<\/h3>\s*<fieldset>\s*<legend>The buttons below are disabled\.<\/legend>)([\s\S]*?)(<\/fieldset>)/,
    (_m, open, body, close) => open + addButtonMargin(spaceControlDivs(body)) + close
  );

  // Drop form/card code samples and the card components section from the demo.
  s = s.replace(
    /\s*<div class="bf-col-12">\s*<h4>Code Example<\/h4>\s*<pre><code>&lt;button class="bf-btn bf-btn--primary bf-m-b-2"&gt;Primary&lt;\/button&gt;[\s\S]*?&lt;button class="bf-btn bf-btn--primary bf-width-100 bf-m-b-2"&gt;Full Width&lt;\/button&gt;<\/code><\/pre>\s*<\/div>/,
    ''
  );
  s = s.replace(
    /\s*<!-- Modal\/Dialog Components -->\s*<div class="bf-row">\s*<div class="bf-col-12">\s*<h3 id="modal-components">Modal\/Dialog<\/h3>\s*<\/div>\s*<\/div>\s*<div class="bf-row">[\s\S]*?<\/div>\s*<\/div>\s*(?=<!-- Form Components -->)/,
    ''
  );
  s = s.replace(
    /\s*<div class="bf-col-(?:12|6|4)">\s*<h4>Code Example - Login Form<\/h4>[\s\S]*?<h4>Code Example - Contact Form<\/h4>[\s\S]*?<\/pre>\s*<\/div>/,
    ''
  );
  s = s.replace(
    /\s*<!-- Card Component -->\s*<div class="bf-row">[\s\S]*?<h3 id="card-components">Card Components<\/h3>[\s\S]*?<\/pre>\s*<\/div>\s*<\/div>/,
    ''
  );

  s = s.replace(/ style="[^"]*"/g, '');
  s = s.replace(/<dialog id="myDialog" hidden>/, '<dialog id="myDialog">');

  // Bottom margin on every Bullframe button (after other button rewrites)
  s = s.replace(/class="(bf-btn(?:\s[^"]*)?)"/g, (_m, cls) => {
    if (/\bbf-m-b-/.test(cls)) return `class="${cls}"`;
    return `class="${cls} bf-m-b-2"`;
  });

  return s;
}

function spaceControlDivs(body) {
  return body
    .replace(/<div class="input-image">/g, '<div class="input-image bf-m-b-2">')
    .replace(/<div>/g, '<div class="bf-m-b-2">');
}

function addButtonMargin(body) {
  return body.replace(/<button(?![^>]*\bbf-m-b-2\b)([^>]*)>/g, '<button$1 class="bf-m-b-2">').replace(
    /<button([^>]*) class="([^"]*)"([^>]*) class="bf-m-b-2">/g,
    '<button$1 class="$2 bf-m-b-2"$3>'
  );
}

mainInner = cleanSpecimens(mainInner);

const brandStyle = `    <style>
      :root {
        --bf-blue: #f95c1f;
        --bf-blue-light: #ff7a45;
      }
    </style>`;

const gridCellStyle = `    <style>
      #grid-specimen .grid-cell {
        border: 1px solid var(--bf-gray-dark);
      }
      .demo-nav-mobile {
        display: none;
      }
      @media (max-width: 767px) {
        .demo-nav-sidebar {
          display: none;
        }
        .demo-nav-mobile {
          display: block;
        }
      }
    </style>`;

function headCommon(title, { brand = false, gridBorders = false } = {}) {
  const extras = [brand ? brandStyle : '', gridBorders ? gridCellStyle : ''].filter(Boolean).join('\n');
  return `<!doctype html>
<html id="top" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title} | Bullframe CSS</title>
    <meta name="description" content="Bullframe is a lightweight CSS framework for responsive, cross-browser UIs. Fast, semantic, themeable, and classless-friendly." />
    <link rel="icon" type="image/png" sizes="16x16" href="/docs/demo/icons/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/docs/demo/icons/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/docs/demo/icons/apple-touch-icon.png" />
    <link rel="shortcut icon" href="/docs/demo/icons/favicon.ico" />
    <link id="bullframe-css" rel="stylesheet" href="/css/bullframe-system-default.min.css?v6" />
${extras ? extras + '\n' : ''}  </head>`;
}

const buildSelectOptions = `            <option value="bullframe-system-default.min.css" selected>System Default (Light/Dark)</option>
            <option value="bullframe.min.css">Light Theme</option>
            <option value="bullframe-dark.min.css">Dark Theme</option>
            <option value="bullframe-classless.min.css">Classless (Light)</option>
            <option value="bullframe-classless-dark.min.css">Classless (Dark)</option>
            <option value="bullframe-classless-system-default.min.css">Classless (System Default)</option>
            <option value="bullframe-utilities.min.css">Utilities Only</option>
            <option value="bullframe-modern.min.css">Modern (Light/Dark)</option>`;

function buildFieldsetBlock({ id = 'build-selector', selectClass = '' } = {}) {
  const cls = selectClass ? ` class="${selectClass}"` : '';
  return `        <fieldset class="bf-m-b-3">
          <legend>Select CSS build</legend>
          <label class="bf-display-block bf-m-b-1" for="${id}">Build variant</label>
          <select id="${id}" data-build-selector${cls}>
${buildSelectOptions}
          </select>
          <p class="bf-m-t-2">
            <b>CSS build in use:</b>
            <mark class="current-build"><code>bullframe-system-default.min.css</code></mark>
          </p>
          <p>
            <b><code>&lt;body&gt;</code> classes:</b>
            <mark><code>.bf-responsive-typography</code></mark>
            <mark><code>.bf-reduced-motion</code></mark>
          </p>
        </fieldset>`;
}

const buildFieldset = buildFieldsetBlock();

function buildNavFieldsetBlock({ id = 'build-selector' } = {}) {
  return `            <fieldset class="bf-m-b-3">
              <legend>CSS build</legend>
              <label class="bf-display-block bf-m-b-1" for="${id}">Theme / build</label>
              <select id="${id}" class="bf-width-100 bf-m-b-2" data-build-selector>
${buildSelectOptions}
              </select>
              <p class="bf-m-t-2 bf-m-b-0">
                <mark class="current-build"><code>bullframe-system-default.min.css</code></mark>
              </p>
            </fieldset>`;
}

const buildNavFieldset = buildNavFieldsetBlock({ id: 'build-selector' });
const buildNavFieldsetEnd = buildNavFieldsetBlock({ id: 'build-selector-end' });

const tocLinks = [
  ['#texts', 'Text'],
  ['#embedded-content', 'Embedded'],
  ['#interactive-elements', 'Interactive'],
  ['#forms', 'Forms'],
  ['#components', 'Components'],
  ['#tables', 'Tables'],
  ['#grid-system', 'Grid'],
];

const tocChips = `        <nav class="bf-m-b-4" aria-label="Demo sections">
          <p>
${tocLinks.map(([href, label]) => `            <a class="bf-btn bf-m-b-2" href="${href}">${label}</a>`).join('\n')}
          </p>
        </nav>`;

function tocNav({ withBuild = false, end = false } = {}) {
  const build = withBuild ? (end ? buildNavFieldsetEnd : buildNavFieldset) : '';
  const label = end ? 'Demo (end)' : 'Demo';
  return `          <nav class="${end ? 'bf-m-t-4 bf-p-2 demo-nav-mobile' : 'bf-position-sticky bf-p-2 demo-nav-sidebar'}" aria-label="${end ? 'Demo end' : 'Demo'}">
            <p class="bf-t-weight-700 bf-m-b-2">${label}</p>
${build}
            <p class="bf-t-weight-700 bf-m-b-2">On this page</p>
            <ul class="bf-list-unstyled">
${tocLinks.map(([href, labelText]) => `              <li class="bf-m-b-1"><a href="${href}">${labelText}</a></li>`).join('\n')}
            </ul>
            <hr />
            <p class="bf-m-b-1"><a href="#top">Back to top</a></p>
          </nav>`;
}

const tocListWithBuild = tocNav({ withBuild: true, end: false });
const tocListWithBuildEnd = tocNav({ withBuild: true, end: true });

const footer = `      <footer class="bf-m-t-4 bf-m-b-4 bf-t-center">
        <hr />
        <h2>Bullframe CSS</h2>
        <p>A lightweight CSS framework for building fast, responsive, and accessible UIs.</p>
        <p class="bf-m-b-2">
          <a class="bf-btn bf-btn--primary bf-m-b-2" href="/">Docs home</a>
          <a class="bf-btn bf-m-b-2" href="https://github.com/marcop135/bullframe.css">GitHub</a>
        </p>
        <p><small>Built by <a href="https://github.com/marcop135" rel="noopener noreferrer">@marcop135</a></small></p>
        <p><a href="#top">Back to top</a></p>
      </footer>`;

function withSectionLeads(inner, { skipIds = [] } = {}) {
  const leads = {
    texts: 'Typography, inline elements, lists, quotes, and code samples.',
    'embedded-content': 'Images, media, embeds, progress, and meter.',
    'interactive-elements': 'Details/summary and native dialog.',
    forms: 'Inputs, selects, textareas, and fieldsets across common states.',
    components: 'Copy-paste patterns composed from Bullframe utilities.',
    tables: 'Default and utility-enhanced tables.',
    'grid-system': 'Fluid 12-column layout with optional breakpoint collapses.',
  };
  let s = inner;
  for (const [id, lead] of Object.entries(leads)) {
    if (skipIds.includes(id)) continue;
    s = s.replace(
      new RegExp(`(<h2 id="${id}" class="bf-m-t-4 bf-m-b-2">[^<]+</h2>)`),
      `$1\n            <p class="bf-lead bf-m-b-3">${lead}</p>`
    );
  }
  return s;
}

function wrapFieldsets(inner) {
  // texts h2 is bare (not inside a bf-row); later section titles sit in bf-row/bf-col-12.
  const sections = [
    {
      id: 'texts',
      legend: 'Text elements',
      start: /(<h2 id="texts" class="bf-m-t-4 bf-m-b-2">)/,
    },
    {
      id: 'embedded-content',
      legend: 'Embedded content',
      start: /(<div class="bf-row">\s*<div class="bf-col-12">\s*<h2 id="embedded-content")/,
    },
    {
      id: 'interactive-elements',
      legend: 'Interactive elements',
      start: /(<div class="bf-row">\s*<div class="bf-col-12">\s*<h2 id="interactive-elements")/,
    },
    {
      id: 'forms',
      legend: 'Forms',
      start: /(<div class="bf-row">\s*<div class="bf-col-12">\s*<h2 id="forms")/,
    },
    {
      id: 'components',
      legend: 'Components',
      start: /(<div class="bf-row">\s*<div class="bf-col-12">\s*<h2 id="components")/,
    },
    {
      id: 'tables',
      legend: 'Tables',
      start: /(<div class="bf-row">\s*<div class="bf-col-12">\s*<h2 id="tables")/,
    },
    {
      id: 'grid-system',
      legend: 'Grid system',
      start: /(<div class="bf-row">\s*<div class="bf-col-12">\s*<h2 id="grid-system")/,
    },
  ];

  let s = inner;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const next = sections[i + 1];
    const open = `<fieldset class="bf-m-b-4">\n          <legend class="bf-t-weight-700">${section.legend}</legend>\n`;
    if (!section.start.test(s)) {
      throw new Error(`wrapFieldsets: start not found for ${section.id}`);
    }
    s = s.replace(section.start, `${open}$1`);
    if (next) {
      if (!next.start.test(s)) {
        throw new Error(`wrapFieldsets: next start not found for ${next.id}`);
      }
      s = s.replace(next.start, `</fieldset>\n        $1`);
    } else {
      s += '\n        </fieldset>\n';
    }
  }
  return s;
}

fs.mkdirSync(outDir, { recursive: true });

const variantA = `${headCommon('Demo A - Home', { brand: false })}
  <body class="bf-responsive-typography bf-reduced-motion">
    <a class="bf-sr-only focusable" href="#main-content">Skip to content</a>
    <div class="bf-container bf-container--break-md">
      <header class="bf-m-b-4 bf-p-t-3">
        <p class="bf-m-b-1"><mark><code>Variant A</code></mark> Docs home layout</p>
        <h1 class="bf-m-b-1">Bullframe CSS</h1>
        <p class="bf-lead bf-m-b-2">Lightweight, themeable, classless-friendly. This page is a live specimen sheet for every build.</p>
        <p class="bf-m-b-3">
          <a class="bf-btn bf-btn--primary" href="https://github.com/marcop135/bullframe.css">GitHub</a>
          <a class="bf-btn" href="/">Docs</a>
          <a class="bf-btn" href="https://www.npmjs.com/package/bullframe.css">npm</a>
        </p>
        <hr />
        <p class="bf-m-b-3">Wide range of HTML elements in unusual combinations, for testing only.</p>
${buildFieldset}
${tocChips}
      </header>
      <main id="main-content">
${mainInner}
      </main>
${footer}
    </div>
    ${scripts}
  </body>
</html>
`;

function forceOneColMain(inner) {
  // Keep real grid spans inside #grid-specimen; everything above becomes full width.
  const marker = '<div class="bf-m-b-4" id="grid-specimen">';
  const idx = inner.indexOf(marker);
  if (idx === -1) {
    return inner.replace(/\bbf-col-(?:1[0-2]|[1-9])\b/g, 'bf-col-12');
  }
  const before = inner.slice(0, idx).replace(/\bbf-col-(?:1[0-2]|[1-9])\b/g, 'bf-col-12');
  return before + inner.slice(idx);
}

const mainInnerOneCol = withSectionLeads(forceOneColMain(mainInner), { skipIds: ['components'] });

const variantB = `${headCommon('Demo', { brand: false, gridBorders: true })}
  <body class="bf-responsive-typography bf-reduced-motion">
    <a class="bf-sr-only focusable" href="#main-content">Skip to content</a>
    <div class="bf-container bf-container--break-md">
      <header class="bf-m-b-3 bf-p-t-2">
        <h1 class="bf-h2 bf-m-b-1">Bullframe CSS demo</h1>
        <p class="bf-lead bf-m-b-2">Bullframe is a lightweight CSS framework for fast, accessible UIs.</p>
        <p class="bf-m-b-2">This page is a live specimen sheet so you can switch builds and inspect every element.</p>
        <p class="bf-m-b-2">
          <a class="bf-btn bf-btn--primary bf-m-b-2" href="/">Docs home</a>
          <a class="bf-btn bf-m-b-2" href="https://github.com/marcop135/bullframe.css">GitHub</a>
        </p>
        <p class="bf-m-b-0">
          <b><code>&lt;body&gt;</code> classes:</b>
          <mark><code>.bf-responsive-typography</code></mark>
          <mark><code>.bf-reduced-motion</code></mark>
        </p>
        <p class="bf-m-b-0">
          <b>Layout:</b>
          <mark><code>.bf-container</code></mark>
          <mark><code>.bf-container--break-md</code></mark>
        </p>
      </header>
      <div class="bf-row">
        <aside class="bf-col-3 bf-m-b-3">
${tocListWithBuild}
        </aside>
        <div class="bf-col-9">
          <main id="main-content">
${mainInnerOneCol}
          </main>
${tocListWithBuildEnd}
${footer}
        </div>
      </div>
    </div>
    ${scripts}
  </body>
</html>
`;

const mainC = wrapFieldsets(withSectionLeads(mainInner));
const variantC = `${headCommon('Demo C - Article', { brand: false })}
  <body class="bf-responsive-typography bf-reduced-motion">
    <a class="bf-sr-only focusable" href="#main-content">Skip to content</a>
    <div class="bf-container bf-container--break-md">
      <header class="bf-m-b-4 bf-p-t-3">
        <p class="bf-m-b-1"><mark><code>Variant C</code></mark> Docs article layout</p>
        <h1>Demo</h1>
        <p class="bf-lead">Each section opens like a documentation page: a title, a one-line lead, then specimens grouped in fieldsets.</p>
        <p class="bf-m-b-3">
          <a class="bf-btn bf-btn--primary" href="https://github.com/marcop135/bullframe.css">GitHub</a>
          <a class="bf-btn" href="/">Docs</a>
          <a class="bf-btn" href="https://www.npmjs.com/package/bullframe.css">npm</a>
        </p>
${buildFieldset}
        <nav class="bf-m-b-3" aria-label="Demo sections">
          <p>
${tocLinks.map(([href, label]) => `            <a href="${href}">${label}</a>`).join(' ·\n')}
          </p>
        </nav>
        <hr />
      </header>
      <main id="main-content">
${mainC}
      </main>
${footer}
    </div>
    ${scripts}
  </body>
</html>
`;

const files = {
  'a-home.html': variantA,
  'b-sidebar.html': variantB,
  'c-article.html': variantC,
};

for (const [name, body] of Object.entries(files)) {
  fs.writeFileSync(path.join(outDir, name), body);
  const withoutBrandStyle = body.replace(/<style>[\s\S]*?<\/style>/, '');
  const issues = [];
  if (body.includes('style.css')) issues.push('still links style.css');
  if (body.includes('h2--section')) issues.push('h2--section remains');
  if (body.includes('col-wrapper')) issues.push('col-wrapper remains');
  if (/style="[^"]+"/.test(withoutBrandStyle)) issues.push('inline style remains');
  if (body.includes('--bf-blue: #f95c1f')) issues.push('orange brand override still present');
  if (!body.includes('id="build-selector"')) issues.push('missing build selector');
  if (name === 'b-sidebar.html') {
    if (/class="bf-container bf-container--fluid/.test(body) || body.includes('demo-shell')) {
      issues.push('B still uses fluid/custom shell');
    }
    if (!body.includes('class="bf-container bf-container--break-md"')) {
      issues.push('B missing default bf-container');
    }
    if (!body.includes('Theme / build')) issues.push('B build select not in nav');
    if (!body.includes('<aside')) issues.push('B missing on-this-page column');
    if (!body.includes('bf-col-9')) issues.push('B missing main content column');
    const mainSlice = body.slice(body.indexOf('id="main-content"'), body.indexOf('id="grid-specimen"'));
    if (/\bbf-col-(?:[1-9]|1[0-1])\b/.test(mainSlice)) {
      issues.push('B main content still has multi-col layout');
    }
    if (body.includes('Variant B')) issues.push('B still shows Variant B label');
    if (!body.includes('Bullframe is a lightweight CSS framework for fast, accessible UIs.')) {
      issues.push('B missing Bullframe blurb');
    }
    if (!body.includes('.bf-responsive-typography')) issues.push('B missing body class marks');
    if (!body.includes('grid-cell')) issues.push('B missing grid-cell class');
    if (!body.includes('#grid-specimen .grid-cell')) issues.push('B missing grid border CSS');
    if (/grid-cell"><strong>/.test(body)) issues.push('B grid cells still use strong');
    if (!body.includes('build-selector-end')) issues.push('B missing end nav build select');
    if (!body.includes('github.com/marcop135"')) issues.push('B missing @marcop135 profile link');
    if (body.includes('bf-align-center-flex')) issues.push('B still uses 100vh align utility');
  }
  if (!body.includes('id="texts"')) issues.push('missing texts section');
  if (!body.includes('id="grid-system"')) issues.push('missing grid section');
  console.log(
    name,
    issues.length ? `ISSUES: ${issues.join('; ')}` : 'ok',
    `(${body.length} bytes)`
  );
}
