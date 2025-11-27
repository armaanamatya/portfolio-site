import { useState } from 'react';
import './Hackathons.css';

interface MediaItem {
  type: 'image' | 'video';
  url: string;
  alt?: string;
}

interface HackathonProject {
  id: number;
  date: string;
  eventName: string;
  awards: string[];
  location: string;
  description: string;
  devpostUrl?: string;
  sourceUrl?: string;
  media?: MediaItem[];
  icon?: string;
}

interface HackathonsProps {
  hackathonsAttended: number;
  description: string;
  projects: HackathonProject[];
}

function Hackathons({ hackathonsAttended, description, projects }: HackathonsProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState<{ [key: number]: number }>({});

  const getCurrentMediaIndex = (projectId: number): number => {
    return currentMediaIndex[projectId] || 0;
  };

  const setCurrentMediaIndexForProject = (projectId: number, index: number) => {
    setCurrentMediaIndex((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  const nextMedia = (projectId: number, totalMedia: number) => {
    const current = getCurrentMediaIndex(projectId);
    setCurrentMediaIndexForProject(projectId, (current + 1) % totalMedia);
  };

  const prevMedia = (projectId: number, totalMedia: number) => {
    const current = getCurrentMediaIndex(projectId);
    setCurrentMediaIndexForProject(projectId, (current - 1 + totalMedia) % totalMedia);
  };

  return (
    <div className="hackathons-section" id="hackathons">
      <div className="hackathons-header">
        <div className="hackathons-tag">Hackathons</div>
        <h2 className="hackathons-title">
          <span className="title-part-black">I like</span>{' '}
          <span className="title-part-blue">building</span>{' '}
          <span className="title-part-purple">things</span>
        </h2>
        <p className="hackathons-description">
          {description.replace('+', hackathonsAttended.toString())}
        </p>
      </div>

      <div className="hackathons-timeline">
        {projects.map((project, index) => {
          const projectMedia = project.media || [];
          const currentMediaIdx = getCurrentMediaIndex(project.id);
          const hasMedia = projectMedia.length > 0;

          return (
            <div key={project.id} className="hackathon-timeline-item">
              <div className="timeline-line-container">
                {index < projects.length - 1 && <div className="timeline-line"></div>}
                <div className="timeline-icon">
                  {project.icon ? (
                    <img src={project.icon} alt={project.eventName} />
                  ) : (
                    <div className="timeline-icon-placeholder">
                      {project.eventName.charAt(0)}
                    </div>
                  )}
                </div>
              </div>
              <div className="hackathon-content-wrapper">
                <div className="hackathon-content">
                  <div className="hackathon-date">{project.date}</div>
                  <h3 className="hackathon-event-name">{project.eventName}</h3>
                  <div className="hackathon-awards">
                    {project.awards.map((award, awardIndex) => (
                      <span key={awardIndex} className="award-badge">
                        {award}
                      </span>
                    ))}
                  </div>
                  <div className="hackathon-location">{project.location}</div>
                  <p className="hackathon-project-description">{project.description}</p>
                  <div className="hackathon-links">
                    {project.devpostUrl && (
                      <a
                        href={project.devpostUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hackathon-link-btn devpost"
                      >
                        <svg className="link-icon play-icon" viewBox="0 0 16 16" fill="currentColor">
                          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                        </svg>
                        Devpost
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a
                        href={project.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hackathon-link-btn source"
                      >
                        <svg className="link-icon" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        Source
                      </a>
                    )}
                  </div>
                </div>

                {hasMedia && (
                  <div className="hackathon-media-slider">
                    <div className="media-slider-container">
                      {projectMedia.length > 1 && (
                        <button
                          className="media-slider-btn prev"
                          onClick={() => prevMedia(project.id, projectMedia.length)}
                          aria-label="Previous media"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                          </svg>
                        </button>
                      )}
                      <div className="hackathon-media-placeholder">
                        {projectMedia[currentMediaIdx]?.type === 'video' ? (
                          <video
                            src={projectMedia[currentMediaIdx].url}
                            controls
                            className="hackathon-video"
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : projectMedia[currentMediaIdx]?.type === 'image' ? (
                          <img
                            src={projectMedia[currentMediaIdx].url}
                            alt={projectMedia[currentMediaIdx].alt || project.eventName}
                            className="hackathon-image"
                          />
                        ) : (
                          <div className="hackathon-media-empty">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="media-placeholder-icon">
                              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                            </svg>
                          </div>
                        )}
                      </div>
                      {projectMedia.length > 1 && (
                        <button
                          className="media-slider-btn next"
                          onClick={() => nextMedia(project.id, projectMedia.length)}
                          aria-label="Next media"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                          </svg>
                        </button>
                      )}
                    </div>
                    {projectMedia.length > 1 && (
                      <div className="hackathon-media-pagination">
                        <span className="pagination-info">
                          {currentMediaIdx + 1}/{projectMedia.length}
                        </span>
                        <div className="pagination-dots">
                          {projectMedia.map((_, mediaIndex) => (
                            <button
                              key={mediaIndex}
                              className={`pagination-dot ${mediaIndex === currentMediaIdx ? 'active' : ''}`}
                              onClick={() => setCurrentMediaIndexForProject(project.id, mediaIndex)}
                              aria-label={`Go to media ${mediaIndex + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hackathons;

