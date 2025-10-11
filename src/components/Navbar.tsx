import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Iconos

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="YusDev Logo" className="logo-img" />
        </div>

        {/* Menú */}
        <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <li>Inicio</li>
          <li>Sobre mí</li>
          <li>Proyectos</li>
          <li>Habilidades</li>
          <li>Contacto</li>
        </ul>

        {/* Iconos de redes */}
        <div className="navbar-social">
          <a
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="navbar-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
