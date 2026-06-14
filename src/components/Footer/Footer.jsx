'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import styles from './Footer.module.css';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const SOCIALS = [
  { href: 'https://github.com/', Icon: FaGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/', Icon: FaLinkedinIn, label: 'LinkedIn' },
  { href: 'https://instagram.com/', Icon: FaInstagram, label: 'Instagram' },
  { href: 'mailto:officialankush3343@gmail.com', Icon: FiMail, label: 'Email' },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.6 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <a href="#hero" className={styles.brand}>
            <span className={styles.brandMark}>AP</span>
            <span className={styles.brandText}>
              Ankush<span className={styles.brandDot}>.</span>Panwar
            </span>
          </a>

          <p className={styles.tagline}>
            Designing & building delightful interfaces for the web — one
            interaction at a time.
          </p>

          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className={styles.socialBtn}
                data-cursor="hover"
              >
                <s.Icon />
              </a>
            ))}
          </div>
        </div>

        <nav className={styles.nav} aria-label="Footer">
          <ul className={styles.navList}>
            {NAV.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Ankush Panwar. Crafted with{' '}
            <span className={styles.heart}>♥</span> in Next.js.
          </p>
          <p className={styles.signature}>
            Designed & developed by <span className="gradient-text">Ankush Panwar</span>
          </p>
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className={styles.toTop}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            data-cursor="hover"
          >
            <FiArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
