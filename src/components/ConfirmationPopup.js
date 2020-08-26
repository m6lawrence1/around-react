import React from 'react';
import PopupWithForm from './PopupWithForm';

function ConfirmationPopup(props) {

    function handleSubmit(evt) {
        // Prevent the browser from navigating to the form address
        evt.preventDefault();
        // Pass the values of the managed components to the external handler
        props.onConfirmation(props.confirmSelectedCard);
    }
    
    return (
        <PopupWithForm 
            name="delete" 
            title="Are you sure?"
            submitBtnText="Yes"
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            onSubmit={handleSubmit} 
            >
        {props.card}
        </PopupWithForm>
    );

}

export default ConfirmationPopup;