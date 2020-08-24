import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState();
    const [description, setDescription] = useState();

    // After loading the current user from the API
    // their data will be used in managed components.
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    function handleDescriptionChange(evt) {
        setDescription(evt.target.value);
    }

    function handleSubmit(evt) {
        // Prevent the browser from navigating to the form address
        evt.preventDefault();
        // Pass the values of the managed components to the external handler
        props.onUpdateUser({
            name: name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name="edit-profile"
            title="Edit Profile"
            submitBtnText="Save"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            >
              <label className="form__field">
                <input className="form__input form__input_type_name" id="name-input" type="text" title="Name" name="name" value={name} placeholder="Name" minLength="2" maxLength="40" pattern="^[A-Za-z]+[A-Za-z -]{1,}" onChange={handleNameChange} required/>
                <span className="form__input-error form__input-error_active" id="name-input-error"></span>    
              </label>
              <label className="form__field">
                <input className="form__input form__input_type_about" id="about-input" type="text" title="About Me" name="about" value={description} placeholder="About Me" minLength="2" maxLength="200" onChange={handleDescriptionChange} required/>
                <span className="form__input-error form__input-error_active" id="about-input-error"></span>    
              </label>
          </PopupWithForm>
    );
}

export default EditProfilePopup;