import Image from "next/image";
import type { FeaturedCaseStudy } from "@/content/portfolio";

interface CaseStudyVisualProps {
  caseStudy: FeaturedCaseStudy;
  priority?: boolean;
  mode?: "card" | "modal";
}

export function CaseStudyVisual({ caseStudy, priority = false, mode = "card" }: CaseStudyVisualProps) {
  const isModal = mode === "modal";

  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-white/10 bg-white/[0.02] px-4 py-4 sm:px-5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-white/[0.04] p-2 sm:h-14 sm:w-14">
          <Image
            src={caseStudy.image}
            alt={caseStudy.imageAlt}
            width={isModal ? 120 : 96}
            height={isModal ? 120 : 96}
            priority={priority}
            className="h-auto w-full object-contain"
          />
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/42">{caseStudy.eyebrow}</p>
          <p className={isModal ? "mt-2 text-3xl font-semibold text-white" : "mt-2 text-xl font-semibold text-white"}>
            {caseStudy.title}
          </p>
          <p className="mt-2 text-sm leading-6 text-white/48">{caseStudy.tech.slice(0, 3).join(" / ")}</p>
        </div>
      </div>

      <div className="shrink-0 pl-2 text-right">
        <p className="text-sm font-semibold text-white">{caseStudy.stat}</p>
        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">{caseStudy.statLabel}</p>
      </div>
    </div>
  );
}
