import React from 'react';
import styles from './footer.module.scss';
import footerLogo from '../../assets/logo-sochi-color.png';
import mobilIcon from '../../assets/mobli-icon.png';
import twitterIcon from '../../assets/twitter.png';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <span className={styles.textFooter}>
        Aviso de privacidad / Contacto
      </span>
      <picture>
        <img 
          src={footerLogo}
          alt='logo'
        />
      </picture>
      <div className={styles.soscialMediaIconsRow}>
        <picture className={styles.logoContainer}>
          <img
            alt=''
            src={mobilIcon}
            className={styles.logoIcon}
          />
        </picture>
        <picture className={styles.logoTwitterContainer}>
          <img
            alt=''
            src={twitterIcon}
            className={styles.logoIcon}
          />
        </picture>
        <picture className={styles.logoFbContainer}>
          <img
            alt=''
            src={mobilIcon}
            className={styles.logoIcon}
          />
        </picture>
        <picture className={styles.logoYtVontainer}>
          <img
            alt=''
            src={mobilIcon}
            className={styles.logoIcon}
          />
        </picture>
      </div>
    </footer>
  )
}

export default Footer