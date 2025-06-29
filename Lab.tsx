import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Zap, Cpu, Sparkles, ArrowUpRight } from 'lucide-react';

const Lab = () => {
  const experiments = [
    {
      title: "Neural Style Transfer",
      description: "AI-powered art generation using deep learning",
      status: "In Progress",
      tech: ["Python", "TensorFlow", "OpenCV"],
      color: "from-electric-blue to-cyan-400"
    },
    {
      title: "Quantum UI Components",
      description: "Next-gen React components with quantum-inspired animations",
      status: "Prototype",
      tech: ["React", "Framer Motion", "WebGL"],
      color: "from-vibrant-violet to-purple-400"
    },
    {
      title: "Voice-Controlled 3D Modeling",
      description: "Hands-free 3D creation using voice commands",
      status: "Concept",
      tech: ["Blender API", "Speech Recognition", "Python"],
      color: "from-neon-green to-emerald-400"
    },
    {
      title: "Holographic Portfolio",
      description: "AR/VR portfolio experience for immersive showcasing",
      status: "Research",
      tech: ["Three.js", "WebXR", "A-Frame"],
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section id="lab" className="py-24 bg-gradient-to-b from-midnight via-deep-purple to-dark-slate relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-vibrant-violet/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-electric-blue to-vibrant-violet rounded-2xl">
              <Beaker className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-6xl md:text-7xl font-black mb-8 bg-gradient-to-r from-electric-blue via-white to-vibrant-violet bg-clip-text text-transparent">
            The Lab
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Where wild ideas meet cutting-edge technology. Experimental projects, prototypes, and future concepts.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.title}
              className="group relative bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-electric-blue/50 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-vibrant-violet/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 bg-gradient-to-r ${experiment.color} rounded-xl`}>
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      experiment.status === 'In Progress' ? 'bg-neon-green animate-pulse' :
                      experiment.status === 'Prototype' ? 'bg-electric-blue' :
                      experiment.status === 'Concept' ? 'bg-vibrant-violet' :
                      'bg-gray-500'
                    }`}></div>
                    <span className="text-sm text-gray-400 font-medium">{experiment.status}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-electric-blue transition-colors duration-300">
                  {experiment.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {experiment.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {experiment.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <motion.button
                  className="flex items-center space-x-2 text-electric-blue hover:text-vibrant-violet transition-colors duration-300 font-semibold"
                  whileHover={{ x: 5 }}
                  data-cursor-hover
                >
                  <span>Explore Experiment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl">
            <Sparkles className="w-5 h-5 text-electric-blue animate-pulse" />
            <span className="text-gray-300 font-medium">More experiments brewing...</span>
            <Zap className="w-5 h-5 text-vibrant-violet" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Lab;