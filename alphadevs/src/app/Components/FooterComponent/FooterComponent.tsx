'use client';
import styles from './FooterComponent.module.css';

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.leftBlock}>
          <p className={styles.potency}>Uncover the potency of Alpha Devs at</p>
          <h2 className={styles.email}>Info@AlphaDevs.com</h2>

          <ul className={styles.navLinks}>
            <li>Services</li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

          <h1 className={styles.logo}>Alpha Devs</h1>
        </div>
       <a href="contact">
        <div className={styles.rightBlock}>
        
          <div className={styles.getStartedBox}>
          <span>Contact us, </span>
            <button> Through here →</button>
          </div>
        </div>
        </a>
      </div>

      <div className={styles.bottomSection}>
        <span>Copyright © AlphaDevs 2025</span>
        <span>📍 Karachi, Pakistan</span>
        <span><a href='https://www.upwork.com/freelancers/~015bb35b01027c8cb7'>Upwork</a></span>
        <span><a href='https://www.linkedin.com/company/cenrjy/'>LinkedIn</a></span>
      </div>
    </footer>
  );
}
