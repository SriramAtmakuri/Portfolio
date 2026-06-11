import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Zap, GraduationCap, Server, Workflow, Monitor, Globe, HardDrive } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioConfig } from '@/config/portfolio';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Frontend Development', level: 90, icon: Monitor },
  { name: 'Backend Development', level: 90, icon: Server },
  { name: 'Cloud Architecture', level: 89, icon: Globe },
  { name: 'Database Design', level: 88, icon: HardDrive },
  { name: 'DevOps & CI/CD', level: 89, icon: Workflow },
  { name: 'Performance Optimization', level: 92, icon: Zap },
];

export const About = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current!,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
          },
        }
      );
    }, titleRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold font-space gradient-text mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Personal Intro - Modern & Larger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-inter leading-relaxed">
            Started in IoT and systems automation, moved into cloud infrastructure, backend services, and ML systems at Amazon, and now building AI tools that make engineers faster at what they already do well. Across every role and stack, the goal has been to build systems that hold under production load.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card p-6 rounded-2xl border border-primary/20"
            >
              <GraduationCap className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-bold font-space mb-2">{portfolioConfig.education.degree}</h3>
              <p className="text-muted-foreground font-inter mb-1">
                {portfolioConfig.education.university}
              </p>
              <p className="text-sm text-muted-foreground/70 font-inter">
                {portfolioConfig.education.location} • {portfolioConfig.education.period}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card p-6 rounded-2xl"
            >
              <Code2 className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-bold font-space mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground font-inter">
                Builds end-to-end systems spanning scalable APIs, reactive UIs, and microservices with LLM integration. Ships full-stack applications with AI capabilities woven into the architecture and interfaces.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card p-6 rounded-2xl"
            >
              <Cloud className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-bold font-space mb-2">Cloud Architecture & System Design</h3>
              <p className="text-muted-foreground font-inter">
                Architecting cloud infrastructure across AWS and Azure with a strong DevOps foundation. Designs for distributed systems, load balancing, and resilient architecture as an AWS Solutions Architect.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, x: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="glass-card p-6 rounded-2xl"
            >
              <Database className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-bold font-space mb-2">Database Design & Optimization</h3>
              <p className="text-muted-foreground font-inter">
                Designs schemas that hold under production load across PostgreSQL, MongoDB, MySQL, and DynamoDB. Deep focus on query optimization, indexing strategies, normalization, and data integrity at scale.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="space-y-6 flex flex-col justify-center"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05, x: 10, rotateY: 5 }}
                className="glass-card p-6 rounded-xl cursor-default"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-4">
                    <skill.icon className="w-6 h-6 text-primary" />
                    <span className="font-space font-medium text-lg">{skill.name}</span>
                  </div>
                </div>
                <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                    className="absolute h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg shadow-primary/50"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};