import {
  FiLayout,
  FiCpu,
  FiSmartphone,
  FiMonitor,
  FiCode,
  FiZap,
} from 'react-icons/fi';

export const services = [
  {
    id: 'frontend',
    Icon: FiCode,
    title: 'Frontend Development',
    description:
      'Production-grade React and Next.js applications with clean architecture, scalable components, and zero-jank performance.',
    bullets: ['Component libraries', 'State management', 'API integration'],
    accent: '#7c5cff',
  },
  {
    id: 'uiux',
    Icon: FiLayout,
    title: 'UI / UX Development',
    description:
      'Translating Figma into pixel-perfect, accessible interfaces with thoughtful micro-interactions and motion design.',
    bullets: ['Design systems', 'Accessibility (WCAG)', 'Motion design'],
    accent: '#00e0ff',
  },
  {
    id: 'responsive',
    Icon: FiSmartphone,
    title: 'Responsive Websites',
    description:
      'Mobile-first websites that look gorgeous on every screen — fluid type, container queries, and adaptive layouts.',
    bullets: ['Mobile-first', 'Fluid typography', 'Cross-browser tested'],
    accent: '#ff5ec4',
  },
  {
    id: 'landing',
    Icon: FiZap,
    title: 'Landing Page Development',
    description:
      'High-converting landing pages with scroll choreography, premium animation, and sub-1s Core Web Vitals.',
    bullets: ['A/B testing ready', 'SEO optimised', 'Conversion focused'],
    accent: '#ffb547',
  },
  {
    id: 'react',
    Icon: FiCpu,
    title: 'React Development',
    description:
      'Complex single-page apps, dashboards, and tools — using modern React (RSC, Suspense, hooks) and best practices.',
    bullets: ['Hooks & RSC', 'Custom hooks', 'Testing'],
    accent: '#61dafb',
  },
  {
    id: 'nextjs',
    Icon: FiMonitor,
    title: 'Next.js Development',
    description:
      'SSR/SSG marketing sites and dashboards on Next.js App Router with edge functions, ISR, and image optimisation.',
    bullets: ['App Router', 'Server Components', 'Edge runtime'],
    accent: '#ffffff',
  },
];
