'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiMapPin, FiClock } from 'react-icons/fi';
import { fadeUp, stagger } from '@/utils/animations';
import { experiences } from '@/data/experienceData';
import styles from './Timeline.module.css';

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

  const { ref: headRef, inView: headInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="experience" className={`section ${styles.timeline}`}>
      <div className="container">
        <motion.div
          ref={headRef}
          variants={stagger(0.1)}
          initial="hidden"
          animate={headInView ? 'show' : 'hidden'}
          className={styles.header}
        >
          <motion.span className="section-eyebrow" variants={fadeUp}>
            Journey
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            A timeline of <span className="gradient-text">making things</span>.
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            Five years of shipping production interfaces — from freelance
            landing pages to leading frontend teams at fast-moving startups.
          </motion.p>
        </motion.div>

        <div ref={containerRef} className={styles.timelineWrap}>
          <div className={styles.spine} aria-hidden="true">
            <motion.div className={styles.spineFill} style={{ scaleY }} />
          </div>

          <ul className={styles.list}>
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} exp={exp} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index }) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const isLeft = index % 2 === 0;

  return (
    <motion.li
      ref={ref}
      className={`${styles.item} ${isLeft ? styles.itemLeft : styles.itemRight}`}
      initial={{ opacity: 0, y: 60, x: isLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.node} style={{ background: exp.accent, boxShadow: `0 0 20px ${exp.accent}` }} />

      <article className={styles.card}>
        <span
          className={styles.cardBorder}
          style={{
            background: `linear-gradient(135deg, ${exp.accent}, transparent 60%)`,
          }}
          aria-hidden="true"
        />
        <div className={styles.cardHead}>
          <div
            className={styles.companyBadge}
            style={{ background: `${exp.accent}22`, color: exp.accent }}
          >
            <FiBriefcase />
          </div>
          <div>
            <h3 className={styles.position}>{exp.position}</h3>
            <p className={styles.company}>
              <span>{exp.company}</span>
              <span className={styles.dot}>·</span>
              <span>{exp.type}</span>
            </p>
          </div>
        </div>

        <div className={styles.meta}>
          <span><FiClock /> {exp.duration}</span>
          <span><FiMapPin /> {exp.location}</span>
        </div>

        <ul className={styles.responsibilities}>
          {exp.responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </article>
    </motion.li>
  );
}
