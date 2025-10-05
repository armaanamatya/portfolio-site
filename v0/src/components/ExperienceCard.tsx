import { useState } from 'react';
import './ExperienceCard.css';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techStack: string[];
  logoUrl?: string;
  isCurrent?: boolean;
  companyUrl?: string;
}

function ExperienceCard({ 
  title, 
  company, 
  // location, 
  period, 
  description,
  techStack,
  logoUrl,
  isCurrent,
  companyUrl
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="experience-card">
      <div className="experience-card-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="experience-card-left">
          <div className="experience-card-logo">
            {logoUrl && <img src={logoUrl} alt={company} className="experience-logo-img" />}
          </div>
          <div className="experience-card-info">
            <div className="company-header">
              <h3 className="experience-title">{company}</h3>
              {isCurrent && <div className="current-tag">Current</div>}
            </div>
            <div className="experience-company">{title}</div>
            <div className="click-details">Click to see details</div>
          </div>
        </div>
        <div className="experience-card-right">
          <div className="experience-period">{period}</div>
          <div className="expand-arrow" style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            <svg viewBox="0 0 12 12" fill="currentColor">
              <path d="M4.5 2L8 6l-3.5 4V2z" />
            </svg>
          </div>
        </div>
      </div>
      
      {isExpanded && (
        <div className="experience-details">
          <div className="experience-description">
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
                'scikit-learn': 'scikitlearn'
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
          
          {companyUrl && (
            <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="visit-company-btn">
              <svg className="external-icon" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
              </svg>
              Visit Company Site
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default ExperienceCard;
