import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO — ahora accesible */}
        <button
          className="navbar-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Ir al inicio"
        >
          <img src={logo} alt="YusDev Logo" className="logo-img" />
        </button>

        {/* MENÚ PRINCIPAL */}
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              Sobre mí
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contacto
            </a>
          </li>
        </ul>

        {/* ICONOS REDES */}
        <div className="navbar-social">
          <a
            href="https://www.linkedin.com/in/yusleidy-gamboa-914299196/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/Yusleidy20"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          className="navbar-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir o cerrar menú"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
