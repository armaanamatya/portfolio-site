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
  logoUrl 
}: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <div className="experience-card-main">
        <div className="experience-card-logo">
          {logoUrl && <img src={logoUrl} alt={company} className="experience-logo-img" title={company} />}
        </div>
        <div className="experience-card-content">
          <div className="experience-card-info">
            <h3 className="experience-title">{title}</h3>
            <div className="experience-company">{company}</div>
          </div>
          <div className="experience-card-right">
            <div className="experience-period">{period}</div>
            <div className="experience-location">{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
