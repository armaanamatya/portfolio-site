import { Suspense } from "react";
import { AboutStrip } from "@/components/portfolio/about-strip";
import { AnimatedSection } from "@/components/portfolio/animated-section";
import { CaseStudyModalController } from "@/components/portfolio/case-study-modal-controller";
import { ContactFooter } from "@/components/portfolio/contact-footer";
import { ExpertiseBands } from "@/components/portfolio/expertise-bands";
import { FeaturedWorkGrid } from "@/components/portfolio/featured-work-grid";
import { HeroSection } from "@/components/portfolio/hero-section";
import { MetricsRail } from "@/components/portfolio/metrics-rail";
import { NavBar } from "@/components/portfolio/nav-bar";
import { SelectedExperienceStrip } from "@/components/portfolio/selected-experience-strip";
import { portfolioContent } from "@/content/portfolio";

const primaryNav = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const secondaryNav = [
  { label: "Resume", href: portfolioContent.person.resumeHref },
  { label: "GitHub", href: portfolioContent.person.github },
  { label: "LinkedIn", href: portfolioContent.person.linkedin },
] as const;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioContent.person.name,
    jobTitle: portfolioContent.person.role,
    email: `mailto:${portfolioContent.person.email}`,
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    image: portfolioContent.person.headshot,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Houston",
    },
    sameAs: [portfolioContent.person.github, portfolioContent.person.linkedin],
    knowsAbout: [
      "Applied AI research",
      "Multimodal systems",
      "LLM evaluation",
      "FastAPI",
      "Next.js",
      "Machine learning infrastructure",
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative overflow-x-clip">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_28%),linear-gradient(180deg,#060708_0%,#040505_100%)]"
        />

        <NavBar name={portfolioContent.person.name} primaryLinks={[...primaryNav]} secondaryLinks={[...secondaryNav]} />

        <main className="px-6 pb-12 pt-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <HeroSection
              eyebrow={portfolioContent.hero.eyebrow}
              title={portfolioContent.hero.title}
              subtitle={portfolioContent.hero.subtitle}
              supportingLine={portfolioContent.hero.supportingLine}
              education={portfolioContent.person.education}
              image={portfolioContent.person.headshot}
              imageAlt={portfolioContent.person.name}
              primaryCta={portfolioContent.hero.primaryCta}
              secondaryCta={portfolioContent.hero.secondaryCta}
            />

            <MetricsRail metrics={[...portfolioContent.metrics]} />

            <AnimatedSection id="work" className="border-b border-white/8 py-16 sm:py-20">
              <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
                    Selected Work
                  </p>
                  <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">
                    Research-backed systems with measurable product consequences.
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-white/52">
                  Four case studies that show how I think when the work spans model behavior, performance, and user
                  trust.
                </p>
              </div>

              <FeaturedWorkGrid caseStudies={[...portfolioContent.caseStudies]} />
              <Suspense fallback={null}>
                <CaseStudyModalController caseStudies={[...portfolioContent.caseStudies]} />
              </Suspense>
            </AnimatedSection>

            <AnimatedSection id="expertise" className="border-b border-white/8 py-16 sm:py-20">
              <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">
                  Expertise
                </p>
                <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Depth where research meets execution.</h2>
              </div>

              <ExpertiseBands groups={[...portfolioContent.expertise]} />
              <SelectedExperienceStrip items={[...portfolioContent.experience]} />
            </AnimatedSection>

            <AnimatedSection id="about" className="py-16 sm:py-20">
              <AboutStrip copy={portfolioContent.about} education={portfolioContent.person.education} />
            </AnimatedSection>

            <ContactFooter
              title={portfolioContent.contact.title}
              primary={portfolioContent.contact.primary}
              secondary={[...portfolioContent.contact.secondary]}
            />
          </div>
        </main>
      </div>
    </>
  );
}
