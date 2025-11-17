import { motion } from 'framer-motion';
import { Code2, Database, Cloud, Zap, GraduationCap, Server, Workflow } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { portfolioConfig } from '@/config/portfolio';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Frontend Development', level: 90, icon: Code2 },
  { name: 'Backend Development', level: 90, icon: Server },
  { name: 'Cloud Architecture', level: 89, icon: Cloud },
  { name: 'Database Design', level: 88, icon: Database },
  { name: 'DevOps & CI/CD', level: 89, icon: Workflow },
  { name: 'Performance Optimization', level: 92, icon: Zap },
];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
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
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-20">
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
            Five years of transforming complex challenges into scalable solutions. What started as pure curiosity has evolved into a passion for building systems that truly make an impact. Currently exploring the exciting world of AI-powered automation to unlock new possibilities and push the boundaries of developer productivity.          </p>
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
                Expert in MERN stack, microservices architecture, and modern web with an active expertise, and building highly scalable, applications and that deliver powerful user interfaces. Currently integrating AI capabilities and LLMs to and build intelligent, smart automation systems.
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
                Architecting and deploying the scalable cloud infrastructure built on AWS with Lambda, S3, EventBridge, in integrating comprehensive DevOps practices. Expertise in distributed systems, microservices patterns, dynamic load balancing and designing robust fault-tolerant architectures. AWS Solutions Architect certified.
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
                Proficient in both SQL and NoSQL databases including PostgreSQL, MongoDB, MySQL, and and DynamoDB with strong focus on core performance optimization, efficient schema design, and scalable data architecture. Experienced in schema normalization, indexing, and data integrity across systems.
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