import React from "react";
import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
  const phone = "573212684025";
  const message = "Hola Yus, necesito tus servicios!";

  const handleClick = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      <FaWhatsapp size={28} />
    </button>
  );
};

export default WhatsAppButton;
