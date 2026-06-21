import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiRedux,
  SiBootstrap,
  SiFramer,
  SiGreensock,
} from 'react-icons/si';

export const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Building reliable, semantic, accessible markup.',
    skills: [
      { name: 'HTML', level: 98, Icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS', level: 96, Icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', level: 94, Icon: FaJsSquare, color: '#f7df1e' },
    ],
  },
  {
    id: 'ui',
    name: 'UI Development',
    description: 'Crafting design systems and pixel-perfect interfaces.',
    skills: [
      { name: 'Bootstrap', level: 92, Icon: SiBootstrap, color: '#7952b3' },
      { name: 'Framer Motion', level: 92, Icon: SiFramer, color: '#ff5ec4' },
      { name: 'GSAP', level: 86, Icon: SiGreensock, color: '#88ce02' },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    description: 'Production apps with scalable architecture.',
    skills: [
      { name: 'React.js', level: 95, Icon: FaReact, color: '#61dafb' },
      { name: 'Next.js', level: 92, Icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Redux', level: 88, Icon: SiRedux, color: '#764abc' },
    ],
  },
  {
    id: 'tools',
    name: 'Design & Tools',
    description: 'From concept to ship — fluently.',
    skills: [
      { name: 'Figma', level: 92, Icon: FaFigma, color: '#a259ff' },
      { name: 'Git', level: 92, Icon: FaGitAlt, color: '#f05033' },
      { name: 'GitHub', level: 94, Icon: FaGithub, color: '#ffffff' },
    ],
  },
];

export const techMarquee = [
  { name: 'React', Icon: FaReact, color: '#61dafb' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
  { name: 'JavaScript', Icon: FaJsSquare, color: '#f7df1e' },
  { name: 'HTML5', Icon: FaHtml5, color: '#e34f26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572b6' },
  { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952b3' },
  { name: 'Framer Motion', Icon: SiFramer, color: '#ff5ec4' },
  { name: 'GSAP', Icon: SiGreensock, color: '#88ce02' },
  { name: 'Redux', Icon: SiRedux, color: '#764abc' },
  { name: 'Figma', Icon: FaFigma, color: '#a259ff' },
  { name: 'Git', Icon: FaGitAlt, color: '#f05033' },
  { name: 'GitHub', Icon: FaGithub, color: '#ffffff' },
];
