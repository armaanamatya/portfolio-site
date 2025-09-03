"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileDown } from "lucide-react";
import Navbar from "@/components/navbar";

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

      {/* Additional Content for Testing Scroll */}
      <div className="min-h-screen bg-background p-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-foreground">About Me</h2>
          <p className="text-xl text-slate-300 mb-8">
            This is additional content to test the scroll behavior of the navbar. 
            When you scroll down, the navbar should disappear, and when you scroll up, it should reappear.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-slate-800/50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Education</h3>
              <p className="text-slate-300">Academic background and qualifications</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Research</h3>
              <p className="text-slate-300">Cosmological research and AI applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
