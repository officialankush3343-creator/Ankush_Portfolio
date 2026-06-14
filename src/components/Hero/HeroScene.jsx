'use client';

import { motion } from 'framer-motion';
import styles from './HeroScene.module.css';

/**
 * Lightweight, dependency-free "3D-feel" hero backdrop.
 * Pure SVG + CSS + Framer Motion — no Three.js / R3F required.
 * Achieves the same premium effect (floating geometry, glow, drift)
 * without the React reconciler / version compatibility issues.
 */
export default function HeroScene() {
  return (
    <div className={styles.scene} aria-hidden="true">
      {/* Big drifting gradient orbs */}
      <motion.div
        className={`${styles.orb} ${styles.orb1}`}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={`${styles.orb} ${styles.orb2}`}
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 30, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* SVG floating geometry */}
      <svg className={styles.shape1} viewBox="0 0 200 200" fill="none">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7c5cff" />
            <stop offset="100%" stopColor="#00e0ff" />
          </linearGradient>
        </defs>
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        >
          <circle cx="100" cy="100" r="80" stroke="url(#ringGrad)" strokeWidth="1.5" opacity="0.6" />
          <circle cx="100" cy="100" r="62" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.4" strokeDasharray="4 6" />
          <circle cx="100" cy="20" r="3" fill="#00e0ff" />
        </motion.g>
      </svg>

      <svg className={styles.shape2} viewBox="0 0 200 200" fill="none">
        <defs>
          <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5ec4" />
            <stop offset="100%" stopColor="#7c5cff" />
          </linearGradient>
        </defs>
        <motion.polygon
          points="100,12 175,55 175,145 100,188 25,145 25,55"
          stroke="url(#hexGrad)"
          strokeWidth="1.5"
          fill="rgba(255,94,196,0.04)"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        />
      </svg>

      <svg className={styles.shape3} viewBox="0 0 200 200" fill="none">
        <defs>
          <linearGradient id="triGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00e0ff" />
            <stop offset="100%" stopColor="#7c5cff" />
          </linearGradient>
        </defs>
        <motion.polygon
          points="100,20 180,170 20,170"
          stroke="url(#triGrad)"
          strokeWidth="1.5"
          fill="rgba(0,224,255,0.04)"
          animate={{ rotate: -360 }}
          transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 110px' }}
        />
      </svg>

      <svg className={styles.shape4} viewBox="0 0 200 200" fill="none">
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '100px 100px' }}
        >
          <rect x="40" y="40" width="120" height="120" rx="18" stroke="#ffb547" strokeWidth="1.5" opacity="0.55" fill="rgba(255,181,71,0.04)" />
          <rect x="60" y="60" width="80" height="80" rx="12" stroke="#ffb547" strokeWidth="1" opacity="0.35" strokeDasharray="3 5" />
        </motion.g>
      </svg>

      {/* Floating dots */}
      <motion.span
        className={`${styles.dot} ${styles.dotA}`}
        animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className={`${styles.dot} ${styles.dotB}`}
        animate={{ y: [0, 18, 0], opacity: [0.4, 0.9, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      />
      <motion.span
        className={`${styles.dot} ${styles.dotC}`}
        animate={{ y: [0, -16, 0], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
      />
    </div>
  );
}
