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
      degree: "Bachelor's Degree of Computer Science",
      period: "Aug 2024 - Dec 2025",
      iconUrl: "/uh.jpg",
      techStack: ["Data Structures & Algorithms", "Database Systems", "Software Engineering", "Machine Learning", "Computer Networks", "Operating Systems"],
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
            companyUrl={item.companyUrl}
            isCurrent={item.isCurrent}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;
