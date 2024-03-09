import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, content, actions }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" data-testid="modal-backdrop" onClick={onClose}>
      <div className="modal-content" data-testid="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button onClick={onClose} className="modal-close-button">&times;</button>
        </div>
        <div className="modal-body">{content}</div>
        <div className="modal-footer">{actions}</div>
      </div>
    </div>
  );
};

export default Modal;
