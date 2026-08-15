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
            <span className="highlight">generic Java SWE → AI/ML</span> and never looked back. Currently cooking on <span className="highlight">CUDA</span> (my fav class rn), plus reading AI papers weekly.
          </p>
        </div>

        {/* Work Experience */}
        <div className="experience-section" id="experience">
          <h2 className="section-title" data-reveal="inline">Work Experience</h2>
          <div data-reveal="card" style={revealDelayStyle(20)}>
            <ExperienceCard
            title="Machine Learning Engineer Intern"
            company="Autonomize AI"
            location="Austin, TX"
            period="May 2026 - Present"
            description={[
              "Building deep RL algorithms to improve LLM alignment in clinical healthcare workflows on the AI/ML team",
              "Automated processing of 30k+ claims weekly by building multimodal document-intelligence pipelines combining OCR, layout parsing, and LLM-based extraction over unstructured clinical records",
              "Shipped multi-agent LLM systems from POC to production for Fortune 500 healthcare customers with human-in-the-loop evaluation and auditability"
            ]}
            techStack={['PyTorch', 'LLMs', 'RL']}
            logoUrl="/logos/autonomizeai_logo.jpg"
            companyUrl="https://autonomize.ai"
            isCurrent={true}
            />
          </div>

          <div data-reveal="card" style={revealDelayStyle(35)}>
            <ExperienceCard
            title="AI Engineer"
            company="DeepInvent.ai (#5 hire)"
            location="Austin, TX"
            period="May 2026 - Present"
            description={[
              "Enabled 2,000+ patentable inventions in launch week by building the evaluation stack for AI research agents that mine scientific literature and patent filings at a pre-seed autoresearch startup",
              "Blocked regressions across model, prompt, and tool changes by engineering replay-based eval harnesses with golden-set suites and calibrated LLM-as-judge graders scoring invention novelty"
            ]}
            techStack={['LLMs', 'RAG']}
            logoUrl="/logos/deepinvent.png"
            isCurrent={true}
            />
          </div>

          <div data-reveal="card" style={revealDelayStyle(50)}>
            <ExperienceCard
            title="Undergraduate Researcher"
            company="University of Houston"
            location="Houston, TX"
            period="Jan 2026 - Present"
            description={[
              "Cut multimodal LLM inference latency ~40% by developing a novel token compression method reducing visual tokens ~60% while retaining ~98% of baseline benchmark accuracy on Qwen2.5-Omni and Qwen3-Omni",
              "Deployed compressed models to NVIDIA Jetson Orin for on-device inference after multi-GPU distributed training (PyTorch DDP) on RTX 6000s, cutting VRAM ~45% and sustaining ~2x higher tokens/s; won Best Research Award"
            ]}
            techStack={['PyTorch']}
            logoUrl="/uh.jpg"
            isCurrent={true}
            />
          </div>

          <div data-reveal="card" style={revealDelayStyle(80)}>
            <ExperienceCard
            title="AI Engineer Intern"
            company="Artinafti"
            location="Austin, TX"
            period="Jan 2026 - May 2026"
            description={[
              "Improved visual fidelity 25% by fine-tuning diffusion-based upscaling and generation models with LoRA adapters and detail-preserving objectives for text and faces, adding photographic color-tone control",
              "Reduced inference latency 30% by building scalable model-serving APIs with FastAPI, Redis, and PostgreSQL with request batching and caching"
            ]}
            techStack={['FastAPI', 'Redis', 'PostgreSQL']}
            logoText="artinafti"
            isCurrent={false}
            />
          </div>

          <div data-reveal="card" style={revealDelayStyle(110)}>
            <ExperienceCard
            title="Machine Learning Engineer Intern"
            company="AutoHDR"
            location="Austin, TX (Remote)"
            period="Jan 2026 - Apr 2026"
            description={[
              "Cut per-image turnaround from ~5 minutes to under 15 seconds across 10,000+ listing photos monthly with diffusion image-to-image pipelines (PyTorch) for exposure fusion, denoising, and 4x super-resolution",
              "Reduced redundant processing ~25% by training an image-deduplication model, contrastively fine-tuning CLIP embeddings on listing photo pairs to catch near-duplicate shots",
              "Produced 1,000+ property tour videos monthly by shipping an image-to-video generation pipeline with depth-aware camera motion and temporally consistent shot transitions"
            ]}
            techStack={['PyTorch']}
            logoUrl="/logos/autohdr.png"
            isCurrent={false}
            />
          </div>

          <div data-reveal="card" style={revealDelayStyle(260)}>
            <ExperienceCard
            title="Machine Learning Engineer Intern"
            company="FuseMachines"
            location="New York, NY"
            period="May 2024 - Aug 2024"
            description={[
              "Achieved 98% precision on real-world attendance tracking by fine-tuning a FaceNet model; served real-time inference to a production mobile app (FastAPI, Docker) with async batched requests"
            ]}
            techStack={['Python', 'FastAPI', 'Docker', 'FaceNet']}
            logoUrl="/logos/fuse.jpg"
            companyUrl="https://fusemachines.com"
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
