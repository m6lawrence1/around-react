import React from 'react';

function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="element">
          <div className="element__image" role="img" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleCardClick}></div>
            <button className="button button__delete button__delete_hidden"></button>
            <div className="element__group">
              <h2 className="element__title">{props.card.name}</h2>
              <div className="element__like-container">
                <button className="button button__like"></button>
              <div className="element__likes">0</div>   
            </div>
          </div>
        </li>
    );
}

export default Card;