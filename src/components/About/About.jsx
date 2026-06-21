'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { FiCheck } from 'react-icons/fi';
import { fadeUp, stagger } from '@/utils/animations';
import { funFacts } from '@/data/achievementsData';
import { formatYears, getYearsLabel } from '@/utils/experience';
import styles from './About.module.css';


const HIGHLIGHTS = [
  'Production React & Next.js apps',
  'Design systems & accessibility',
  'Animation & motion design',
  'Performance-first engineering',
];
 

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.div
          ref={ref}
          className={styles.grid}
          variants={stagger(0.12)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div className={styles.left} variants={fadeUp}>
            <div className={styles.imageWrap}>
              <div className={styles.imageGlow} aria-hidden="true" />
              <div className={styles.imageInner}>
                <div className={styles.imagePlaceholder}>
                  <img
                    src="/Images/ankush.jpg"
                    alt="Ankush Panwar"
                    className={styles.image}
                  />
                </div>
                <div className={styles.imageOverlay} aria-hidden="true" />
              </div>

              <div className={styles.floatCard1}>
                <div className={styles.floatBadge}>
                  <span className={styles.dotGreen} /> Available
                </div>
              </div>
              <div className={styles.floatCard2}>
                <div className={styles.floatStat}>
                  <span className={styles.floatNum}>{getYearsLabel()}</span>
                  <span className={styles.floatLabel}>Years<br />Experience</span>
                </div>
              </div>
              <div className={styles.floatCard3}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Next.js</span>
                <span className={styles.tag}>Framer</span>
              </div>
            </div>
          </motion.div>

          <div className={styles.right}>
            <motion.span className="section-eyebrow" variants={fadeUp}>
              About Me
            </motion.span>

            <motion.h2 className="section-title" variants={fadeUp}>
              Crafting digital experiences that
              <span className="gradient-text"> feel alive</span>.
            </motion.h2>

            <motion.p className={styles.body} variants={fadeUp}>
              I'm Ankush — a Frontend Designer at DESIGNERSX with a designer's eye
              and an animator's heart. For the last {formatYears()} years, I've been
              turning Figma files into living, breathing interfaces that load fast,
              feel premium, and convert visitors into believers.
            </motion.p>
            <motion.p className={styles.body} variants={fadeUp}>
              I specialise in React, Next.js, and the kind of motion design
              that makes recruiters stop scrolling — shipping production work
              across AI SaaS (Rexpt), healthcare (BrunoMD, Bruno Vision Care)
              and e-commerce (Beauty Fashion Sales, Formoline) for clients
              across geographies.
            </motion.p>

            <motion.ul className={styles.highlights} variants={fadeUp}>
              {HIGHLIGHTS.map((h) => (
                <li key={h}>
                  <span className={styles.checkIcon}><FiCheck /></span>
                  {h}
                </li>
              ))}
            </motion.ul>

            <motion.div className={styles.stats} variants={fadeUp}>
              {funFacts.slice(0, 3).map((s) => (
                <div key={s.id} className={styles.stat}>
                  <span className={styles.statNum}>
                    {inView ? (
                      <CountUp
                        end={s.value}
                        duration={2.4}
                        suffix={s.suffix}
                        decimals={Number.isInteger(s.value) ? 0 : 1}
                      />
                    ) : (
                      `0${s.suffix}`
                    )}
                  </span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
