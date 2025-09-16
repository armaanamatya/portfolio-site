"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import NavigationPointers from "@/components/navigation-pointers";
import ProjectCard from "@/components/project-card";

interface Project {
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
}

const projects: Project[] = [
  {
    title: "AI-Powered Portfolio Website",
    company: "Personal Project",
    description: "Modern responsive portfolio built with Next.js 15, TypeScript, and Tailwind CSS v4. Features advanced animations, dark theme, and custom component library integration.",
    timeline: "Nov 2024 - Present",
    skills: [
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "TailwindCSS", icon: "https://skillicons.dev/icons?i=tailwind&theme=dark" },
      { name: "Framer Motion", icon: "https://skillicons.dev/icons?i=js" }
    ],
    githubUrl: "https://github.com/armaanamatya/portfolio",
    liveUrl: "https://armaan.dev",
    status: "featured"
  },
  {
    title: "Financial ML Trading Bot",
    company: "Research Project",
    description: "Advanced machine learning model for financial market analysis using PyTorch and reinforcement learning. Features real-time data processing and automated trading strategies.",
    timeline: "Sep 2024 - Present",
    skills: [
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { name: "PyTorch", icon: "https://skillicons.dev/icons?i=pytorch" },
      { name: "TensorFlow", icon: "https://skillicons.dev/icons?i=tensorflow" },
      { name: "FastAPI", icon: "https://skillicons.dev/icons?i=fastapi" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" }
    ],
    githubUrl: "https://github.com/armaanamatya/trading-bot",
    status: "in-progress"
  },
  {
    title: "E-Commerce Platform",
    company: "Freelance Client",
    description: "Full-stack e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Built for scalability and performance.",
    timeline: "Jul 2024 - Oct 2024",
    skills: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "Express.js", icon: "https://skillicons.dev/icons?i=express" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Stripe", icon: "https://skillicons.dev/icons?i=js" }
    ],
    liveUrl: "https://demo-ecommerce.armaan.dev",
    status: "completed"
  },
  {
    title: "Task Management System",
    company: "University Project",
    description: "Mobile-first task management application with real-time synchronization, team collaboration features, and cross-platform compatibility.",
    timeline: "Mar 2024 - Jun 2024",
    skills: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "Material UI", icon: "https://skillicons.dev/icons?i=materialui&theme=dark" }
    ],
    githubUrl: "https://github.com/armaanamatya/task-manager",
    liveUrl: "https://tasks.armaan.dev",
    status: "completed"
  },
  {
    title: "AI Research Dashboard",
    company: "University of Houston",
    description: "Interactive dashboard for visualizing AI research data and model performance metrics. Features real-time updates and collaborative annotation tools.",
    timeline: "Jan 2024 - May 2024",
    skills: [
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { name: "Streamlit", icon: "https://skillicons.dev/icons?i=streamlit" },
      { name: "PyTorch", icon: "https://skillicons.dev/icons?i=pytorch" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" }
    ],
    githubUrl: "https://github.com/armaanamatya/ai-dashboard",
    status: "completed"
  },
  {
    title: "Weather Analytics App",
    company: "Personal Project",
    description: "Interactive weather dashboard with location-based forecasts, historical data analysis, and advanced visualization using Charts.js and weather APIs.",
    timeline: "Nov 2023 - Feb 2024",
    skills: [
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" }
    ],
    githubUrl: "https://github.com/armaanamatya/weather-app",
    liveUrl: "https://weather.armaan.dev",
    status: "completed"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar />
      
      <div className="pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-foreground">Projects & Experience</h1>
            <p className="text-xl text-slate-300 mb-12">
              Showcasing my work in AI/ML, full-stack development, and modern web technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#06b6d4' }}>
                Featured Work
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                A collection of projects spanning AI/ML research, full-stack development, and modern web applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  index={index}
                />
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      <NavigationPointers />
    </div>
  );
}