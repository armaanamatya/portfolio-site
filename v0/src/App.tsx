import './App.css'
import ExperienceCard from './components/ExperienceCard'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Skills from './components/Skills'
import ProjectSlider from './components/ProjectSlider'

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
            <div className="hero-header">
              <div className="profile-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="Armaan Amatya" />
              </div>
              <div className="hero-intro">
                <h1 className="hero-name">Hi, I'm Armaan <span className="wave-emoji">👋</span></h1>
                <p className="hero-subtitle">Senior majoring in CS + Math @ <img src="/misc/images/uh.jpg" alt="University of Houston" className="uh-logo" title="University of Houston" /></p>
                {/* <p className="hero-subtitle">I love building things and helping people. I also like</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">About</h2>
          <p className="about-description">
            I'm a 4th-year Computer Science and Math student at the University of Houston with a passion for building and breaking stuff (mostly breaking). Been committing most of my time to being a Fullstack AI Engineer, from handling frontend UI to serving AI software from the backend. This has allowed me to grow into a more effective engineer with experience and knowledge spanning all areas of tech.
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
            title="Fullstack Software Engineer"
            company="AI Agent Stealth Startup"
            location="Remote"
            period="May 2025 - Present"
            description={[
              "Led the development of an agentic, AI-powered data analysis platform leveraging a multi-node LangGraph architecture",
              "Built a full-stack web application with React 18 and TypeScript frontend using shadcn/ui components",
              "Developed an asynchronous FastAPI backend with WebSocket support for real-time updates and AI agent communication",
              "Implemented advanced state management and orchestrated complex AI workflows for data processing"
            ]}
            techStack={['React', 'TypeScript', 'Python', 'FastAPI', 'LangGraph', 'AI', 'WebSocket']}
            logoUrl="/logos/stealth.jpg"
            isCurrent={true}
            companyUrl="https://example.com"
          />

          <ExperienceCard
            title="Machine Learning Research Intern"
            company="Algoverse"
            location="Remote"
            period="Aug 2024 - Present"
            description={[
              "Collaborated with researchers from Stanford, Berkeley, and Vanderbilt on scholarly paper exploring LLMs",
              "Conducted research on agentic capabilities and emergent behaviors in large language models",
              "Contributed to experimental design and data analysis for AI safety and alignment research",
              "Published findings in peer-reviewed conferences and journals"
            ]}
            techStack={['Python', 'ML', 'LLM', 'Research', 'PyTorch', 'Transformers']}
            logoUrl="/logos/algoverse.jpg"
            isCurrent={true}
            companyUrl="https://algoverse.ai"
          />

          <ExperienceCard
            title="Software Engineer"
            company="MyMCAT.ai"
            location="Houston, TX"
            period="Aug 2024 - Apr 2025"
            description={[
              "Led development of AI-based education platform serving 1,000+ university students preparing for MCAT",
              "Built scalable frontend and backend using NextJS and TypeScript with optimized performance",
              "Implemented Prisma ORM with Supabase database for efficient data management and real-time updates",
              "Designed and developed adaptive learning algorithms to personalize student study experiences"
            ]}
            techStack={['Next.js', 'TypeScript', 'Prisma', 'Supabase', 'React', 'Node.js']}
            logoUrl="/logos/mymcat.jpg"
            companyUrl="https://mymcat.ai"
          />

          <ExperienceCard
            title="Machine Learning Engineer Intern"
            company="FuseMachines"
            location="New York, NY"
            period="May 2024 - Aug 2024"
            description={[
              "Engineered Large Language Models including BERT and Attention Models for software requirement analysis",
              "Developed ML pipeline to automatically generate accurate dependency lists from project requirements",
              "Improved project planning efficiency by 37% through automated requirement parsing and analysis",
              "Implemented model fine-tuning and evaluation frameworks for domain-specific NLP tasks"
            ]}
            techStack={['Python', 'BERT', 'NLP', 'ML', 'PyTorch', 'Transformers', 'scikit-learn']}
            logoUrl="/logos/fuse.jpg"
            companyUrl="https://fusemachines.com"
          />

          <ExperienceCard
            title="Software Engineer Intern"
            company="F1Soft International"
            location="Remote"
            period="May 2023 - Aug 2023"
            description={[
              "Engineered high-performance RESTful APIs using Java Spring Boot, reducing request latency by 50%",
              "Implemented secure and stateless user authentication system with Spring Security and JWT tokens",
              "Optimized database queries and implemented caching strategies for improved application performance",
              "Collaborated with cross-functional teams to deliver scalable enterprise software solutions"
            ]}
            techStack={['Java', 'Spring Boot', 'JWT', 'REST API', 'MySQL', 'Redis']}
            logoUrl="/logos/f1soft.jpg"
            companyUrl="https://f1soft.com"
          />
        </div>

        <Certificates />
        
        <Education />
        
        <Skills />
        
        <ProjectSlider />
      </main>
    </div>
  )
}

export default App
