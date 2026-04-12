import { useState } from 'react'
import './App.css'
// Updated for root directory deployment
import ExperienceCard from './components/ExperienceCard'
// import Certificates from './components/Certificates'
import Education from './components/Education'
import Skills from './components/Skills'
import ProjectSlider from './components/ProjectSlider'
// import HackathonSlider from './components/HackathonSlider'
import ScrollWheel from './components/ScrollWheel'
import ResumeViewer from './components/ResumeViewer'

function App() {
  const [resumeViewerOpen, setResumeViewerOpen] = useState(false)
  return (
    <div className="portfolio">
      <main className="main-content">
        <div className="hero-section" id="hero">
          <div className="hero-content">
            <div className="profile-image">
              <img src="/IMG_1854.jpg" alt="Armaan Amatya" />
            </div>
            <h1 className="hero-name">Hi, I'm Armaan <span className="wave-emoji">👋</span></h1>
            <p className="hero-subtitle">Senior majoring in CS + Math @ <img src="/uh.jpg" alt="University of Houston" className="uh-logo" title="University of Houston" /></p>
          </div>
        </div>

        <div className="about-section" id="about">
          <h2 className="section-title">About</h2>
          <ul className="about-list">
            <li>
              Senior with a focus for AI research 
            </li>
            <li>
              Doing research in token compression methods for multimodal models
            </li>
          </ul>
        </div>

        <div className="what-im-up-to-section" id="what-im-up-to">
          <h2 className="section-title">What I'm Up To</h2>
          <ul className="up-to-list">
            <li>
              Grinding CUDA for my GPU class 
            </li>
            <li>
              Reading AI papers weekly 📄
            </li>
            <li>
              <span className="big-red-f">F</span>ailing exams and locking in
            </li>
          </ul>
        </div>

        <div id="education">
          <Education />
        </div>

        <div className="experience-section" id="experience">
          <h2 className="section-title">EXPERIENCE</h2>
          <ExperienceCard
            title="AI Intern"
            company="Artinafti"
            location="Houston, TX"
            period="Jan 2026 - Present"
            description={[
              "Engineered multimodal vision–language models for image upscaling, tagging, and generation tasks",
              "Reduced inference latency by 30% by building scalable APIs with FastAPI, NestJS, Redis, and PostgreSQL"
            ]}
            techStack={['FastAPI', 'NestJS', 'Redis', 'PostgreSQL']}
            logoText="artinafti"
            isCurrent={true}
          />

          <ExperienceCard
            title="Undergraduate Researcher"
            company="University of Houston"
            location="Houston, TX"
            period="Jan 2026 - Present"
            description={[
              "Developing a novel token compression method for multimodal models"
            ]}
            techStack={[]}
            logoUrl="/uh.jpg"
            isCurrent={true}
          />

          <ExperienceCard
            title="Machine Learning Research Intern"
            company="Algoverse"
            location="Remote"
            period="Aug 2025 - Feb 2026"
            description={[
              "Empirically studying agentic misalignment by analyzing how persistent memory and context accumulation induce goal drift, reward misgeneralization, and brittle decision-making in long-horizon LLM agents",
              "Designed controlled evaluations using simulated agents, ablations over memory and context, and long-horizon task benchmarks to surface and characterize alignment failure modes"
            ]}
            techStack={['Python', 'PyTorch', 'LLMs']}
            logoUrl="/logos/algoverse.jpg"
            companyUrl="https://algoverseairesearch.org"
          />

          <ExperienceCard
            title="Fullstack AI Software Engineer"
            company="Stealth AI Startup"
            location="Houston, TX"
            period="May 2025 - Jan 2026"
            description={[
              "Saved 10+ hours per week for Amazon stores by designing and deploying an Agentic data analysis system that autonomously decomposes and executes multi-step analytical tasks",
              "Maintained 99.9% uptime while processing 1,000+ daily records by building and operating a production full-stack system on GCP",
              "Reduced model hallucinations by 50% and improved multi-step task success by 30% through principled context engineering and structured agent orchestration"
            ]}
            techStack={['React', 'TypeScript', 'Python', 'FastAPI', 'GCP', 'Docker']}
            logoUrl="/logos/stealth.jpg"
          />

          <ExperienceCard
            title="Software Engineer"
            company="MyMCAT.ai"
            location="Houston, TX"
            period="Aug 2024 - Apr 2025"
            description={[
              "Built and scaled an AI-driven MCAT preparation platform through personalized learning, supporting 1,000+ students and $20K MRR",
              "Improved student outcomes through adaptive tutoring, increasing scores by 20%",
              "Contributed to product growth leading to a $6K acquisition"
            ]}
            techStack={['Next.js', 'TypeScript', 'Supabase', 'AI']}
            logoUrl="/logos/mymcat.jpg"
            companyUrl="https://mymcat.ai"
          />

          <ExperienceCard
            title="Machine Learning Engineer Intern"
            company="FuseMachines"
            location="New York, NY"
            period="May 2024 - Aug 2024"
            description={[
              "Fine-tuned a FaceNet-based face recognition model on a proprietary company dataset, achieving 98% precision for real-world attendance tracking under varied lighting and pose conditions",
              "Built a production-grade REST API using Python, FastAPI, PostgreSQL, and Docker; implemented async server-side processing and batch inference to support concurrent requests from a mobile attendance application"
            ]}
            techStack={['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'FaceNet']}
            logoUrl="/logos/fuse.jpg"
            companyUrl="https://fusemachines.com"
          />

          <ExperienceCard
            title="Software Engineer Intern"
            company="F1Soft International"
            location="Remote"
            period="May 2023 - Aug 2023"
            description={[
              "Improved investment platform performance by optimizing Java Spring Boot backend APIs through query optimization, caching, and secure stateless authentication, achieving a 50% reduction in API latency"
            ]}
            techStack={['Java', 'Spring Boot', 'Spring Security', 'JWT']}
            logoUrl="/logos/f1soft.jpg"
            companyUrl="https://f1soft.com"
          />
        </div>

        {/* <div id="certificates">
          <Certificates />
        </div> */}
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="projects">
          <ProjectSlider />
        </div>
        {/* <div id="hackathons">
          <HackathonSlider />
        </div> */}
      </main>

      {/* Left Sidebar - Links (GitHub, LinkedIn, Email, Resume) */}
      <nav className="left-sidebar" aria-label="Contact and links">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a
              href="https://github.com/armaanamatya"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
              title="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              href="https://www.linkedin.com/in/armaan-amatya/"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
              title="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </li>
          <li className="sidebar-item">
            <a href="mailto:armaanamatya2014@gmail.com" className="sidebar-link" title="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z"/>
              </svg>
            </a>
          </li>
          <li className="sidebar-item">
            <button
              type="button"
              className="sidebar-link"
              title="View Resume"
              onClick={() => setResumeViewerOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </button>
          </li>
        </ul>
      </nav>

      <ScrollWheel />
      <ResumeViewer isOpen={resumeViewerOpen} onClose={() => setResumeViewerOpen(false)} />
      {/* Bottom Fade Effect */}
      <div className="bottom-fade"></div>
    </div>
  )
}

export default App
