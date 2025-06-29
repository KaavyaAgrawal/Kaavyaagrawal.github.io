import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, Eye, Palette, Code2, PenTool, Video } from 'lucide-react';

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Creations', icon: Eye },
    { id: 'design', name: 'Graphic Design', icon: Palette },
    { id: 'development', name: 'Development', icon: Code2 },
    { id: 'writing', name: 'Writing', icon: PenTool },
    { id: 'animation', name: '3D Animation', icon: Video },
  ];

  const projects = [
    {
      id: 1,
      title: "Neural Interface Dashboard",
      category: "design",
      description: "Futuristic UI/UX design for AI-powered analytics platform",
      image: "https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["UI/UX", "Figma", "Prototyping"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 2,
      title: "Quantum Commerce Platform",
      category: "development",
      description: "Full-stack e-commerce solution with real-time features",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "MongoDB"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 3,
      title: "Digital Dystopia Series",
      category: "writing",
      description: "Sci-fi short story collection exploring AI consciousness",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Fiction", "Sci-Fi", "Narrative"],
      links: { demo: "#" }
    },
    {
      id: 4,
      title: "Cyberpunk Character Reel",
      category: "animation",
      description: "3D character modeling and animation showcase",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Blender", "Character Design", "Animation"],
      links: { demo: "#" }
    },
    {
      id: 5,
      title: "Neon Brand Identity",
      category: "design",
      description: "Complete brand system for tech startup",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      links: { demo: "#" }
    },
    {
      id: 6,
      title: "AI Chat Application",
      category: "development",
      description: "Real-time messaging app with AI integration",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "WebSocket", "AI API"],
      links: { demo: "#", github: "#" }
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-deep-purple via-dark-slate to-midnight relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-electric-blue rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-vibrant-violet rounded-full blur-3xl animate-pulse"></div>
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
            My Creations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects spanning design, development, storytelling, and animation
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-electric-blue to-vibrant-violet text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-hover
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl overflow-hidden hover:border-electric-blue/50 transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      {project.links.demo && (
                        <motion.a
                          href={project.links.demo}
                          className="p-3 bg-electric-blue rounded-full text-white hover:bg-vibrant-violet transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          data-cursor-hover
                        >
                          {project.category === 'animation' ? <Play className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                        </motion.a>
                      )}
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          className="p-3 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          data-cursor-hover
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectShowcase;