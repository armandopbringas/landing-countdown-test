import React from 'react';
import styles from './VideoSection.module.scss';
import videoOne from '../../assets/team-latam.png';
import videoTwo from '../../assets/travel-meets-fashion.png';
import videoThree from '../../assets/velocidad-riesgo.png';
import videoFour from '../../assets/experiencia.png';

const VideoSection = () => {
  return (
    <div className={styles.videoSectionContainer}>
      <div>
        <h2 className={styles.videoSectionTitle}>CLARO SPORT EN SOCHI 2014</h2>
      </div>
      <div className={styles.circleVideosContainer}>
        <div className={styles.videoCircle}>
          <picture>
            <img
              alt='video'
              src={videoOne}
              className={styles.videoImgCircle}
            />
          </picture>
          <p>TEAM LATAM</p>
        </div>
        <div className={styles.videoCircle}>
          <picture>
            <img
              alt='video'
              src={videoTwo}
              className={styles.videoImgCircle}
            />
          </picture>
          <p>TRAVEL MEETS FASSHION</p>
        </div>
        <div className={styles.videoCircle}>
          <picture>
            <img
              alt='video'
              src={videoThree}
              className={styles.videoImgCircle}
            />
          </picture>
          <p>VELOCIDAD Y RIESGO</p>
        </div>
        <div className={styles.videoCircle}>
          <picture>
            <img
              alt='video'
              src={videoFour}
              className={styles.videoImgCircle}
            />
          </picture>
          <p>EXPERIENCIA MULIMEDIA</p>
        </div>        
      </div>
    </div>
  )
}

export default VideoSection