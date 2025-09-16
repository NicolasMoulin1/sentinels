import React from "react";
import "./Modal.css";

export default function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()} // Empêche fermeture si clic dans la modale
      >
        {title && <h2>{title}</h2>}
        <div className="modal-body">{children}</div>

        <div className="modal-actions">
          <button className="btn secondary" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
