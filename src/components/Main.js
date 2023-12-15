import '../pages/index.css';
import PopupProfile from './PopupProfile'
import PopupAddCard from './PopupAddCard'
import PopupAvatar from './PopupAvatar'
import { useState } from 'react';
 
function Main() {
  const [buttonPopupProfile, setButtonPopupProfile] = useState (false);
  const [buttonPopupAdd, setButtonPopupAdd] = useState(false);
  const [buttonPopupAvatar, setButtonAvatar] = useState(false);
  return ( 
    <>
      
      <section class="profile">
        <div class="profile__avatar">
          <div class="profile__edit-avatar">
          <button type="button" aria-label="edit avatar" onClick={() => setButtonAvatar(true)} class="profile__button-avatar"></button>
          <img alt="profile picture" class="profile__image"/>
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
      <PopupProfile trigger={buttonPopupProfile} setTrigger={setButtonPopupProfile}>
      </PopupProfile>

      <PopupAddCard trigger={buttonPopupAdd} setTrigger={setButtonPopupAdd}>
      </PopupAddCard>

      <PopupAvatar trigger={buttonPopupAvatar} setTrigger={setButtonAvatar}>
      </PopupAvatar>
    </>
  );
}

export default Main;

//fix it