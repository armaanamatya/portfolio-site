"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CaseStudyModal } from "@/components/portfolio/case-study-modal";
import type { FeaturedCaseStudy } from "@/content/portfolio";

interface CaseStudyModalControllerProps {
  caseStudies: FeaturedCaseStudy[];
}

export function CaseStudyModalController({ caseStudies }: CaseStudyModalControllerProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeSlug = searchParams.get("case");

  const activeCase = useMemo(
    () => caseStudies.find((caseStudy) => caseStudy.slug === activeSlug) ?? null,
    [activeSlug, caseStudies],
  );

  return (
    <CaseStudyModal
      caseStudy={activeCase}
      onClose={() => {
        router.replace(`${pathname}#work`, { scroll: false });
      }}
    />
  );
}
