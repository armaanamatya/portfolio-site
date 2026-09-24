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
                <span className="hero-subtitle-sep" aria-hidden="true">·</span>
                <span className="hero-subtitle-note">graduating soon!</span>
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
            <span className="highlight">CS + Math senior at the University of Houston</span>. The short version:
          </p>
          <ul className="about-list" data-reveal="text" style={revealDelayStyle(120)}>
            <li><span className="highlight">Generic SWE → AI/ML</span> and never looked back</li>
            <li>Got into <span className="highlight">inference engineering</span> during the summer</li>
            <li>Reading AI papers weekly!</li>
            <li>
              Recently started contributing to{' '}
              <a
                href="https://github.com/vllm-project/vllm-omni/pulls?q=is%3Apr+author%3Aarmaanamatya"
                target="_blank"
                rel="noopener noreferrer"
                className="about-link highlight"
              >
                vLLM-Omni
              </a>
            </li>
          </ul>
        </div>

        {/* Work Experience */}
        <div className="experience-section" id="experience">
          <h2 className="section-title" data-reveal="inline">Work Experience</h2>
          <div data-reveal="card" style={revealDelayStyle(20)}>
            <ExperienceCard
            title="Machine Learning Engineer Intern"
            company="Autonomize AI"
            location="Austin, TX"
            period="May 2026 - Aug 2026"
            description={[
              "Integrated a model router into the platform to send pages to smaller, cheaper OCR models",
              "Shipped a RAG chatbot over 1,000+ policy docs, saving 20+ hours/week at 90%+ accuracy and 2s per question"
            ]}
            techStack={['PyTorch', 'vLLM', 'AWQ', 'GRPO', 'RAG']}
            logoUrl="/logos/autonomizeai_logo.jpg"
            companyUrl="https://autonomize.ai"
            isCurrent={false}
            />
          </div>

          {/* DeepInvent.ai experience - temporarily hidden
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
          */}

          <div data-reveal="card" style={revealDelayStyle(50)}>
            <ExperienceCard
            title="Undergraduate Researcher"
            company="University of Houston"
            location="Houston, TX"
            period="Jan 2026 - Present"
            description={[
              "Reduced multimodal LLM inference latency 40% at 98% of baseline accuracy with novel token compression that cuts visual tokens 60% and KV-cache footprint on Qwen2.5/3-Omni; won Best Research Award, submitting to CVPR 2027",
              "Deployed compressed multimodal models to NVIDIA Jetson Orin for on-device inference, trained with multi-GPU distributed PyTorch (DDP and FSDP) on RTX 6000s"
            ]}
            techStack={['PyTorch', 'DDP/FSDP', 'Jetson Orin']}
            logoUrl="/uh.jpg"
            isCurrent={true}
            />
          </div>

          <div data-reveal="card" style={revealDelayStyle(80)}>
            <ExperienceCard
            title="AI Engineer Intern"
            company="Artinafti"
            location="Remote"
            period="Jan 2026 - May 2026"
            description={[
              "Beat 10+ open-source upscalers on 2k+ blurry test images by fine-tuning Real-ESRGAN on 4,000 artwork pairs",
              "Improved image quality 25% (FID) by LoRA fine-tuning Flux on 5k+ artworks, with color-tone controls",
              "Cut face and text warping in generation with CodeFormer restoration, text preservation and Flux ControlNet guidance",
              "Served ESRGAN and 8-bit Flux at 1,000+ requests a day on an AWS A10G, with a Redis job queue and cache and results in S3; containerized with Docker and deployed by GitHub Actions, monitored in Sentry"
            ]}
            techStack={['Real-ESRGAN', 'Flux', 'LoRA', 'Redis', 'AWS', 'Docker']}
            logoText="artinafti"
            isCurrent={false}
            />
          </div>

          <div data-reveal="card" style={revealDelayStyle(110)}>
            <ExperienceCard
            title="Machine Learning Engineer Intern"
            company="AutoHDR"
            location="Austin, TX (Remote)"
            period="Aug 2025 - Dec 2025"
            description={[
              "Cut per-photo enhancement from 5 minutes to under 15 seconds on 100,000+ real-estate listing photos a month with PyTorch exposure fusion, denoising and 4x super-resolution, deployed as a FastAPI service on AWS EC2",
              "Cut redundant processing 25% with an image deduplication service, exposed by FastAPI to the TypeScript backend",
              "Produced 1,000+ real-estate tour videos monthly with a depth-aware image-to-video model deployed via FastAPI"
            ]}
            techStack={['PyTorch', 'FastAPI', 'AWS EC2']}
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
              "Fine-tuned FaceNet to 98% precision for a production attendance app, then served it from a Dockerized FastAPI service, with ONNX to FP16 TensorRT cutting latency and cloud cost 40%"
            ]}
            techStack={['FastAPI', 'Docker', 'ONNX', 'TensorRT']}
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
