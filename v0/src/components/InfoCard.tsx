import { useState } from 'react';
import './InfoCard.css';

interface InfoCardProps {
  title: string;
  subtitle: string;
  period: string;
  iconUrl?: string;
  details?: string[];
  techStack?: string[];
  companyUrl?: string;
  isCurrent?: boolean;
  isExpandable?: boolean;
}

function InfoCard({ 
  title, 
  subtitle, 
  period, 
  iconUrl,
  details,
  techStack,
  companyUrl,
  isCurrent,
  isExpandable = true
}: InfoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="info-card">
      <div 
        className="info-card-header" 
        onClick={isExpandable ? () => setIsExpanded(!isExpanded) : (companyUrl ? () => window.open(companyUrl, '_blank') : undefined)}
        style={{ cursor: (!isExpandable && companyUrl) ? 'pointer' : (isExpandable ? 'pointer' : 'default') }}
      >
        <div className="info-card-left">
          <div className="info-card-logo">
            {iconUrl && <img src={iconUrl} alt={title} className="info-logo-img" />}
          </div>
          <div className="info-card-info">
            <div className="company-header">
              <h3 className="info-title">
                {title}
                {companyUrl && (
                  <svg className="external-link-icon" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                    <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                  </svg>
                )}
              </h3>
              {isCurrent && <div className="current-tag">Current</div>}
            </div>
            <div className="info-subtitle">{subtitle}</div>
            {isExpandable && <div className="click-details">Click to see details</div>}
          </div>
        </div>
        <div className="info-card-right">
          <div className="info-period">{period}</div>
          {isExpandable && (
            <div className="expand-arrow" style={{ transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              <svg viewBox="0 0 12 12" fill="currentColor">
                <path d="M4.5 2L8 6l-3.5 4V2z" />
              </svg>
            </div>
          )}
        </div>
      </div>
      
      {isExpanded && (
        <div className="info-details">
          {details && details.length > 0 && (
            <div className="info-description">
              <ul>
                {details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          
          {techStack && techStack.length > 0 && (
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
          )}
          
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

export default InfoCard;
