import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias por tu mensaje, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
    // Aquí podrías integrar un servicio real como EmailJS o backend propio
  };

  return (
    <section className="contact" id="contacto">
      <h2 className="contact-title">Contacto</h2>
      <p className="contact-subtitle">
        ¡Hola! Envíame un mensaje y me pondré en contacto contigo.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="contact-submit">
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default Contact;
