import './Skills.css';
import { revealDelayStyle } from '../utils/reveal';

interface SkillCategory {
  title: string;
  skills: string[];
}

function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: ['Python', 'TypeScript', 'C++']
    },
    {
      title: "Frameworks & Libraries",
      skills: ['Next.js', 'FastAPI', 'PyTorch']
    },
    {
      title: "Infrastructure & DBs",
      skills: ['PostgreSQL', 'Docker', 'AWS', 'Google Cloud']
    }
  ];

  return (
    <div className="skills-section">
      <h2 className="section-title" data-reveal="inline">my tool stack</h2>
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
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="skill-chip-flow"
                  data-reveal="micro"
                  style={revealDelayStyle(110 + categoryIndex * 80 + skillIndex * 45)}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
