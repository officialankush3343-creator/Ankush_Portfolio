'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowUpRight } from 'react-icons/fi';
import { fadeUp, stagger } from '@/utils/animations';
import { services } from '@/data/servicesData';
import styles from './Services.module.css';

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.header}
        >
          <motion.span className="section-eyebrow" variants={fadeUp}>
            What I Do
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Services I <span className="gradient-text">offer</span>.
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            End-to-end frontend craftsmanship — from a single landing page to a
            full design system. Always shipped on time, always pixel-perfect.
          </motion.p>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const { Icon, title, description, bullets, accent } = service;
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 200, damping: 22 });
  const smy = useSpring(my, { stiffness: 200, damping: 22 });
  const rX = useTransform(smy, [-0.5, 0.5], [8, -8]);
  const rY = useTransform(smx, [-0.5, 0.5], [-10, 10]);

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rX, rotateY: rY, transformPerspective: 1000 }}
      className={styles.card}
      data-cursor="hover"
    >
      <span className={styles.borderGlow} style={{ '--accent': accent }} aria-hidden="true" />

      <div className={styles.cardInner}>
        <div className={styles.cardIndex}>0{index + 1}</div>

        <div className={styles.cardIcon} style={{ background: `${accent}22`, color: accent }}>
          <Icon />
        </div>

        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{description}</p>

        <ul className={styles.bullets}>
          {bullets.map((b) => (
            <li key={b}>
              <span className={styles.bulletDot} style={{ background: accent }} />
              {b}
            </li>
          ))}
        </ul>

        <a href="#contact" className={styles.cardCta}>
          <span>Discuss this</span>
          <FiArrowUpRight />
        </a>
      </div>
    </motion.div>
  );
}
