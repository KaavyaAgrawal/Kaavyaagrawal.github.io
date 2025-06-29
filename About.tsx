import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Trophy, Rocket, Calendar, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2024",
      title: "Class 12 PCM Journey",
      description: "Balancing JEE preparation with creative pursuits, proving that science and art can coexist beautifully.",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "Full-Stack Mastery",
      description: "Dove deep into modern web technologies, building responsive applications that solve real problems.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Design Evolution",
      description: "Transitioned from basic graphics to sophisticated UI/UX design, developing a keen eye for user experience.",
      icon: <Target className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "Creative Genesis",
      description: "First steps into digital creation, discovering the power of combining technology with artistic vision.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "4", label: "Disciplines Mastered" },
    { number: "2+", label: "Years Experience" },
    { number: "∞", label: "Ideas Generated" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-dark-slate via-midnight to-deep-purple relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-vibrant-violet/5 rounded-full blur-3xl animate-pulse"></div>
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
            My Story
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The journey of a multidisciplinary creative who believes in breaking boundaries
          </p>
        </motion.div>
        
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-electric-blue to-vibrant-violet bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Profile Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-vibrant-violet rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-black text-white">KA</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Kaavya Agrawal</h3>
                  <p className="text-gray-400">Multidisciplinary Creative</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-electric-blue" />
                  <span>India</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-vibrant-violet" />
                  <span>Class 12 PCM Student</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Trophy className="w-5 h-5 text-neon-green" />
                  <span>JEE Aspirant & Creative Professional</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8">
              <h4 className="text-xl font-bold text-white mb-4">Philosophy</h4>
              <blockquote className="text-gray-300 italic text-lg leading-relaxed">
                "I believe in the power of interdisciplinary thinking. Whether I'm solving complex physics problems 
                or designing user interfaces, the same creative problem-solving mindset applies. 
                Science teaches me precision, art teaches me expression, and technology gives me the tools to bridge both worlds."
              </blockquote>
            </div>
          </motion.div>
          
          {/* Timeline Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Journey Timeline</h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex space-x-6 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-vibrant-violet rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-electric-blue to-vibrant-violet mt-4"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-electric-blue font-bold text-lg">{item.year}</span>
                      <h4 className="text-xl font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Skills Highlight */}
        <motion.div
          className="text-center bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">What Drives Me</h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            I'm passionate about creating digital experiences that matter. Whether it's designing an intuitive interface, 
            building a performant web application, crafting a compelling story, or bringing characters to life through animation, 
            I approach each project with curiosity, precision, and a commitment to excellence. 
            My goal is to bridge the gap between technical capability and creative vision, 
            proving that the best solutions come from thinking beyond traditional boundaries.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;