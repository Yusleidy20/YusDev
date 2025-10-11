import React from "react";
import "./Skills.css";

const Skills: React.FC = () => {
  const skills = [
    { name: "Java", level: 85, category: "Backend" },
    { name: "Spring Boot", level: 80, category: "Framework" },
    { name: "WebFlux", level: 70, category: "Framework / Reactive" },
    { name: "PHP", level: 75, category: "Backend" },
    { name: "MySQL", level: 80, category: "Base de datos" },
    { name: "Microservicios", level: 70, category: "Backend / Arquitectura" },
    { name: "AWS", level: 65, category: "Cloud" },
    { name: "React", level: 85, category: "Frontend / Framework" },
    { name: "Angular", level: 75, category: "Frontend / Framework" },
  ];

  return (
    <section className="skills" id="habilidades">
      <h2 className="skills-title">Habilidades</h2>
      <p className="skills-subtitle">
        Estas son algunas de mis competencias técnicas más destacadas:
      </p>

      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-category">{skill.category}</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
