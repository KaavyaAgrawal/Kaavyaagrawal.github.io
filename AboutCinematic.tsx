import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Video, PenTool, Zap, Target, Rocket } from 'lucide-react';

const AboutCinematic = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Crafting digital experiences with modern frameworks",
      color: "electric"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Visual storytelling through interface and brand design",
      color: "violet"
    },
    {
      icon: Video,
      title: "Animation",
      description: "Bringing concepts to life through 3D motion",
      color: "neon"
    },
    {
      icon: PenTool,
      title: "Writing",
      description: "Narrative creation and compelling content",
      color: "electric"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Multidisciplinary Mastery",
      description: "Balancing JEE preparation with creative excellence",
      icon: Target
    },
    {
      year: "2023",
      title: "Technical Evolution",
      description: "Advanced into full-stack development and 3D animation",
      icon: Zap
    },
    {
      year: "2022",
      title: "Creative Genesis",
      description: "First steps into digital design and storytelling",
      icon: Rocket
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 border border-white/5 rounded-full"
            style={{
              left: `${10 + i * 25}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30 + i * 10,
              repeat: Infinity,
              ease: "linear",
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
          <h2 className="text-6xl md:text-7xl font-thin mb-8 gradient-text">
            The Story
          </h2>
          <p className="text-xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed">
            A multidisciplinary creative journey spanning design, development, animation, and storytelling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Skills Grid */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-thin text-white mb-12">Disciplines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    className="group glass border border-white/10 p-6 hover:border-electric/30 transition-all duration-700"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    data-cursor
                  >
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-electric group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-light text-white mb-2">{skill.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{skill.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-thin text-white mb-12">Journey</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.year}
                    className="flex space-x-6 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 glass border border-electric/30 flex items-center justify-center group-hover:border-electric/60 transition-all duration-500">
                        <Icon className="w-5 h-5 text-electric" />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-px h-16 bg-gradient-to-b from-electric/30 to-transparent mt-4" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-electric font-mono text-sm">{item.year}</span>
                        <h4 className="text-lg font-light text-white">{item.title}</h4>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
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
          <div className="max-w-4xl mx-auto glass border border-white/10 p-12">
            <blockquote className="text-2xl md:text-3xl font-thin text-white/90 leading-relaxed mb-6">
              "Creativity isn't a skill. It's a system I build, break, and rebuild."
            </blockquote>
            <p className="text-white/60 font-light">
              Every project is an opportunity to push boundaries, challenge conventions, and create something that didn't exist before.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCinematic;