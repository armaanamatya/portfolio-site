"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ArrowUpRightIcon } from "@/components/portfolio/icons";
import type { FeaturedCaseStudy } from "@/content/portfolio";

interface FeaturedWorkGridProps {
  caseStudies: FeaturedCaseStudy[];
}

export function FeaturedWorkGrid({ caseStudies }: FeaturedWorkGridProps) {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const router = useRouter();

  const updateQuery = (slug: string | null) => {
    if (slug) {
      router.push(`${pathname}?case=${slug}#work`, { scroll: false });
      return;
    }

    router.replace(`${pathname}#work`, { scroll: false });
  };

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {caseStudies.map((caseStudy) => (
        <motion.button
          key={caseStudy.slug}
          type="button"
          onClick={() => updateQuery(caseStudy.slug)}
          className="group relative flex h-full flex-col rounded-md border border-white/10 bg-white/[0.02] p-5 text-left transition duration-200 hover:border-white/18 focus-visible:border-white/28 focus-visible:outline-none"
          whileHover={reduceMotion ? undefined : { y: -2 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-2">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt}
                  width={96}
                  height={96}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">{caseStudy.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{caseStudy.title}</h3>
              </div>
            </div>
            <ArrowUpRightIcon className="mt-1 h-4 w-4 text-white/34 transition duration-200 group-hover:text-white/70" />
          </div>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62">{caseStudy.summary}</p>

          <div className="mt-6 grid gap-4 border-t border-white/8 pt-5 sm:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/36">Problem</p>
              <p className="mt-2 text-sm leading-6 text-white/58">{caseStudy.problem}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/36">Built</p>
              <p className="mt-2 text-sm leading-6 text-white/58">{caseStudy.built}</p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/36">Impact</p>
              <ul className="mt-2 space-y-2">
                {caseStudy.impact.slice(0, 2).map((item) => (
                  <li key={item} className="text-sm leading-6 text-white/58">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
