import styles from "./VideoSection.module.scss";

const VideoSection = () => {
  return (
    <>
      <h2 className={styles.videoSectionTitle}>CLARO SPORT EN SOCHI 2014</h2>
      <div className={styles.videoSectionContainer}>
        <div className={styles.videoCircleContainer}>
          <figure>
            <iframe
              frameBorder="0"
              title="Inline Frame"
              className={styles.videoCircle}
              src="https://www.youtube.com/embed/JWVhVZSdbDE"
            />
            <div className={styles.redMask}>
              <p>
                Los deportistas Latinoamericanos que participan en Sochi 2014
              </p>
            </div>
          </figure>
          <p className={styles.text}>TEAM LATAM</p>
        </div>
        <div className={styles.videoCircleContainer}>
          <figure>
            <iframe
              frameBorder="0"
              title="Inline Frame Example"
              className={styles.videoCircle}
              src="https://www.youtube.com/embed/JWVhVZSdbDE"
            />
            <div className={styles.redMask}>
              <p>
                Los deportistas Latinoamericanos que participan en Sochi 2014
              </p>
            </div>
          </figure>
          <p className={styles.text}>TRAVEL MEETS FASHION</p>
        </div>
        <div className={styles.videoCircleContainer}>
          <figure>
            <iframe
              frameBorder="0"
              title="Inline Frame Example"
              className={styles.videoCircle}
              src="https://www.youtube.com/embed/JWVhVZSdbDE"
            />
            <div className={styles.redMask}>
              <p>
                Los deportistas Latinoamericanos que participan en Sochi 2014
              </p>
            </div>
          </figure>
          <p className={styles.text}>VELOCIDAD Y RIESGO</p>
        </div>
        <div className={styles.videoCircleContainer}>
          <figure>
            <iframe
              frameBorder="0"
              title="Inline Frame Example"
              className={styles.videoCircle}
              src="https://www.youtube.com/embed/JWVhVZSdbDE"
            />
            <div className={styles.redMask}>
              <p>
                Los deportistas Latinoamericanos que participan en Sochi 2014
              </p>
            </div>
          </figure>
          <p className={styles.text}>EXPERIENCIA MULTIMEDIA</p>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
