import './ProjectSlider.css';
import { revealDelayStyle } from '../utils/reveal';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const PLACEHOLDER_IMAGE = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjMDAwMDAwIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBjb21pbmcgc29vbjwvdGV4dD4KPC9zdmc+";

const projects: Project[] = [
  {
    id: 1,
    title: "Qie",
    description: "An alternative to FL Studio. A full-fledged music production software designed for modern creators.",
    image: "/qieimg.png",
    techStack: ['Python', 'PyQT', 'Demucs'],
    liveUrl: "https://diannao.gumroad.com/"
  },
  {
    id: 4,
    title: "OpenApplier",
    description: "jobs automated while you sleep",
    image: PLACEHOLDER_IMAGE,
    techStack: ['TypeScript', 'Next.js', 'Python'],
    liveUrl: "https://example.com/openapplier",
    githubUrl: "https://github.com/armaanamatya/openapplier"
  },
  {
    id: 5,
    title: "Mixed-Precision GEMM in Triton",
    description: "squeezing teraflops — custom tiled FP16 GEMM kernel, fully autotuned and benched across RTX and RX hardware",
    image: PLACEHOLDER_IMAGE,
    techStack: ['OpenAI Triton', 'CUDA', 'Python', 'PyTorch', 'Nsight Compute'],
    githubUrl: "https://github.com/armaanamatya/GEMM"
  },
  {
    id: 6,
    title: "Real-Time Distributed Keyword Spotting",
    description: "mission-critical distributed AI — three-node inference pipeline hitting a hard 150ms deadline for emergency voice commands",
    image: PLACEHOLDER_IMAGE,
    techStack: ['Python', 'PyTorch', 'Wav2Vec2', 'CUDA', 'VxWorks', 'UDP'],
    githubUrl: "https://github.com/armaanamatya/realtimedist-pipeline"
  }
];

function ProjectSlider() {
  return (
    <div className="projects-section-simple">
      <h2 className="section-title" data-reveal="inline">my projects</h2>
      <div className="projects-flow">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-list-flow"
            data-reveal="card"
            style={revealDelayStyle(50 + index * 80)}
          >
            <span className="project-title-flow">{project.title}&nbsp;&nbsp;</span>
            <span className="project-desc-flow">
              — {project.description} [{project.techStack.join(', ')}]
              {(project.liveUrl || project.githubUrl) && (
                <span className="project-links-flow">
                  &nbsp;•&nbsp;
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-text-link">Site</a>
                  )}
                  {project.liveUrl && project.githubUrl && ' | '}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-text-link">Source</a>
                  )}
                </span>
              )}
            </span>
          </div>
        ))}
        
      </div>
    </div>
  );
}

export default ProjectSlider;
