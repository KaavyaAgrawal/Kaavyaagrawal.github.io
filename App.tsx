import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CosmicOceanBackground from './components/CosmicOceanBackground';
import Navigation from './components/Navigation';
import CosmicHero from './components/CosmicHero';
import ProjectGalaxy from './components/ProjectGalaxy';
import AboutDepths from './components/AboutDepths';
import ContactNebula from './components/ContactNebula';

function App() {
  return (
    <div className="min-h-screen bg-cosmic-void text-starlight relative overflow-x-hidden">
      <CosmicOceanBackground />
      
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Navigation />
          <main>
            <CosmicHero />
            <ProjectGalaxy />
            <AboutDepths />
            <ContactNebula />
          </main>
          
          {/* Footer */}
          <footer className="py-16 border-t border-stellar-cyan/10">
            <div className="container mx-auto px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.div
                  className="mb-8 md:mb-0 text-center md:text-left"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-thin cosmic-gradient mb-3">
                    KAAVYA AGRAWAL
                  </div>
                  <p className="text-starlight/40 text-sm font-light">
                    Designing in dimensions beyond the surface
                  </p>
                </motion.div>
                
                <motion.p
                  className="text-starlight/30 text-sm font-light"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  © {new Date().getFullYear()} — Crafted in the cosmic depths
                </motion.p>
              </div>
            </div>
          </footer>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;