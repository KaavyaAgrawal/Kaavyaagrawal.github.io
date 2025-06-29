import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Palette, PenTool, Video } from 'lucide-react';
import ParticleField from './ParticleField';

const Hero = () => {
  const floatingIcons = [
    { icon: Code2, position: 'top-20 left-20', delay: 0 },
    { icon: Palette, position: 'top-40 right-32', delay: 0.5 },
    { icon: PenTool, position: 'bottom-40 left-32', delay: 1 },
    { icon: Video, position: 'bottom-20 right-20', delay: 1.5 },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-dark-slate via-midnight to-deep-purple">
      <ParticleField />
      
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-electric-blue/10 to-vibrant-violet/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-vibrant-violet/10 to-neon-green/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating skill icons */}
      {floatingIcons.map(({ icon: Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className={`absolute ${position} text-electric-blue/30`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            delay,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon className="w-12 h-12" />
        </motion.div>
      ))}
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-block p-2 rounded-full bg-gradient-to-r from-electric-blue to-vibrant-violet mb-8 animate-glow-pulse">
            <div className="w-24 h-24 rounded-full bg-dark-slate flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-electric-blue" />
            </div>
          </div>
        </motion.div>
        
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight leading-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="block bg-gradient-to-r from-white via-electric-blue to-vibrant-violet bg-clip-text text-transparent">
            Kaavya Agrawal
          </span>
        </motion.h1>
        
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-2xl md:text-4xl text-gray-200 font-bold">
            Designing Interfaces. Developing Ideas. Telling Stories.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Multi-talented creative professional crafting immersive digital experiences 
            across design, development, writing, and animation.
          </p>
        </motion.div>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            className="group px-12 py-6 bg-gradient-to-r from-electric-blue to-vibrant-violet text-white font-bold rounded-2xl shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <div className="absolute inset-0 bg-gradient-to-r from-vibrant-violet to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center space-x-3">
              <span className="text-xl">Explore My Universe</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </motion.button>
          
          <motion.button
            className="px-12 py-6 border-2 border-electric-blue text-electric-blue font-bold rounded-2xl hover:bg-electric-blue hover:text-dark-slate transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <span className="text-xl">Let's Work Together</span>
          </motion.button>
        </motion.div>
        
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-gray-500 mb-4 font-mono text-sm tracking-wider">
            "Creativity isn't a skill. It's a system I build, break, and rebuild."
          </p>
        </motion.div>
        
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
            <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;