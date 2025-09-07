"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB || "https://github.com/armaanamatya";
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKED_IN || "https://linkedin.com/in/armaan-amatya";

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4" style={{ color: '#06b6d4' }}>
              Armaan Amatya
            </h3>
            <p className="text-slate-400 mb-4 leading-relaxed max-w-md">
              Software developer passionate about building innovative solutions and exploring 
              the intersection of AI and modern web technologies.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-[#06b6d4] transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-[#06b6d4] transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:armaan@example.com" 
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-400 hover:text-[#06b6d4] transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-[#06b6d4] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-[#06b6d4] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-[#06b6d4] transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  className="text-slate-400 hover:text-[#06b6d4] transition-colors duration-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Current Focus */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Currently</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>• Building AI Agents</li>
              <li>• AI Research</li>
              <li>• Financial ML Models</li>
              <li>• Learning & Exploring</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {currentYear} Armaan Amatya. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-slate-500 text-sm">
            <span>Built with</span>
            <Heart size={14} className="text-red-400 fill-current" />
            <span>using Next.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}