'use client';

import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <video autoPlay muted loop className={styles.bgVideo}>
        <source src="/FullStackVideo.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <HeaderComponent />
      <div  id="home" className={styles.heroText}>
        <h1>Forging Ideas into Innovations</h1>
      </div>
    </main>
  );
}
