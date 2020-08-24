import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
    
    const currentUser = React.useContext(CurrentUserContext);
    
    return (
        <main className="content">
          <section className="profile">
            <div className="profile__avatar-container">
              <img className="profile__avatar" src={currentUser.avatar} alt="profile avatar"/>
              <button className="button button__avatar" onClick={props.onEditAvatar}></button>
            </div>
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <p className="profile__about-me">{currentUser.about}</p>
              <button className="button button__edit" onClick={props.onEditProfile}></button>
            </div>
            <button className="button button__add" onClick={props.onAddPlace}></button>    
          </section>
          <section className="elements">
            <ul className="elements__container">
              {props.cards.map((card, index) => (
                <Card key={index} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>
                )
              )}
            </ul>
          </section>
        </main>
      );
}

export default Main;