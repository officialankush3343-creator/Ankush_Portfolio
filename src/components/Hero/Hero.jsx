'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowDownCircle, FiArrowRight, FiDownload } from 'react-icons/fi';
import TypingText from './TypingText';
import Particles from './Particles';
import HeroScene from './HeroScene';
import styles from './Hero.module.css';

export default function Hero() {
  const wrapRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 120, damping: 18 });
  const smy = useSpring(my, { stiffness: 120, damping: 18 });

  const rotateY = useTransform(smx, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(smy, [-0.5, 0.5], [10, -10]);
  const translateX = useTransform(smx, [-0.5, 0.5], [-14, 14]);
  const translateY = useTransform(smy, [-0.5, 0.5], [-14, 14]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      mx.set(px);
      my.set(py);
    };
    const onLeave = () => {
      mx.set(0);
      my.set(0);
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [mx, my]);

  return (
    <section id="hero" ref={wrapRef} className={styles.hero}>
      <div className={styles.bgGrid} aria-hidden="true" />
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      <div className={styles.sceneWrap} aria-hidden="true">
        <HeroScene />
      </div>
      <Particles className={styles.particles} count={70} />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
        >
          <span className={styles.eyebrowDot} />
          Available for new projects · {new Date().getFullYear()}
        </motion.div>

        <h1 className={styles.title}>
          <RevealLine delay={0.7}>Hello, I'm</RevealLine>
          <RevealLine delay={0.85}>
            <span className="gradient-text">Ankush Panwar</span>
          </RevealLine>
        </h1>

        <motion.div
          className={styles.role}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
        >
          <span className={styles.roleLabel}>I'm a&nbsp;</span>
          <TypingText
            className={styles.typing}
            phrases={[
              'Frontend Designer',
              'React Developer',
              'Next.js Engineer',
              'UI Animation Craftsman',
            ]}
          />
        </motion.div>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.25 }}
        >
          I build beautiful, fast and interactive web experiences — pixel-perfect
          interfaces, buttery animations, and the kind of micro-interactions
          that make people smile.
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
        >
          <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`} data-cursor="hover">
            <span>Hire Me</span>
            <FiArrowRight />
          </a>
          <a
            href="/pdf/Ankush_New_Resume.pdf"
            download
            className={`${styles.btn} ${styles.btnGhost}`}
            data-cursor="hover"
          >
            <span>Download Resume</span>
            <FiDownload />
          </a>
        </motion.div>

        <motion.div
          className={styles.portraitWrap}
          style={{ rotateX, rotateY, x: translateX, y: translateY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <div className={styles.portraitRing} aria-hidden="true">
            <svg viewBox="0 0 200 200">
              <defs>
                <path
                  id="portraitText"
                  d="M 100, 100 m -88, 0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0"
                />
              </defs>
              <text fontSize="11" letterSpacing="6" fill="rgba(255,255,255,0.55)">
                <textPath href="#portraitText">
                  FRONTEND DEVELOPER · UI/UX · REACT · NEXT.JS · FRAMER MOTION ·
                </textPath>
              </text>
            </svg>
          </div>

          <div className={styles.portrait}>
            <div className={styles.portraitGlow} aria-hidden="true" />
            <img
              src="/Images/ankush.jpg"
              alt="Ankush Panwar"
              className={styles.portraitImage}
            />
            <svg
              className={styles.openToWork}
              viewBox="0 0 200 200"
              role="img"
              aria-label="Open to Work"
            >
              <defs>
                <path
                  id="otwTextPath"
                  d="M 100,100 m -92,0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0"
                />
                <linearGradient id="otwGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#04a754" />
                  <stop offset="50%" stopColor="#25e599" />
                  <stop offset="100%" stopColor="#04a754" />
                </linearGradient>
              </defs>

              <circle
                cx="100"
                cy="100"
                r="92"
                fill="none"
                stroke="url(#otwGradient)"
                strokeWidth="14"
                className={styles.otwRing}
              />

              <text
                fontSize="9.5"
                fontWeight="800"
                letterSpacing="2.6"
                fill="#ffffff"
              >
                <textPath href="#otwTextPath" startOffset="0">
                  #OPENTOWORK ★ #OPENTOWORK ★ #OPENTOWORK ★ #OPENTOWORK ★&#160;
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          className={styles.scrollHint}
          aria-label="Scroll to next section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <FiArrowDownCircle />
          <span>Scroll</span>
        </motion.a>
      </div>
    </section>
  );
}

function RevealLine({ children, delay = 0 }) {
  return (
    <span className={styles.lineMask}>
      <motion.span
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
        className={styles.lineInner}
      >
        {children}
      </motion.span>
    </span>
  );
}
