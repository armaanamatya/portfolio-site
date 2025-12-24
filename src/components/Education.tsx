import InfoCard from './InfoCard';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  iconUrl: string;
  details?: string[];
  techStack?: string[];
  companyUrl?: string;
  isCurrent?: boolean;
}

function Education() {
  const educationItems: EducationItem[] = [
    {
      institution: "University of Houston",
      degree: "Bachelor's of Science in Computer Science and Mathematics",
      period: "Aug 2024 - Dec 2026",
      iconUrl: "/uh.jpg",
      techStack: ["Data Structures & Algorithms", "Algorithm Analysis", "Database Systems", "Software Engineering", "Machine Learning", "Deep Learning", "Computer Networks", "Operating Systems", "Real-Time Embedded Systems", "Computer Vision"],
      isCurrent: true
    }
  ];

  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-list">
        {educationItems.map((item, index) => (
          <InfoCard
            key={index}
            title={item.institution}
            subtitle={item.degree}
            period={item.period}
            iconUrl={item.iconUrl}
            details={item.details}
            techStack={item.techStack}
            techStackTitle="Relevant Coursework"
            companyUrl={item.companyUrl}
            isCurrent={item.isCurrent}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;
