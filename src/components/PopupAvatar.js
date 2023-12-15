import React from "react";
import '../pages/index.css';

function PopupAvatar(props) {
    return (props.trigger) ? (
        <>
            <div class="overlay block" onClick={() => props.setTrigger(false)}></div>{props.children}
            <div class="form form-avatar block">
            <button type="button" class="form__icon hover-icon"onClick={() => props.setTrigger(false)}>{props.children}
            </button>
            <h3 class="form-avatar__title">Ubah Foto Profil</h3>
            <form action="POST" class="form__control" name="formAvatar" novalidate>
                <input id="input-url-avatar" name="inputAvatar" type="url" class="form__input form__avatar" placeholder="Isi link disini..." required />
                <span class="input-url-avatar-error form__input-error form__input-avatar"></span>
                <button type="submit" class="form__button form__button-avatar hover" aria-label="Simpan">Simpan</button>
            </form>
            </div>
        </>
    ) :"";
}

export default PopupAvatar

//fix it