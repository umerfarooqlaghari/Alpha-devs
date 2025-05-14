'use client'

import styles from './MobileDevComponent.module.css'
import { motion } from 'framer-motion'

export default function WebDevelopmentPage() {

  return (
    <div className={styles.container}>
      {/* 🔹 Background Video */}
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/mobiledev.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Overlay Content */}
      <div className={styles.overlay}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.title}
        >
          MOBILE DEVELOPMENT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.subtitle}
        >
Cross-platform. Seamless. Optimized.        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className={styles.description}
        >
Integrate powerful AI and machine learning into your products. We build recommendation engines, NLP tools, computer vision systems, and more.        </motion.p>

        {/* 🔹 CTA Capsules */}
        <div className={styles.ctaContainer}>
          

          <motion.a
            href="https://www.upwork.com/freelancers/~015bb35b01027c8cb7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.capsule}
          >
             Hire Us on Upwork
          </motion.a>

                    <motion.a
            href="https://calendly.com/mumerfarooqlaghari/30min"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.capsule}
          >
             Book an appointment
          </motion.a>
        </div>
      </div>
    </div>
  )
}
