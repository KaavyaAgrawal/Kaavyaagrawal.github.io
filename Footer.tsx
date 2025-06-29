import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-slate border-t border-gray-800/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-vibrant-violet/5"></div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-3xl font-black bg-gradient-to-r from-electric-blue to-vibrant-violet bg-clip-text text-transparent mb-3">
              KAAVYA AGRAWAL
            </div>
            <p className="text-gray-400 text-lg">
              Multidisciplinary Creative & Digital Innovator
            </p>
          </motion.div>
          
          <motion.div
            className="flex items-center space-x-3 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="font-medium">Crafted with</span>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
            <span className="font-medium">and</span>
            <Code2 className="w-5 h-5 text-electric-blue" />
            <span className="font-medium">by Kaavya</span>
          </motion.div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            className="text-gray-500 mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Kaavya Agrawal. All rights reserved.
          </motion.p>
          
          <motion.button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 text-gray-400 hover:text-electric-blue"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            data-cursor-hover
          >
            <span className="font-medium">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;