import './App.css'
import ExperienceCard from './components/ExperienceCard'

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-left">
          <div className="logo">
            <span className="logo-text">port69</span>
          </div>
        </div>
        {/* <div className="header-right">
          <div className="status-dot"></div>
          <span>Call</span>
          <div className="header-controls">
            <button className="theme-toggle">🌙</button>
            <span className="language">EN</span>
            <div className="profile-icon">👤</div>
          </div>
        </div> */}
      </header>

      <main className="main-content">
        <div className="hero-section">
          <div className="hero-content">
            <div className="profile-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" alt="Armaan Amatya" />
            </div>
            <h1 className="hero-name">Armaan Amatya</h1>
            <p className="hero-tagline">
              Building and <span className="highlight">(mostly)</span> breaking things.
            </p>
            <p className="hero-description">
              I'm a 4th-year Computer Science and Math student at the University of Houston with a passion for building and breaking stuff (mostly breaking). Currently working as a Fullstack AI Engineer, from handling frontend UI to serving AI software from the backend.
            </p>
            <p className="hero-location">📍 Houston, TX</p>
            
            <div className="hero-actions">
              <a href="/resume.pdf" className="action-btn primary" download>
                 Resume
              </a>
              <a href="https://github.com/armaanamatya" className="action-btn secondary" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/armaan-amatya/" className="action-btn secondary" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="experience-section">
          <h2 className="section-title">EXPERIENCE</h2>
          <ExperienceCard
            title="Fullstack AI Software Engineer"
            company="AI Agent Stealth Startup"
            location="Remote"
            period="May 2025 - PRESENT"
            description="Led the development of an agentic, AI-powered data analysis platform leveraging a multi-node LangGraph architecture. Built a full-stack web application with React 18 and TypeScript frontend using shadcn/ui, and an asynchronous FastAPI backend with WebSocket support for real-time updates."
            techStack={['React', 'TS', 'Python', 'AI']}
            logoUrl="/logos/stealth.jpg"
          />

          <ExperienceCard
            title="Machine Learning Research Intern"
            company="Algoverse"
            location="Remote"
            period="Aug 2025 - Nov 2025"
            description="Collaborated with researchers from Stanford, Berkeley, and Vanderbilt on a scholarly paper exploring Large Language Models (LLMs) and agentic capabilities."
            techStack={['Python', 'ML', 'LLM', 'Research']}
            logoUrl="/logos/algoverse.jpg"
          />

          <ExperienceCard
            title="Software Engineering Lead"
            company="MyMCAT.ai"
            location="Houston, TX"
            period="Aug 2024 - Apr 2025"
            description="Led the development of an AI-based education platform for the MCAT, serving 1,000+ university students, utilizing NextJS and TypeScript for the frontend and backend, Prisma as the ORM, Supabase for the database."
            techStack={['Next.js', 'TS', 'Prisma', 'Supabase']}
            logoUrl="/logos/mymcat.jpg"
          />

          <ExperienceCard
            title="Machine Learning Engineer Intern"
            company="FuseMachines"
            location="New York, NY"
            period="May 2024 - Aug 2024"
            description="Engineered Large Language Models (LLMs), including BERT and Attention Models, to analyze software engineering requirements and generate accurate dependency lists, improving project planning efficiency by 37%."
            techStack={['Python', 'BERT', 'NLP', 'ML']}
            logoUrl="/logos/fuse.jpg"
          />

          <ExperienceCard
            title="Software Engineer Intern"
            company="F1Soft International"
            location="Remote"
            period="May 2023 - Aug 2023"
            description="Engineered high-performance RESTful APIs using Java Spring Boot, slashing request latency by 50%. Implemented a secure and stateless user authentication system with Spring Security and JWT."
            techStack={['Java', 'Spring', 'JWT', 'API']}
            logoUrl="/logos/f1soft.jpg"
          />
        </div>
      </main>
    </div>
  )
}

export default App
