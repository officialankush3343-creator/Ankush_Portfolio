'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp, stagger } from '@/utils/animations';
import { whyHireMe } from '@/data/achievementsData';
import styles from './WhyHireMe.module.css';

export default function WhyHireMe() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="why-hire-me" className={`section ${styles.why}`}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.header}
        >
          <motion.span className="section-eyebrow" variants={fadeUp}>
            Why Hire Me
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            The unfair <span className="gradient-text">advantage</span> you get.
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Hiring is hard. Here's what you can expect when we work together —
            and what makes the difference between a website and a&nbsp;wow.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {whyHireMe.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
              className={styles.card}
              data-cursor="hover"
            >
              <span className={styles.cardBg} style={{ background: item.accent }} aria-hidden="true" />
              <div className={styles.emoji} style={{ background: `${item.accent}22` }}>
                <span>{item.emoji}</span>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
              <span className={styles.index}>0{i + 1}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
