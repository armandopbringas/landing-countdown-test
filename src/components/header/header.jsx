import React, { useRef, useLayoutEffect } from 'react'
import mainLogo from '../../assets/logo-sochi.png';
import claroSportsLogo from '../../assets/logo-claro-sports.png';
import styles from './header.module.scss';

const Header = () => {
    const stickyHeader = useRef();
    
    useLayoutEffect(() => {
      const mainHeader = document.getElementById('mainHeader');
      
      let fixedTop = stickyHeader.current.offsetTop;
      
      const fixedHeader = () => {
        if (window.pageYOffset > fixedTop) {
          mainHeader.classList.add(`${styles.fixedTop}`);
        } else {
          mainHeader.classList.remove(`${styles.fixedTop}`);
        }
      }
      window.addEventListener('scroll', fixedHeader);
    }, []);

  return (
    <header className={styles.headerContainer} id='mainHeader' ref={stickyHeader}>
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
  );
}

export default Header