import React from "react";
import '../pages/index.css';

function PopupProfile(props) {
    return (props.trigger) ? (
        <>
            <div class="overlay block" onClick={() => props.setTrigger(false)}></div>{props.children}
            <div class="form form-edit block">
                <button class="form__icon hover" onClick={() => props.setTrigger(false)}></button>
                {props.children}
                <h3 class="form__header">Edit profil</h3>
                <form class="form__control" name="formEdit" novalidate>
                <input id="text-input" type="text" class="form__input form__name" name="inputName" required minlength="2" maxlength="40" />
                <span class="text-input-error form__input-error"></span>
                <input id="text-input-dua" type="text" class="form__input form__job" name="inputJob" required minlength="2" maxlength="200" />
                <span class="text-input-dua-error form__input-error"></span>
                <button type="submit" class="form__button form__button-save hover" aria-label="simpan">Simpan</button>
                </form>
            </div>
        </>
    ) :"";
}

export default PopupProfile

//fix it