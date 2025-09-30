import './ExperienceCard.css';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  techStack: string[];
  logoUrl?: string;
}

function ExperienceCard({ 
  title, 
  company, 
  location, 
  period, 
  description, 
  techStack,
  logoUrl 
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <div className="experience-card-header">
        <div className="experience-card-left">
          <h3>{title}</h3>
          <div className="experience-company-info">
            <div className="experience-company-logo">
              {logoUrl && <img src={logoUrl} alt={company} className="experience-company-logo-img" />}
              <span className="experience-company-logo-text">{company}</span>
            </div>
          </div>
        </div>
        <div className="experience-card-right">
          <div className="experience-period">{period}</div>
          <span className="experience-location-tag">{location}</span>
        </div>
      </div>
      <p className="experience-description">
        {description}
      </p>
      <div className="experience-tech-stack">
        {techStack.map((tech, index) => {
          const techMap: { [key: string]: string } = {
            'React': 'react',
            'TS': 'ts',
            'TypeScript': 'ts', 
            'Python': 'python',
            'AI': 'tensorflow',
            'ML': 'pytorch',
            'LLM': 'pytorch',
            'Research': 'python',
            'Next.js': 'nextjs',
            'Prisma': 'prisma',
            'Supabase': 'supabase',
            'BERT': 'pytorch',
            'NLP': 'python',
            'Java': 'java',
            'Spring': 'spring',
            'JWT': 'spring',
            'API': 'fastapi',
            'LangGraph': 'langgraph',
            "postman": "postman",
            "fastapi": "fastapi",
            "postgres": "postgres",
            "spring": "spring",
            "jwt": "jwt",
            "api": "api",
            "langgraph": "langgraph",
          };
          
          const iconName = techMap[tech] || tech.toLowerCase();
          const iconUrl = `https://skillicons.dev/icons?i=${iconName}&theme=dark`;
          
          return (
            <div key={index} className="experience-tech-icon" title={tech}>
              <img src={iconUrl} alt={tech} className="experience-tech-icon-img" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCard;
