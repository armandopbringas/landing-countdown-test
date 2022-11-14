import { useState, useEffect } from "react";
import heroImage from "../../assets/hero-img.png";
import styles from "./hero.module.scss";

const Hero = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const waitedDate = +new Date(`${year}-12-1`) - +new Date();
    let timeLeft = {};

    if (waitedDate > 0) {
      timeLeft = {
        DÍAS: Math.floor(waitedDate / (1000 * 60 * 60 * 24)),
        HRS: Math.floor((waitedDate / (1000 * 60 * 60)) % 24),
        MIN: Math.floor((waitedDate / 1000 / 60) % 60),
        SEG: Math.floor((waitedDate / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <>
        <div className={styles.circle}>
          <p className={styles.number}>{timeLeft[interval]}</p>
          <p className={styles.times}>
            <strong>{interval} </strong>
          </p>
        </div>
      </>
    );
  });

  return (
    <div className={styles.hero}>
      <div className={styles.heroTextContainer}>
        <h2 className={styles.heroTitle}>Faltan</h2>
        <div className={styles.heroTimerContainer}>
          {timerComponents.length ? (
            timerComponents
          ) : (
            <span className={styles.expiredDate}>Es hoy! Es hoy!</span>
          )}
        </div>
        <img alt="hero" src={heroImage} className={styles.heroImage} />
      </div>
    </div>
  );
};

export default Hero;
