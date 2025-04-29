'use client';
import styles from './ContactComponent.module.css';

export default function ContactComponent() {
  return (
    <section id="Contact" className={styles.contactSection}>
      <div className={styles.contactLeft}>
        <p className={styles.smallText}>say hi to the team</p>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subheading}>Feel free to contact us and we will get back to you as soon as we can.</p>

        <form className={styles.form}>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email address" />
          <textarea rows={4} placeholder="tell us all about it" />
          <button type="submit">send</button>
        </form>
      </div>

      <div className={styles.contactRight}>
        <div className={styles.infoBlock}>
          <h4>opening hours</h4>
          <p>Monday – Friday<br /><strong>9am — 5pm</strong><br />Weekend<br />Closed</p>
        </div>

        <div className={styles.infoBlock}>
          <h4>address</h4>
          <p>Jln. Letjend Suprapman 5L,<br />Kediri, Jawa Timur 64133,<br />Indonesia</p>
        </div>

        <div className={styles.infoBlock}>
          <h4>support</h4>
          <p>hello@lahoi.com<br />+62 21 6539-0605</p>
        </div>
      </div>
    </section>
  );
}
