import React from "react";
import "./Hero.css";
import perfil from "../assets/yus.png"; // tu foto profesional

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Texto */}
        <div className="hero-text">
          <h1 className="hero-title">
            ¡Hola! Soy <span className="highlight">Yus</span>
          </h1>
          <p className="hero-subtitle">
            Desarrolladora web que crea experiencias limpias, funcionales y modernas.
          </p>
          <p className="hero-subtitle">
            Me apasiona construir proyectos que resuelven problemas y dejan huella.
          </p>
          <a href="#proyectos" className="hero-button">
            Ver mis proyectos
          </a>
        </div>

        {/* Imagen */}
        <div className="hero-image">
          <img src={perfil} alt="Foto de Yus" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
