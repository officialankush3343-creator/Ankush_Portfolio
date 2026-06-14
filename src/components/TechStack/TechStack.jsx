'use client';

import { motion } from 'framer-motion';
import { techMarquee } from '@/data/skillsData';
import styles from './TechStack.module.css';

export default function TechStack() {
  // Duplicate for seamless infinite marquee
  const items = [...techMarquee, ...techMarquee];

  return (
    <section id="tech-stack" className={styles.tech}>
      <div className={styles.label}>
        <span className={styles.dot} /> Tech I love working with
      </div>

      <div className={styles.marquee}>
        <motion.div
          className={styles.track}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
        >
          {items.map((t, i) => (
            <div className={styles.item} key={`${t.name}-${i}`}>
              <span className={styles.iconWrap} style={{ color: t.color }}>
                <t.Icon />
              </span>
              <span className={styles.name}>{t.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className={styles.marquee}>
        <motion.div
          className={styles.track}
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 44, repeat: Infinity, ease: 'linear' }}
        >
          {items.map((t, i) => (
            <div className={`${styles.item} ${styles.itemOutline}`} key={`b-${t.name}-${i}`}>
              <span className={styles.iconWrap} style={{ color: t.color }}>
                <t.Icon />
              </span>
              <span className={styles.name}>{t.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
