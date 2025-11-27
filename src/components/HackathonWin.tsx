import { useState } from 'react';
import './HackathonWin.css';

interface HackathonWinProps {
  title: string;
  eventName: string;
  location: string;
  date: string;
  prize: string;
  description: string[];
  techStack: string[];
  logoUrl?: string;
  projectUrl?: string;
  devpostUrl?: string;
}

function HackathonWin({ 
  title, 
  eventName, 
  location,
  date, 
  prize,
  description,
  techStack,
  logoUrl,
  projectUrl,
  devpostUrl
}: HackathonWinProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="hackathon-card">
      <div className="hackathon-card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="hackathon-card-left">
          <div className="hackathon-card-logo">
            {logoUrl && <img src={logoUrl} alt={eventName} className="hackathon-logo-img" />}
          </div>
          <div className="hackathon-card-info">
            <div className="hackathon-header">
              <h3 className="hackathon-event">{eventName}</h3>
              <div className="prize-tag">{prize}</div>
            </div>
            <div className="hackathon-title">{title}</div>
            <div className="click-details">Click to see details</div>
          </div>
        </div>
        <div className="hackathon-card-right">
          <div className="hackathon-date">{date}</div>
          <div className="expand-arrow" style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            <svg viewBox="0 0 12 12" fill="currentColor">
              <path d="M4.5 2L8 6l-3.5 4V2z" />
            </svg>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="hackathon-details">
          <div className="hackathon-description">
            <ul>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="tech-stack">
            {techStack.map((tech, index) => {
              // Filter out generic terms and map to skillicon names
              const skillIconMap: { [key: string]: string } = {
                'React': 'react',
                'TypeScript': 'ts',
                'JavaScript': 'js',
                'Python': 'python',
                'FastAPI': 'fastapi',
                'Next.js': 'nextjs',
                'Prisma': 'prisma',
                'Supabase': 'supabase',
                'Node.js': 'nodejs',
                'Java': 'java',
                'Spring Boot': 'spring',
                'MySQL': 'mysql',
                'Redis': 'redis',
                'PyTorch': 'pytorch',
                'TensorFlow': 'tensorflow',
                'Flask': 'flask',
                'Express': 'express',
                'MongoDB': 'mongodb',
                'PostgreSQL': 'postgres',
                'Docker': 'docker',
                'AWS': 'aws',
                'GCP': 'gcp',
                'Firebase': 'firebase'
              };

              const iconName = skillIconMap[tech];
              
              // Skip generic terms
              const genericTerms = ['AI', 'ML', 'NLP', 'BERT', 'LLM', 'Research', 'WebSocket', 'LangGraph', 'REST API'];
              if (genericTerms.includes(tech) || !iconName) {
                return null;
              }

              const iconUrl = `https://skillicons.dev/icons?i=${iconName}&theme=dark`;
              
              return (
                <div key={index} className="tech-icon" title={tech}>
                  <img src={iconUrl} alt={tech} />
                </div>
              );
            })}
          </div>
          
          <div className="hackathon-links">
            {projectUrl && (
              <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="hackathon-btn">
                <svg className="external-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                  <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                View Project
              </a>
            )}
            {devpostUrl && (
              <a href={devpostUrl} target="_blank" rel="noopener noreferrer" className="hackathon-btn">
                <svg className="external-icon" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                  <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                </svg>
                View on Devpost
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default HackathonWin;