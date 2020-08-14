import React from 'react';

function ImagePopup(props) {
    
    function handleOverlayClick(evt) {
        if (evt.target.classList.contains('popup')) {
          props.onClose();
        }
      }

    return (
        <div className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`} onClick={handleOverlayClick}>
          <div className="popup__container popup__container_type_image">
            <button className="popup__close-button" onClick={props.onClose}></button>
            <img className="popup__image" src={props.card ? props.card.link : ''} alt={props.card ?  props.card.name : ''}/>
            <p className="popup__image-label">{props.card ? props.card.name : ''}</p>
          </div>
        </div>
    );
}

export default ImagePopup;