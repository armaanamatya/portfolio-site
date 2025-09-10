"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

interface TimelineItemProps {
  title: string;
  organization: string;
  duration: string;
  location?: string;
  description: string;
  skills: string[];
  type: "work" | "education";
  index: number;
}

export default function TimelineItem({
  title,
  organization,
  duration,
  location,
  description,
  skills,
  type,
  index
}: TimelineItemProps) {
  const isLeft = type === "work";
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}
    >
      {/* Timeline dot */}
      <div className={`absolute top-6 w-4 h-4 bg-[#06b6d4] rounded-full border-4 border-slate-900 ${
        isLeft ? "-right-2" : "-left-2"
      } z-10`}>
        <div className="absolute inset-0 bg-[#06b6d4] rounded-full animate-pulse opacity-75"></div>
      </div>
      
      {/* Content Card */}
      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-[#06b6d4]/50 transition-all duration-300 group hover:shadow-lg hover:shadow-[#06b6d4]/10">
        {/* Header */}
        <div className="mb-4">
          <div className={`flex items-center gap-2 mb-2 ${isLeft ? "justify-end" : "justify-start"}`}>
            <Calendar size={16} className="text-[#06b6d4]" />
            <span className="text-[#06b6d4] text-sm font-medium">{duration}</span>
          </div>
          
          <h3 className="text-xl font-semibold text-white group-hover:text-[#06b6d4] transition-colors mb-1">
            {title}
          </h3>
          <p className="text-slate-300 font-medium mb-2">{organization}</p>
          
          {location && (
            <div className={`flex items-center gap-1 text-slate-400 text-sm ${
              isLeft ? "justify-end" : "justify-start"
            }`}>
              <MapPin size={14} />
              <span>{location}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Skills/Technologies */}
        <div className={`flex flex-wrap gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>
          {skills.map((skill, skillIndex) => (
            <Badge 
              key={skillIndex} 
              variant="secondary" 
              className="bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20 hover:bg-[#06b6d4]/20 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}