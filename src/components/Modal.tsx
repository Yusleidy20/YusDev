import React, { useEffect, useRef } from "react";
import "../components/Modal.css";

interface ModalProps {
  message: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Abre el modal cuando se monta el componente
  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    // Cerrar con tecla Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      dialog?.close();
    };
  }, [onClose]);

  return (
    <dialog ref={dialogRef} className="modal-dialog">
      <p>{message}</p>
      <button className="modal-close" onClick={onClose}>
        Cerrar
      </button>
    </dialog>
  );
};

export default Modal;
