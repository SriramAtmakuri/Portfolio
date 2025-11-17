import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Eye, EyeOff, EyeClosed } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioConfig } from '@/config/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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
              onClick={() => setSelectedProject(index)}
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
                 <motion.div
                    className="absolute top-4 right-4 z-10 text-primary drop-shadow-lg" 
                    initial={{ scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.15, rotate: 5 }} 
                    whileTap={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <AnimatePresence mode="wait">
                      {hoveredIndex === index ? (
                        <motion.div
                          key="eye-open"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                        >
                          <Eye className="w-6 h-6 text-primary" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="eye-closed-lashes"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                        >
                          <EyeClosed className="w-6 h-6 text-primary" /> 
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <span className="sr-only">Click to View Details</span>
                  </motion.div>
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
                  
                  <div className="flex gap-4 items-center">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-primary hover:underline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="font-inter">Source</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Case Study */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop with blur */}
            <motion.div 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative glass-card rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[85vh] p-8">
                <div className="mb-6">
                  <img
                    src={portfolioConfig.projects[selectedProject].image}
                    alt={portfolioConfig.projects[selectedProject].title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <h2 className="text-3xl md:text-4xl font-bold font-space gradient-text mb-4">
                    {portfolioConfig.projects[selectedProject].title}
                  </h2>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {portfolioConfig.projects[selectedProject].tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Content */}
                <div className="space-y-6 font-inter text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Overview</h3>
                    <p>{portfolioConfig.projects[selectedProject].description}</p>
                  </div>

                  {portfolioConfig.projects[selectedProject].caseStudy && (
                    <>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Challenge</h3>
                        <p>{portfolioConfig.projects[selectedProject].caseStudy.challenge}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Solution</h3>
                        <p>{portfolioConfig.projects[selectedProject].caseStudy.solution}</p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">Impact</h3>
                        <ul className="list-disc list-inside space-y-2">
                          {portfolioConfig.projects[selectedProject].caseStudy.impact.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {portfolioConfig.projects[selectedProject].caseStudy.techDetails && (
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-3">Technical Details</h3>
                          <p>{portfolioConfig.projects[selectedProject].caseStudy.techDetails}</p>
                        </div>
                      )}
                    </>
                  )}

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-primary/20">
                    {portfolioConfig.projects[selectedProject].live && (
                      
                        <a href={portfolioConfig.projects[selectedProject].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:underline font-medium"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                    {portfolioConfig.projects[selectedProject].github && (
                      
                        <a href={portfolioConfig.projects[selectedProject].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:underline font-medium"
                      >
                        <Github className="w-5 h-5" />
                        View Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};