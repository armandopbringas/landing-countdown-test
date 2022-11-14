import styles from "./VideoSection.module.scss";

const embedVideos = [
  {
    topicVideo: "TEAM LATAM",
    embedVideo:"https://www.youtube.com/embed/JWVhVZSdbDE"
  },
  {
    topicVideo: "TRAVEL MEETS FASHION",
    embedVideo:"https://www.youtube.com/embed/O9FM11Ky4hs"
  },
  {
    topicVideo: "VELOCIDAD Y RIESGO",
    embedVideo:"https://www.youtube.com/embed/GJwQJ8Ofz40"
  },
  {
    topicVideo: "EXPERIENCIA MULTIMEDIA",
    embedVideo:"https://www.youtube.com/embed/xakmGTLq0nc"
  },
];

const VideoSection = () => {
  return (
    <>
      <h2 className={styles.videoSectionTitle}>CLARO SPORT EN SOCHI 2014</h2>
      <div className={styles.videoSectionContainer}>
        {embedVideos.map((circleVideo, key) => (
          <div className={styles.videoCircleContainer} key={key}>
            <figure>
              <iframe
                title="frame"
                frameBorder="0"
                src={circleVideo.embedVideo}
                className={styles.videoCircle}
              />
              <div className={styles.redMask}>
                <p className={styles.textMask}>
                  Los deportistas Latinoamericanos que participan en Sochi 2014
                </p>
              </div>
            </figure>
            <p className={styles.text}>{circleVideo.topicVideo}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoSection;
