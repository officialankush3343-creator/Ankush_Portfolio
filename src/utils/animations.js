export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay: i * 0.08 },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const slideRight = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

export const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

/* Split text into words for reveal animation */
export const splitWords = (text) =>
  text.split(' ').map((word, i) => ({ word, key: `${word}-${i}` }));

export const wordReveal = {
  hidden: { y: '110%' },
  show: (i = 0) => ({
    y: '0%',
    transition: { duration: 0.7, ease, delay: i * 0.05 },
  }),
};

export const wordParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
