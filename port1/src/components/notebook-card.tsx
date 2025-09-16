"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Clock, Calendar } from "lucide-react";

interface NotebookEntry {
  date: string;
  title: string;
  content: string;
  status: "active" | "completed" | "paused";
  tags: string[];
  link?: string;
}

interface NotebookCardProps {
  entry: NotebookEntry;
  index: number;
}

export default function NotebookCard({ entry, index }: NotebookCardProps) {
  const statusColors = {
    active: "bg-green-500/10 text-green-400 border-green-500/20",
    completed: "bg-blue-500/10 text-blue-400 border-blue-500/20", 
    paused: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
  };

  const statusDots = {
    active: "bg-green-400 animate-pulse",
    completed: "bg-blue-400",
    paused: "bg-yellow-400 animate-pulse"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <Card className="bg-slate-900/30 border-slate-700/50 hover:border-[#06b6d4]/30 transition-all duration-300 backdrop-blur-sm">
        {/* Notebook Header */}
        <CardHeader className="pb-3 border-b border-slate-700/30">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-slate-500" />
                <span className="text-sm text-slate-400 font-mono">{entry.date}</span>
                <div className={`w-2 h-2 rounded-full ${statusDots[entry.status]}`}></div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{entry.title}</h3>
              <div className="flex items-center gap-2">
                <Badge 
                  variant="outline" 
                  className={`text-xs px-2 py-1 ${statusColors[entry.status]}`}
                >
                  <Clock className="h-3 w-3 mr-1" />
                  {entry.status}
                </Badge>
                {entry.tags.map((tag, i) => (
                  <Badge 
                    key={i} 
                    variant="outline" 
                    className="text-xs px-2 py-1 bg-slate-800/50 text-slate-300 border-slate-600"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            {entry.link && (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#06b6d4] hover:text-[#0891b2] transition-colors p-1"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </CardHeader>

        {/* Notebook Content */}
        <CardContent className="pt-4">
          <div className="prose prose-invert prose-sm max-w-none">
            <p className="text-slate-300 leading-relaxed whitespace-pre-line">
              {entry.content}
            </p>
          </div>
          
          {/* Notebook Lines Effect */}
          <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-slate-600/20 via-slate-600/40 to-slate-600/20"></div>
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-800/10 to-transparent"></div>
        </CardContent>
      </Card>
    </motion.div>
  );
}