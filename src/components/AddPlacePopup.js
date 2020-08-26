import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
    
    const title = React.useRef()
    const link = React.useRef();

    function handleSubmit(evt) {
        // Prevent the browser from navigating to the form address
        evt.preventDefault();
        // Pass the values of the managed components to the external handler
        props.onAddPlace({
            title: title.current.value,
            link: link.current.value,
        });
    }

    return (
        <PopupWithForm 
            name="add-place" 
            title="New place" 
            submitBtnText="Create"
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            onSubmit={handleSubmit}
            >
            <label className="form__field">
              <input className="form__input form__input_type_place-title" id="title-input" type="text" title="Title" name="name" placeholder="Title" minLength="2" maxLength="30" pattern="^[A-Za-z]+[A-Za-z -]{1,}" ref={title} required/>
              <span className="form__input-error form__input-error_active" id="title-input-error"></span> 
            </label>
            <label className="form__field">
              <input className="form__input form__input_type_url" type="url" id="url-input" title="Image Link" name="link" placeholder="Image link" ref={link} required/>
              <span className="form__input-error form__input-error_active" id="url-input-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;