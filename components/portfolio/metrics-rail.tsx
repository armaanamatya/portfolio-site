import type { Metric } from "@/content/portfolio";

interface MetricsRailProps {
  metrics: Metric[];
}

export function MetricsRail({ metrics }: MetricsRailProps) {
  return (
    <section aria-label="Selected metrics" className="border-b border-white/8 py-6">
      <div className="grid divide-y divide-white/8 border-y border-white/8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="px-5 py-5 sm:px-6">
            <p className="text-2xl font-semibold text-white">{metric.value}</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-white/52">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
