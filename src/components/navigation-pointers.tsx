"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationPointer {
  direction: "left" | "right";
  route: string;
  label: string;
}

export default function NavigationPointers() {
  const pathname = usePathname();
  const router = useRouter();

  const getPointers = (): NavigationPointer[] => {
    switch (pathname) {
      case "/":
        return [{ direction: "right", route: "/about", label: "About" }];
      case "/about":
        return [
          { direction: "left", route: "/", label: "Home" },
          { direction: "right", route: "/projects", label: "Projects" }
        ];
      case "/projects":
        return [{ direction: "left", route: "/about", label: "About" }];
      default:
        return [];
    }
  };

  const pointers = getPointers();

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  return (
    <>
      {pointers.map((pointer, index) => (
        <motion.div
          key={`${pointer.direction}-${pointer.route}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: [0, pointer.direction === "left" ? -3 : 3, 0]
          }}
          transition={{ 
            duration: 0.3, 
            delay: index * 0.1,
            x: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
          className={`fixed top-1/2 -translate-y-1/2 z-40 hidden lg:block ${
            pointer.direction === "left" ? "left-6" : "right-6"
          }`}
        >
          <button
            onClick={() => handleNavigation(pointer.route)}
            className={`group flex items-center gap-3 px-4 py-4 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 hover:border-[#06b6d4]/50 transition-all duration-300 hover:bg-slate-800/90 shadow-lg ${
              pointer.direction === "left" 
                ? "flex-row rounded-r-2xl rounded-l-lg" 
                : "flex-row-reverse rounded-l-2xl rounded-r-lg"
            }`}
          >
            <div className="p-2 rounded-full bg-[#06b6d4]/10 group-hover:bg-[#06b6d4]/20 transition-colors duration-300">
              {pointer.direction === "left" ? (
                <ChevronLeft 
                  className="h-5 w-5 text-[#06b6d4] group-hover:text-[#0891b2] transition-colors duration-300" 
                />
              ) : (
                <ChevronRight 
                  className="h-5 w-5 text-[#06b6d4] group-hover:text-[#0891b2] transition-colors duration-300" 
                />
              )}
            </div>
            <span className="text-sm text-white group-hover:text-[#06b6d4] transition-colors duration-300 font-medium">
              {pointer.label}
            </span>
          </button>
        </motion.div>
      ))}
    </>
  );
}