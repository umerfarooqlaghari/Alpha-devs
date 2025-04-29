'use client';
import styles from './ServicesComponent.module.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const services = [
  { number: '01', title: 'BRANDING', subtitle: 'BRAND STRATEGY + IDENTITY', right: '& BEST SELLER BRAND TO SOCIAL', link: '/services/branding' },
  { number: '02', title: 'PACKAGING', subtitle: 'DESIGN', right: '', link: '/services/packaging' },
  { number: '03', title: 'SOCIAL MEDIA', subtitle: 'MONTHLY DESIGN + MANAGEMENT', right: '', link: '/services/social-media' },
  { number: '04', title: 'TEMPLATES', subtitle: 'CUSTOMIZED TEMPLATES FOR SOCIAL MEDIA', right: '', link: '/services/templates' },
  { number: '05', title: 'WEB DESIGN', subtitle: 'SQUARESPACE, SHOPIFY & WORDPRESS', right: '& BEST SELLER #5DAY BRAND TO WEB', link: '/services/web-design' },
  { number: '06', title: 'MONTHLY DESIGN', subtitle: 'SUPPORT FOR REGULAR DESIGN WORK', right: '', link: '/services/monthly-design' },
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
          {/* Always rendered */}
          <div className={`${styles.overlay} ${activeIndex === idx ? styles.showOverlay : ''}`}></div>

          <div className={styles.left}>
            <span className={styles.number}>({s.number})</span>
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
