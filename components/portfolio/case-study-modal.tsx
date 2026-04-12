"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";
import { CaseStudyVisual } from "@/components/portfolio/case-study-visual";
import { ArrowUpRightIcon, CloseIcon } from "@/components/portfolio/icons";
import type { FeaturedCaseStudy } from "@/content/portfolio";

interface CaseStudyModalProps {
  caseStudy: FeaturedCaseStudy | null;
  onClose: () => void;
}

const focusableSelector =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const links = useMemo(() => caseStudy?.links ?? [], [caseStudy]);

  useEffect(() => {
    if (!caseStudy) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFirst = () => {
      const panel = panelRef.current;
      if (!panel) {
        return;
      }

      const focusable = panel.querySelectorAll<HTMLElement>(focusableSelector);
      focusable[0]?.focus();
    };

    const frame = window.requestAnimationFrame(focusFirst);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = panelRef.current;
      if (!panel) {
        return;
      }

      const focusable = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  return (
    <AnimatePresence>
      {caseStudy ? (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end bg-[rgba(3,4,5,0.72)] p-0 sm:p-4"
          initial={reduceMotion ? undefined : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          onClick={onClose}
        >
          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-study-title"
            className="h-full w-full max-w-3xl overflow-y-auto border-l border-white/10 bg-[#070808] px-6 pb-8 pt-5 shadow-[0_0_40px_rgba(0,0,0,0.28)] sm:rounded-md sm:border sm:px-8"
            initial={reduceMotion ? undefined : { x: 36, opacity: 0.96 }}
            animate={reduceMotion ? undefined : { x: 0, opacity: 1 }}
            exit={reduceMotion ? undefined : { x: 36, opacity: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">Selected Work</p>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white/70 transition duration-200 hover:border-white/24 hover:text-white focus-visible:border-white/24 focus-visible:text-white focus-visible:outline-none"
              >
                <CloseIcon className="h-4 w-4" />
                <span className="sr-only">Close case study</span>
              </button>
            </div>

            <CaseStudyVisual caseStudy={caseStudy} priority mode="modal" />

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.28em] text-white/42">{caseStudy.eyebrow}</p>

              <div className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-white/76 transition duration-200 hover:border-white/20 hover:text-white focus-visible:border-white/20 focus-visible:text-white focus-visible:outline-none"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <h2 id="case-study-title" className="mt-8 text-3xl font-semibold text-white sm:text-4xl">
              {caseStudy.summary}
            </h2>

            <div className="mt-8 grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/44">Problem</p>
                  <p className="mt-3 text-base leading-8 text-white/72">{caseStudy.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/44">What I built</p>
                  <p className="mt-3 text-base leading-8 text-white/72">{caseStudy.built}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/44">Impact</p>
                  <ul className="mt-3 space-y-3">
                    {caseStudy.impact.map((item) => (
                      <li key={item} className="border-l border-white/16 pl-4 text-sm leading-7 text-white/68">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/44">Selected stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {caseStudy.tech.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-md border border-white/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/56"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
