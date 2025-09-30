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
        { name: "C", icon: "c" },
        { name: "C++", icon: "cpp" },
        { name: "Java", icon: "java" },
        { name: "JavaScript", icon: "js" },
        { name: "TypeScript", icon: "ts" },
        { name: "SQL", icon: "mysql" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "Sass", icon: "sass" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "React", icon: "react" },
        { name: "Angular", icon: "angular" },
        { name: "jQuery", icon: "jquery" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Vite", icon: "vite" },
        { name: "Material UI", icon: "materialui" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "Spring", icon: "spring" },
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
        { name: "PostgreSQL", icon: "postgres" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Supabase", icon: "supabase" },
        { name: "Redis", icon: "redis" }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: "docker" },
        { name: "Linux", icon: "linux" },
        { name: "Cloudflare", icon: "cloudflare" },
        { name: "Postman", icon: "postman" },
        { name: "Git", icon: "git" },
        { name: "GitHub Actions", icon: "githubactions" }
      ]
    },
    {
      title: "Cloud",
      skills: [
        { name: "Google Cloud", icon: "gcp" },
        { name: "AWS", icon: "aws" }
      ]
    }
  ];

  return (
    <div className="skills-section">
      <h2 className="section-title">SKILLS</h2>      
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
