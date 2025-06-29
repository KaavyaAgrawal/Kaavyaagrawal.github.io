import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Palette, PenTool, Video, ArrowUpRight, Play, Star } from 'lucide-react';

const ProjectGalaxy = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Eye, color: 'from-stellar-cyan to-bioluminescent' },
    { id: 'development', name: 'Development', icon: Code, color: 'from-blue-400 to-cyan-400' },
    { id: 'design', name: 'Design', icon: Palette, color: 'from-purple-400 to-pink-400' },
    { id: 'animation', name: 'Animation', icon: Video, color: 'from-green-400 to-teal-400' },
    { id: 'writing', name: 'Writing', icon: PenTool, color: 'from-orange-400 to-red-400' },
  ];

  const projects = [
    {
      id: 1,
      title: "Neural Interface Dashboard",
      category: "development",
      description: "AI-powered dashboard with real-time data visualization and predictive analytics for modern businesses",
      image: "https://images.pexels.com/photos/7130560/pexels-photo-7130560.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["React", "TypeScript", "WebGL", "AI"],
      year: "2024",
      status: "Live",
      featured: true,
      links: { demo: "#", github: "#" }
    },
    {
      id: 2,
      title: "Quantum Brand System",
      category: "design",
      description: "Complete visual identity system for emerging tech startup including logo, guidelines, and digital assets",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Branding", "UI/UX", "Motion"],
      year: "2024",
      status: "Featured",
      featured: true,
      links: { demo: "#" }
    },
    {
      id: 3,
      title: "Character Animation Reel",
      category: "animation",
      description: "3D character modeling and animation showcase featuring advanced rigging and lighting techniques",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Blender", "Character", "Lighting"],
      year: "2024",
      status: "Award Winner",
      featured: false,
      links: { demo: "#" }
    },
    {
      id: 4,
      title: "Digital Consciousness",
      category: "writing",
      description: "Sci-fi narrative exploring AI sentience and human-machine relationships in the near future",
      image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Fiction", "Sci-Fi", "Narrative"],
      year: "2024",
      status: "Published",
      featured: false,
      links: { demo: "#" }
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      category: "development",
      description: "Next-generation e-commerce solution with AR product visualization and AI-powered recommendations",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Next.js", "Three.js", "Commerce"],
      year: "2024",
      status: "In Development",
      featured: true,
      links: { demo: "#", github: "#" }
    },
    {
      id: 6,
      title: "Minimalist Interface",
      category: "design",
      description: "Clean and intuitive user interface design focused on user experience and accessibility",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Interface", "Motion", "UX"],
      year: "2023",
      status: "Concept",
      featured: false,
      links: { demo: "#" }
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = filteredProjects.filter(p => !p.featured);

  const ProjectCard = ({ project, index, isFeatured = false }: { project: any, index: number, isFeatured?: boolean }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-100, 100], [30, -30]));
    const rotateY = useSpring(useTransform(x, [-100, 100], [-30, 30]));

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={cardRef}
        className={`group relative ${isFeatured ? 'lg:col-span-2' : ''} cursor-pointer`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        whileHover={{ y: -20 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onHoverStart={() => setHoveredProject(project.id)}
        onHoverEnd={() => setHoveredProject(null)}
        onClick={() => setSelectedProject(project.id)}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="relative void-glass hover:cosmic-glass transition-all duration-700 overflow-hidden"
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-stellar-cyan/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Project Image with Parallax */}
          <div className={`relative ${isFeatured ? 'h-80' : 'h-64'} overflow-hidden`}>
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{
                scale: hoveredProject === project.id ? 1.1 : 1,
              }}
              transition={{ duration: 0.7 }}
              style={{
                transform: hoveredProject === project.id ? 'translateZ(50px)' : 'translateZ(0px)',
              }}
            />
            
            {/* Dynamic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-cosmic-void/90 via-cosmic-void/20 to-transparent" />
            
            {/* Status Badge */}
            <motion.div
              className="absolute top-4 left-4 px-3 py-1 cosmic-glass text-xs text-stellar-cyan font-mono tracking-wider flex items-center space-x-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Star className="w-3 h-3" />
              <span>{project.status}</span>
            </motion.div>

            {/* Year Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 ocean-glass text-xs text-bioluminescent font-mono tracking-wider">
              {project.year}
            </div>

            {/* Hover Actions */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center space-x-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: hoveredProject === project.id ? 1 : 0,
                scale: hoveredProject === project.id ? 1 : 0.8
              }}
              transition={{ duration: 0.3 }}
            >
              {project.links.demo && (
                <motion.button
                  className="p-4 cosmic-glass hover:ocean-glass transition-all duration-300 stellar-glow"
                  whileHover={{ scale: 1.2, rotateY: 180 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {project.category === 'animation' ? 
                    <Play className="w-6 h-6 text-stellar-cyan" /> :
                    <ExternalLink className="w-6 h-6 text-stellar-cyan" />
                  }
                </motion.button>
              )}
              {project.links.github && (
                <motion.button
                  className="p-4 void-glass hover:cosmic-glass transition-all duration-300"
                  whileHover={{ scale: 1.2, rotateY: 180 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6 text-starlight" />
                </motion.button>
              )}
            </motion.div>

            {/* Ripple Effect */}
            {hoveredProject === project.id && (
              <motion.div
                className="absolute inset-0 border-2 border-stellar-cyan/50 rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>

          {/* Project Info */}
          <div className={`p-6 ${isFeatured ? 'p-8' : ''}`}>
            <div className="flex items-start justify-between mb-4">
              <h3 className={`${isFeatured ? 'text-2xl' : 'text-xl'} font-light text-starlight group-hover:text-stellar-cyan transition-colors duration-500`}>
                {project.title}
              </h3>
              <motion.div
                animate={{ 
                  rotate: hoveredProject === project.id ? 45 : 0,
                  scale: hoveredProject === project.id ? 1.2 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="w-5 h-5 text-starlight/40 group-hover:text-bioluminescent transition-colors duration-300" />
              </motion.div>
            </div>
            
            <p className={`text-starlight/60 ${isFeatured ? 'text-base' : 'text-sm'} mb-6 leading-relaxed font-light`}>
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  className="px-3 py-1 text-xs text-starlight/50 border border-starlight/10 font-mono tracking-wide hover:border-stellar-cyan/30 hover:text-stellar-cyan transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Progress Bar for Featured Projects */}
            {isFeatured && (
              <div className="mt-4">
                <div className="flex justify-between text-xs text-starlight/40 mb-2">
                  <span>Project Completion</span>
                  <span>95%</span>
                </div>
                <div className="w-full h-1 bg-starlight/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-stellar-cyan to-bioluminescent"
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Cosmic Debris */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-stellar-cyan/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Nebula Clouds */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full opacity-10"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              background: `radial-gradient(circle, rgba(0, 255, 170, 0.2) 0%, rgba(0, 212, 255, 0.1) 50%, transparent 100%)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
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

      <div className="container mx-auto px-8 relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-thin mb-8 cosmic-gradient"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            My Projects
          </motion.h2>
          <p className="text-xl text-starlight/60 font-light max-w-3xl mx-auto leading-relaxed">
            A curated collection of projects spanning design, development, animation, and storytelling
          </p>
        </motion.div>

        {/* Enhanced Category Navigation */}
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
                className={`relative flex items-center space-x-3 px-6 py-4 transition-all duration-700 overflow-hidden ${
                  activeCategory === category.id
                    ? 'cosmic-glass border-stellar-cyan/60 text-stellar-cyan'
                    : 'void-glass border-starlight/10 text-starlight/60 hover:border-starlight/30 hover:text-starlight'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0`}
                  animate={{
                    opacity: activeCategory === category.id ? 0.1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />
                
                <Icon className="w-5 h-5 relative z-10" />
                <span className="font-light tracking-wide relative z-10">{category.name}</span>
                
                {/* Ripple Effect */}
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 border border-stellar-cyan/30"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Featured Projects Section */}
        {activeCategory === 'all' && featuredProjects.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-thin text-starlight mb-8 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isFeatured={true} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Regular Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {(activeCategory === 'all' ? regularProjects : filteredProjects).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-cosmic-void/90 backdrop-blur-xl z-50 flex items-center justify-center p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="max-w-4xl w-full cosmic-glass p-8 max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                onClick={(e) => e.stopPropagation()}
              >
                {(() => {
                  const project = projects.find(p => p.id === selectedProject);
                  if (!project) return null;
                  
                  return (
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl font-thin text-starlight">{project.title}</h3>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="text-starlight/60 hover:text-starlight transition-colors duration-300"
                        >
                          ✕
                        </button>
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                      />
                      <p className="text-starlight/80 leading-relaxed mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 text-xs text-stellar-cyan border border-stellar-cyan/30 font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        {project.links.demo && (
                          <a href={project.links.demo} className="px-6 py-3 bg-stellar-cyan text-cosmic-void font-medium rounded-lg hover:bg-bioluminescent transition-colors duration-300">
                            View Project
                          </a>
                        )}
                        {project.links.github && (
                          <a href={project.links.github} className="px-6 py-3 border border-starlight/30 text-starlight rounded-lg hover:border-stellar-cyan hover:text-stellar-cyan transition-all duration-300">
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectGalaxy;