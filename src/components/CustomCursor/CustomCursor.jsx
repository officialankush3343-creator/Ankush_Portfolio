'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState('default');
  const [label, setLabel] = useState('');

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 380, mass: 0.5 };
  const dotX = useSpring(x, springConfig);
  const dotY = useSpring(y, springConfig);
  const ringX = useSpring(x, { damping: 22, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(y, { damping: 22, stiffness: 180, mass: 0.6 });

  const lastTarget = useRef(null);

  useEffect(() => {
    const isFinePointer =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return undefined;

    document.body.classList.add('custom-cursor-active');
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleOver = (e) => {
      const t = e.target.closest(
        'a, button, [data-cursor], input, textarea, select, label'
      );
      if (t === lastTarget.current) return;
      lastTarget.current = t;

      if (!t) {
        setVariant('default');
        setLabel('');
        return;
      }
      const cursor = t.getAttribute('data-cursor');
      if (cursor) {
        setVariant(cursor);
        setLabel(t.getAttribute('data-cursor-label') || '');
      } else if (t.matches('input, textarea')) {
        setVariant('text');
        setLabel('');
      } else {
        setVariant('hover');
        setLabel('');
      }
    };

    window.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className={`${styles.ring} ${styles[`v_${variant}`]}`}
        style={{ x: ringX, y: ringY }}
      >
        {label ? <span className={styles.label}>{label}</span> : null}
      </motion.div>
      <motion.div
        className={`${styles.dot} ${styles[`v_${variant}`]}`}
        style={{ x: dotX, y: dotY }}
      />
    </>
  );
}
