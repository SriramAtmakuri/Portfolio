import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { portfolioConfig } from '@/config/portfolio';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjkjvggd";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loading) return;
    setLoading(true);

    try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            toast.success('Message sent! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' });
        } else {
            toast.error('Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred. Please try again.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-space gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto font-inter">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold font-space mb-6 text-primary">
                Let's Connect
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${portfolioConfig.email}`}
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Mail className="w-6 h-6" />
                  <span className="font-inter truncate">{portfolioConfig.email}</span>
                </motion.a>
                
                <motion.a
                  href={portfolioConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Github className="w-6 h-6" />
                  <span className="font-inter truncate">{portfolioConfig.github.replace('https://', '')}</span>
                </motion.a>
                
                <motion.a
                  href={portfolioConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-inter truncate">{portfolioConfig.linkedin.replace('https://', '')}</span>
                </motion.a>
                
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              
              <h3 className="text-2xl font-bold font-space mb-6 text-primary">Send a Message</h3>

              <div>
                <label htmlFor="name" className="block text-sm font-space mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-inter"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-space mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-inter"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-space mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-muted rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-inter resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(100, 255, 218, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading} 
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-space font-medium shadow-lg shadow-primary/30 transition-shadow flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                    <svg className="animate-spin h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                ) : (
                    'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;