import InfoCard from './InfoCard';

interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  iconUrl: string;
  details?: string[];
  techStack?: string[];
  companyUrl?: string;
}

function Certificates() {
  const certificates: Certificate[] = [
    {
      title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
      issuer: "Udemy",
      issueDate: "Aug 2025",
      iconUrl: "/udemy.jpg",
      companyUrl: "https://www.udemy.com/certificate/UC-4b12d3de-3368-427e-84f7-e0fd26f3d79a/"
    },
    {
      title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
      issuer: "Udemy",
      issueDate: "Jul 2025",
      iconUrl: "/udemy.jpg",
      companyUrl: "https://www.udemy.com/certificate/UC-afdb1f34-f12c-4ede-80b6-ac1c9787c4be/"
    },
    {
      title: "Convolutional Neural Networks",
      issuer: "DeepLearning.AI",
      issueDate: "Jul 2024",
      iconUrl: "https://skillicons.dev/icons?i=tensorflow&theme=dark",
      companyUrl: "#"
    }
  ];

  return (
    <div className="certificates-section">
      <h2 className="section-title">Certificates</h2>
      <div className="certificates-list">
        {certificates.map((cert, index) => (
          <InfoCard
            key={index}
            title={cert.title}
            subtitle={cert.issuer}
            period={cert.issueDate}
            iconUrl={cert.iconUrl}
            companyUrl={cert.companyUrl}
            isExpandable={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
