import React from 'react';
import mainLogo from '../../assets/logo-sochi.png';
import claroSportsLogo from '../../assets/logo-claro-sports.png';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header  className={styles.headerContainer}>
      <picture>
        <img 
          alt='logo'
          src={mainLogo}
          className={styles.imgSize}
        />
      </picture>
      <picture>
        <img 
          src={claroSportsLogo} 
          alt='Claro sports logo'
          className={styles.imgSize}
        />
      </picture>
    </header>
  )
}

export default Header