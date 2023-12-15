import React from "react";
import '../pages/index.css';

function PopupAddCard(props) {
    return (props.trigger) ? (
        <>
            <div class="overlay block" onClick={() => props.setTrigger(false)}></div>{props.children}
            <div class="form form-add block">
                <button class="form__icon hover-icon" onClick={() => props.setTrigger(false)}>
                {props.children}
                </button>
                <h3 class="form__header">Tempat Baru</h3>
                <form class="form__control" name="formAdd" novalidate>
                    <input id="text-input-tiga" type="text" name="inputJudul" class="form__input form__name" placeholder="Judul" required minlength="2" maxlength="30" />
                    <span class="text-input-tiga-error form__input-error"></span>
                    <input id="input-url" type="url" name="inputTautanGambar" class="form__input form__job" placeholder="Tautan gambar" required />
                    <span class="input-url-error form__input-error"></span>
                    <button type="submit" class="form__button form__button-create hover" aria-label="buat">Buat</button>
                </form>
            </div>
        </>
    ) :"";
}

export default PopupAddCard

//fix it