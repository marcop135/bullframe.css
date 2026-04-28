import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const stats = [
  {
    value: '~8 KB',
    label: 'Gzipped',
    detail: 'Default build (bullframe.min.css). Includes reset, typography, forms, grid, utilities.',
  },
  {
    value: '0 / 0',
    label: 'JS / dependencies',
    detail: 'Zero JavaScript. Zero runtime deps. Just one stylesheet.',
  },
  {
    value: 'AA',
    label: 'WCAG contrast',
    detail: 'Default tokens meet 4.5:1 on white and on dark. No accessibility audit homework.',
  },
  {
    value: '3',
    label: 'Authoring modes',
    detail: 'Classless, class-based, utility-first — same package, same --bf-* tokens, switch the import.',
  },
];

function Stat({value, label, detail}) {
  return (
    <div className={clsx('col col--3', styles.statCol)}>
      <div className={styles.statCard}>
        <div className={styles.statValue}>{value}</div>
        <div className={styles.statLabel}>{label}</div>
        <p className={styles.statDetail}>{detail}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <Heading as="h2" className={styles.statsTitle}>By the numbers</Heading>
        <div className="row">
          {stats.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
