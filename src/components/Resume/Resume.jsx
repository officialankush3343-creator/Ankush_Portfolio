'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload, FiEye, FiFileText, FiX } from 'react-icons/fi';
import { fadeUp, stagger } from '@/utils/animations';
import styles from './Resume.module.css';

const RESUME_PATH = '/pdf/Ankush_New_Resume.pdf';

const HIGHLIGHTS = [
  { label: 'Years Experience', value: '2.5+' },
  { label: 'Projects Shipped', value: '50+' },
  { label: 'Specialty', value: 'Frontend' },
];

export default function Resume() {
  const [showViewer, setShowViewer] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="resume" className={`section ${styles.resume}`}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.wrap}
        >
          <div className={styles.left}>
            <motion.span className="section-eyebrow" variants={fadeUp}>
              Résumé
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp}>
              Want the <span className="gradient-text">full story</span>?
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp}>
              Grab my résumé for a complete breakdown of my experience,
              accomplishments, and the stack I work with day-to-day.
            </motion.p>

            <motion.div className={styles.highlights} variants={fadeUp}>
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className={styles.highlight}>
                  <span className={styles.highlightValue}>{h.value}</span>
                  <span className={styles.highlightLabel}>{h.label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div className={styles.actions} variants={fadeUp}>
              <button
                type="button"
                onClick={() => setShowViewer(true)}
                className={`${styles.btn} ${styles.btnGhost}`}
                data-cursor="hover"
              >
                <FiEye /> Preview
              </button>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noreferrer"
                className={`${styles.btn} ${styles.btnGhost}`}
                data-cursor="hover"
              >
                <FiFileText /> View PDF
              </a>
              <a
                href={RESUME_PATH}
                download
                className={`${styles.btn} ${styles.btnPrimary}`}
                data-cursor="hover"
              >
                <FiDownload /> Download
              </a>
            </motion.div>
          </div>

          <motion.div className={styles.right} variants={fadeUp}>
            <button
              type="button"
              onClick={() => setShowViewer(true)}
              className={styles.card}
              data-cursor="more"
              data-cursor-label="Preview"
            >
              <span className={styles.cardGlow} aria-hidden="true" />
              <span className={styles.cardLabel}>RESUME · 2025</span>
              <span className={styles.cardName}>Ankush Panwar</span>
              <span className={styles.cardRole}>Frontend UI/UX Developer</span>

              <ul className={styles.cardList}>
                <li>React · Next.js · Framer Motion</li>
                <li>Design Systems · Accessibility</li>
                <li>2.5+ years · 50+ projects</li>
              </ul>

              <span className={styles.cardCorner} aria-hidden="true">
                <FiFileText />
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {showViewer && (
        <motion.div
          className={styles.viewerBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowViewer(false)}
        >
          <motion.div
            className={styles.viewer}
            initial={{ y: 40, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowViewer(false)}
              aria-label="Close resume viewer"
              className={styles.viewerClose}
              data-cursor="hover"
            >
              <FiX />
            </button>
            <iframe
              src={RESUME_PATH}
              className={styles.viewerFrame}
              title="Ankush Panwar Resume"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
