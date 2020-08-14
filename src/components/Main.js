import React, {useState} from 'react';
import api from '../utils/Api';
import Card from './Card';
import defaultAvatar from '../images/profile_image.jpg';

function Main(props) {
    
    const [userAvatar, setUserAvatar] = useState(defaultAvatar);
    const [userName, setUserName] = useState("Michael Lawrence");
    const [userDescription, setUserDescription] = useState("...");
    const [cards, setCards] = useState([]);
    
    React.useEffect(() => {
        api.getUserProfile().then((userProfile) => {
            setUserAvatar(userProfile.avatar);
            setUserName(userProfile.name);
            setUserDescription(userProfile.about);
        }).catch((err) => {
            console.log(err);
        });
    }, [userAvatar,userName,userDescription]);
    
    React.useEffect(() => {
        api.getInitialCards().then((initialCards) => {
            initialCards.forEach((card) => {
                setCards([...initialCards, card]);
            });
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    
  return (
   <>
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="profile avatar"/>
          <button className="button button__avatar" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about-me">{userDescription}</p>
          <button className="button button__edit" onClick={props.onEditProfile}></button>
        </div>
        <button className="button button__add" onClick={props.onAddPlace}></button>    
      </section>
      <section className="elements">
        <ul className="elements__container">
          {cards.map((card, index) => (
            <Card key={index} card={card} onCardClick={props.onCardClick}/>
            )
          )}
        </ul>
      </section>
    </main>
  </>
  );
}

export default Main;