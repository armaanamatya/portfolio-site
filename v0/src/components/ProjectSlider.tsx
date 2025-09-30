import { useState } from 'react';
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
  {
    id: 1,
    title: "AI Data Analysis Platform",
    description: "Agentic AI-powered data analysis platform with multi-node LangGraph architecture and real-time WebSocket updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    techStack: ['React', 'TypeScript', 'Python', 'FastAPI', 'LangGraph'],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "MyMCAT.ai Platform",
    description: "AI-based education platform serving 1,000+ students with personalized MCAT preparation and analytics.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'Supabase'],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "LLM Research Paper",
    description: "Collaborative research on Large Language Models and agentic capabilities with Stanford, Berkeley, and Vanderbilt researchers.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    techStack: ['Python', 'PyTorch', 'Transformers', 'Research'],
    githubUrl: "#"
  },
  {
    id: 4,
    title: "RESTful API System",
    description: "High-performance RESTful APIs with Java Spring Boot, reducing request latency by 50% with JWT authentication.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    techStack: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL'],
    githubUrl: "#"
  },
  {
    id: 5,
    title: "E-Commerce Dashboard",
    description: "Modern e-commerce analytics dashboard with real-time sales tracking and inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    techStack: ['Vue.js', 'Node.js', 'MongoDB', 'Chart.js'],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans, progress monitoring, and social features.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
    techStack: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 7,
    title: "Blockchain Voting System",
    description: "Secure decentralized voting platform using smart contracts and cryptographic verification.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=250&fit=crop",
    techStack: ['Solidity', 'Web3.js', 'Ethereum', 'React'],
    githubUrl: "#"
  },
  {
    id: 8,
    title: "Weather Prediction ML",
    description: "Machine learning model for accurate weather forecasting using historical climate data and neural networks.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    techStack: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
    githubUrl: "#"
  },
  {
    id: 9,
    title: "Social Media Scheduler",
    description: "Automated social media management tool with content scheduling, analytics, and multi-platform posting.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    techStack: ['Angular', 'Express.js', 'PostgreSQL', 'Redis'],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 10,
    title: "IoT Smart Home Hub",
    description: "Centralized IoT device management system with voice control, automation rules, and energy monitoring.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
    techStack: ['Python', 'Raspberry Pi', 'MQTT', 'Flutter'],
    liveUrl: "#",
    githubUrl: "#"
  }
];

function ProjectSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardsPerView = 3;

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
                <p className="project-description-compact">{project.description}</p>
                <div className="project-bottom">
                  <div className="project-tech-compact">
                    {project.techStack.slice(0, 4).map((tech, index) => {
                      const techMap: { [key: string]: string } = {
                        'React': 'react',
                        'TypeScript': 'ts',
                        'Python': 'python',
                        'FastAPI': 'fastapi',
                        'LangGraph': 'python',
                        'Next.js': 'nextjs',
                        'Prisma': 'prisma',
                        'Supabase': 'supabase',
                        'PyTorch': 'pytorch',
                        'Transformers': 'pytorch',
                        'Research': 'python',
                        'Java': 'java',
                        'Spring Boot': 'spring',
                        'JWT': 'spring',
                        'PostgreSQL': 'postgres'
                      };
                      
                      const iconName = techMap[tech] || tech.toLowerCase();
                      const iconUrl = `https://skillicons.dev/icons?i=${iconName}&theme=dark`;
                      
                      return (
                        <div key={index} className="project-tech-icon-compact" title={tech}>
                          <img src={iconUrl} alt={tech} />
                        </div>
                      );
                    })}
                    {project.techStack.length > 4 && (
                      <div className="project-tech-more">+{project.techStack.length - 4}</div>
                    )}
                  </div>
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