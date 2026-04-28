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
  const variants = [
    {
      name: 'Default',
      file: 'bullframe.css',
      who: 'Apps with their own components. Use .bf-* utilities where useful.',
    },
    {
      name: 'Classless',
      file: 'bullframe-classless.css',
      who: 'Plain HTML, no classes. Drop in on a blog post or a Markdown render.',
    },
    {
      name: 'Dark / System',
      file: 'bullframe-dark.css · bullframe-system-default.css',
      who: 'Always-dark, or auto-switch via prefers-color-scheme.',
    },
    {
      name: 'Utilities only',
      file: 'bullframe-utilities.css',
      who: 'You already have a reset. Just want the .bf-* helpers (grid, spacing, text).',
    },
    {
      name: 'Modern (v6.1+)',
      file: 'bullframe-modern.css',
      who: 'light-dark(), color-mix(), :has(), container queries. Browsers from 2024+.',
    },
  ];
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>Seven builds, one CDN</Heading>
        <p className={styles.sectionLede}>
          Pick the variant that matches how you write HTML. They share the same{' '}
          <code>--bf-*</code> tokens, so themes carry across.
        </p>
        <div className={clsx('row', styles.variantsRow)}>
          {variants.map((v) => (
            <div key={v.name} className="col col--4">
              <article className={styles.variantCard}>
                <h3 className={styles.variantName}>{v.name}</h3>
                <code className={styles.variantFile}>{v.file}</code>
                <p className={styles.variantWho}>{v.who}</p>
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
        <Heading as="h2" className={styles.sectionTitle}>What v6 brings</Heading>
        <p className={styles.sectionLede}>
          v6 is the first line built on native CSS. v5 stays supported for security fixes.
          v6.1 adds a <code>bullframe-modern.css</code> variant that demonstrates four 2024+
          features without breaking a single existing token.
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
            <h3 className={styles.codeHeading}>Compute hover from base</h3>
            <pre className={styles.codeBlock}>
{`/* No more hardcoded "blue-light" */
:root {
  --bf-blue-light: color-mix(
    in oklab, var(--bf-blue), black 18%
  );
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
          <div className="col col--6">
            <h3 className={styles.codeHeading}>Perceptually-uniform palette</h3>
            <pre className={styles.codeBlock}>
{`:root {
  --bf-blue-oklch:   oklch(40% 0.16 250);
  --bf-red-oklch:    oklch(55% 0.22  27);
  --bf-yellow-oklch: oklch(95% 0.18 100);
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
        <ModernSection />
        <GetStartedSection />
      </main>
    </Layout>
  );
}
