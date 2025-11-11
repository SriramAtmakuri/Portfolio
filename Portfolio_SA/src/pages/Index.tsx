import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { ScrollProgress } from '@/components/ScrollProgress';
import { portfolioConfig } from '@/config/portfolio';

const Index = () => {
  return (
    <div className="relative">
      <ScrollProgress />
      <ParticleBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="py-8 text-center text-muted-foreground font-inter border-t border-primary/20">
        <p>© 2024 {portfolioConfig.name}.</p>
      </footer>
    </div>
  );
};

export default Index;
