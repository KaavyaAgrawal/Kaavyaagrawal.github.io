import React from 'react';
import { Palette, Code2, PenTool, Video, ExternalLink, ArrowUpRight } from 'lucide-react';

const SkillSection = () => {
  const skills = [
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Graphic Design",
      description: "UI/UX design, brand identity, and digital art that commands attention and drives engagement.",
      projects: [
        "SaaS Dashboard Interface",
        "Tech Startup Branding",
        "Mobile App UI System",
        "Digital Art Collection"
      ],
      gradient: "from-orange-500 to-red-600",
      bgGradient: "from-orange-500/10 to-red-600/10"
    },
    {
      icon: <Code2 className="w-10 h-10" />,
      title: "Web & App Development",
      description: "High-performance, responsive applications built with modern frameworks and cutting-edge tech.",
      projects: [
        "E-commerce Platform",
        "Real-time Chat Application",
        "Portfolio Websites",
        "Progressive Web Apps"
      ],
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-500/10 to-blue-600/10"
    },
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "Content & Story Writing",
      description: "Compelling narratives, technical content, and creative copy that resonates and converts.",
      projects: [
        "Tech Industry Analysis",
        "Brand Storytelling",
        "Creative Fiction Series",
        "Marketing Campaigns"
      ],
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-500/10 to-teal-600/10"
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "3D Animation",
      description: "Immersive 3D modeling, animation reels, and visual effects that bring concepts to life.",
      projects: [
        "Product Visualization",
        "Character Animation",
        "Motion Graphics",
        "Architectural Renders"
      ],
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-500/10 to-purple-600/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences across multiple disciplines with precision, innovation, and creative vision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 hover:bg-slate-800/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.bgGradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${skill.gradient} mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6">{skill.title}</h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">{skill.description}</p>
                
                <div className="space-y-3 mb-8">
                  {skill.projects.map((project, idx) => (
                    <div key={idx} className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 group/item">
                      <ExternalLink className="w-4 h-4 mr-3 group-hover/item:text-cyan-400" />
                      <span className="font-medium">{project}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`group/btn px-8 py-4 bg-gradient-to-r ${skill.gradient} text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2`}>
                  <span>View Projects</span>
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;