import closeIcon from '../images/popup/close-icon.png';


function ImagePopup(props){
    
    return(
        <>
            <div className={`popup__image ${props.popupopen ? 'popup__image_opened' : ''}`} id="popup-image">
                <button type="button" className="popup__close-btn" id="close-image" onClick={props.closePopup}>
                    <img src={closeIcon} alt="close-icon" className="popup__close-btn-image" />
                </button>
                <img src={props.card} alt="place" className="popup__place-image" id="place-image" />
                <p className="popup__placename" id="place-name">{props.name}</p>
            </div>
        </>
    )
}

export default ImagePopup;