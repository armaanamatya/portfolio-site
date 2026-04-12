import { ArrowUpRightIcon, GithubIcon, LinkedInIcon, MailIcon } from "@/components/portfolio/icons";
import type { PortfolioLink } from "@/content/portfolio";

interface ContactFooterProps {
  title: string;
  primary: PortfolioLink;
  secondary: PortfolioLink[];
}

const iconMap = {
  LinkedIn: LinkedInIcon,
  GitHub: GithubIcon,
  Resume: ArrowUpRightIcon,
} as const;

export function ContactFooter({ title, primary, secondary }: ContactFooterProps) {
  return (
    <footer id="contact" className="border-t border-white/8 py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">Contact</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">{title}</h2>
        </div>

        <a
          href={primary.href}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#050607] transition duration-200 hover:bg-white/92 focus-visible:bg-white/92 focus-visible:outline-none"
        >
          <MailIcon className="h-4 w-4" />
          <span>{primary.label}</span>
        </a>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {secondary.map((link) => {
          const Icon = iconMap[link.label as keyof typeof iconMap] ?? ArrowUpRightIcon;

          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-medium text-white/72 transition duration-200 hover:border-white/20 hover:text-white focus-visible:border-white/20 focus-visible:text-white focus-visible:outline-none"
            >
              <Icon className="h-4 w-4" />
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </footer>
  );
}
