import './App.css'
// Updated for root directory deployment
import ExperienceCard from './components/ExperienceCard'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Skills from './components/Skills'
import ProjectSlider from './components/ProjectSlider'

function App() {
  return (
    <div className="portfolio">
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <div className="profile-image">
              <img src="/IMG_1854.jpg" alt="Armaan Amatya" />
            </div>
            <h1 className="hero-name">Hi, I'm Armaan <span className="wave-emoji">👋</span></h1>
            <p className="hero-subtitle">Senior majoring in CS + Math @ <img src="/uh.jpg" alt="University of Houston" className="uh-logo" title="University of Houston" /></p>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">About</h2>
          <p className="about-description">
            I'm a 4th-year Computer Science and Math student at the University of Houston into building and breaking stuff (mostly breaking). Been committing most of my time to being a Fullstack AI Engineer, from handling frontend UI to serving AI software from the backend. This has allowed me to grow into a more effective engineer with experience and knowledge spanning all areas of tech.
          </p>
        </div>

        <div className="what-im-up-to-section">
          <h2 className="section-title">What I'm Up To</h2>
          <ul className="up-to-list">
            <li>
              Exploring fine-tuning a model for financial stock analysis, learning from the LLM and RL courses on HF: 
              <a href="https://huggingface.co/learn/llm-course/chapter1/1" target="_blank" rel="noopener noreferrer" className="course-link">LLM Course</a> and 
              <a href="https://huggingface.co/learn/deep-rl-course/unit0/introduction" target="_blank" rel="noopener noreferrer" className="course-link">Deep RL Course</a>
            </li>
            <li>
              Designing and implementing a Multi-Agent System to optimize workflows for E-commerce platforms
            </li>
            <li>
              Making (trying to make...) a database and network server in C/C++ from scratch to gain a deeper understanding of low-level systems
            </li>
          </ul>
        </div>

        <div className="experience-section">
          <h2 className="section-title">EXPERIENCE</h2>
          <ExperienceCard
            title="Fullstack AI Software Engineer"
            company="AI Agent Stealth Startup"
            location="Remote"
            period="May 2025 - Present"
            description={[
              "Owned the end-to-end development of an Agentic Data Analysis platform for Ecommerce Stores, architecting a multi-agent system with Google ADK and LangGraph to automate repetitive data analysis tasks, saving 10+ hours weekly",
              "Developed a full-stack web app with React 18, TypeScript, and FastAPI, using MongoDB and GCP; deployed via Docker on GCP with 99.9% uptime, handling 1,000+ daily records",
              "Orchestrated context engineering, reducing hallucinations by 50% and boosting multi-step task completion rates by 30%"
            ]}
            techStack={['React', 'TypeScript', 'Python', 'FastAPI', 'LangGraph', 'MongoDB', 'Google Cloud', 'Docker']}
            logoUrl="/logos/stealth.jpg"
            isCurrent={true}
          />

          <ExperienceCard
            title="Machine Learning Research Intern"
            company="Algoverse"
            location="Remote"
            period="Aug 2025 - Present"
            description={[
              "Researching causal representation learning methods, aimed for submission to ICLR 2025 Workshops",
              "Prototyped novel attention mechanisms in PyTorch for parameter-efficient fine-tuning on domain-specific datasets, achieving measurable performance gains over baseline LLaMA models",
              "Designed robust data preprocessing pipelines for multi-modal research datasets (text, protein sequences, vision) and refactored prototype research codebases into modular, reproducible repositories with CI/CD, enabling paper-ready experiments"
            ]}
            techStack={['Python', 'PyTorch', 'LLaMA', 'CI/CD']}
            logoUrl="/logos/algoverse.jpg"
            isCurrent={true}
            companyUrl="https://algoverseairesearch.org"
          />

          <ExperienceCard
            title="Software Engineering Lead"
            company="MyMCAT.ai"
            location="Houston, TX"
            period="Aug 2024 - Apr 2025"
            description={[
              "Collaborated with a team to build an AI-driven MCAT prep platform serving 1,000+ students, gamifying learning through AI personalization",
              "Developed an intelligent tutoring system with NextJS, TypeScript, and Supabase"
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
              "Built a Python NLP pipeline with scikit-learn, spaCy, and NLTK, productionized with Flask to analyze 1200+ software engineering requirements, saving the company $2000 annually by decreasing project lead times",
              "Engineered BERT-based dependency extraction for requirement lists, improving project planning efficiency by 37%"
            ]}
            techStack={['Python', 'scikit-learn', 'spaCy', 'NLTK', 'Flask', 'BERT']}
            logoUrl="/logos/fuse.jpg"
            companyUrl="https://fusemachines.com"
          />

          <ExperienceCard
            title="Software Engineer Intern"
            company="F1Soft International"
            location="Remote"
            period="May 2023 - Aug 2023"
            description={[
              "Optimized REST APIs in Java Spring Boot for an investment platform, reducing latency by 50% through query optimization and caching",
              "Implemented a secure, stateless authentication system in Spring Boot with Spring Security and JWT, integrated with Supabase, and validated using Postman"
            ]}
            techStack={['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Supabase', 'Postman']}
            logoUrl="/logos/f1soft.jpg"
            companyUrl="https://f1soft.com"
          />
        </div>

        <Certificates />
        
        <Education />
        
        <Skills />
        
        <ProjectSlider />
      </main>

      {/* Bottom Toolbar */}
      <div className="bottom-toolbar">
        <button 
          className="toolbar-btn home-btn" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </button>
        <div className="toolbar-separator"></div>
        <a 
          href="https://github.com/armaanamatya" 
          target="_blank" 
          rel="noopener noreferrer"
          className="toolbar-btn"
          title="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <div className="toolbar-separator"></div>
        <a 
          href="https://www.linkedin.com/in/armaan-amatya/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="toolbar-btn"
          title="LinkedIn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <div className="toolbar-separator"></div>
        <a 
          href="mailto:armaanamatya2014@gmail.com" 
          className="toolbar-btn"
          title="Email"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z"/>
          </svg>
        </a>
        <div className="toolbar-separator"></div>
        <button 
          className="toolbar-btn theme-btn" 
          title="Toggle theme"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.79 9.79 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32z"/>
          </svg>
        </button>
      </div>

      {/* Bottom Fade Effect */}
      <div className="bottom-fade"></div>
    </div>
  )
}

export default App
