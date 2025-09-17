import React from "react";
import SuperHero from "../assets/Images/SuperHero.jpg";
import "./Modal.css";

export default function Modal({ title, children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(244,244,249,0.85)), url(${SuperHero}) center/cover no-repeat`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2> {title}</h2>}
        <div className="modal-body">{children}</div>

        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
