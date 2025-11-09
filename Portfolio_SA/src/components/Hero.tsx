import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { portfolioConfig } from '@/config/portfolio';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 }
      );
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary mb-4 text-lg font-inter"
          >
            Hi, I'm
          </motion.p>
          
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold font-space mb-6 glow-text"
          >
            {portfolioConfig.name}
          </h1>
          
          <h2
            ref={subtitleRef}
            className="text-2xl md:text-4xl font-space gradient-text mb-8"
          >
            {portfolioConfig.title}
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12 font-inter"
          >
            {portfolioConfig.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-4 justify-center"
          >
            <motion.a
              href={portfolioConfig.resumePath}
              download
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(100, 255, 218, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-3 rounded-lg font-space font-medium inline-flex items-center gap-2 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-space font-medium hover:shadow-lg hover:shadow-primary/50 transition-shadow"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-primary animate-pulse" />
      </motion.div>
      
      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />
    </section>
  );
};
