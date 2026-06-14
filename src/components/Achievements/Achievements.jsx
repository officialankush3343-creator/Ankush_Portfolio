'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp, stagger } from '@/utils/animations';
import { achievements } from '@/data/achievementsData';
import styles from './Achievements.module.css';

export default function Achievements() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="achievements" className={`section ${styles.achievements}`}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.header}
        >
          <motion.span className="section-eyebrow" variants={fadeUp}>
            Achievements
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Awards, certificates &{' '}
            <span className="gradient-text">milestones</span>.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.grid}
        >
          {achievements.map((a) => (
            <motion.div
              key={a.id}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.35 }}
              className={styles.card}
              data-cursor="hover"
            >
              <span
                className={styles.bgGlow}
                style={{ background: a.accent }}
                aria-hidden="true"
              />
              <div className={styles.cardHead}>
                <span
                  className={styles.iconWrap}
                  style={{ background: `${a.accent}1f`, color: a.accent }}
                >
                  <a.Icon />
                </span>
                <span className={styles.year}>{a.year}</span>
              </div>
              <h3 className={styles.title}>{a.title}</h3>
              <p className={styles.issuer}>{a.issuer}</p>
              <p className={styles.desc}>{a.description}</p>
              <span
                className={`${styles.tag} ${styles[`tag_${a.type}`]}`}
              >
                {a.type}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
