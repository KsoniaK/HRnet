import React from "react";
import "../assets/style/modal.css";


function Modal({ isOpen, onClose, children }) {
  // Ne rien afficher si la modale est fermée
  if (!isOpen) return null; 

  return (
    <div className="overlay">
      <div className="modal">
        <button className="closeBtn" onClick={onClose}>x</button>
        {children}
      </div>
    </div>
  );
}
export default Modal;