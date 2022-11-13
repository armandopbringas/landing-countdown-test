import { useState } from 'react';
import heroImage from '../../assets/hero-img.png';
import CountDownTimer from '../ConuntDownTimer/CountDownTimer';
import styles from './hero.module.scss';

const Hero = () => {
  const decemberFirstInMs = 18 * 24 * 60 * 60 * 1000;
  const nowInMs = new Date().getTime();

  const dateTimeAfterThreeDays = nowInMs + decemberFirstInMs;
  const [targetDate, setTargetDate] = useState(new Date(dateTimeAfterThreeDays));

  return (
    <div className={styles.hero}>
      <div className={styles.heroTextContainer}>
        <h2 className={styles.heroTitle}>
          Faltan
        </h2>
        <div className={styles.heroTimerContainer}>
          <CountDownTimer targetDate={targetDate} />
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