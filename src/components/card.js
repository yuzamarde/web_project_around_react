import { Api } from '../utils/api';
// import deleteIcon from '../images/elements/delete.png';
// import likeIcon from '../images/elements/like.png';
import { useState, useEffect } from 'react';
import React from 'react';
import { currentUserContext } from '../utils/constants';
import ImagePopup from './ImagePopup'

function Card(props){
    


    return(
        <>
        <div>
            <article className="card">
                <div id="cardTemplate">
                    <div class="card__item">
                        <img src={props.card.link} alt="elements" className="card__image" name={props.card.name} id="photo" />
                        <button class="card__icon-delete hover-icon" id="delete"> </button>
                        <div className="card__main-text">
                            <h2 className="card__title" id="placename">{props.card.name}</h2>
                            <div className="elements__like" id="like">
                                <button class="card__icon hover-icon" id="like-image" onClick={props.onCardLike}></button>
                                <p className="card__likes-text" id="like-count">{props.card.likes.length}</p>
                            </div>
                        </div>
                    </div>
                </div>   
            </article>
        </div>
        
        </>
    )
}

export default Card;