"use client";

import { motion } from "framer-motion";
import TimelineItem from "./timeline-item";

interface TimelineEntry {
  title: string;
  organization: string;
  duration: string;
  location?: string;
  description: string;
  skills: string[];
  type: "work" | "education";
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
}

const timelineData: TimelineEntry[] = [
  // Education - Spans the entire timeline on the right
  {
    title: "Bachelor of Science in Computer Science and Mathematics",
    organization: "University of Houston",
    duration: "Aug 2022 - Dec 2025",
    location: "Houston, TX",
    description: "Pursuing dual degree in Computer Science and Mathematics. Gaining comprehensive knowledge in algorithms, data structures, mathematical modeling, and advanced CS topics while working internships during summers.",
    skills: ["Algorithms", "Data Structures", "Mathematics", "Software Engineering", "System Design"],
    type: "education",
    startYear: 2022,
    startMonth: 8,
    endYear: 2025,
    endMonth: 12
  },

  // Work Experience (Chronologically positioned)
  {
    title: "Software Engineer Intern",
    organization: "F1Soft International",
    duration: "May 2023 - Aug 2023",
    location: "Remote",
    description: "Engineered high-performance RESTful APIs using Java Spring Boot, reducing request latency by 50%. Implemented secure JWT authentication system with Spring Security.",
    skills: ["Java", "Spring Boot", "JWT", "REST APIs", "Postman", "Supabase"],
    type: "work",
    startYear: 2023,
    startMonth: 5,
    endYear: 2023,
    endMonth: 8
  },
  {
    title: "Machine Learning Engineer Intern",
    organization: "FuseMachines",
    duration: "May 2024 - Aug 2024",
    location: "New York, NY",
    description: "Engineered LLMs including BERT and Attention Models for software requirements analysis. Improved project planning efficiency by 37% and saved company $2000 annually through NLP optimization.",
    skills: ["BERT", "scikit-learn", "spaCy", "NLTK", "TF-IDF", "Python"],
    type: "work",
    startYear: 2024,
    startMonth: 5,
    endYear: 2024,
    endMonth: 8
  },
  {
    title: "Software Engineering Lead",
    organization: "MyMCAT.ai",
    duration: "Aug 2024 - April 2025",
    location: "Houston, TX",
    description: "Led development of AI-based education platform serving 1,000+ university students. Built with NextJS, TypeScript, Prisma ORM, Supabase, Clerk authentication, and Stripe payments.",
    skills: ["NextJS", "TypeScript", "Prisma", "Supabase", "Stripe", "Team Leadership"],
    type: "work",
    startYear: 2024,
    startMonth: 8,
    endYear: 2025,
    endMonth: 4
  },
  {
    title: "Fullstack AI Software Engineer",
    organization: "AI Agent Stealth Startup",
    duration: "May 2025 - Present",
    location: "Remote",
    description: "Leading development of an agentic, AI-powered data analysis platform with multi-node LangGraph architecture. Built full-stack application reducing hallucinations by 50% and increasing multi-step task success by 30%.",
    skills: ["React 18", "TypeScript", "FastAPI", "LangGraph", "MongoDB", "GCP", "Docker"],
    type: "work",
    startYear: 2025,
    startMonth: 5,
    endYear: 2025,
    endMonth: 12
  },
  {
    title: "Machine Learning Research Intern",
    organization: "Algoverse",
    duration: "Aug 2025 - Nov 2025",
    location: "Remote",
    description: "Collaborated with researchers from Stanford, Berkeley, and Vanderbilt on scholarly paper exploring Large Language Models (LLMs) and agentic capabilities.",
    skills: ["LLMs", "Research", "AI Agents", "Academic Writing", "Python"],
    type: "work",
    startYear: 2025,
    startMonth: 8,
    endYear: 2025,
    endMonth: 11
  }
];

export default function Timeline() {
  const workExperience = timelineData.filter(item => item.type === "work");
  const education = timelineData.find(item => item.type === "education");
  
  // Sort work experience chronologically (oldest first for visual flow)
  const sortedWork = [...workExperience].sort((a, b) => {
    if (a.startYear !== b.startYear) return a.startYear - b.startYear;
    return a.startMonth - b.startMonth;
  });

  return (
    <div className="relative max-w-6xl mx-auto py-12">
      {/* Section Headers */}
      <div className="grid grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-right pr-8"
        >
          <h3 className="text-2xl font-bold text-[#06b6d4] mb-2">Work Experience</h3>
          <p className="text-slate-400">Professional journey and roles</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-left pl-8"
        >
          <h3 className="text-2xl font-bold text-[#06b6d4] mb-2">Education</h3>
          <p className="text-slate-400">Academic background and learning</p>
        </motion.div>
      </div>

      {/* Central Timeline Line - Spans from Aug 2022 to Dec 2025 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-24 h-[600px] w-0.5 bg-gradient-to-b from-[#06b6d4] via-slate-700 to-[#06b6d4]"></div>
      
      {/* Timeline Content */}
      <div className="relative min-h-[600px]">
        {/* Education Spanning Entire Right Side */}
        {education && (
          <div className="absolute right-0 top-0 w-1/2 pl-8 h-full">
            <div className="h-full flex items-center">
              <TimelineItem {...education} index={0} />
            </div>
          </div>
        )}

        {/* Work Experience Items Positioned Chronologically */}
        {sortedWork.map((item, index) => {
          // Calculate vertical position based on chronological order
          const positionPercent = (index / (sortedWork.length - 1)) * 80; // Spread across 80% of height
          
          return (
            <div
              key={index}
              className="absolute left-0 w-1/2 pr-8"
              style={{ top: `${positionPercent}%` }}
            >
              <TimelineItem {...item} index={index} />
            </div>
          );
        })}
      </div>

      {/* Timeline End Indicators */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700"
      >
        <div className="w-3 h-3 bg-[#06b6d4] rounded-full animate-pulse"></div>
        <span className="text-xs text-slate-400">Aug 2022</span>
      </motion.div>
    </div>
  );
}