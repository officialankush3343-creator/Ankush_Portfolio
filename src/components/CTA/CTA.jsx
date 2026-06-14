'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import styles from './CTA.module.css';

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

  return (
    <section ref={ref} className={styles.cta}>
      <div className="container">
        <motion.div
          style={{ y, scale }}
          className={styles.panel}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.glow1} aria-hidden="true" />
          <div className={styles.glow2} aria-hidden="true" />
          <div className={styles.grid} aria-hidden="true" />

          <span className={styles.eyebrow}>
            <span className={styles.eyebrowDot} /> Let's collaborate
          </span>
          <h2 className={styles.title}>
            Ready to build something{' '}
            <span className="gradient-text">amazing</span> together?
          </h2>
          <p className={styles.sub}>
            From a single landing page to a full design system — I'd love to
            hear about your project.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`} data-cursor="hover">
              <span>Let's Talk</span>
              <FiArrowRight />
            </a>
            <a
              href="mailto:officialankush3343@gmail.com"
              className={`${styles.btn} ${styles.btnGhost}`}
              data-cursor="hover"
            >
              officialankush3343@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
