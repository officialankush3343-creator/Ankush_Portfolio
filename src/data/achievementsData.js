import { FiAward, FiBookOpen, FiStar, FiTrendingUp } from 'react-icons/fi';
import { getYearsOfExperience } from '@/utils/experience';

export const achievements = [
  {
    id: 1,
    type: 'award',
    Icon: FiAward,
    title: 'Awwwards — Honorable Mention',
    issuer: 'Awwwards',
    year: 2024,
    description:
      'Recognised for the Aurora Finance trading dashboard — exceptional UI design and motion.',
    accent: '#ffb547',
  },
  {
    id: 2,
    type: 'certificate',
    Icon: FiBookOpen,
    title: 'Advanced React Patterns',
    issuer: 'Frontend Masters',
    year: 2024,
    description:
      'Deep dive into compound components, render props, hooks, and advanced state management.',
    accent: '#7c5cff',
  },
  {
    id: 3,
    type: 'project',
    Icon: FiStar,
    title: '50+ Production Projects',
    issuer: 'Across agencies & freelance',
    year: 2025,
    description:
      'From dashboards to landing pages, e-commerce stores to editorial sites — all shipped to production.',
    accent: '#00e0ff',
  },
  {
    id: 4,
    type: 'award',
    Icon: FiTrendingUp,
    title: 'Top-rated on Upwork',
    issuer: 'Upwork',
    year: 2023,
    description:
      'Maintained a 100% Job Success Score across 30+ engagements with a 5★ average rating.',
    accent: '#ff5ec4',
  },
  {
    id: 5,
    type: 'certificate',
    Icon: FiBookOpen,
    title: 'Next.js App Router Mastery',
    issuer: 'Vercel',
    year: 2024,
    description:
      'Server components, streaming, edge runtime, and the full App Router production playbook.',
    accent: '#ffffff',
  },
  {
    id: 6,
    type: 'award',
    Icon: FiAward,
    title: 'CSS Design Awards — Site of the Day',
    issuer: 'CSS Design Awards',
    year: 2023,
    description:
      'Lumen Studio portfolio recognised for exceptional craftsmanship, design, and innovation.',
    accent: '#7c5cff',
  },
];

export const funFacts = [
  { id: 1, value: 15, suffix: '+', label: 'Projects Shipped' },
  { id: 2, value: 10, suffix: '+', label: 'Happy Clients' },
  { id: 3, value: getYearsOfExperience(), suffix: '+', label: 'Years Experience' },
  { id: 4, value: 100, suffix: 'K', label: 'Lines of Code' },
];

export const whyHireMe = [
  {
    id: 1,
    title: 'Pixel-Perfect Eye',
    description:
      'I obsess over details. Every spacing, easing curve, and shadow is intentional.',
    emoji: '🎯',
    accent: '#7c5cff',
  },
  {
    id: 2,
    title: 'Performance First',
    description:
      'Every site I ship targets a 95+ Lighthouse score and sub-1s Core Web Vitals.',
    emoji: '⚡',
    accent: '#00e0ff',
  },
  {
    id: 3,
    title: 'Motion That Means Something',
    description:
      'Animation is not decoration. I use it to guide, delight, and inform users.',
    emoji: '🎬',
    accent: '#ff5ec4',
  },
  {
    id: 4,
    title: 'Design-Dev Bridge',
    description:
      "I speak both languages fluently — designers love working with me, and so do engineers.",
    emoji: '🌉',
    accent: '#ffb547',
  },
  {
    id: 5,
    title: 'Ship on Time',
    description:
      'Deadlines are sacred. I scope realistically and deliver consistently.',
    emoji: '🚀',
    accent: '#25e599',
  },
  {
    id: 6,
    title: 'Long-term Mindset',
    description:
      "Clean, documented code. Your future team will thank you — and so will I.",
    emoji: '🧱',
    accent: '#a259ff',
  },
];
