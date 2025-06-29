import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Waves } from 'lucide-react';

const CosmicHero = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Ocean Loading Sequence */}
      <AnimatePresence>
        {!loadingComplete && (
          <motion.div
            className="fixed inset-0 z-50 bg-cosmic-void flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div className="text-center">
              <motion.div
                className="w-32 h-32 mx-auto mb-8 relative"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-stellar-cyan to-bioluminescent opacity-20 animate-pulse" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-bioluminescent to-cosmic-violet opacity-40 animate-pulse" />
                <div className="absolute inset-8 rounded-full bg-stellar-cyan animate-pulse" />
              </motion.div>
              <motion.p
                className="text-starlight/60 font-thin tracking-[0.4em] text-sm"
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

      {/* Floating Cosmic Debris */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-stellar-cyan/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: loadingComplete ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {/* Name with Cosmic Glow - Reduced Size */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-thin tracking-[-0.05em] mb-8 leading-none"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <span className="cosmic-gradient">Kaavya Agrawal</span>
        </motion.h1>

        {/* Subtitle with Ocean Wave Effect */}
        <motion.p
          className="text-xl md:text-2xl font-thin text-starlight/80 tracking-wide mb-12 leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          Designing in dimensions beyond the surface
        </motion.p>

        {/* CTA Button with Ripple Effect */}
        <motion.button
          className="group relative px-12 py-6 cosmic-glass hover:ocean-glass transition-all duration-700 ripple-effect"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-stellar-cyan/10 to-bioluminescent/10 group-hover:from-bioluminescent/20 group-hover:to-stellar-cyan/20 transition-all duration-700" />
          <div className="relative flex items-center space-x-4">
            <Waves className="w-6 h-6 text-stellar-cyan group-hover:text-bioluminescent transition-colors duration-500" />
            <span className="text-starlight font-light tracking-wider text-lg">Explore My Work</span>
          </div>
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-3"
          >
            <span className="text-starlight/40 text-xs tracking-[0.3em] font-thin">SCROLL</span>
            <ArrowDown className="w-5 h-5 text-stellar-cyan" />
            <div className="w-px h-8 bg-gradient-to-b from-stellar-cyan to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Ambient Light Rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-stellar-cyan/20 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              transform: `rotate(${-10 + i * 5}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scaleY: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CosmicHero;