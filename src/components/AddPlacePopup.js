import React, {useState} from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

    const [title, setTitle] = useState();
    const [link, setLink] = useState();

    function handleTitleChange(evt) {
        setTitle(evt.target.value);
    }

    function handleLinkChange(evt) {
        setLink(evt.target.value);
    }

    function handleSubmit(evt) {
        // Prevent the browser from navigating to the form address
        evt.preventDefault();
        // Pass the values of the managed components to the external handler
        props.onAddPlace({
            title: title,
            link: link,
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
              <input className="form__input form__input_type_place-title" id="title-input" type="text" title="Title" name="name" placeholder="Title" minLength="2" maxLength="30" pattern="^[A-Za-z]+[A-Za-z -]{1,}" value={title} onChange={handleTitleChange} required/>
              <span className="form__input-error form__input-error_active" id="title-input-error"></span> 
            </label>
            <label className="form__field">
              <input className="form__input form__input_type_url" type="url" id="url-input" title="Image Link" name="link" placeholder="Image link" value={link} onChange={handleLinkChange} required/>
              <span className="form__input-error form__input-error_active" id="url-input-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;