'use client';
import styles from './TestimonialsComponent.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    text: 'Since integrating this solution into our workflow, we’ve experienced a significant improvement in efficiency and collaboration.',
    image: '/Sara.jpg',
  },
  {
    name: 'David Patel',
    role: 'Project Manager',
    text: 'I’ve tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.',
    image: '/David.jpg',
  },
  {
    name: 'Emily Carter',
    role: 'Operations Manager',
    text: 'The tool we’ve adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.',
    image: '/Emily.jpg',
  },
];

export default function TestimonialsComponent() {
  return (
    <section id="Testimonials" className={styles.testimonialsSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What people say
      </motion.h2>
      <motion.p
        className={styles.subheading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Discover what our satisfied customers have to say about their experiences with our products/services.
      </motion.p>

      <motion.div
        className={styles.cardScrollWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className={styles.cards}>
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Image
  src={t.image}
  alt={t.name}
  className={styles.avatar}
  width={60}
  height={60}
/>
              <h3>{t.name}</h3>
              <p className={styles.role}>{t.role}</p>
              <p className={styles.text}>{t.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
