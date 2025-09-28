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
        <div className="profile-section">
          <div className="avatar">
            <img src="https://via.placeholder.com/120" alt="Profile" />
          </div>
          <div className="intro">
            <h1>Hi, I am Armaan Amatya,</h1>
            <p className="description">
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="location">Houston, TX</p>
          </div>
        </div>

        <div className="experience-section">
          <ExperienceCard
            title="Fullstack AI Software Engineer"
            company="AI Agent Stealth Startup"
            location="Remote"
            period="May 2025 - PRESENT"
            description="Led the development of an agentic, AI-powered data analysis platform leveraging a multi-node LangGraph architecture. Built a full-stack web application with React 18 and TypeScript frontend using shadcn/ui, and an asynchronous FastAPI backend with WebSocket support for real-time updates."
            techStack={['React', 'TS', 'Python', 'AI']}
          />

          <ExperienceCard
            title="Machine Learning Research Intern"
            company="Algoverse"
            location="Remote"
            period="Aug 2025 - Nov 2025"
            description="Collaborated with researchers from Stanford, Berkeley, and Vanderbilt on a scholarly paper exploring Large Language Models (LLMs) and agentic capabilities."
            techStack={['Python', 'ML', 'LLM', 'Research']}
          />

          <ExperienceCard
            title="Software Engineering Lead"
            company="MyMCAT.ai"
            location="Houston, TX"
            period="Aug 2024 - Apr 2025"
            description="Led the development of an AI-based education platform for the MCAT, serving 1,000+ university students, utilizing NextJS and TypeScript for the frontend and backend, Prisma as the ORM, Supabase for the database."
            techStack={['Next.js', 'TS', 'Prisma', 'Supabase']}
          />

          <ExperienceCard
            title="Machine Learning Engineer Intern"
            company="FuseMachines"
            location="New York, NY"
            period="May 2024 - Aug 2024"
            description="Engineered Large Language Models (LLMs), including BERT and Attention Models, to analyze software engineering requirements and generate accurate dependency lists, improving project planning efficiency by 37%."
            techStack={['Python', 'BERT', 'NLP', 'ML']}
          />

          <ExperienceCard
            title="Software Engineer Intern"
            company="F1Soft International"
            location="Remote"
            period="May 2023 - Aug 2023"
            description="Engineered high-performance RESTful APIs using Java Spring Boot, slashing request latency by 50%. Implemented a secure and stateless user authentication system with Spring Security and JWT."
            techStack={['Java', 'Spring', 'JWT', 'API']}
          />
        </div>
      </main>
    </div>
  )
}

export default App
