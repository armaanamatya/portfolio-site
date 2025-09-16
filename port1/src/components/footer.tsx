"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-[#06b6d4] text-4xl font-bold tracking-wide animate-pulse hover:scale-105 transition-transform duration-300 cursor-pointer">
            talk to my agent
          </p>
        </div>
      </div>
    </footer>
  );
}