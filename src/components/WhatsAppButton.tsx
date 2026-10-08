import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => (
  <a
    className="whatsapp-button"
    href="https://wa.me/573212684025?text=Hola%20YusDev%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web."
    target="_blank"
    rel="noreferrer"
    aria-label="Cotizar una página web por WhatsApp"
    title="Cotiza por WhatsApp"
  >
    <FaWhatsapp size={27} aria-hidden="true" />
  </a>
);

export default WhatsAppButton;
