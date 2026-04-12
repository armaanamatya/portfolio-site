export interface Metric {
  value: string;
  label: string;
}

export interface PortfolioLink {
  label: string;
  href: string;
}

export interface FeaturedCaseStudy {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  built: string;
  impact: string[];
  tech: string[];
  image: string;
  imageAlt: string;
  stat: string;
  statLabel: string;
  links: PortfolioLink[];
}

export interface ExpertiseGroup {
  title: string;
  capabilities: string[];
  tools: string[];
}

export interface ExperienceItem {
  org: string;
  role: string;
  period: string;
  note?: string;
}

export const portfolioContent = {
  person: {
    name: "Armaan Amatya",
    role: "Applied AI research engineer",
    location: "Houston, Texas",
    email: "armaanamatya2014@gmail.com",
    headshot: "/IMG_1854.jpg",
    resumeHref: "/Armaan-Amatya_Recent_Resume.pdf",
    github: "https://github.com/armaanamatya",
    linkedin: "https://www.linkedin.com/in/armaan-amatya/",
    education:
      "University of Houston · B.S. Computer Science + Mathematics · Expected Dec 2026",
  },
  hero: {
    eyebrow: "Applied AI research + systems engineering",
    title:
      "I build and study AI systems at the edge of model behavior and real-world scale.",
    subtitle:
      "From multimodal vision pipelines to long-horizon agent evaluation, I turn research-grade ideas into software people can use.",
    supportingLine:
      "Currently focused on multimodal compression, agent reliability, and shipping interfaces that make complex systems feel clear.",
    primaryCta: {
      label: "View Selected Work",
      href: "#work",
    },
    secondaryCta: {
      label: "Get in Touch",
      href: "mailto:armaanamatya2014@gmail.com",
    },
  },
  metrics: [
    {
      value: "30%",
      label: "lower inference latency on multimodal image systems",
    },
    {
      value: "1,000+",
      label: "students served through a production AI learning platform",
    },
    {
      value: "98%",
      label: "precision on face-recognition attendance workflows",
    },
    {
      value: "20%",
      label: "score lift from adaptive tutoring and feedback loops",
    },
  ] satisfies Metric[],
  caseStudies: [
    {
      slug: "artinafti",
      title: "Artinafti",
      eyebrow: "Multimodal vision systems",
      summary:
        "Production-facing model serving for image upscaling, tagging, and generation workloads.",
      problem:
        "The team needed vision-language features that felt product-ready instead of research-fragile, with latency low enough to support real user workflows.",
      built:
        "I engineered multimodal APIs across FastAPI, NestJS, Redis, and PostgreSQL to serve upscaling, tagging, and generation pipelines with tighter performance controls.",
      impact: [
        "Cut inference latency by 30% on core image workflows.",
        "Shipped reusable backend primitives for tagging, generation, and media processing.",
        "Turned experimental multimodal capabilities into stable application endpoints.",
      ],
      tech: ["Python", "FastAPI", "NestJS", "Redis", "PostgreSQL"],
      image: "/logos/artinafti.png",
      imageAlt: "Artinafti wordmark",
      stat: "30%",
      statLabel: "Lower latency",
      links: [],
    },
    {
      slug: "algoverse",
      title: "Algoverse",
      eyebrow: "Agent reliability research",
      summary:
        "Evaluation work on how memory and long context induce brittle behavior in long-horizon LLM agents.",
      problem:
        "Agentic systems often look capable in short demos, then drift off-objective as memory grows and tasks stretch over longer horizons.",
      built:
        "I designed controlled evaluations across simulated agents, long-horizon benchmarks, and memory/context ablations to surface concrete failure modes like goal drift and reward misgeneralization.",
      impact: [
        "Produced cleaner evidence about where persistent memory helps versus harms agent reliability.",
        "Worked in a research setting spanning collaborators from Stanford, Berkeley, and Vanderbilt.",
        "Framed alignment findings in a way that can inform applied agent design, not just theory.",
      ],
      tech: ["Python", "PyTorch", "LLM Evaluation", "Agent Benchmarks"],
      image: "/logos/algoverse.jpg",
      imageAlt: "Algoverse logo",
      stat: "Long-horizon",
      statLabel: "Agent evaluation",
      links: [
        {
          label: "Company",
          href: "https://algoverseairesearch.org",
        },
      ],
    },
    {
      slug: "mymcat",
      title: "MyMCAT.ai",
      eyebrow: "AI product + growth",
      summary:
        "An AI learning platform that combined tutoring, personalization, and product execution into measurable traction.",
      problem:
        "MCAT prep is noisy, generic, and hard to personalize. The product needed to turn adaptive guidance into something students would actually return to every day.",
      built:
        "I helped build and scale the platform with Next.js, TypeScript, and Supabase, shaping tutoring workflows, analytics, and the product surface around real student behavior.",
      impact: [
        "Supported 1,000+ students with personalized preparation flows.",
        "Helped grow the platform to $20K MRR.",
        "Improved student outcomes by 20% through adaptive tutoring loops.",
      ],
      tech: ["Next.js", "TypeScript", "Supabase", "Product Analytics"],
      image: "/logos/mymcat.jpg",
      imageAlt: "MyMCAT.ai logo",
      stat: "1,000+",
      statLabel: "Students served",
      links: [
        {
          label: "Product",
          href: "https://mymcat.ai",
        },
      ],
    },
    {
      slug: "fusemachines",
      title: "FuseMachines",
      eyebrow: "Production ML infrastructure",
      summary:
        "A face-recognition pipeline and serving layer for attendance workflows under messy real-world conditions.",
      problem:
        "Attendance tracking needed model accuracy that survived lighting changes, pose variation, and real deployment constraints instead of lab-clean inputs.",
      built:
        "I fine-tuned a FaceNet-based model and built a FastAPI + PostgreSQL service with async processing and batch inference to support mobile attendance usage.",
      impact: [
        "Reached 98% precision on the proprietary attendance dataset.",
        "Enabled concurrent request handling for a production mobile workflow.",
        "Bridged model training, inference, and API delivery in one pipeline.",
      ],
      tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "FaceNet"],
      image: "/logos/fuse.jpg",
      imageAlt: "FuseMachines logo",
      stat: "98%",
      statLabel: "Precision",
      links: [
        {
          label: "Company",
          href: "https://fusemachines.com",
        },
      ],
    },
  ] satisfies FeaturedCaseStudy[],
  expertise: [
    {
      title: "AI / ML",
      capabilities: [
        "Build multimodal and vision-language pipelines that make model outputs usable in product settings.",
        "Design long-horizon agent evaluations that isolate failure modes instead of hiding them inside demos.",
        "Work comfortably across model training, fine-tuning, inference optimization, and benchmark design.",
      ],
      tools: ["Python", "PyTorch", "Transformers", "CUDA", "vLLM"],
    },
    {
      title: "Systems / Backend",
      capabilities: [
        "Ship async APIs and data flows for model-serving workloads with real performance constraints.",
        "Use caching, storage design, and orchestration to reduce latency instead of masking it with more compute.",
        "Think in terms of durability, observability, and clean interfaces between services.",
      ],
      tools: ["FastAPI", "NestJS", "PostgreSQL", "Redis", "Docker"],
    },
    {
      title: "Frontend / Product",
      capabilities: [
        "Translate technical systems into interfaces that are calm, legible, and genuinely useful.",
        "Bias toward product surfaces that earn trust quickly through clarity and feedback.",
        "Comfortable building the full loop from interaction design through implementation and iteration.",
      ],
      tools: ["Next.js", "React", "TypeScript", "Supabase", "Figma-minded UX"],
    },
  ] satisfies ExpertiseGroup[],
  experience: [
    {
      org: "Artinafti",
      role: "AI Intern",
      period: "Jan 2026 - Present",
    },
    {
      org: "University of Houston",
      role: "Undergraduate Researcher",
      period: "Jan 2026 - Present",
      note: "Token compression for multimodal models",
    },
    {
      org: "Algoverse",
      role: "Machine Learning Research Intern",
      period: "Aug 2025 - Feb 2026",
    },
    {
      org: "MyMCAT.ai",
      role: "Software Engineer",
      period: "Aug 2024 - Apr 2025",
    },
    {
      org: "FuseMachines",
      role: "Machine Learning Engineer Intern",
      period: "May 2024 - Aug 2024",
    },
    {
      org: "F1Soft International",
      role: "Software Engineer Intern",
      period: "May 2023 - Aug 2023",
    },
  ] satisfies ExperienceItem[],
  about:
    "I’m drawn to systems where research, infrastructure, and product constraints collide. Lately that means multimodal compression, agent reliability, and building interfaces that make complex workflows feel simple.",
  contact: {
    title: "Working on AI systems, research tooling, or product infrastructure? Let’s talk.",
    primary: {
      label: "Email Armaan",
      href: "mailto:armaanamatya2014@gmail.com",
    },
    secondary: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/armaan-amatya/",
      },
      {
        label: "GitHub",
        href: "https://github.com/armaanamatya",
      },
      {
        label: "Resume",
        href: "/Armaan-Amatya_Recent_Resume.pdf",
      },
    ] satisfies PortfolioLink[],
  },
} as const;
