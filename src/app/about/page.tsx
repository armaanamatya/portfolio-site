"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar />
      
      <div className="pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-8 text-foreground">About Me</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Background</h2>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  I'm Armaan Amatya, a passionate software developer with a strong interest in 
                  modern web technologies, full-stack development, and innovative tech solutions. 
                  I enjoy building applications that solve real-world problems and enhance user experiences.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  With experience in various programming languages and frameworks, I'm always 
                  eager to learn new technologies and take on challenging projects that push 
                  my skills to the next level.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-cyan-400">Interests & Skills</h2>
                <ul className="space-y-3 text-lg text-slate-300">
                  <li>• Full-Stack Web Development</li>
                  <li>• React & Next.js</li>
                  <li>• JavaScript/TypeScript</li>
                  <li>• Node.js & Backend Development</li>
                  <li>• Database Design & Management</li>
                  <li>• UI/UX Design</li>
                  <li>• Mobile App Development</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-slate-800/30 p-8 rounded-lg border border-slate-700/50"
            >
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To create innovative and user-friendly software solutions that make a positive 
                impact on people's lives. I'm committed to continuous learning, writing clean and 
                efficient code, and collaborating with teams to build amazing digital experiences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}