import React, { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Modal from "../components/Modal";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = "service_ppqzchb";
    const templateID = "template_ti5sfl7";
    const publicKey = "QcKd_DtnT5e7cBxV9"; // tu Public Key (no el private key)

    // 🔹 Los datos que se enviarán al template
    const templateParams = {
      name: formData.name || "Sin nombre",
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setModalMessage(`✅ Tu mensaje fue enviado correctamente, ${formData.name || "gracias"}.`);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setModalMessage("❌ Error al enviar el mensaje. Intenta de nuevo más tarde.");
    }
  };

  const closeModal = () => setModalMessage(null);

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

      {modalMessage && <Modal message={modalMessage} onClose={closeModal} />}
    </section>
  );
};

export default Contact;
