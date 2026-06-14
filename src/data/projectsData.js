/**
 * Projects data.
 * Add a new entry here and it will automatically appear in the Projects section
 * with filtering, modal preview, and links.
 *
 * Required: id, title, description, tags, image (or imageGradient), liveUrl, githubUrl, year
 */
export const projects = [
  {
    id: 'aurora-finance',
    title: 'Aurora Finance Dashboard',
    description:
      'A premium fintech dashboard with real-time charts, animated transitions, and a glassmorphism UI built for high-frequency trading desks.',
    longDescription:
      'Designed and built a high-performance trading dashboard with real-time WebSocket data, virtualized lists for 10k+ rows, animated chart transitions, and a fully customizable workspace. Lighthouse score 98+.',
    tags: ['React', 'Next.js', 'Framer Motion', 'TypeScript'],
    category: 'Web App',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
    imageGradient: 'linear-gradient(135deg, #7c5cff 0%, #00e0ff 100%)',
    liveUrl: '#',
    githubUrl: '#',
    year: 2025,
    featured: true,
  },
  {
    id: 'nova-saas',
    title: 'Nova SaaS Landing',
    description:
      'Award-worthy SaaS landing page with scroll-triggered 3D scenes, custom cursor, and pixel-perfect responsive layouts.',
    longDescription:
      'A marketing site for an AI productivity SaaS featuring GSAP scroll choreography, R3F 3D hero, animated pricing toggle, and a sub-1s LCP on mobile.',
    tags: ['Next.js', 'GSAP', 'Three.js', 'Framer Motion'],
    category: 'Landing Page',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80&auto=format&fit=crop',
    imageGradient: 'linear-gradient(135deg, #ff5ec4 0%, #7c5cff 100%)',
    liveUrl: '#',
    githubUrl: '#',
    year: 2025,
    featured: true,
  },
  {
    id: 'pulse-music',
    title: 'Pulse — Music Streaming',
    description:
      'Spotify-inspired music streaming UI with animated waveforms, queue management, and a beautifully designed player.',
    longDescription:
      'A full music streaming UI with audio visualizers, drag-and-drop queue, animated transitions between views, and offline-first PWA support.',
    tags: ['React', 'Redux', 'Tailwind', 'Framer Motion'],
    category: 'Web App',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80&auto=format&fit=crop',
    imageGradient: 'linear-gradient(135deg, #00e0ff 0%, #ff5ec4 100%)',
    liveUrl: '#',
    githubUrl: '#',
    year: 2024,
    featured: true,
  },
  {
    id: 'lumen-portfolio',
    title: 'Lumen Studio Portfolio',
    description:
      'Creative agency portfolio with horizontal scrolling sections, magnetic interactions, and a Lenis-powered smooth scroll.',
    tags: ['Next.js', 'GSAP', 'Lenis', 'CSS Modules'],
    category: 'Portfolio',
    image:
      'https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=1200&q=80&auto=format&fit=crop',
    imageGradient: 'linear-gradient(135deg, #ffb547 0%, #ff5ec4 100%)',
    liveUrl: '#',
    githubUrl: '#',
    year: 2024,
  },
  {
    id: 'orbit-ecommerce',
    title: 'Orbit — Fashion Store',
    description:
      'E-commerce storefront with animated product galleries, AR try-on, and a buttery-smooth cart drawer.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    category: 'E-Commerce',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop',
    imageGradient: 'linear-gradient(135deg, #7c5cff 0%, #ffb547 100%)',
    liveUrl: '#',
    githubUrl: '#',
    year: 2024,
  },
  {
    id: 'spark-blog',
    title: 'Spark Editorial',
    description:
      'A literary publication with magazine-style layouts, reading progress, and beautiful typography-first design.',
    tags: ['React', 'CSS Modules', 'Framer Motion'],
    category: 'Editorial',
    image:
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop',
    imageGradient: 'linear-gradient(135deg, #00e0ff 0%, #7c5cff 100%)',
    liveUrl: '#',
    githubUrl: '#',
    year: 2023,
  },
];

export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
];

export const projectTags = [
  'All',
  ...Array.from(new Set(projects.flatMap((p) => p.tags))).sort(),
];
