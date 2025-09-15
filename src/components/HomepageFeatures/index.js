import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBrain, 
  faHandsHelping, 
  faCompass, 
  faLanguage, 
  faHeartbeat, 
  faGraduationCap,
  faBuildingColumns,
  faFishFins,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const FeatureList = [
  {
    title: 'Advanced AI',
    icon: faBrain,
    color: '#6366f1', // Indigo
    description: (
      <>
        Our proprietary neural network allows Alter-Ego to learn from interactions and adapt to your personality and preferences.
      </>
    ),
  },
  {
    title: 'Human-like Interaction',
    icon: faHandsHelping,
    color: '#ec4899', // Pink
    description: (
      <>
        With 42 degrees of freedom, Alter-Ego moves with natural fluidity and can express a wide range of human emotions.
      </>
    ),
  },
  {
    title: 'Smart Navigation',
    icon: faCompass,
    color: '#3b82f6', // Blue
    description: (
      <>
        Utilizes advanced sensors and mapping technology to navigate complex environments with ease.
      </>
    ),
  },
  {
    title: 'Multilingual Capabilities',
    icon: faLanguage,
    color: '#8b5cf6', // Purple
    description: (
      <>
       Fluent in over 50 languages with real-time translation, making Alter-Ego the perfect companion for global citizens.
      </>
    ),
  },
  {
    title: 'Health Companion',
    icon: faHeartbeat,
    color: '#10b981', // Green
    description: (
      <>
        Can remind you to take medication or suggest when to seek medical attention.
      </>
    ),
  },
  {
    title: 'Personal Tutor',
    icon: faGraduationCap,
    color: '#f59e0b', // Yellow
    description: (
      <>
        From math to music, Alter-Ego can teach you new skills with infinite patience and personalized lesson plans.
      </>
    ),
  },
];

const GalleryList = [
  {
    title: 'Museum Guide',
    icon: faBuildingColumns,
    description: 'Alter-Ego can provide information about exhibits, answer questions, and enhance the visitor experience.',
  },
  {
    title: "Italia's Got Talent",
    video: 'https://www.youtube.com/embed/DJGeX3ddcJY?si=0U41T2c3xtEfRDGh',
    description: 'Alter-Ego showcased its skills on a popular talent show, impressing judges and audiences alike.',
  },
  {
    title: 'Aquarium Guide',
    icon: faFishFins,
    description: 'Alter-Ego can provide information about marine life, answer questions, and enhance the visitor experience.',
  },
];

function Feature({icon, title, description, color}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <div className={styles.iconContainer} style={{'--icon-color': color, '--icon-bg-color': `${color}20`}}>
            <FontAwesomeIcon icon={icon} className={styles.featureIcon} />
          </div>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function GalleryItem({ icon, title, description, video }) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.galleryCard}>
        <div className={styles.galleryMedia}>
          {video ? (
            <iframe
              src={video}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={styles.galleryVideo}
            ></iframe>
          ) : (
            <FontAwesomeIcon icon={icon} className={styles.galleryIcon} />
          )}
        </div>
        <div className={styles.galleryBody}>
          <Heading as="h3" className={styles.galleryTitle}>{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}



function Feature_({Svg, title, description}) {
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

/////////////////////











export default function HomepageFeatures() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className="text--center margin-bottom--lg">
              <Heading as="h2" className={styles.sectionTitle}>Revolutionary Features</Heading>
              <p className={styles.sectionSubtitle}>Alter-Ego combines cutting-edge technology with intuitive design to create <br /> the most advanced humanoid companion.</p>
          </div>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>




      <section className={styles.gallerySection}>
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <Heading as="h2" className={styles.sectionTitle}>Alter-Ego in Action</Heading>
            <p className={styles.sectionSubtitle}>See how Alter-Ego integrates seamlessly into daily life, from public assistance to personal companionship.</p>
          </div>
          <div className="row">
            {GalleryList.map((props, idx) => (
              <GalleryItem key={idx} {...props} />
            ))}
          </div>
          <div className="text--center margin-top--xl">
            <button className={clsx('button button--primary button--lg', styles.galleryButton)}>
              Check out our YouTube Channel
              <FontAwesomeIcon icon={faArrowRight} className={styles.buttonIcon} />
            </button>
          </div>


          {/* Uncomment this section if you want to add the old features */}
          {/* <div>
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {FeatureList_.map((props, idx) => (
                    <Feature_ key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          </div> */}

        </div>
      </section>
    </>
  );
}