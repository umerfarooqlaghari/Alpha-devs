'use client';

import { motion } from 'framer-motion';
import styles from './ComingSoonPage.module.css';

export default function ComingSoonPage() {
  return (
    <main className={styles.main}>
      {/* Background Video */}
      <video autoPlay muted loop playsInline className={styles.bgVideo}>
        <source src="/ComingSoon.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className={styles.overlay}></div>

      {/* Animated Text */}
      <motion.div
        className={styles.textBlock}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: 'easeOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <h1>Launching Soon</h1>
        <p>Innovation is brewing. See you very soon!</p>
      </motion.div>
    </main>
  );
}
