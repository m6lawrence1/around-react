import React from 'react';
import ReactDOM from "react-dom";

function PopupWithForm(props) {
    
    function handleOverlayClick(evt) {
        if (evt.target.classList.contains('popup')) {
          props.onClose();
        }
      }
    
    const popup = (
    <div onClick={handleOverlayClick} className={`popup popup_type_avatar ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button className="popup__close-button" onClick={props.onClose}></button>
        <h2 className="popup__title">Change profile picture</h2>
        {props.children}
      </div>
    </div>
    )
  return ReactDOM.createPortal(
     popup, document.getElementById("modal-root")
  );
}


export default PopupWithForm;


