interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  techStack: string[];
}

function ExperienceCard({ 
  title, 
  company, 
  location, 
  period, 
  description, 
  techStack 
}: ExperienceCardProps) {
  return (
    <div className="role">
      <div className="role-header">
        <h3>{title}</h3>
        <div className="company-info">
          <div className="company-logo">{company}</div>
          <span className="location-tag">{location}</span>
        </div>
      </div>
      <div className="role-period">{period}</div>
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
