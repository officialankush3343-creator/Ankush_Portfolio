'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { fadeUp, stagger } from '@/utils/animations';
import { funFacts } from '@/data/achievementsData';
import styles from './FunFacts.module.css';

export default function FunFacts() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="fun-facts" className={styles.facts}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.grid}
        >
          {funFacts.map((f) => (
            <motion.div key={f.id} variants={fadeUp} className={styles.card}>
              <span className={styles.value}>
                {inView ? (
                  <CountUp
                    end={f.value}
                    duration={2.6}
                    suffix={f.suffix}
                    decimals={Number.isInteger(f.value) ? 0 : 1}
                  />
                ) : (
                  `0${f.suffix}`
                )}
              </span>
              <span className={styles.label}>{f.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
