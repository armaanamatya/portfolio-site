"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import NavigationPointers from "@/components/navigation-pointers";

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
                <h2 className="text-2xl font-semibold mb-6" style={{ color: '#06b6d4' }}>Background</h2>
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
                <h2 className="text-2xl font-semibold mb-6" style={{ color: '#06b6d4' }}>Interests & Skills</h2>
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
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#06b6d4' }}>Mission</h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                To create innovative and user-friendly software solutions that make a positive 
                impact on people's lives. I'm committed to continuous learning, writing clean and 
                efficient code, and collaborating with teams to build amazing digital experiences.
              </p>
            </motion.div>

            {/* Additional Sections for More Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-semibold mb-8" style={{ color: '#06b6d4' }}>Education & Learning</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50">
                  <h3 className="text-xl font-semibold mb-3 text-white">Formal Education</h3>
                  <p className="text-slate-300 mb-4">
                    Computer Science background with focus on software engineering, algorithms, 
                    and system design. Continuously expanding knowledge through practical projects.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-sm">Algorithms</span>
                    <span className="px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-sm">Data Structures</span>
                    <span className="px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-sm">System Design</span>
                  </div>
                </div>
                <div className="bg-slate-800/30 p-6 rounded-lg border border-slate-700/50">
                  <h3 className="text-xl font-semibold mb-3 text-white">Continuous Learning</h3>
                  <p className="text-slate-300 mb-4">
                    Always exploring new technologies and methodologies. Currently diving deep into 
                    AI/ML concepts, cloud architectures, and modern development practices.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-sm">Machine Learning</span>
                    <span className="px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-sm">Cloud Computing</span>
                    <span className="px-3 py-1 bg-[#06b6d4]/10 text-[#06b6d4] rounded-full text-sm">DevOps</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-16"
            >
              <h2 className="text-3xl font-semibold mb-8" style={{ color: '#06b6d4' }}>Development Philosophy</h2>
              <div className="bg-slate-800/30 p-8 rounded-lg border border-slate-700/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#06b6d4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl" style={{ color: '#06b6d4' }}>⚡</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Performance First</h3>
                    <p className="text-slate-400 text-sm">
                      Building fast, efficient applications that provide exceptional user experiences.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#06b6d4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl" style={{ color: '#06b6d4' }}>🔧</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Clean Code</h3>
                    <p className="text-slate-400 text-sm">
                      Writing maintainable, readable code that follows industry best practices and standards.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#06b6d4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl" style={{ color: '#06b6d4' }}>🚀</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Innovation</h3>
                    <p className="text-slate-400 text-sm">
                      Embracing new technologies and approaches to solve complex problems creatively.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-16 mb-16"
            >
              <h2 className="text-3xl font-semibold mb-8" style={{ color: '#06b6d4' }}>Let's Connect</h2>
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 p-8 rounded-lg border border-slate-600/50">
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  I'm always interested in discussing new opportunities, collaborating on interesting projects, 
                  or just having a conversation about technology and development. Feel free to reach out!
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:your.email@example.com" 
                    className="px-6 py-3 bg-[#06b6d4] text-black rounded-lg font-medium hover:bg-[#0891b2] transition-colors duration-300"
                  >
                    Get In Touch
                  </a>
                  <a 
                    href="/resume.pdf" 
                    target="_blank" 
                    className="px-6 py-3 border border-[#06b6d4] text-[#06b6d4] rounded-lg font-medium hover:bg-[#06b6d4]/10 transition-colors duration-300"
                  >
                    View Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <NavigationPointers />
    </div>
  );
}