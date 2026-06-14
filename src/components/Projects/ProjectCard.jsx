'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import styles from './Projects.module.css';

export default function ProjectCard({ project, index, onOpen }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 180, damping: 20 });
  const smy = useSpring(my, { stiffness: 180, damping: 20 });
  const rX = useTransform(smy, [-0.5, 0.5], [6, -6]);
  const rY = useTransform(smx, [-0.5, 0.5], [-8, 8]);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rX, rotateY: rY, transformPerspective: 1200 }}
      className={styles.card}
      data-cursor="more"
      data-cursor-label="View"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Preview ${project.title}`}
        className={styles.cardClickable}
      />

      <div
        className={styles.cardImage}
        style={{
          background: `${project.imageGradient}, #11111d`,
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className={styles.imageNoise} aria-hidden="true" />
        <div className={styles.imageTopRow}>
          <span className={styles.cardCategory}>{project.category}</span>
          <span className={styles.cardYear}>{project.year}</span>
        </div>
        <div className={styles.cardInitials}>
          {project.title.split(' ').map((w) => w[0]).slice(0, 2).join('')}
        </div>
        <span className={styles.cardOpenIcon}>
          <FiArrowUpRight />
        </span>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardDesc}>{project.description}</p>

        <div className={styles.cardTags}>
          {project.tags.slice(0, 4).map((t) => (
            <span key={t} className={styles.cardTag}>{t}</span>
          ))}
        </div>

        <div className={styles.cardLinks}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.cardLink}
            onClick={(e) => e.stopPropagation()}
          >
            <FiExternalLink /> Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.cardLink}
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}
