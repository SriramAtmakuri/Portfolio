import { motion } from 'framer-motion';
import { portfolioConfig } from '@/config/portfolio';

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
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
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.06, ease: 'easeOut' }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 0 40px rgba(100, 255, 218, 0.4)'
              }}
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
                      delay: (categoryIndex * 0.06) + (i * 0.03),
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
