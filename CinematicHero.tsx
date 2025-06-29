import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';

const CinematicHero = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const heroTexts = [
    "Building immersive experiences",
    "Through design, code, and story"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loadingComplete) {
      const interval = setInterval(() => {
        setTextIndex((prev) => (prev + 1) % heroTexts.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [loadingComplete]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Loading Sequence */}
      <AnimatePresence>
        {!loadingComplete && (
          <motion.div
            className="fixed inset-0 z-50 bg-void flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                className="w-1 h-32 bg-electric mx-auto mb-8"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.p
                className="text-white/60 font-thin tracking-[0.3em] text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                ENTERING PORTFOLIO
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white/5"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: loadingComplete ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Name */}
        <motion.h1
          className="text-8xl md:text-9xl font-thin tracking-[-0.05em] mb-8"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <span className="gradient-text">KAAVYA</span>
          <br />
          <span className="text-white/40">AGRAWAL</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <div className="h-20 mb-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              className="text-2xl md:text-3xl font-thin text-white/80 tracking-wide"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {heroTexts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <motion.button
          className="group relative px-12 py-4 glass border border-electric/30 hover:border-electric/60 transition-all duration-700"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          data-cursor
        >
          <div className="absolute inset-0 bg-electric/5 group-hover:bg-electric/10 transition-all duration-700" />
          <div className="relative flex items-center space-x-3">
            <Play className="w-5 h-5 text-electric" />
            <span className="text-white font-light tracking-wider">ENTER THE PORTFOLIO</span>
          </div>
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-white/40 text-xs tracking-widest font-thin">SCROLL</span>
            <ArrowDown className="w-4 h-4 text-electric" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CinematicHero;