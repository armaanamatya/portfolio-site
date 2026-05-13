import './Skills.css';
import { revealDelayStyle } from '../utils/reveal';

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
        { name: "TypeScript", icon: "ts" },
        { name: "C++", icon: "cpp" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Next.js", icon: "nextjs" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "PyTorch", icon: "pytorch" }
      ]
    },
    {
      title: "Infrastructure & DBs",
      skills: [
        { name: "PostgreSQL", icon: "postgres" },
        { name: "Docker", icon: "docker" },
        { name: "AWS", icon: "aws" },
        { name: "Google Cloud", icon: "gcp" }
      ]
    }
  ];

  return (
    <div className="skills-section">
      <h2 className="section-title" data-reveal="inline">What I Use Mostly</h2>      
      <div className="skills-flow">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="skill-category-flow"
            data-reveal="card"
            style={revealDelayStyle(50 + categoryIndex * 80)}
          >
            <h3 className="category-title-flow">{category.title}</h3>
            <div className="skills-icons-flow">
              {category.skills.map((skill, skillIndex) => {
                const iconUrl = `https://skillicons.dev/icons?i=${skill.icon}&theme=dark`;
                return (
                  <div
                    key={skillIndex}
                    className="skill-icon-flow"
                    title={skill.name}
                    data-reveal="micro"
                    style={revealDelayStyle(110 + categoryIndex * 80 + skillIndex * 45)}
                  >
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
