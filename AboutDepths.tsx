import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Video, PenTool, Compass, Anchor, Waves } from 'lucide-react';

const AboutDepths = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Building responsive web applications with modern frameworks and technologies",
      depth: "Frontend & Backend"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating visual experiences that combine aesthetics with functionality",
      depth: "UI/UX & Graphics"
    },
    {
      icon: Video,
      title: "Animation",
      description: "Bringing ideas to life through 3D modeling and motion graphics",
      depth: "3D & Motion"
    },
    {
      icon: PenTool,
      title: "Writing",
      description: "Crafting compelling narratives and engaging content across mediums",
      depth: "Content & Stories"
    }
  ];

  const journey = [
    {
      year: "2024",
      title: "Multidisciplinary Focus",
      description: "Balancing academic excellence in Class 12 PCM with creative professional development",
      icon: Compass,
      depth: 0
    },
    {
      year: "2023",
      title: "Technical Growth",
      description: "Expanded into full-stack development and advanced 3D animation techniques",
      icon: Anchor,
      depth: 25
    },
    {
      year: "2022",
      title: "Creative Foundation",
      description: "Started the journey into digital design and creative technology",
      icon: Waves,
      depth: 50
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-32 opacity-10"
            style={{
              top: `${i * 20}%`,
              background: `linear-gradient(90deg, transparent 0%, rgba(0, 212, 255, ${0.1 - i * 0.02}) 50%, transparent 100%)`,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-thin mb-8 cosmic-gradient">
            About Me
          </h2>
          <p className="text-xl text-starlight/60 font-light max-w-3xl mx-auto leading-relaxed">
            A multidisciplinary creative passionate about bridging technology and artistry
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Skills Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-thin text-starlight mb-12">Skills & Expertise</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {/* Skill Indicator Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-stellar-cyan/50 to-bioluminescent/20" />
                    
                    <div className="flex items-start space-x-6 pl-8">
                      <div className="relative">
                        <div className="w-12 h-12 cosmic-glass border border-stellar-cyan/30 flex items-center justify-center group-hover:border-bioluminescent/60 transition-all duration-500">
                          <Icon className="w-6 h-6 text-stellar-cyan group-hover:text-bioluminescent transition-colors duration-500" />
                        </div>
                        {/* Skill Marker */}
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-stellar-cyan rounded-full animate-pulse" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-light text-starlight">{skill.title}</h4>
                          <span className="text-xs text-starlight/40 font-mono">{skill.depth}</span>
                        </div>
                        <p className="text-starlight/60 text-sm leading-relaxed">{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-thin text-starlight mb-12">My Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-stellar-cyan via-bioluminescent to-cosmic-violet" />
              
              <div className="space-y-12">
                {journey.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.year}
                      className="relative flex items-start space-x-6"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.3 }}
                      viewport={{ once: true }}
                    >
                      {/* Timeline Node */}
                      <div className="relative z-10">
                        <div className="w-12 h-12 cosmic-glass border border-bioluminescent/40 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-bioluminescent" />
                        </div>
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 rounded-full border border-stellar-cyan/20 animate-ping" />
                      </div>
                      
                      <div className="flex-1 pb-8">
                        <div className="flex items-center space-x-4 mb-2">
                          <span className="text-stellar-cyan font-mono text-sm tracking-wider">{item.year}</span>
                          <h4 className="text-lg font-light text-starlight">{item.title}</h4>
                        </div>
                        <p className="text-starlight/60 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto void-glass p-12 relative overflow-hidden">
            {/* Floating Particles */}
            <div className="absolute inset-0">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-bioluminescent/60 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            <blockquote className="text-2xl md:text-3xl font-thin text-starlight/90 leading-relaxed mb-6 relative z-10">
              "Creativity isn't just a skill — it's a way of thinking that transforms challenges into opportunities."
            </blockquote>
            <p className="text-starlight/60 font-light relative z-10">
              Every project is an opportunity to push boundaries and create something meaningful that bridges art and technology.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDepths;