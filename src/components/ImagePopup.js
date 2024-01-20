import React from "react";
function ImagePopup({ selectedCard, onClose }) {
  return (
    <div className={`big-picture ${selectedCard ? "big-picture_opened" : ""}`} >
      <div className="big-picture__content">
        <img src={selectedCard.link} className="big-picture__image-normal" /> 
        <p className="big-picture__place">{selectedCard.name}</p>
        <button className="big-picture__btn-close" onClick={onClose}></button>
      </div>
      <div class="overlay" onClick={onClose}></div>
    </div>
  );
}
export default ImagePopup;


