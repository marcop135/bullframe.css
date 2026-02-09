import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lightning Fast',
    Svg: require('@site/static/img/feature-lightning.svg').default,
    description: (
      <>
        Native CSS with PostCSS. No Sass compilation overhead. Small bundle size (~8KB gzipped).
      </>
    ),
  },
  {
    title: 'CSS Custom Properties',
    Svg: require('@site/static/img/feature-custom.svg').default,
    description: (
      <>
        All variables use CSS custom properties. Easy to customize and theme without rebuilding.
      </>
    ),
  },
  {
    title: 'Fully Responsive',
    Svg: require('@site/static/img/feature-responsive.svg').default,
    description: (
      <>
        Mobile-first design with flexible grid system. Works perfectly on all screen sizes.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
