import React, { useState, useEffect } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {
    
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState();
    
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
        window.addEventListener('keyup', handleEscClose);
    }    
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
        window.addEventListener('keyup', handleEscClose);
    }    
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
        window.addEventListener('keyup', handleEscClose);
    } 
    function handleCardClick(card) {
        setSelectedCard(card);
        window.addEventListener('keyup', handleEscClose);
    }
    function handleDeleteClick() {
        setIsDeletePopupOpen(true);
        window.addEventListener('keyup', handleEscClose);
    }
    function closeAllPopups() {
      window.removeEventListener('keyup', handleEscClose);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsDeletePopupOpen(false);
      setSelectedCard(false);
  }
    function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups()
    }
  }
    
  return (
    <>
      <div className="page">
        <Header/>
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onDelete={handleDeleteClick} onCardClick={handleCardClick}/>
        <Footer/>
        <PopupWithForm
            name="avatar"
            title="Change profile picture"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
          <form action="#" className="form" name="edit-avatar" noValidate>
              <label className="form__field">
                <input className="form__input form__input_type_url" type="url" id="url-input" title="Image Link" name="link" value="" placeholder="Image link" required/>
                <span className="form__input-error form__input-error_active" id="url-input-error"></span>
              </label>
              <button className="form__submit-button">Save</button>
            </form>
          </PopupWithForm>
          <PopupWithForm
            name="edit-profile"
            title="Edit Profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups} >
            <form action="#" className="form" name="edit-profile" noValidate>
              <label className="form__field">
                <input className="form__input form__input_type_name" id="name-input" type="text" title="Name" name="name" value="" placeholder="Name" required minLength="2" maxLength="40" pattern="^[A-Za-z]+[A-Za-z -]{1,}"/>
                <span className="form__input-error form__input-error_active" id="name-input-error"></span>    
              </label>
              <label className="form__field">
                <input className="form__input form__input_type_about" id="about-input" type="text" title="About Me" name="about" value="" placeholder="About Me" minLength="2" maxLength="200" required/>
                <span className="form__input-error form__input-error_active" id="about-input-error"></span>    
              </label>
              <button className="form__submit-button">Save</button>
            </form>
          </PopupWithForm>
          <PopupWithForm
            name="add-place"
            title="New Place"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups} >
            <form action="#" className="form" name="edit-profile" noValidate>
              <label className="form__field">
                <input className="form__input form__input_type_name" id="name-input" type="text" title="Name" name="name" value="" placeholder="Name" required minLength="2" maxLength="40" pattern="^[A-Za-z]+[A-Za-z -]{1,}"/>
                <span className="form__input-error form__input-error_active" id="name-input-error"></span>    
              </label>
              <label className="form__field">
                <input className="form__input form__input_type_about" id="about-input" type="text" title="About Me" name="about" value="" placeholder="About Me" minLength="2" maxLength="200" required/>
                <span className="form__input-error form__input-error_active" id="about-input-error"></span>    
              </label>
              <button className="form__submit-button">Save</button>
            </form>
          </PopupWithForm>
          <PopupWithForm
            name="delete"
            title="Are you sure?"
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups} >
            <form action="#" className="form" name="delete-card" noValidate>
              <button className="form__submit-button form__submit-button_confirm">Yes</button>
            </form>
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      </div>
    </>
  );
}

export default App;
