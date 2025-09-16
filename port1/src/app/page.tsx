"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, FileDown, Bot, Brain, TrendingUp, ExternalLink } from "lucide-react";
import Navbar from "@/components/navbar";
import NavigationPointers from "@/components/navigation-pointers";
import NotebookCard from "@/components/notebook-card";

export default function Home() {
  const notebookEntries = [
    {
      date: "2025-09-08",
      title: "AI Research - Neural Architecture Search",
      content: `Exploring cutting-edge research in machine learning, neural architectures, and computational intelligence to push the boundaries of what's possible.

Research areas:
• Automated neural architecture design
• Efficient model compression techniques
• Novel attention mechanisms`,
      status: "paused" as const,
      tags: ["Research", "NAS", "Papers"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar />

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen px-6 pt-24">
        <div className="max-w-6xl mx-auto flex items-center gap-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="w-80 h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center">
              <div className="text-slate-400 text-center">
                <div className="text-6xl mb-4">👤</div>
                <p className="text-sm">Profile Image</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h1 className="text-6xl font-bold mb-6" style={{ color: '#06b6d4' }}>
              Armaan Amatya
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Building and (<span style={{ color: '#06b6d4' }}>mostly</span>) breaking things.
            </p>
            <div className="flex gap-4">
              <a href="/resume.pdf" download="Armaan_Amatya_Resume.pdf">
                <Button className="px-6 py-2 text-black" style={{ backgroundColor: '#06b6d4' }}>
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
              <Button variant="outline" className="px-6 py-2 hover:bg-slate-800" style={{ borderColor: '#06b6d4', color: '#06b6d4' }}>
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="px-6 py-2 hover:bg-slate-800" style={{ borderColor: '#06b6d4', color: '#06b6d4' }}>
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-slate-400 text-sm mb-2">Scroll to explore</p>
        <div className="animate-bounce">
          ↓
        </div>
      </div>

      {/* What I'm upto Section */}
      <div className="min-h-screen bg-background p-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6" style={{ color: '#06b6d4' }}>What I&apos;m upto</h2>
            <div className="w-24 h-1 bg-[#06b6d4] mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {notebookEntries.map((entry, index) => (
              <NotebookCard key={index} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>

      <NavigationPointers />
    </div>
  );
}
