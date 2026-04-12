import './Skills.css';

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    icon: string;
  }>;
}

function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: "python" },
        { name: "C++", icon: "cpp" },
        { name: "TypeScript", icon: "ts" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "NestJS", icon: "nestjs" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Flask", icon: "flask" },
        { name: "Django", icon: "django" }
      ]
    },
    {
      title: "AI/ML",
      skills: [
        { name: "PyTorch", icon: "pytorch" },
        { name: "TensorFlow", icon: "tensorflow" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgres" },
        { name: "Redis", icon: "redis" }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: "docker" },
        { name: "Kubernetes", icon: "kubernetes" }
      ]
    },
    {
      title: "Cloud",
      skills: [
        { name: "AWS", icon: "aws" },
        { name: "Google Cloud", icon: "gcp" }
      ]
    }
  ];

  return (
    <div className="skills-section">
      <h2 className="section-title">WHAT I USE MOSTLY</h2>      
      <div className="skills-flow">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category-flow">
            <h3 className="category-title-flow">{category.title}</h3>
            <div className="skills-icons-flow">
              {category.skills.map((skill, skillIndex) => {
                const iconUrl = `https://skillicons.dev/icons?i=${skill.icon}&theme=dark`;
                return (
                  <div key={skillIndex} className="skill-icon-flow" title={skill.name}>
                    <img src={iconUrl} alt={skill.name} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
