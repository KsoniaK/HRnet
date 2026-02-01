import React from "react";
import "../assets/style/modal.css";


function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Ne rien afficher si la modale est fermée

  return (
    <div className="overlay">
      <div className="modal">
        <button className="closeBtn" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
}
export default Modal;