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
      details: [
        "Pursuing Bachelor's degree in Computer Science with focus on full-stack development",
        "Completed coursework in Data Structures, Algorithms, Database Systems, and Software Engineering",
        "Maintained strong academic performance while working on real-world projects and internships",
        "Participated in coding competitions and hackathons to enhance practical skills"
      ],
      techStack: ["Computer Science", "Software Engineering", "Data Structures", "Algorithms"],
      companyUrl: "https://uh.edu",
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
