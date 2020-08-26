import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    
    const currentUser = React.useContext(CurrentUserContext);
    
    // Checking if user is the owner of the current card
    const isOwn = props.card.owner._id === currentUser._id;

    // Creating a variable which is set in `className` for the delete button
    const cardDeleteButtonClassName = (
       `button button__delete ${isOwn ? '' : 'button__delete_hidden'}`
    );
    
    // Check if the card was liked by the current user
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);

    // Create a variable which you then set in `className` for the like button
    const cardLikeButtonClassName = (`button button__like ${isLiked ? 'button__like_status_selected' : ''}`);
    
    const likesTotal = props.card.likes.length;

    function handleCardClick() {
        props.onCardClick(props.card);
    }
    
    function handleLikeClick(evt) {
        evt.stopPropagation();
        // Prevent the browser from navigating to the form address
        evt.preventDefault();
        // Pass card data of the managed components to the external handler
        props.onCardLike(props.card);
    }
        
    function handleCardDelete(evt) {
        evt.stopPropagation();
        // Prevent the browser from navigating to the form address
        evt.preventDefault();
        // Pass the card data of the managed components to the external handler
        props.onCardDelete(props.card);
    }

    return (
        <li className="element">
          <div className="element__image" role="img" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleCardClick}></div>
            <button className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
            <div className="element__group">
              <h2 className="element__title">{props.card.name}</h2>
              <div className="element__like-container">
                <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
              <div className="element__likes">{likesTotal}</div>   
            </div>
          </div>
        </li>
    );
}

export default Card;