'use client';
import styles from './AboutComponent.module.css';
import { motion } from 'framer-motion';

const timeline = [
  {
    date: '2nd Feb, 2025',
    title: 'Idea of Alpha-Devs',
    description: 'The vision for Alpha-devs was born, aiming to revolutionize the world of custom software development.',
  },
  {
    date: '28th Feb, 2025',
    title: 'Breaking the ice',
    description: 'Alpha-devs officially launched, offering full-stack development solutions to startups and enterprises.',
  },
  {
    date: '3rd March, 2025',
    title: 'Breakthrough',
    description: 'Secured and delivered our first international project, marking a major milestone in Alpha-devs’ journey.',
  },
  {
    date: '23rd April, 2025',
    title: 'Team of 10',
    description: 'Grew into a passionate team of 10 talented developers, designers, and innovators driving growth forward.',
  },
];


export default function AboutComponent() {
  return (
    
    <section id="About" className={styles.timelineContainer}>
        <h2 className={styles.sectionTitle}>About Us</h2>
      <div className={styles.timelineLine}></div>
      {timeline.map((item, idx) => {
        const isLeft = idx % 2 !== 0;

        return (
          <motion.div
            key={idx}
            className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Date on top of card */}
            <div className={styles.date}>{item.date}</div>

            {/* Card + dot wrapper */}
            <div className={styles.cardWrapper}>
              <span className={styles.dot}></span>
              <div className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
