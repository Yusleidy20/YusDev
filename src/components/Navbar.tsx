import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para abrir/cerrar menú

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo como imagen */}
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

        {/* Botón hamburguesa */}
        <button
          className="navbar-button"
          onClick={() => setMenuOpen(!menuOpen)} // Alterna el estado
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
