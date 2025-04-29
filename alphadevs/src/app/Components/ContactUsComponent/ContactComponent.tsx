'use client';
import styles from './ContactComponent.module.css';

export default function ContactComponent() {
  return (
    <section id="Contact" className={styles.contactSection}>
      <div className={styles.contactLeft}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subheading}>Feel free to contact us and we will get back to you as soon as we can.</p>

        <form className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email address" />
          <textarea rows={4} placeholder="Tell us all about it" />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className={styles.contactRight}>
        <div className={styles.infoBlock}>
          <h4>opening hours</h4>
          <p>Monday – Friday<br /><strong>9am — 5pm</strong></p>
        </div>

        <div className={styles.infoBlock}>
          <h4>address</h4>
          <p>D-11, PCSIR Labs,<br />Karachi, Sindh 75330,<br />Pakistan</p>
        </div>

        <div className={styles.infoBlock}>
          <h4>support</h4>
          <p>info@alpha-devs.cloud<br />+92 300 9243063</p>
        </div>
      </div>
    </section>
  );
}
