import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, ExternalLink, Mail, ArrowUpRight } from 'lucide-react';

const ContactCinematic = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: "#", 
      label: "GitHub",
      description: "Code repositories"
    },
    { 
      icon: ExternalLink, 
      href: "#", 
      label: "Behance",
      description: "Design portfolio"
    },
    { 
      icon: Mail, 
      href: "mailto:kaavya@example.com", 
      label: "Email",
      description: "Direct contact"
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-thin mb-8 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            Ready to collaborate on something extraordinary? Let's create the future together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="glass border border-white/10 p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-thin text-white mb-8">Start a Conversation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-electric focus:outline-none transition-all duration-500 font-light"
                    required
                    data-cursor-text
                  />
                </div>
                
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-electric focus:outline-none transition-all duration-500 font-light"
                    required
                    data-cursor-text
                  />
                </div>
                
                <div className="group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-electric focus:outline-none transition-all duration-500 resize-none font-light"
                    required
                    data-cursor-text
                  />
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 glass border border-electric/30 hover:border-electric/60 transition-all duration-700 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cursor
              >
                <div className="absolute inset-0 bg-electric/5 group-hover:bg-electric/10 transition-all duration-700" />
                <div className="relative flex items-center justify-center space-x-3">
                  {isSubmitting ? (
                    <motion.div
                      className="w-5 h-5 border border-electric border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <Send className="w-5 h-5 text-electric" />
                  )}
                  <span className="text-white font-light tracking-wider">
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </span>
                </div>
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Availability Status */}
            <div className="glass border border-white/10 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-neon rounded-full animate-pulse" />
                <span className="text-neon font-light">Available for Projects</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Currently accepting new collaborations and freelance opportunities. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-thin text-white mb-6">Connect</h4>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="group flex items-center justify-between p-4 glass border border-white/10 hover:border-electric/30 transition-all duration-700"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    data-cursor
                  >
                    <div className="flex items-center space-x-4">
                      <Icon className="w-5 h-5 text-electric" />
                      <div>
                        <div className="text-white font-light">{social.label}</div>
                        <div className="text-white/40 text-xs">{social.description}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-electric group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </motion.a>
                );
              })}
            </div>

            {/* Quote */}
            <motion.div
              className="glass border border-white/10 p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <blockquote className="text-white/80 font-light italic leading-relaxed">
                "The best projects happen when creative minds collide. 
                Let's create something that pushes boundaries."
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCinematic;