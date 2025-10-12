import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">Sobre mí</h2>
        <p className="about-intro">
          ¡Hola! Soy <span className="highlight">Yusleidy Gamboa</span>, FullStack Developer.
        </p>
        <p className="about-description">
          Desarrolladora FullStack con experiencia en{" "}
          <span className="emphasis">Java, Spring Boot, WebFlux y microservicios</span>. 
          Aplico principios de <span className="emphasis">Clean Code</span> y{" "}
          <span className="emphasis">SOLID</span>, desarrollo{" "}
          <span className="emphasis">APIs REST</span>, manejo bases de datos{" "}
          <span className="emphasis">SQL</span>, despliegue en{" "}
          <span className="emphasis">AWS</span> y trabajo con frameworks como{" "}
          <span className="emphasis">Angular</span> y{" "}
          <span className="emphasis">Laravel</span>, y con bibliotecas como{" "}
          <span className="emphasis">React</span>. 
          He trabajado en equipos multidisciplinarios bajo metodología{" "}
          <span className="emphasis">Scrum</span> y destaco por mis habilidades blandas, 
          como la comunicación, el trabajo en equipo y la adaptabilidad.
        </p>
      </div>
    </section>
  );
};

export default About;
