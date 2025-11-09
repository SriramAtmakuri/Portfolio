import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioConfig } from '@/config/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.skill-card');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { scale: 0.8, opacity: 0, rotateY: 90 },
          {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.08,
          }
        );

        // Add a subtle float animation on scroll
        gsap.to(card, {
          y: -20,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        });
      });
    }
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space gradient-text mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(portfolioConfig.skills).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              className="skill-card glass-card p-6 rounded-2xl"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 0 40px rgba(100, 255, 218, 0.4)'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <h3 className="text-xl font-bold font-space text-primary mb-4 border-b border-primary/20 pb-2">
                {category}
              </h3>
              <div className="space-y-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: (categoryIndex * 0.1) + (i * 0.04),
                      type: 'spring',
                      stiffness: 100
                    }}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="flex items-center gap-2 cursor-default"
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="font-inter text-muted-foreground">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
