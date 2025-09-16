"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Calendar, Building2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  company?: string;
  description: string;
  timeline: string;
  skills: Array<{
    name: string;
    icon: string;
  }>;
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "featured";
  index: number;
}

export default function ProjectCard({
  title,
  company,
  description,
  timeline,
  skills,
  githubUrl,
  liveUrl,
  status,
  index
}: ProjectCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case "featured": return "from-[#06b6d4] to-[#0891b2]";
      case "in-progress": return "from-yellow-400 to-orange-400";
      default: return "from-green-400 to-emerald-400";
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case "featured": return "★ Featured";
      case "in-progress": return "⚡ In Progress";
      default: return "✓ Completed";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -8,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.2 }
      }}
      className="group relative perspective-1000"
    >
      {/* Pokemon Card Container */}
      <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl p-1 overflow-hidden">
        {/* Holographic Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#06b6d4]/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${getStatusColor()} opacity-30 animate-pulse`}></div>
        
        {/* Main Card Content */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700/50 group-hover:border-[#06b6d4]/30 transition-all duration-300 overflow-hidden">
          {/* Status Badge */}
          <div className="absolute top-4 right-4 z-10">
            <div className={`px-3 py-1 rounded-full text-xs font-bold text-black bg-gradient-to-r ${getStatusColor()} shadow-lg`}>
              {getStatusLabel()}
            </div>
          </div>

          {/* Header Section */}
          <div className="p-6 pb-4">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-[#06b6d4] transition-colors duration-300 mb-2">
                {title}
              </h3>
              {company && (
                <div className="flex items-center gap-2 text-slate-400 mb-3">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm font-medium">{company}</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{timeline}</span>
              </div>
            </div>
          </div>

          {/* Visual Area - Gradient Placeholder with Pattern */}
          <div className="relative h-32 mx-6 mb-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600/50 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/10 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.1),transparent)] group-hover:bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.2),transparent)] transition-all duration-500"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-[#06b6d4]/40 animate-pulse"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#06b6d4]/60 animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
              💻
            </div>
          </div>

          {/* Description */}
          <div className="px-6 mb-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Skills Section */}
          <div className="px-6 mb-4">
            <h4 className="text-sm font-semibold text-slate-400 mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: (index * 0.1) + (skillIndex * 0.05) 
                  }}
                  className="group/skill relative"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-700/50 border border-slate-600/50 flex items-center justify-center hover:border-[#06b6d4]/50 hover:bg-slate-600/50 transition-all duration-300 hover:scale-110">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-6 h-6"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                    <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-slate-700 shadow-lg">
                      {skill.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer with Actions */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
              <div className="flex gap-3">
                {githubUrl && (
                  <a 
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-[#06b6d4] border border-slate-600/50 hover:border-[#06b6d4]/30 rounded-lg transition-all duration-300 text-sm"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                )}
                {liveUrl && (
                  <a 
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-[#06b6d4]/10 hover:bg-[#06b6d4]/20 text-[#06b6d4] border border-[#06b6d4]/30 hover:border-[#06b6d4]/50 rounded-lg transition-all duration-300 text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
              
              {/* Holographic Corner Effect */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#06b6d4]/20 to-purple-500/20 group-hover:from-[#06b6d4]/40 group-hover:to-purple-500/40 transition-all duration-300 animate-pulse"></div>
            </div>
          </div>

          {/* Shine Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
        </div>
      </div>
    </motion.div>
  );
}