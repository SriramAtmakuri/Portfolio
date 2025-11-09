import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioConfig } from '@/config/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.project-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, rotateX: 45 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
            delay: index * 0.1,
          }
        );
      });
    }
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space gradient-text mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioConfig.projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="glass-card rounded-2xl overflow-hidden group cursor-pointer h-full">
                <div className="relative overflow-hidden h-64">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-background to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                  />
                </div>
              
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-space mb-3 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-inter">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex gap-4"
                  >
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:underline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-inter">Live Demo</span>
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:underline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="font-inter">Source</span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
