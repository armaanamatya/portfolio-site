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
    <div className="role">
      <div className="role-header">
        <div className="role-left">
          <h3>{title}</h3>
          <div className="company-info">
            <div className="company-logo">
              {logoUrl && <img src={logoUrl} alt={company} className="company-logo-img" />}
              <span className="company-logo-text">{company}</span>
            </div>
          </div>
        </div>
        <div className="role-right">
          <div className="role-period">{period}</div>
          <span className="location-tag">{location}</span>
        </div>
      </div>
      <p className="role-description">
        {description}
      </p>
      <div className="tech-stack">
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
            <div key={index} className="tech-icon">
              <img src={iconUrl} alt={tech} className="tech-icon-img" />
              <span className="tech-icon-text">{tech}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCard;
