import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FiArrowUpRight, FiCheck, FiMessageCircle, FiShield } from "react-icons/fi";
import Modal from "../components/Modal";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: `Tipo de proyecto: ${formData.projectType || "Por definir"}\n\n${formData.message}`,
    };

    try {
      await emailjs.send(
        "service_ppqzchb",
        "template_ti5sfl7",
        templateParams,
        "QcKd_DtnT5e7cBxV9"
      );
      setModalMessage(`¡Gracias, ${formData.name}! Recibimos tu solicitud y pronto nos pondremos en contacto.`);
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      console.error("Error al enviar la solicitud de cotización:", error);
      setModalMessage("No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos directamente por WhatsApp.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" id="contacto">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Cotización gratuita</p>
          <h2>Cuéntanos qué quieres lograr con tu web.</h2>
          <p>
            Completa el formulario y conversemos sobre la mejor solución para tu negocio.
            Sin compromiso y en palabras claras.
          </p>
          <div className="contact-direct-link">
            <span><FiCheck aria-hidden="true" /></span>
            <span><small>No necesitas tener todo definido</small><b>Te ayudamos a ordenar tu idea</b></span>
            <FiShield aria-hidden="true" />
          </div>
          <a
            className="contact-direct-link"
            href="https://wa.me/573212684025?text=Hola%20YusDev%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web."
            target="_blank"
            rel="noreferrer"
          >
            <span><FiMessageCircle aria-hidden="true" /></span>
            <span><small>Respuesta directa por WhatsApp</small><b>Hablemos de tu proyecto</b></span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <h3>Empecemos por aquí</h3>
            <p>Te responderemos para conocer un poco más sobre tu idea.</p>
          </div>
          <label htmlFor="contact-name">Tu nombre</label>
          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="¿Cómo te llamas?"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="contact-email">Correo electrónico</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="tunombre@correo.com"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="project-type">¿Qué tipo de página necesitas?</label>
          <select id="project-type" name="projectType" value={formData.projectType} onChange={handleChange}>
            <option value="">Aún no lo tengo claro</option>
            <option value="Web para mi negocio">Web para mi negocio</option>
            <option value="Landing page">Landing page</option>
            <option value="Tienda en línea">Tienda en línea</option>
            <option value="Rediseño o mantenimiento">Rediseño o mantenimiento</option>
            <option value="Otro proyecto">Otro proyecto</option>
          </select>
          <label htmlFor="project-message">Cuéntanos sobre tu proyecto</label>
          <textarea
            id="project-message"
            name="message"
            placeholder="¿A qué se dedica tu negocio y qué te gustaría conseguir?"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="button button-primary contact-submit" disabled={isSending}>
            {isSending ? "Enviando solicitud..." : "Solicitar mi cotización gratis"}
            {!isSending && <FiArrowUpRight aria-hidden="true" />}
          </button>
          <small className="form-privacy">Usaremos tus datos únicamente para responder a tu solicitud.</small>
        </form>
      </div>
      {modalMessage && <Modal message={modalMessage} onClose={() => setModalMessage(null)} />}
    </section>
  );
};

export default Contact;
