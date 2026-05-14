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
            <span className="category-title-flow">{category.title}&nbsp;&nbsp;</span>
            <span className="skills-plain-text">{category.skills.join(', ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
