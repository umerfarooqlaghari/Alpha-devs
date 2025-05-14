'use client';
import styles from './ServicesComponent.module.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const services = [
  { number: '01', title: 'WEB DEVELOPMENT', subtitle: 'EXPERTISE IN ALL TECH STACKS', right: 'MOST AQUIRED SERVICE', link: '/web-dev-services' },
  { number: '02', title: 'MOBILE DEVELOPMENT', subtitle: 'MOBILE DEVELOPMENT IOS AND GOOGLE PLAY', right: '', link: '/mobile-dev-services' },
  { number: '03', title: 'SOFTWARE CONSULTANCY', subtitle: 'SOFTWARE, PRODUCT & ARCHITECTURE CONSULTATION', right: 'MOST POPULAR SERVICE', link: '/software-consultancy-services' },
  { number: '04', title: 'SHOPIFY & WORDPRESS', subtitle: 'CUSTOMIZED NO-CODE E-COMMERCE STORES', right: '', link: '/no-code-development-services' },
  { number: '05', title: 'WEB DESIGN AND UI/UX', subtitle: 'UI/UX CUSTOM DESIGING & WIREFRAMING', right: '', link: '/ui&ux-services' },
  { number: '06', title: 'AI, ML & DEEP LEARNING', subtitle: 'EXPERT LEVEL AI INTEGRATION', right: '', link: '/artificial-intelligence-services' },
];

export default function ServicesComponent() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (link: string, idx: number) => {
    setActiveIndex(idx);
    setTimeout(() => {
      router.push(link);
    }, 700);
  };

  return (
    <section id="services" className={styles.section}>
      {services.map((s, idx) => (
        <motion.div
          key={idx}
          className={styles.serviceRow}
          whileHover={{ scale: 1.02 }}
          onClick={() => handleClick(s.link, idx)}
        >
          <div className={`${styles.overlay} ${activeIndex === idx ? styles.showOverlay : ''}`}></div>

          <div className={styles.left}>
            <div>
              <h3>{s.title}</h3>
              <p>{s.subtitle}</p>
            </div>
          </div>

          <div className={styles.right}>{s.right}</div>
        </motion.div>
      ))}
    </section>
  );
}
