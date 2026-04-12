import type { ExperienceItem } from "@/content/portfolio";

interface SelectedExperienceStripProps {
  items: ExperienceItem[];
}

export function SelectedExperienceStrip({ items }: SelectedExperienceStripProps) {
  return (
    <div className="mt-10 border-t border-white/10 pt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">Selected Experience</h3>
        <p className="text-sm text-white/42">Research, systems, and product execution across startups and labs.</p>
      </div>

      <div className="mt-6 grid gap-3 lg:grid-cols-2">
        {items.map((item) => (
          <div
            key={`${item.org}-${item.role}`}
            className="flex flex-col justify-between gap-2 rounded-md border border-white/8 px-4 py-4 sm:flex-row sm:items-start"
          >
            <div>
              <p className="text-base font-medium text-white">{item.org}</p>
              <p className="mt-1 text-sm text-white/58">{item.role}</p>
              {item.note ? <p className="mt-2 text-sm text-white/42">{item.note}</p> : null}
            </div>
            <p className="text-sm text-white/44 sm:text-right">{item.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
