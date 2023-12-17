import { Api } from '../utils/api';
import { useState, useEffect } from 'react';
import React from 'react';
import Card from './Card';
import PopupProfile from './PopupProfile'
import PopupAddCard from './PopupAddCard'
import PopupAvatar from './PopupAvatar'
import { currentUserContext } from '../utils/constants';

function Main(props){
    const api = new Api({
        baseUrl: "https://around.nomoreparties.co/v1/web_id_03/",
        headers: {
          authorization: "5f8bc2ce-9c96-4e75-869d-b995088f8715",
          "Content-Type": "application/json"
        }
    });

    const [Place, setPlace] = useState([]);

    useEffect(() => {
        const placeInformation = api.getInitialCards()
        .then(res => setPlace(res))
    }, [])

    const currentUser = React.useContext(currentUserContext);

    const [buttonPopupProfile, setButtonPopupProfile] = useState (false);
    const [buttonPopupAdd, setButtonPopupAdd] = useState(false);
    const [buttonPopupAvatar, setButtonAvatar] = useState(false);

    return(
        <>
        <section class="profile">
            <div class="profile__avatar">
                <div class="profile__edit-avatar">
                    <button type="button" aria-label="edit avatar" class="profile__button-avatar" onClick={() => setButtonAvatar(true)}></button>
                    <img alt="profile picture" class="profile__image" />
                </div>
                <div class="profile__info">
                <div class="profile__header">
                <h2 class="profile__title"></h2>
                <button class="hover-icon profile__edit" onClick={() => setButtonPopupProfile(true)}></button>
                </div>
                    <p class="profile__text"></p>
                </div>
            </div>
            <div class="profile__cta">
                <button class="profile__add hover-icon" onClick={() => setButtonPopupAdd(true)}></button>
            </div>
        </section>
            <section className="card" id="holder">
                    {
                        Place.map((card) => 
                            <Card
                                key={card.id}
                                onCardClick={props.onCardClick}
                                onCardLike={function handleCardLike() {
                                    // const isLiked = card.likes.some(i => i._id === currentUser._id);
                                    
                                    // api.changeLikeCardStatus(card._id, !isLiked);
                                }
                                }
                                card={card}
                            />
                        )
                    }
            </section>
            <PopupProfile trigger={buttonPopupProfile} setTrigger={setButtonPopupProfile}>
            </PopupProfile>
            <PopupAddCard trigger={buttonPopupAdd} setTrigger={setButtonPopupAdd}>
            </PopupAddCard>
            <PopupAvatar trigger={buttonPopupAvatar} setTrigger={setButtonAvatar}>
            </PopupAvatar>

        </>
    )
}


export default Main;