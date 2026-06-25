import { useState } from 'react'
import './App.css'
import ExperienceCard from './components/ExperienceCard'
import Education from './components/Education'
import Skills from './components/Skills'
import ProjectSlider from './components/ProjectSlider'
import ResumeViewer from './components/ResumeViewer'
import { useScrollReveal } from './hooks/useScrollReveal'
import { revealDelayStyle } from './utils/reveal'

function App() {
  const [resumeViewerOpen, setResumeViewerOpen] = useState(false)
  useScrollReveal()

  return (
    <div className="portfolio">
      <main className="main-content">

        {/* Hero */}
        <div
          className="hero-section"
          id="hero"
          data-reveal="hero-shell"
          style={revealDelayStyle(10)}
        >
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-name" aria-label="Hi, I'm Armaan">
                <span className="hero-name-word">Hi,</span>
                <span className="hero-name-word">I'm</span>
                <span className="hero-name-word hero-name-word-accent">Armaan</span>
                <span className="hero-wave-shell" aria-hidden="true">
                  <span className="wave-emoji">👋</span>
                </span>
              </h1>
              <p className="hero-subtitle">
                Senior majoring in CS + Math @{' '}
                <img src="/uh.jpg" alt="University of Houston" className="uh-logo" title="University of Houston" />
              </p>
            </div>
            <div className="profile-image">
              <img src="/IMG_1854.jpg" alt="Armaan Amatya" />
            </div>
          </div>
        </div>

        {/* About (merged with What I'm Up To) */}
        <div className="page-section" id="about">
          <h2 className="section-title" data-reveal="inline">About</h2>
          <p className="about-para" data-reveal="text" style={revealDelayStyle(70)}>
            <span className="highlight">CS + Math senior at the University of Houston</span> went from{' '}
            <span className="highlight">generic Java SWE → AI/ML</span> and never looked back. Currently cooking on <span className="highlight">CUDA</span> (my fav class rn) and messing with a new <span className="highlight">FPGA</span> board, plus reading AI papers weekly.
          </p>
        </div>

        {/* Work Experience */}
        <div className="experience-section" id="experience">
          <h2 className="section-title" data-reveal="inline">Work Experience</h2>
          <div data-reveal="card" style={revealDelayStyle(20)}>
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
          </div>

          <div data-reveal="card" style={revealDelayStyle(80)}>
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
          </div>

          <div data-reveal="card" style={revealDelayStyle(200)}>
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
          </div>

          <div data-reveal="card" style={revealDelayStyle(260)}>
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
          </div>

          <div data-reveal="card" style={revealDelayStyle(320)}>
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
        </div>

        {/* Education */}
        <div className="page-section" id="education">
          <Education />
        </div>

        {/* Skills */}
        <div className="page-section" id="skills">
          <Skills />
        </div>

        {/* Projects */}
        <div className="page-section" id="projects">
          <ProjectSlider />
        </div>

      </main>

      {/* Left Sidebar */}
      <nav className="left-sidebar" aria-label="Contact and links">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a
              href="https://github.com/armaanamatya"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link"
              title="GitHub"
              data-reveal="sidebar"
              style={revealDelayStyle(40)}
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
              data-reveal="sidebar"
              style={revealDelayStyle(90)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </li>
          <li className="sidebar-item">
            <a
              href="mailto:armaanamatya2014@gmail.com"
              className="sidebar-link"
              title="Email"
              data-reveal="sidebar"
              style={revealDelayStyle(140)}
            >
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
              data-reveal="sidebar"
              style={revealDelayStyle(190)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
              </svg>
            </button>
          </li>
        </ul>
      </nav>

      <ResumeViewer isOpen={resumeViewerOpen} onClose={() => setResumeViewerOpen(false)} />
      <div className="bottom-fade"></div>
    </div>
  )
}

export default App
