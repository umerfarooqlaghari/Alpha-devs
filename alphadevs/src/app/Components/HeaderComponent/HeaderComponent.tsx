'use client';

import { useState } from 'react';
import styles from './HeaderComponent.module.css';
import { usePathname, useRouter } from 'next/navigation';

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (id: string) => {
    setMenuOpen(false);

    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Alpha Devs</div>
      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}>
        <a onClick={() => handleNavClick('home')}>Home</a>
        <a onClick={() => handleNavClick('services')}>Services</a>
        <a onClick={() => handleNavClick('About')}>About</a>
        <a onClick={() => handleNavClick('Testimonials')}>Testimonials</a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>
      <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </header>
  );
};

export default HeaderComponent;
