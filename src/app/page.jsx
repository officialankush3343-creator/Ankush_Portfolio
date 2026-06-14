import dynamic from 'next/dynamic';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Skills from '@/components/Skills/Skills';
import Services from '@/components/Services/Services';

const WhyHireMe = dynamic(() => import('@/components/WhyHireMe/WhyHireMe'));
const Projects = dynamic(() => import('@/components/Projects/Projects'));
const TechStack = dynamic(() => import('@/components/TechStack/TechStack'));
const Timeline = dynamic(() => import('@/components/Timeline/Timeline'));
const FunFacts = dynamic(() => import('@/components/FunFacts/FunFacts'));
const Achievements = dynamic(() => import('@/components/Achievements/Achievements'));
const Testimonials = dynamic(() => import('@/components/Testimonials/Testimonials'));
const Resume = dynamic(() => import('@/components/Resume/Resume'));
const CTA = dynamic(() => import('@/components/CTA/CTA'));
const Contact = dynamic(() => import('@/components/Contact/Contact'));
const Footer = dynamic(() => import('@/components/Footer/Footer'));

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <WhyHireMe />
      <Projects />
      <TechStack />
      <Timeline />
      <FunFacts />
      <Achievements />
      <Testimonials />
      <Resume />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
