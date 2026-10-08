import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navigation = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#planes", label: "Planes" },
  { href: "#proyectos", label: "Proyectos" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegación principal">
        <a className="navbar-brand" href="#inicio" onClick={() => setMenuOpen(false)} aria-label="YusDev, ir al inicio">
          YusDev<span>.</span>
        </a>
        <button
          className="navbar-toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        <div className={`navbar-links${menuOpen ? " is-open" : ""}`} id="main-navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="navbar-cta" href="#contacto" onClick={() => setMenuOpen(false)}>Hablemos <span>↗</span></a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
