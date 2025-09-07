"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, FileDown, Bot, Brain, TrendingUp, ExternalLink } from "lucide-react";
import Navbar from "@/components/navbar";
import NavigationPointers from "@/components/navigation-pointers";

export default function Home() {
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI Agents Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Card className="relative overflow-hidden bg-slate-900/50 border-slate-800 hover:border-[#06b6d4]/50 transition-all duration-300 group h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#06b6d4] to-[#0891b2]"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#06b6d4]/10">
                      <Bot className="h-6 w-6" style={{ color: '#06b6d4' }} />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-[#06b6d4] transition-colors">
                      Building AI Agents
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 leading-relaxed mb-4">
                    Developing autonomous AI systems that can understand context, make decisions, 
                    and interact naturally with users and other systems.
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-[#06b6d4] text-sm font-medium">Currently Active</span>
                    <div className="w-2 h-2 bg-[#06b6d4] rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* AI Research Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card className="relative overflow-hidden bg-slate-900/50 border-slate-800 hover:border-[#06b6d4]/50 transition-all duration-300 group h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#06b6d4] to-[#0891b2]"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#06b6d4]/10">
                      <Brain className="h-6 w-6" style={{ color: '#06b6d4' }} />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-[#06b6d4] transition-colors">
                      AI Research
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 leading-relaxed mb-4">
                    Exploring cutting-edge research in machine learning, neural architectures, 
                    and computational intelligence to push the boundaries of what&apos;s possible.
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-[#06b6d4] text-sm font-medium">In Progress</span>
                    <div className="w-2 h-2 bg-[#06b6d4] rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Financial ML Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Card className="relative overflow-hidden bg-slate-900/50 border-slate-800 hover:border-[#06b6d4]/50 transition-all duration-300 group h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#06b6d4] to-[#0891b2]"></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#06b6d4]/10">
                      <TrendingUp className="h-6 w-6" style={{ color: '#06b6d4' }} />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-[#06b6d4] transition-colors">
                      Financial ML Models
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-400 leading-relaxed mb-4">
                    Fine-tuning models for financial stock analysis, diving deep into LLM and RL courses 
                    on Hugging Face to build robust trading intelligence.
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <a 
                      href="https://huggingface.co/learn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#06b6d4] text-sm font-medium hover:text-[#0891b2] transition-colors"
                    >
                      HF Courses <ExternalLink className="h-3 w-3" />
                    </a>
                    <div className="w-2 h-2 bg-[#06b6d4] rounded-full animate-pulse"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <NavigationPointers />
    </div>
  );
}
