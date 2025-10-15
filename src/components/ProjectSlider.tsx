import { useState, useRef, useEffect } from 'react';
import './ProjectSlider.css';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "AI Data Analysis Platform",
  //   description: "Agentic AI-powered data analysis platform with multi-node LangGraph architecture and real-time WebSocket updates.",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  //   techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'LangGraph'],
  //   liveUrl: "#",
  //   githubUrl: "#"
  // },
  {
    id: 1,
    title: "Qie",
    description: "An alternative to FL Studio",
    image: "/qieimg.png",
    techStack: ['Python', 'PyQT', 'Demucs'],
    liveUrl: "https://diannao.gumroad.com/"
    // githubUrl: "#"
  },
  {
    id: 2,
    title: "MyMCAT.ai Platform",
    description: "AI-based education platform serving 1,000+ students with personalized MCAT preparation and analytics.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'Supabase'],
    liveUrl: "https://mymcat.ai",
    // githubUrl: "#"
  },
  {
    id: 3,
    title: "JobTool",
    description: "A personal tool for job application automation and tracking (Working on chrome extension)",
    image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMDAwMDAwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Xb3JrSW5Qcm9nPC90ZXh0Pgo8L3N2Zz4K",
    techStack: ['React', 'TypeScript', 'Node.js','Express.js', 'MongoDB'],
    githubUrl: "https://github.com/armaanamatya/jobtool"
  },
  // {
  //   id: 3,
  //   title: "LLM Research Paper",
  //   description: "Collaborative research on Large Language Models and agentic capabilities with Stanford, Berkeley, and Vanderbilt researchers.",
  //   image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
  //   techStack: ['Python', 'PyTorch', 'Research'],
  //   githubUrl: "#"
  // },
  // {
  //   id: 4,
  //   title: "RESTful API System",
  //   description: "High-performance RESTful APIs with Java Spring Boot, reducing request latency by 50% with JWT authentication.",
  //   image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
  //   techStack: ['Java', 'Spring Boot', 'PostgreSQL'],
  //   githubUrl: "#"
  // },
];

function ProjectSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsPerView = 3;
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex + 1 >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex - 1 < 0 ? projects.length - cardsPerView : prevIndex - 1
    );
  };

  const visibleProjects = projects.slice(startIndex, startIndex + cardsPerView);
  const hasNext = startIndex + cardsPerView < projects.length;
  const hasPrev = startIndex > 0;

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Function to check if text is truncated
  const checkTruncation = (element: HTMLParagraphElement | null) => {
    if (element) {
      const isTruncated = element.scrollHeight > element.clientHeight;
      element.setAttribute('data-truncated', isTruncated.toString());
    }
  };

  // Check truncation when component mounts or when visible projects change
  useEffect(() => {
    descriptionRefs.current.forEach(element => {
      if (element) checkTruncation(element);
    });
  }, [startIndex]);

  return (
    <div className="projects-section">
      <h2 className="section-title">PROJECTS</h2>
      <div className="project-slider">
        <button 
          className={`slider-btn prev ${!hasPrev ? 'disabled' : ''}`} 
          onClick={prevSlide}
          disabled={!hasPrev}
        >
          ←
        </button>
        
        <div className="project-cards-container">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card-compact" 
              onClick={() => openModal(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image-compact">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content-compact">
                <h3 className="project-title-compact">{project.title}</h3>
                <p 
                  className="project-description-compact"
                  ref={(el) => {
                    descriptionRefs.current[index] = el;
                    if (el) {
                      // Check truncation after the element is rendered
                      setTimeout(() => checkTruncation(el), 0);
                    }
                  }}
                >
                  {project.description}
                </p>
                <div className="project-bottom">
                  <div className="project-links-bottom">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        className="project-link-icon-bottom live" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title="Live Demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        ↗
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="project-link-icon-bottom github" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title="GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className={`slider-btn next ${!hasNext ? 'disabled' : ''}`} 
          onClick={nextSlide}
          disabled={!hasNext}
        >
          →
        </button>
      </div>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default ProjectSlider;