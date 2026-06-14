'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeUp, stagger } from '@/utils/animations';
import { skillCategories } from '@/data/skillsData';
import styles from './Skills.module.css';

export default function Skills() {
  const [activeCat, setActiveCat] = useState(skillCategories[0].id);
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const active = skillCategories.find((c) => c.id === activeCat);

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className={styles.header}
        >
          <motion.span className="section-eyebrow" variants={fadeUp}>
            Skills & Tools
          </motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            My <span className="gradient-text">technical</span> arsenal.
          </motion.h2>
          <motion.p className="section-subtitle" variants={fadeUp}>
            A curated stack I've spent years sharpening — chosen for craft,
            performance, and developer experience.
          </motion.p>
        </motion.div>

        <div className={styles.tabs}>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCat(cat.id)}
              className={`${styles.tab} ${activeCat === cat.id ? styles.tabActive : ''}`}
              data-cursor="hover"
            >
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCat}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={styles.activeMeta}
        >
          <p>{active.description}</p>
        </motion.div>

        <motion.div
          key={`grid-${activeCat}`}
          className={styles.grid}
          variants={stagger(0.08)}
          initial="hidden"
          animate="show"
        >
          {active.skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const { Icon, name, level, color } = skill;
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={styles.card}
      data-cursor="hover"
    >
      <div className={styles.cardGlow} style={{ background: color }} aria-hidden="true" />
      <div className={styles.cardHead}>
        <div className={styles.iconWrap} style={{ color, boxShadow: `0 0 24px ${color}55` }}>
          <Icon />
        </div>
        <div className={styles.cardLabels}>
          <span className={styles.cardName}>{name}</span>
          <span className={styles.cardLevel}>{level}%</span>
        </div>
      </div>
      <div className={styles.progressTrack}>
        <motion.div
          className={styles.progressFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `linear-gradient(90deg, ${color} 0%, ${color}99 100%)`,
            boxShadow: `0 0 16px ${color}80`,
          }}
        />
      </div>
    </motion.div>
  );
}
