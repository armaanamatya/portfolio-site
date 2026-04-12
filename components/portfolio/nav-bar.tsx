import { ArrowUpRightIcon, FileTextIcon, GithubIcon, LinkedInIcon } from "@/components/portfolio/icons";
import type { PortfolioLink } from "@/content/portfolio";

interface NavBarProps {
  name: string;
  primaryLinks: PortfolioLink[];
  secondaryLinks: PortfolioLink[];
}

const iconMap = {
  Resume: FileTextIcon,
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
} as const;

export function NavBar({ name, primaryLinks, secondaryLinks }: NavBarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-[rgba(6,7,8,0.9)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4 lg:px-10">
        <a href="#top" className="text-sm font-semibold uppercase tracking-[0.18em] text-white/88">
          {name}
        </a>

        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-white/54">
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:text-white/88 focus-visible:text-white/88 focus-visible:outline-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="h-4 w-px bg-white/10" aria-hidden />

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {secondaryLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? ArrowUpRightIcon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 text-white/54 transition duration-200 hover:text-white/88 focus-visible:text-white/88 focus-visible:outline-none"
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
