import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroTitleRow}>
          <Heading as="h1" className="hero__title">{siteConfig.title}</Heading>
          <span className={styles.versionBadge} aria-label="Version 6">v6</span>
        </div>
        <p className="hero__subtitle">
          One design system. Three ways to write it. Zero JavaScript.
        </p>
        <p className={styles.heroLede}>
          Classless for your blog, class-based for your product, utility-first for your dashboard
          &mdash; all from one package, sharing one set of <code>--bf-*</code> tokens. Switch the
          import; your theme carries over.
        </p>
        <pre className={styles.installSnippet} aria-label="One-line install">
{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bullframe.css@latest">`}
        </pre>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/getting-started">
            Get Started
          </Link>
          <a className="button button--secondary button--lg" href="/demo/">
            Live Demo
          </a>
          <Link className="button button--secondary button--lg" href="https://github.com/marcop135/bullframe.css">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function VariantsSection() {
  const modes = [
    {
      name: 'Classless',
      file: 'bullframe-classless.css',
      sample: `<link rel="stylesheet"
  href="…/bullframe-classless.min.css">

<h1>Hello</h1>
<p>Just semantic HTML.</p>
<form>…</form>`,
      who: 'Blogs, docs, AI-generated markup, prototypes. No classes to add.',
    },
    {
      name: 'Class-based',
      file: 'bullframe.css',
      sample: `<link rel="stylesheet"
  href="…/bullframe.min.css">

<div class="bf-container">
  <h1 class="bf-t-center">Hello</h1>
  <button class="bf-btn bf-btn--primary">Go</button>
</div>`,
      who: 'Apps and product sites — grid, buttons, forms, tables.',
    },
    {
      name: 'Utility-first',
      file: 'bullframe-utilities.css',
      sample: `<link rel="stylesheet"
  href="…/bullframe-utilities.min.css">

<div class="bf-m-t-3 bf-t-center">
  <h1 class="bf-t-weight-700">Hello</h1>
</div>`,
      who: 'You already have a reset; you just want .bf-* helpers.',
    },
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Three ways to write it</Heading>
        <p className={styles.sectionLede}>
          Same <code>--bf-*</code> tokens. Same accessible defaults. Same package.
          Pick the mode that matches how you write HTML &mdash; switch the import,
          your theme carries over.
        </p>
        <div className={clsx('row', styles.variantsRow)}>
          {modes.map((m) => (
            <div key={m.name} className="col col--4">
              <article className={styles.variantCard}>
                <h3 className={styles.variantName}>{m.name}</h3>
                <code className={styles.variantFile}>{m.file}</code>
                <pre className={styles.codeBlock}>{m.sample}</pre>
                <p className={styles.variantWho}>{m.who}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModernSection() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Also: a modern-CSS variant</Heading>
        <p className={styles.sectionLede}>
          <code>bullframe-modern.css</code> layers <code>light-dark()</code>,
          <code> color-mix()</code>, <code>oklch()</code>, <code>:has()</code>, and container
          queries on top of the system-default build &mdash; opt in when the project targets 2024+
          browsers. The other six variants stay byte-for-byte the same.
        </p>
        <div className="row">
          <div className="col col--6">
            <h3 className={styles.codeHeading}>One declaration, both modes</h3>
            <pre className={styles.codeBlock}>
{`:root {
  color-scheme: light dark;
}

body {
  background: light-dark(white, #1c1c1c);
  color: light-dark(#222, #f0f0f0);
}`}
            </pre>
          </div>
          <div className="col col--6">
            <h3 className={styles.codeHeading}>Dim submit on invalid &mdash; no JS</h3>
            <pre className={styles.codeBlock}>
{`.bf-form-modern:has(:invalid) [type="submit"] {
  opacity: 0.6;
  cursor: not-allowed;
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStartedSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Three ways to start</Heading>
        <div className="row">
          <div className="col col--4">
            <h3 className={styles.codeHeading}>CDN</h3>
            <pre className={styles.codeBlock}>
{`<link rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bullframe.css@latest">`}
            </pre>
            <p className={styles.startNote}>Fastest. Pin to <code>@6</code> once the v6 release is on npm.</p>
          </div>
          <div className="col col--4">
            <h3 className={styles.codeHeading}>npm</h3>
            <pre className={styles.codeBlock}>
{`npm install bullframe.css

@import 'bullframe.css';
@import 'bullframe.css/dark';
@import 'bullframe.css/classless';`}
            </pre>
            <p className={styles.startNote}>Subpath exports for every variant.</p>
          </div>
          <div className="col col--4">
            <h3 className={styles.codeHeading}>Download</h3>
            <pre className={styles.codeBlock}>
{`# Grab the latest release tarball
curl -L https://github.com/marcop135/\\
bullframe.css/releases/latest`}
            </pre>
            <p className={styles.startNote}>Self-host. Source maps included.</p>
          </div>
        </div>
        <div className={styles.finalCta}>
          <Link className="button button--primary button--lg" to="/docs/getting-started">
            Read the v6 docs &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — one design system, three ways to write it`}
      description="Bullframe CSS: classless, class-based, and utility-first under one --bf-* token system. ~8 KB gzipped. Zero JavaScript. WCAG AA defaults. Native CSS via PostCSS.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <VariantsSection />
        <GetStartedSection />
        <ModernSection />
      </main>
    </Layout>
  );
}
