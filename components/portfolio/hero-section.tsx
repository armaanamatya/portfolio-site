"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  supportingLine: string;
  education: string;
  image: string;
  imageAlt: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  supportingLine,
  education,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: HeroSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-7rem)] items-center border-b border-white/8 py-16 sm:py-20"
    >
      <div className="grid w-full items-start gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl pt-4"
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
            {eyebrow}
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-[4.5rem]">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">{subtitle}</p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/50">{supportingLine}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#050607] transition duration-200 hover:bg-white/92 focus-visible:bg-white/92 focus-visible:outline-none"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-white/12 px-5 py-3 text-sm font-semibold text-white/78 transition duration-200 hover:border-white/22 hover:text-white focus-visible:border-white/22 focus-visible:text-white focus-visible:outline-none"
            >
              {secondaryCta.label}
            </a>
          </div>

          <p className="mt-10 max-w-xl border-t border-white/10 pt-5 text-sm leading-6 text-white/48">{education}</p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="relative pt-4"
        >
          <figure className="mx-auto w-full max-w-[12.5rem] overflow-hidden rounded-md border border-white/10 bg-white/5 p-2 lg:ml-auto">
            <div className="overflow-hidden rounded-[4px]">
              <Image
                src={image}
                alt={imageAlt}
                width={960}
                height={1200}
                priority
                className="h-auto w-full object-cover grayscale-[0.08]"
              />
            </div>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
