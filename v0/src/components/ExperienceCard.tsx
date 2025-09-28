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
        {techStack.map((tech, index) => (
          <span key={index} className="tech-icon">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
