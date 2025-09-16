"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const experienceItems: ExperienceItem[] = [
    {
      company: "algoverse",
      role: "machine learning research intern",
      duration: "aug 2025 - nov 2025",
      icon: "ML"
    },
    {
      company: "ai agent stealth startup",
      role: "fullstack ai software engineer", 
      duration: "may 2025 - present",
      icon: "AI"
    },
    {
      company: "mymcat.ai",
      role: "software engineering lead",
      duration: "aug 2024 - apr 2025",
      icon: "M"
    },
    {
      company: "fusemachines",
      role: "machine learning engineer intern",
      duration: "may 2024 - aug 2024",
      icon: "FM"
    },
    {
      company: "f1soft international",
      role: "software engineer intern",
      duration: "may 2023 - aug 2023",
      icon: "F1"
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: "languages",
      skills: ["python", "c", "cpp", "java", "js", "ts"]
    },
    {
      title: "frontend", 
      skills: ["react", "nextjs", "angular", "tailwind", "html", "css"]
    },
    {
      title: "backend",
      skills: ["nodejs", "express", "spring", "fastapi", "flask", "django"]
    },
    {
      title: "ai/ml",
      skills: ["pytorch", "tensorflow"]
    },
    {
      title: "databases",
      skills: ["mysql", "postgres", "mongodb", "supabase", "redis"]
    },
    {
      title: "devops & cloud",
      skills: ["docker", "gcp", "aws", "git", "linux"]
    }
  ];

  return (
    <div className="h-screen bg-[#0a0a0a] text-white flex">
      {/* Left Content Section */}
      <div className="flex-1 flex items-center justify-center pl-32 pr-16">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <header className={`mb-20 transition-all duration-1000 ease-out ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-7xl font-light mb-12 text-white tracking-tight leading-tight">
              hey, i'm armaan.
            </h1>
            <p className="text-xl leading-8 text-gray-300 max-w-2xl">
              i'm a computer science and mathematics student at the university of houston
              with an interest in building useful, scaleable, and beautiful
              software. i also enjoy learning about finance, urban planning,
              and languages in my spare time.
            </p>
          </header>

          {/* Recent Roles Section */}
          <section className={`transition-all duration-1000 ease-out delay-300 ${
            isLoaded 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-xl font-light mb-10 text-white">recent roles:</h2>
            <div className="space-y-8">
              {experienceItems.slice(0, 3).map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-6 transition-all duration-700 ease-out ${
                    isLoaded 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${600 + index * 200}ms` }}
                >
                  <div className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center text-sm font-medium text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-medium text-white mb-1">{item.company}</h3>
                        <p className="text-base text-gray-400">{item.role}</p>
                      </div>
                      <p className="text-base text-gray-500 ml-6 flex-shrink-0">{item.duration}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Right Profile Picture Section */}
      <div className="w-96 flex items-center justify-center pr-32">
        <div className={`w-72 h-96 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center text-gray-400 transition-all duration-1000 ease-out delay-500 ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-base">your picture here</p>
        </div>
      </div>

      {/* Scroll Indicator - Fixed at bottom */}
      <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 text-center text-gray-500 z-50 pointer-events-none transition-all duration-1000 ease-out delay-1000 ${
          isLoaded 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
        style={{
          position: 'fixed',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999
        }}
      >
        <span className="text-sm block mb-2 animate-pulse">scroll to see more</span>
        <div className="animate-bounce text-lg">↓</div>
      </div>
    </div>
  );
}
