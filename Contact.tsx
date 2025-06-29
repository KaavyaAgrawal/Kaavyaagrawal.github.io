import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, ArrowUpRight, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      href: "#", 
      label: "GitHub", 
      color: "hover:text-white",
      gradient: "from-gray-600 to-gray-800"
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      href: "#", 
      label: "LinkedIn", 
      color: "hover:text-blue-400",
      gradient: "from-blue-600 to-blue-800"
    },
    { 
      icon: <ExternalLink className="w-6 h-6" />, 
      href: "#", 
      label: "Behance", 
      color: "hover:text-electric-blue",
      gradient: "from-electric-blue to-cyan-600"
    },
    { 
      icon: <MessageCircle className="w-6 h-6" />, 
      href: "#", 
      label: "Discord", 
      color: "hover:text-vibrant-violet",
      gradient: "from-vibrant-violet to-purple-600"
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-deep-purple via-midnight to-dark-slate relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-vibrant-violet/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-electric-blue via-white to-vibrant-violet bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on something extraordinary? Let's bring your vision to life.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Start a Conversation</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-3 font-semibold">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-3 font-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-300 mb-3 font-semibold">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                  placeholder="Project collaboration"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-3 font-semibold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="group w-full px-10 py-5 bg-gradient-to-r from-electric-blue to-vibrant-violet text-white font-bold rounded-xl shadow-2xl relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-cursor-hover
              >
                <div className="absolute inset-0 bg-gradient-to-r from-vibrant-violet to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3">
                  <Send className="w-6 h-6" />
                  <span>Send Message</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </motion.button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-cyan-600 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Email</p>
                    <p className="text-white font-bold text-lg">kaavya@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Phone</p>
                    <p className="text-white font-bold text-lg">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-vibrant-violet to-purple-600 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium">Location</p>
                    <p className="text-white font-bold text-lg">India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-white mb-8">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`group flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-700/50 transition-all duration-300 text-gray-400 ${social.color}`}
                    whileHover={{ scale: 1.05 }}
                    data-cursor-hover
                  >
                    <div className={`p-2 bg-gradient-to-r ${social.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      {social.icon}
                    </div>
                    <span className="font-semibold">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.div
              className="text-center bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-center items-center space-x-3 mb-4">
                <div className="w-4 h-4 bg-neon-green rounded-full animate-pulse"></div>
                <span className="text-neon-green font-bold text-lg">Available for Projects</span>
              </div>
              <p className="text-gray-400">
                Open to freelance work and exciting collaborations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;