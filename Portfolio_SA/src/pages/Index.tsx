import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="relative overflow-x-hidden min-h-screen z-0 bg-background">
      <ScrollProgress />
      <ParticleBackground />
      <Navigation />
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;