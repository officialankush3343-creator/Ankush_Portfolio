'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowLeft, FiArrowRight, FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import { fadeUp, stagger } from '@/utils/animations';
import { testimonials } from '@/data/testimonialsData';
import styles from './Testimonials.module.css';

const AUTOPLAY_MS = 5500;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const goTo = useCallback(
    (next) => {
      setDirection(next > index ? 1 : -1);
      setIndex(((next % testimonials.length) + testimonials.length) % testimonials.length);
    },
    [index]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return undefined;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [next, paused, index]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
    touchStartX.current = null;
  };

  const active = testimonials[index];

  return (
    <section id="testimonials" className={`section ${styles.testimonials}`}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.header}
        >
          <motion.span className="section-eyebrow" variants={fadeUp}>
            Kind Words
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            What clients <span className="gradient-text">say</span>.
          </motion.h2>
        </motion.div>

        <div
          className={styles.stage}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className={styles.quoteIcon} aria-hidden="true">
            <FaQuoteLeft />
          </div>

          <AnimatePresence custom={direction} mode="wait">
            <motion.article
              key={active.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={styles.card}
            >
              <p className={styles.quote}>"{active.quote}"</p>

              <div className={styles.author}>
                <div className={styles.avatarWrap}>
                  <span className={styles.avatarRing} aria-hidden="true" />
                  {/* Avatar uses background-image to avoid Next image domain issues if offline */}
                  <span
                    className={styles.avatar}
                    style={{ backgroundImage: `url(${active.avatar})` }}
                    role="img"
                    aria-label={`${active.name} avatar`}
                  />
                </div>
                <div className={styles.authorMeta}>
                  <strong className={styles.name}>{active.name}</strong>
                  <span className={styles.role}>
                    {active.role} · {active.company}
                  </span>
                  <div className={styles.rating} aria-label={`Rated ${active.rating} out of 5`}>
                    {Array.from({ length: active.rating }).map((_, i) => (
                      <FiStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className={styles.controls}>
            <button type="button" onClick={prev} className={styles.navBtn} aria-label="Previous" data-cursor="hover">
              <FiArrowLeft />
            </button>
            <div className={styles.dots} role="tablist">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-selected={i === index}
                  role="tab"
                />
              ))}
            </div>
            <button type="button" onClick={next} className={styles.navBtn} aria-label="Next" data-cursor="hover">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
