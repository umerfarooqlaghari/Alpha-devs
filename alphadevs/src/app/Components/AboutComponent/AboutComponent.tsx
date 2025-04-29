'use client';
import styles from './AboutComponent.module.css';
import { motion } from 'framer-motion';

const timeline = [
  {
    date: '29th May, 2010',
    title: 'Heading 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod quis ver sapiente quia ex et facere consequatur non est.',
  },
  {
    date: '29th May, 2012',
    title: 'Heading 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod quis ver sapiente quia ex et facere consequatur non est.',
  },
  {
    date: '29th May, 2015',
    title: 'Heading 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod quis ver sapiente quia ex et facere consequatur non est.',
  },
  {
    date: '29th May, 2019',
    title: 'Heading 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quod quis ver sapiente quia ex et facere consequatur non est.',
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
