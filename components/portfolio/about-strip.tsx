interface AboutStripProps {
  copy: string;
  education: string;
}

export function AboutStrip({ copy, education }: AboutStripProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.3fr_1fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">About</p>
      </div>

      <div>
        <p className="max-w-3xl text-2xl font-medium leading-10 text-white/84 sm:text-3xl">{copy}</p>
        <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-6 text-white/46">{education}</p>
      </div>
    </div>
  );
}
