"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const githubUrl = process.env.NEXT_PUBLIC_GITHUB || "https://github.com/armaanamatya";
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKED_IN || "https://linkedin.com/in/armaan-amatya";

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname === path) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        {/* Left side - Logo/Title */}
        <Link href="/" className="text-xl font-bold text-white hover:text-[#06b6d4] transition-colors">
          My space on the internet
        </Link>
        
        {/* Center - Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className={`transition-colors text-sm ${isActive("/") ? "text-[#06b6d4]" : "text-white hover:text-[#06b6d4]"}`}>
            Home
          </Link>
          <Link href="/about" className={`transition-colors text-sm ${isActive("/about") ? "text-[#06b6d4]" : "text-white hover:text-[#06b6d4]"}`}>
            About
          </Link>
          <Link href="/exp" className={`flex items-center gap-1 transition-colors text-sm ${isActive("/exp") ? "text-[#06b6d4]" : "text-white hover:text-[#06b6d4]"}`}>
            Projects
          </Link>
        </div>

        {/* Right side - Resume + Social Icons */}
        <div className="flex items-center gap-4">
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700/50 hover:bg-slate-600/50 text-white hover:text-[#06b6d4] px-4 py-2 rounded-md text-sm transition-colors border border-slate-600/50"
          >
            Resume
          </a>
          <div className="flex items-center gap-3">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#06b6d4] transition-colors">
              <Github size={18} />
            </Link>
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#06b6d4] transition-colors">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}