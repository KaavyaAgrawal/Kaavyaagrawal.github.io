import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, ExternalLink, Mail, ArrowUpRight, MapPin, Phone } from 'lucide-react';

const ContactNebula = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kaavya@example.com",
      href: "mailto:kaavya@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "#", 
      label: "GitHub"
    },
    { 
      icon: ExternalLink, 
      href: "#", 
      label: "Portfolio"
    },
    { 
      icon: Mail, 
      href: "mailto:kaavya@example.com", 
      label: "Email"
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 100%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
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
          <h2 className="text-6xl md:text-7xl font-thin mb-8 cosmic-gradient">
            Let's Connect
          </h2>
          <p className="text-xl text-starlight/60 font-light max-w-2xl mx-auto">
            Ready to collaborate on something extraordinary? Let's create the future together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="cosmic-glass p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-thin text-starlight mb-8">Get In Touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-starlight/70 mb-2 text-sm font-light">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-starlight/5 border border-starlight/20 rounded-lg px-4 py-3 text-starlight placeholder-starlight/40 focus:border-stellar-cyan focus:outline-none focus:ring-1 focus:ring-stellar-cyan/50 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-starlight/70 mb-2 text-sm font-light">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-starlight/5 border border-starlight/20 rounded-lg px-4 py-3 text-starlight placeholder-starlight/40 focus:border-stellar-cyan focus:outline-none focus:ring-1 focus:ring-stellar-cyan/50 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-starlight/70 mb-2 text-sm font-light">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="w-full bg-starlight/5 border border-starlight/20 rounded-lg px-4 py-3 text-starlight placeholder-starlight/40 focus:border-stellar-cyan focus:outline-none focus:ring-1 focus:ring-stellar-cyan/50 transition-all duration-300 resize-none"
                    required
                  />
                </div>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-gradient-to-r from-stellar-cyan to-bioluminescent text-cosmic-void font-medium rounded-lg hover:from-bioluminescent hover:to-stellar-cyan transition-all duration-500 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-cosmic-void border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
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
            {/* Contact Information */}
            <div className="cosmic-glass p-6">
              <h4 className="text-xl font-thin text-starlight mb-6">Contact Information</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-starlight/5 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-10 h-10 bg-stellar-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-stellar-cyan/30 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-stellar-cyan" />
                      </div>
                      <div>
                        <div className="text-starlight/60 text-sm">{info.label}</div>
                        <div className="text-starlight font-light">{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="cosmic-glass p-6">
              <div className="flex items-center space-x-3 mb-4">
                <motion.div 
                  className="w-3 h-3 bg-bioluminescent rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-bioluminescent font-light">Available for Projects</span>
              </div>
              <p className="text-starlight/60 text-sm leading-relaxed">
                Currently accepting new collaborations and freelance opportunities. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Social Links */}
            <div className="cosmic-glass p-6">
              <h4 className="text-lg font-thin text-starlight mb-6">Connect With Me</h4>
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="group flex items-center justify-between p-3 rounded-lg hover:bg-starlight/5 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-stellar-cyan" />
                        <span className="text-starlight font-light">{social.label}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-starlight/40 group-hover:text-stellar-cyan group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactNebula;