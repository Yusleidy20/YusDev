import React from "react";
import "./Projects.css";
import proyecto1 from "../assets/proyecto1.png"; // tu imagen de proyecto
import proyecto2 from "../assets/proyecto2.png";
import proyecto3 from "../assets/proyecto3.png";

const Projects: React.FC = () => {
  const proyectos = [
    {
      id: 1,
      title: "Sitio Web Portfolio",
      description: "Portfolio personal minimalista desarrollado con React y CSS moderno.",
      image: proyecto1,
      link: "#",
    },
    {
      id: 2,
      title: "E-commerce",
      description: "Plataforma de compras online con carrito y pasarela de pago.",
      image: proyecto2,
      link: "#",
    },
    {
      id: 3,
      title: "Blog Personal",
      description: "Blog desarrollado en React con sistema de posts y comentarios.",
      image: proyecto3,
      link: "#",
    },
  ];

  return (
    <section className="projects" id="proyectos">
      <h2 className="projects-title">Proyectos</h2>
      <p className="projects-subtitle">Estos son algunos de mis trabajos recientes:</p>

      <div className="projects-grid">
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} className="project-card">
            <img src={proyecto.image} alt={proyecto.title} className="project-image" />
            <h3 className="project-title">{proyecto.title}</h3>
            <p className="project-description">{proyecto.description}</p>
            <a href={proyecto.link} className="project-button">
              Ver proyecto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
