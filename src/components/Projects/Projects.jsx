'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import { projects, projectTags } from '@/data/projectsData';
import { fadeUp, stagger } from '@/utils/animations';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All');
  const [active, setActive] = useState(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered = useMemo(() => {
    if (activeTag === 'All') return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  // Lock background scroll (body + Lenis smooth scroll) while modal is open,
  // and close on Escape.
  useEffect(() => {
    if (!active) return undefined;
    const prevOverflow = document.body.style.overflow;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    window.__lenis?.stop?.();

    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = '';
      window.__lenis?.start?.();
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.header}
        >
          <div className={styles.headLeft}>
            <motion.span className="section-eyebrow" variants={fadeUp}>
              Featured Work
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp}>
              Selected <span className="gradient-text">projects</span>.
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeUp}>
              A handful of recent builds that show what I care about — craft,
              motion, and a relentless focus on user experience.
            </motion.p>
          </div>

          <motion.div className={styles.filterWrap} variants={fadeUp}>
            <div className={styles.filters}>
              {projectTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`${styles.filter} ${
                    activeTag === tag ? styles.filterActive : ''
                  }`}
                  data-cursor="hover"
                >
                  {tag}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          layout
          className={styles.grid}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onOpen={() => setActive(p)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className={styles.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modal}
        initial={{ y: 40, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close project preview"
          data-cursor="hover"
        >
          <FiX />
        </button>

        <div
          className={styles.modalImage}
          style={{
            background: `${project.imageGradient}, #11111d`,
            backgroundBlendMode: 'overlay',
          }}
        >
          <span className={styles.modalImageInitials}>
            {project.title.split(' ').map((w) => w[0]).slice(0, 2).join('')}
          </span>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.modalMeta}>
            <span className={styles.modalCategory}>{project.category}</span>
            <span className={styles.modalYear}>{project.year}</span>
          </div>

          <h3 className={styles.modalTitle}>{project.title}</h3>
          <p className={styles.modalDesc}>
            {project.longDescription || project.description}
          </p>

          <div className={styles.modalTags}>
            {project.tags.map((t) => (
              <span key={t} className={styles.modalTag}>
                {t}
              </span>
            ))}
          </div>

          <div className={styles.modalActions}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`${styles.modalBtn} ${styles.modalBtnPrimary}`}
            >
              <FiExternalLink /> Visit Site
            </a>
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`${styles.modalBtn} ${styles.modalBtnGhost}`}
              >
                <FiGithub /> Source
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
