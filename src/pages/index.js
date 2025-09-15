import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, { useState, useEffect } from 'react';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (

    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        padding: '0rem 0',
        background: 'linear-gradient(90deg, #4f8cff 0%, #6ee7b7 100%)',
      }}
    >
      <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>

      {/* EGO PICTURE
      <section className={styles.introSection}>
        <div className="container">
          <div className="text--center margin-bottom--lg">
            <img
              src={require('/img/homepage.png').default}
              alt="Alter-Ego Introduction"
              style={{ width: '100%', maxWidth: '700px', height: 'auto' }}
              className={styles.introImage}
            />
          </div>
        </div> 
      </section> */}


        <Heading
          as="h1"
          className="hero__title"
          style={{
            fontSize: '10rem',
            fontWeight: 210000,
            letterSpacing: '-1px',
            textShadow: '0 2px 16px rgba(0, 0, 0, 0.15)',
            marginBottom: '-0.5rem',
          }}
        >
          {siteConfig.title}
        </Heading>

        <p
          className="hero__subtitle"
          style={{
            fontSize: '1.7rem',
            marginBottom: '3rem',
            color: '#f0f9ff',
            textShadow: '0 1px 8px rgba(0,0,0,0.10)',
          }}
        >
          {siteConfig.tagline}
        </p>

        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{
              fontSize: '1.25rem',
              padding: '1rem 2.5rem',
              borderRadius: '2rem',
              boxShadow: '0 4px 16px rgba(79,140,255,0.15)',
              backgroundColor: '#0d57dfff',
              color: '#fff',
              border: 'none',
            }}
            to="/docs/tutorials/intro"
          >
            Let's get started with Ego!
          </Link>
        </div> */}

        {/* EGO PICTURE */}
                {<img
          src={require('/img/homepage.png').default}
          alt="Alter-Ego Introduction"
          style={{ width: '100%', maxWidth: '800px', height: 'auto', marginBottom: '-0.5rem' }}
          className={styles.introImage}
        />}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* This is the homepage header component */}
      <HomepageHeader />
      <main>
        {/* Here you can add more content or components */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
