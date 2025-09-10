"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import NavigationPointers from "@/components/navigation-pointers";
import Timeline from "@/components/timeline";
import SkillsGrid from "@/components/skills-grid";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar />
      
      <div className="pt-24 px-6 pb-20">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6 text-foreground">About Me</h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              I'm Armaan Amatya, a passionate software developer specializing in AI/ML applications, 
              full-stack development, and modern web technologies. Currently focused on building 
              AI agents and exploring financial modeling through advanced machine learning techniques.
            </p>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           <Timeline />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SkillsGrid />
          </motion.div>
        </section>

      </div>

      <NavigationPointers />
    </div>
  );
}