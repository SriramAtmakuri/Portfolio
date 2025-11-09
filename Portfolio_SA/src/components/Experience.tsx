import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioConfig } from '@/config/portfolio';

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space gradient-text mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div 
              ref={timelineRef}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary origin-top"
            />

            {portfolioConfig.experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'
                } md:w-1/2`}
              >
                <motion.div 
                  className="absolute left-0 md:left-auto md:right-[-4px] top-0 w-3 h-3 bg-primary rounded-full md:translate-x-1/2 shadow-lg shadow-primary/50"
                  whileInView={{ scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.5 }}
                />

                <motion.div 
                  className="glass-card p-6 rounded-2xl ml-6 md:ml-0"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 0 30px rgba(100, 255, 218, 0.2)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground font-inter">{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground font-inter">{exp.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold font-space text-primary mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-foreground font-space mb-4">{exp.company}</p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-muted-foreground font-inter text-sm">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
