import Header from '../components/header/header';
import Hero from '../components/hero/hero';
import VideoSection from '../components/video-section/VideoSection';
import Footer from '../components/footer/footer';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <VideoSection />
      <Footer />
    </div>
  );
}

export default App;
