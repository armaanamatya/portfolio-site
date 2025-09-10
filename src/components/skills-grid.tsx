"use client";

import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    icon: string;
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { name: "C", icon: "https://skillicons.dev/icons?i=c" },
      { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
      { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "SQL", icon: "https://skillicons.dev/icons?i=mysql" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
      { name: "Sass", icon: "https://skillicons.dev/icons?i=sass&theme=dark" },
      { name: "TailwindCSS", icon: "https://skillicons.dev/icons?i=tailwind&theme=dark" },
      { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap&theme=dark" },
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Angular", icon: "https://skillicons.dev/icons?i=angular" },
      { name: "jQuery", icon: "https://skillicons.dev/icons?i=jquery&theme=dark" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "Vite", icon: "https://skillicons.dev/icons?i=vite&theme=dark" },
      { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui&theme=dark" }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
      { name: "Spring Boot", icon: "https://skillicons.dev/icons?i=spring" },
      { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
      { name: "Flask", icon: "https://skillicons.dev/icons?i=flask" },
      { name: "Django", icon: "https://skillicons.dev/icons?i=django&theme=dark" }
    ]
  },
  {
    title: "AI/ML",
    skills: [
      { name: "PyTorch", icon: "https://skillicons.dev/icons?i=pytorch" },
      { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Supabase", icon: "https://skillicons.dev/icons?i=supabase" },
      { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" }
    ]
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: "https://skillicons.dev/icons?i=docker&theme=dark" },
      { name: "Linux", icon: "https://skillicons.dev/icons?i=linux&theme=dark" },
      { name: "Cloudflare", icon: "https://skillicons.dev/icons?i=cloudflare&theme=dark" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub Actions", icon: "https://skillicons.dev/icons?i=githubactions&theme=dark" }
    ]
  },
  {
    title: "Cloud",
    skills: [
      { name: "Google Cloud Platform", icon: "https://skillicons.dev/icons?i=gcp" },
      { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" }
    ]
  }
];

export default function SkillsGrid() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4" style={{ color: '#06b6d4' }}>
          Skills
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Technologies and tools I use to build amazing software
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-[#06b6d4]/50 transition-all duration-300 group"
          >
            {/* Category Header */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white group-hover:text-[#06b6d4] transition-colors mb-4">
                {category.title}
              </h3>
            </div>

            {/* Skills Icons Grid */}
            <div className="grid grid-cols-4 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  className="group/skill relative"
                >
                  <div className="w-12 h-12 rounded-lg bg-slate-700/50 border border-slate-600/50 flex items-center justify-center hover:border-[#06b6d4]/50 hover:bg-slate-600/50 transition-all duration-300 group-hover/skill:scale-110">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-8 h-8"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-slate-700">
                      {skill.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}