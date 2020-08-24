import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {

    const avatarLinkRef = React.useRef();

    function handleSubmit(evt) {
        // Prevent the browser from navigating to the form address
        evt.preventDefault();
        // Pass the values of the managed components to the external handler
        props.onUpdateAvatar({
            avatar: avatarLinkRef.current.value
        });
    }

    return (
        <PopupWithForm 
            name="avatar" 
            title="Change profile picture"
            submitBtnText="Save"
            isOpen={props.isOpen} 
            onClose={props.onClose} 
            onSubmit={handleSubmit} 
            >
            <label className="form__field">
                <input className="form__input form__input_type_url" type="url" id="url-input" title="Image Link" name="link" placeholder="Image link" ref={avatarLinkRef} required/>
                <span className="form__input-error form__input-error_active" id="url-input-error"></span>
            </label>    
        </PopupWithForm>
    );

}

export default EditAvatarPopup;