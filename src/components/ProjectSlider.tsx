import './ProjectSlider.css';

interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Qie",
    year: "2024",
    description: "An alternative to FL Studio. A full-fledged music production software designed for modern creators.",
    image: "/qieimg.png",
    techStack: ['Python', 'PyQT', 'Demucs'],
    liveUrl: "https://diannao.gumroad.com/"
  },
  {
    id: 2,
    title: "MyMCAT.ai Platform",
    year: "2024 - 2025",
    description: "AI-based education platform serving 1,000+ students with personalized MCAT preparation and analytics.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'Supabase'],
    liveUrl: "https://mymcat.ai",
  },
  {
    id: 3,
    title: "JobTool",
    year: "2024",
    description: "A personal tool for job application automation and tracking (Working on chrome extension)",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMDAwMDAwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Xb3JrSW5Qcm9nPC90ZXh0Pgo8L3N2Zz4K",
    techStack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    githubUrl: "https://github.com/armaanamatya/jobtool"
  }
];

function ProjectSlider() {
  return (
    <section className="new-projects-section">
      <div className="projects-header-container">
        <div className="projects-pill">My Projects</div>
        <h2 className="projects-main-title">Check out my latest work</h2>
        <p className="projects-subtitle">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <div className="project-info-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.techStack.map(tech => (
                  <span key={tech} className="project-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    Website
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <div className="project-card updating-soon-card">
          <div className="updating-content">
            <div className="updating-icon">✨</div>
            <h3>Updating Soon!</h3>
            <p>I have about 3 more projects I'll be adding here very soon (mostly in a day or so). Stay tuned!</p>
            <div className="updating-loader">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSlider;