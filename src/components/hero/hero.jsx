import React from 'react';
import heroImage from '../../assets/hero-img.png';
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTextContainer}>
        <h2 className={styles.heroTitle}>
          Faltan
        </h2>
        <div className={styles.heroTimerContainer}>
          <div className={styles.circle}>
            <p className={styles.number}>00</p>
            <span>Días</span>
          </div>
          <div className={styles.circle}>
            <p className={styles.number}>00</p>
            <span>Hrs</span>
          </div>
          <div className={styles.circle}>
            <p className={styles.number}>00</p>
            <span>Min.</span>
          </div>
          <div className={styles.circle}>
            <p className={styles.number}>00</p>
            <span>Seg</span>
          </div>
        </div>
        <img 
          alt='hero'
          src={heroImage}
          className={styles.heroImage}
        />
      </div>
    </div>
  )
}

export default Hero