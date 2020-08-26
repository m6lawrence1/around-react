import React from 'react';
import ReactDOM from "react-dom";

function PopupWithForm(props) {
    
    function handleOverlayClick(evt) {
        if (evt.target.classList.contains('popup')) {
          props.onClose();
        }
      }
    
    
    
    const popup = (
    <div onClick={handleOverlayClick} className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup__container ${props.name === 'delete' ? 'popup__container_type_confirmation' : ''}`}>
        <button className="popup__close-button" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form action="#" className="form" name={props.name} onSubmit={props.onSubmit} noValidate>
            {props.children}
            <button type="submit" className="form__submit-button">{props.submitBtnText}</button>
        </form>
      </div>
    </div>
    )
    return ReactDOM.createPortal(
         popup, document.getElementById("modal-root")
    );
}


export default PopupWithForm;


