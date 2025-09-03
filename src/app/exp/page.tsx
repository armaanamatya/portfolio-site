"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar />
      
      <div className="pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-4 text-foreground">Experience & Projects</h1>
            <p className="text-xl text-slate-300 mb-12">
              Professional experience and notable projects in software development and technology.
            </p>
          </motion.div>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold mb-8 text-cyan-400">Work Experience</h2>
            <div className="space-y-6">
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-foreground">Software Developer</CardTitle>
                      <CardDescription className="text-slate-300">Tech Company / Freelance</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-cyan-400 border-cyan-400/50">2022 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">
                    Developing modern web applications and mobile solutions using cutting-edge technologies 
                    and best practices in software development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-8 text-cyan-400">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Portfolio Website</CardTitle>
                  <CardDescription className="text-slate-300">
                    Modern responsive portfolio built with Next.js and TypeScript
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Built a fully responsive portfolio website with modern animations and dark theme.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">E-Commerce Platform</CardTitle>
                  <CardDescription className="text-slate-300">
                    Full-stack e-commerce solution with payment integration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Built a complete e-commerce platform with user authentication and payment processing.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Task Management App</CardTitle>
                  <CardDescription className="text-slate-300">
                    Mobile-first task management application with real-time sync
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">Redux</Badge>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Created a cross-platform task management app with real-time synchronization.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">Weather Dashboard</CardTitle>
                  <CardDescription className="text-slate-300">
                    Interactive weather dashboard with location-based forecasts
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">API Integration</Badge>
                    <Badge variant="secondary">Charts.js</Badge>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Built an interactive dashboard displaying weather data with charts and forecasts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}