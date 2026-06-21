/**
 * Projects data.
 * Add a new entry here and it will automatically appear in the Projects section
 * with filtering, modal preview, and links.
 *
 * Required: id, title, description, tags, imageGradient, liveUrl, year
 * Optional: longDescription, image, githubUrl (omit/empty hides the Code link), featured
 */
export const projects = [
  {
    id: 'rexpt-ai',
    title: 'Rexpt — AI Receptionist',
    description:
      'Marketing site for an AI voice agent that answers business calls 24/7, qualifies leads and books appointments in 32+ languages.',
    longDescription:
      'Led the front-end for Rexpt — a voice-AI receptionist that deploys in under 3 minutes. Built the marketing site with motion-rich sections, multilingual messaging, conversion-focused CTAs and tight Core Web Vitals. Trusted by 1,000+ small businesses across home services, professional services, real estate and hospitality.',
    tags: ['Next.js', 'React', 'Framer Motion', 'CSS Modules'],
    category: 'SaaS',
    imageGradient: 'linear-gradient(135deg, #7c5cff 0%, #00e0ff 100%)',
    liveUrl: 'https://rxpt.ai/',
    year: 2025,
    featured: true,
  },
  {
    id: 'rexpt-app',
    title: 'Rexpt — App',
    description:
      'Web app for the Rexpt AI receptionist platform — agent setup, live call analytics and CRM integrations in a clean SaaS UI.',
    longDescription:
      'Designed and built the Rexpt operator app — onboarding, agent configuration, call recordings and analytics. Reusable React component library, responsive data tables, and CRM integrations (HubSpot, Zoho) wrapped in a polished, animation-first interface.',
    tags: ['React', 'Next.js', 'JavaScript', 'CSS Modules'],
    category: 'Web App',
    imageGradient: 'linear-gradient(135deg, #00e0ff 0%, #7c5cff 100%)',
    liveUrl: 'https://app.rxpt.ai/',
    year: 2025,
    featured: true,
  },
  {
    id: 'rexpt-lp',
    title: 'Rexpt — Product Landing',
    description:
      'High-conversion landing page for Rexpt\'s AI virtual receptionist with scroll-driven storytelling and prominent CTAs.',
    longDescription:
      'A focused conversion landing built around the "85% of customers won\'t call back if they hit voicemail" insight — animated illustrations, social-proof blocks, testimonial counters and a sub-1s LCP across devices.',
    tags: ['Next.js', 'Framer Motion', 'CSS Modules'],
    category: 'Landing Page',
    imageGradient: 'linear-gradient(135deg, #ff5ec4 0%, #7c5cff 100%)',
    liveUrl: 'https://lp.rxpt.ai/',
    year: 2025,
    featured: true,
  },
  {
    id: 'bruno-vision',
    title: 'Bruno Vision Care',
    description:
      'Eye-care clinic site featuring Deseyne® contact lenses, services overview and patient resources in a calm medical UI.',
    longDescription:
      'Front-end build for Bruno Vision Care. Product showcase for Deseyne® contact lenses, services catalog, appointment touchpoints and a polished, trust-building design with accessibility-first forms and a mobile-first layout.',
    tags: ['Next.js', 'React', 'CSS Modules'],
    category: 'Healthcare',
    imageGradient: 'linear-gradient(135deg, #00e0ff 0%, #25e599 100%)',
    liveUrl: 'https://www.brunovisioncare.com/',
    year: 2024,
  },
  {
    id: 'brunomd',
    title: 'BrunoMD',
    description:
      'Medical practice site for Dr. Bruno — content-first layout with treatments, patient resources and a clean professional aesthetic.',
    longDescription:
      'Personal medical-practice presence for Dr. Bruno. Treatments overview, doctor profile, contact and patient resources — built mobile-first with crisp typography and a refined, content-led design.',
    tags: ['Next.js', 'React', 'CSS Modules', 'Framer Motion'],
    category: 'Healthcare',
    imageGradient: 'linear-gradient(135deg, #25e599 0%, #00e0ff 100%)',
    liveUrl: 'https://brunomd.com/',
    year: 2024,
  },
  {
    id: 'beauty-fashion',
    title: 'Beauty Fashion Sales',
    description:
      'Retail storefront for unique beauty brands — curated catalog, animated product galleries and a polished discovery experience.',
    longDescription:
      'E-commerce front-end for Beauty Fashion Sales Group — "The Source for unique beauty brands." Filterable catalog, sticky cart, animated PDPs and a discovery-led layout designed to surface niche beauty labels to a B2C audience.',
    tags: ['React', 'Next.js', 'CSS Modules'],
    category: 'E-Commerce',
    imageGradient: 'linear-gradient(135deg, #ff5ec4 0%, #ffb547 100%)',
    liveUrl: 'https://www.beautyfashionsales.com/',
    year: 2024,
  },
  {
    id: 'formoline',
    title: 'Formoline IT',
    description:
      'Italian-market site for Formoline L112 weight-management supplements — localized product pages and Amazon checkout flow.',
    longDescription:
      'Front-end for Formoline\'s Italian storefront. Localized product pages for the L112 and L112 Extra weight-management range, brand storytelling and direct-to-Amazon affiliate purchase flow with a clean, trust-led aesthetic.',
    tags: ['Next.js', 'React', 'Bootstrap', 'JavaScript'],
    category: 'E-Commerce',
    imageGradient: 'linear-gradient(135deg, #ffb547 0%, #25e599 100%)',
    liveUrl: 'https://formoline.it/',
    year: 2024,
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
