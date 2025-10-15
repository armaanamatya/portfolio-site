import { useEffect } from 'react';
import './ProjectModal.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Extended project details for the modal
  const getProjectDetails = (project: Project) => {
    const details: { [key: number]: { fullDescription: string; features: string[]; challenges: string[]; learnings: string[] } } = {
      1: {
        fullDescription: "An alternative to FL Studio",
        features: [
          
        ],
        challenges: [
          
        ],
        learnings: [       ]
      },
      2: {
        fullDescription: "An AI-based education platform specifically designed for MCAT preparation, serving over 1,000 university students with personalized learning experiences and comprehensive analytics.",
        features: [
          // "Personalized MCAT study plans using AI algorithms",
          // "Comprehensive analytics dashboard for progress tracking",
          // "Next.js full-stack architecture for optimal performance",
          // "Prisma ORM for type-safe database operations",
          // "Supabase integration for real-time data synchronization"
        ],
        challenges: [
          // "Scaling the platform to handle 1,000+ concurrent users",
          // "Implementing personalized AI-driven study recommendations",
          // "Building comprehensive analytics while maintaining performance"
        ],
        learnings: [
          // "Large-scale application architecture and optimization",
          // "AI-driven personalization algorithms",
          // "Database design for educational platforms"
        ]
      },
      3: {
        fullDescription: "A personal tool for job application automation and tracking (Working on chrome extension)",
        features: [
        ],
        challenges: [
        ],
        learnings: [
        ]
        // features: [
        //   "Job application automation and tracking",
        //   "Job application tracking and management",
        //   "Job application automation and tracking",
        // ],
        // challenges: [
        //   "Coordinating research across multiple prestigious institutions",
        //   "Developing novel evaluation metrics for agentic capabilities",
        //   "Managing large-scale LLM experiments and data collection"
        // ],
        // learnings: [
        //   "Academic research methodologies and collaboration",
        //   "Advanced LLM architecture and behavior analysis",
        //   "Scientific writing and publication processes"
        // ]
      },
      4: {
        fullDescription: "High-performance RESTful API system built with Java Spring Boot, achieving a 50% reduction in request latency through optimized architecture and secure JWT authentication implementation.",
        features: [
          "Java Spring Boot framework for enterprise-grade performance",
          "JWT-based stateless authentication system",
          "Optimized database queries and connection pooling",
          "Comprehensive API documentation and testing",
          "PostgreSQL integration with advanced indexing"
        ],
        challenges: [
          "Achieving 50% latency reduction while maintaining reliability",
          "Implementing secure stateless authentication at scale",
          "Optimizing database performance for high-throughput scenarios"
        ],
        learnings: [
          "Enterprise Java development best practices",
          "Advanced Spring Security configuration",
          "Database optimization and performance tuning"
        ]
      }
    };

    return details[project.id] || {
      fullDescription: project.description,
      features: [],
      challenges: [],
      learnings: []
    };
  };

  const projectDetails = getProjectDetails(project);

  return (
    <div className="project-modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal-content">
        <button className="project-modal-close" onClick={onClose}>
          ×
        </button>
        
        <div className="project-modal-header">
          <img src={project.image} alt={project.title} className="project-modal-image" />
          <div className="project-modal-title-section">
            <h1 className="project-modal-title">{project.title}</h1>
            <div className="project-modal-links">
              {project.liveUrl && (
                <a href={project.liveUrl} className="project-modal-link live" target="_blank" rel="noopener noreferrer">
                  <span>↗</span> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} className="project-modal-link github" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="project-modal-body">
          <div className="project-modal-section">
            <h3 className="project-modal-section-title">Overview</h3>
            <p className="project-modal-description">{projectDetails.fullDescription}</p>
          </div>

          <div className="project-modal-section">
            <h3 className="project-modal-section-title">Tech Stack</h3>
            <div className="project-modal-tech-grid">
              {project.techStack.map((tech, index) => {
                const techMap: { [key: string]: string } = {
                  'React': 'react',
                  'TypeScript': 'ts',
                  'Python': 'python',
                  'PyQT': 'python',
                  'Demucs': 'python',
                  'FastAPI': 'fastapi',
                  'LangGraph': 'python',
                  'Next.js': 'nextjs',
                  'Prisma': 'prisma',
                  'Supabase': 'supabase',
                  'PyTorch': 'pytorch',
                  'Java': 'java',
                  'Spring Boot': 'spring',
                  'PostgreSQL': 'postgres',
                  'Node.js': 'nodejs',
                  'Express.js': 'express',
                  'MongoDB': 'mongodb'
                };
                
                const iconName = techMap[tech] || tech.toLowerCase();
                const iconUrl = `https://skillicons.dev/icons?i=${iconName}&theme=dark`;
                
                return (
                  <div key={index} className="project-modal-tech-item" title={tech}>
                    <img src={iconUrl} alt={tech} />
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {projectDetails.features.length > 0 && (
            <div className="project-modal-section">
              <h3 className="project-modal-section-title">Key Features</h3>
              <div className="project-modal-notes">
                {projectDetails.features.map((feature, index) => (
                  <div key={index} className="project-modal-note">
                    <span className="project-modal-note-bullet">•</span>
                    <span className="project-modal-note-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {projectDetails.challenges.length > 0 && (
            <div className="project-modal-section">
              <h3 className="project-modal-section-title">Challenges & Solutions</h3>
              <div className="project-modal-notes">
                {projectDetails.challenges.map((challenge, index) => (
                  <div key={index} className="project-modal-note">
                    <span className="project-modal-note-bullet">⚡</span>
                    <span className="project-modal-note-text">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {projectDetails.learnings.length > 0 && (
            <div className="project-modal-section">
              <h3 className="project-modal-section-title">Key Learnings</h3>
              <div className="project-modal-notes">
                {projectDetails.learnings.map((learning, index) => (
                  <div key={index} className="project-modal-note">
                    <span className="project-modal-note-bullet">💡</span>
                    <span className="project-modal-note-text">{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
