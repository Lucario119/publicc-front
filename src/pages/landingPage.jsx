import React from 'react';
import { BuyingCard } from '../components/buyingCard';
import { Forms } from '../components/forms';

import { RegisterData } from '../components/registerdata';
import styles from '../styles/pages/landingPage.module.css';

function LandingPage() {
  return (
    <section className={styles.landingPageContainer}>
      <RegisterData />
      <Forms />
      <BuyingCard />
    </section>
  );
}

export default LandingPage;
