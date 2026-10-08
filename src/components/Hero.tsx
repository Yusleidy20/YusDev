import React from "react";
import { FiArrowDown, FiArrowUpRight, FiCheck, FiMessageCircle } from "react-icons/fi";

const Hero: React.FC = () => (
  <section className="hero" id="inicio">
    <div className="hero-inner">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Diseño web para negocios con visión</p>
        <h1>Tu negocio merece una web que <span>atraiga clientes.</span></h1>
        <p className="hero-description">
          Creamos páginas profesionales, rápidas y pensadas para convertir visitas
          en conversaciones. Tú conoces tu negocio; nosotros te ayudamos a mostrarlo
          con claridad en internet.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="https://wa.me/573212684025?text=Hola%20YusDev%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web."
            target="_blank"
            rel="noreferrer"
          >
            <FiMessageCircle aria-hidden="true" /> Cotiza gratis por WhatsApp
          </a>
          <a className="button button-outline" href="#planes">
            Ver servicios y planes <FiArrowDown aria-hidden="true" />
          </a>
        </div>
        <div className="hero-reassurance">
          <FiCheck aria-hidden="true" /> Atención directa <span /> Cotización sin costo
        </div>
      </div>

      <div className="hero-art" aria-label="Vista ilustrativa de una página web para negocios">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-floating-note"><span className="note-icon"><FiMessageCircle /></span><span><b>Tu negocio,</b><small>siempre a un clic</small></span></div>
        <div className="browser-card">
          <div className="browser-bar"><span /><span /><span /><b>tunegocio.com</b></div>
          <div className="browser-content">
            <div className="browser-nav"><i /><span>Inicio&nbsp;&nbsp; Servicios&nbsp;&nbsp; Contacto</span><em /></div>
            <div className="browser-main">
              <span className="browser-kicker">HECHO PARA CRECER</span>
              <span className="browser-heading">Tu gran idea<br />merece ser vista.</span>
              <span className="browser-copy">Una presencia digital clara para conectar con más clientes.</span>
              <span className="browser-cta">Hablemos de tu proyecto <FiArrowUpRight /></span>
              <div className="browser-graphic"><span /><span /><span /></div>
            </div>
          </div>
        </div>
        <div className="hero-floating-badge"><span><FiCheck /></span> Lista para celular</div>
        <div className="hero-art-caption">Una web que habla el idioma de tus clientes</div>
      </div>
    </div>
  </section>
);

export default Hero;
