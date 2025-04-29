'use client';
import Link from 'next/link';
import styles from './HeaderComponent.module.css';
import { useState } from 'react';
// import Link from 'next/link';

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Alpha Devs</div>
      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}>
      <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
      <a href="#About" onClick={() => setMenuOpen(false)}>About</a>
      <a href="#Testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
      <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </header>
  );
};

export default HeaderComponent;
