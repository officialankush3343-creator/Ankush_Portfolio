# Ankush Panwar — Frontend UI/UX Developer Portfolio

A premium, animation-heavy, award-style portfolio built with Next.js (App
Router), JavaScript, CSS Modules, Framer Motion, GSAP, React Three Fiber, and
Lenis smooth scroll.

## Highlights

- Lenis smooth scroll with custom mouse-tracked cursor
- Animated SVG hero scene (drifting gradient orbs + rotating geometry + accent dots)
- Animated particle canvas with mouse repulsion
- Scroll-triggered reveal, parallax, and staggered animations everywhere
- Glassmorphism cards, animated gradients, scroll progress bar
- 3D-tilt project cards with modal preview & tech filter
- Animated timeline with scroll-driven spine fill
- Auto-playing testimonial slider with touch support
- Resume preview + download + view PDF
- Glassmorphism contact form using **EmailJS** (with a FormSubmit fallback)
- Tech stack infinite marquee, animated counters, achievements & CTA section
- Fully responsive — mobile-first
- All content driven by a single set of `src/data/*.js` files

## Tech Stack

| Layer        | Tools                                                        |
| ------------ | ------------------------------------------------------------ |
| Framework    | Next.js 15 (App Router) · React 18                           |
| Language     | JavaScript (no TypeScript)                                   |
| Styling      | CSS Modules · Modern CSS (clamp, container queries, gradients) |
| Animation    | Framer Motion · GSAP · custom RAF canvas                     |
| Hero scene   | SVG + Framer Motion (lightweight, no WebGL deps)             |
| Scroll       | Lenis                                                        |
| Icons        | React Icons                                                  |
| Email        | @emailjs/browser (or FormSubmit fallback)                    |

## Getting Started

```bash
# 1. Install
npm install

# 2. (optional) Configure EmailJS for the contact form
cp .env.example .env.local
# fill in NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
# NEXT_PUBLIC_EMAILJS_PUBLIC_KEY from https://www.emailjs.com/

# 3. Dev server
npm run dev

# 4. Production build
npm run build && npm start
```

Open <http://localhost:3000>.

### Contact form: EmailJS (recommended) or FormSubmit

The contact form sends an email straight to your inbox **without a backend**.

**Option A — EmailJS** (fully configurable, supports templates):

1. Create a free account at <https://www.emailjs.com/>.
2. Add an Email Service and an Email Template.
3. Copy the Service ID, Template ID, and Public Key into `.env.local`.
4. Restart `npm run dev`. Submissions now arrive at the email tied to your
   EmailJS service.

**Option B — FormSubmit fallback** (zero setup):

Open `src/components/Contact/Contact.jsx` and replace
`https://formsubmit.co/ajax/your-email@example.com` with
`https://formsubmit.co/ajax/your-real-email@example.com`. Confirm the
activation email from FormSubmit the first time. No env vars needed.

The component automatically falls back to FormSubmit if EmailJS env vars are
not present, so you can ship without either being configured (the form will
still validate, just won't send).

## Project Structure

```
src/
├── app/
│   ├── layout.jsx          # Root layout (loads SmoothScroll, Navbar, etc.)
│   ├── page.jsx            # Composes every section
│   └── globals.css         # Design tokens + base styles
├── components/
│   ├── About/
│   ├── Achievements/
│   ├── CTA/
│   ├── Contact/
│   ├── CustomCursor/
│   ├── Footer/
│   ├── FunFacts/
│   ├── Hero/
│   │   ├── Hero.jsx          # Layout + 3D-style parallax wrap
│   │   ├── HeroScene.jsx     # Animated SVG backdrop
│   │   ├── HeroScene.module.css
│   │   ├── Particles.jsx     # Canvas particle network
│   │   ├── TypingText.jsx    # Self-typing rotator
│   │   └── Hero.module.css
│   ├── Navbar/
│   ├── Projects/
│   │   ├── Projects.jsx    # Filter + modal
│   │   ├── ProjectCard.jsx # 3D-tilt card
│   │   └── Projects.module.css
│   ├── Resume/
│   ├── ScrollProgress/
│   ├── Services/
│   ├── Skills/
│   ├── SmoothScroll/
│   ├── TechStack/
│   ├── Testimonials/
│   ├── Timeline/
│   └── WhyHireMe/
├── data/                   # All content lives here
│   ├── achievementsData.js
│   ├── experienceData.js
│   ├── projectsData.js
│   ├── servicesData.js
│   ├── skillsData.js
│   └── testimonialsData.js
└── utils/
    └── animations.js       # Shared Framer Motion variants

public/
├── favicon.svg
├── Ankush_Panwar_Resume.pdf   # ← drop your résumé here
└── images/                    # optional photography
```

## Customising

- **Personal info / copy** — search the codebase for `Ankush Panwar` and
  `hello@ankushpanwar.dev`; everything is in `Hero.jsx`, `About.jsx`,
  `Contact.jsx`, and `Footer.jsx`.
- **Projects** — edit `src/data/projectsData.js`. New entries appear
  automatically and join the filter list.
- **Skills, services, experience, testimonials, achievements** — same idea,
  each has its own `*.js` data file.
- **Colors / type** — design tokens live at the top of `src/app/globals.css`.
- **Resume** — replace `public/Ankush_Panwar_Resume.pdf` with your own PDF
  (keep the filename).
- **Profile photo** — see `public/README.md` for swap instructions.

## Performance Notes

- Below-the-fold sections use `next/dynamic` so the Hero is the only thing in
  the initial JS bundle.
- The 3D scene is `ssr: false` and lazy-loaded.
- Images come from Unsplash (already allowed in `next.config.mjs`) — swap for
  local files for best LCP.
- Lenis is disabled when the user prefers reduced motion.
- Lighthouse should comfortably score 90+ on Performance, Accessibility, Best
  Practices, and SEO with a real domain + image optimisation.

## License

MIT — use this template freely for your own portfolio. A credit link is
appreciated but not required.
