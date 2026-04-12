import type { ExpertiseGroup } from "@/content/portfolio";

interface ExpertiseBandsProps {
  groups: ExpertiseGroup[];
}

export function ExpertiseBands({ groups }: ExpertiseBandsProps) {
  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {groups.map((group) => (
        <article key={group.title} className="rounded-md border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <ul className="mt-6 space-y-4">
            {group.capabilities.map((capability) => (
              <li key={capability} className="border-l border-white/14 pl-4 text-sm leading-7 text-white/68">
                {capability}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {group.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50"
              >
                {tool}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
