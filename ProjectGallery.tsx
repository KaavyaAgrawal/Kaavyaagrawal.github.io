import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Palette, PenTool, Video } from 'lucide-react';

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All', icon: Eye },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'writing', name: 'Writing', icon: PenTool },
    { id: 'animation', name: 'Animation', icon: Video },
  ];

  const projects = [
    {
      id: 1,
      title: "Neural Interface",
      category: "development",
      description: "AI-powered dashboard with real-time data visualization and predictive analytics",
      image: "https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["React", "TypeScript", "D3.js", "WebGL"],
      year: "2024",
      links: { demo: "#", github: "#" }
    },
    {
      id: 2,
      title: "Quantum Brand System",
      category: "design",
      description: "Complete visual identity for emerging tech startup including logo, guidelines, and digital assets",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Branding", "UI/UX", "Motion Graphics"],
      year: "2024",
      links: { demo: "#" }
    },
    {
      id: 3,
      title: "Digital Consciousness",
      category: "writing",
      description: "Sci-fi narrative exploring AI sentience and human-machine relationships in near future",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Fiction", "Sci-Fi", "Philosophy"],
      year: "2024",
      links: { demo: "#" }
    },
    {
      id: 4,
      title: "Neon Dreams",
      category: "animation",
      description: "Cyberpunk-inspired 3D character animation showcasing advanced rigging and lighting techniques",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Blender", "Character Design", "Lighting"],
      year: "2024",
      links: { demo: "#" }
    },
    {
      id: 5,
      title: "Immersive Commerce",
      category: "development",
      description: "Next-gen e-commerce platform with AR product visualization and AI recommendations",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Next.js", "Three.js", "AR", "AI"],
      year: "2024",
      links: { demo: "#", github: "#" }
    },
    {
      id: 6,
      title: "Minimalist Luxury",
      category: "design",
      description: "High-end fashion brand identity with focus on sustainable luxury and modern aesthetics",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Fashion", "Luxury", "Sustainability"],
      year: "2023",
      links: { demo: "#" }
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-thin mb-8 gradient-text">
            Selected Works
          </h2>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
            A curated collection of projects spanning multiple disciplines
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-3 glass border transition-all duration-500 ${
                  activeCategory === category.id
                    ? 'border-electric/60 bg-electric/10 text-electric'
                    : 'border-white/10 text-white/60 hover:border-white/30 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor
              >
                <Icon className="w-4 h-4" />
                <span className="font-light tracking-wide">{category.name}</span>
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
                className="group relative glass border border-white/10 hover:border-electric/30 transition-all duration-700 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project.id)}
                data-cursor-view
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 glass border border-white/20 text-xs text-white/80 font-mono">
                    {project.year}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-electric/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-light text-white group-hover:text-electric transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      {project.links.demo && (
                        <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-electric transition-colors duration-300" />
                      )}
                      {project.links.github && (
                        <Github className="w-4 h-4 text-white/40 group-hover:text-electric transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                  
                  <p className="text-white/60 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs text-white/50 border border-white/10 font-mono"
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

export default ProjectGallery;