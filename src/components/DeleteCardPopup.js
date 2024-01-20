import React from "react";
import PopupWithForm from "./PopupWithForm";
function DeleteCardPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.handleCardDelete();
    props.onClose();
  }
  return (
    <div>
      <PopupWithForm
        title="Apakah Anda Yakin ?"
        name="popup-confirm-deletion"
        namebutton="Ya"
        isOpen={props.statuspopupConfirmation}
        onClose={props.onClose}
        onSubmit={handleSubmit}
        noValidate
      >
        {/* Move the overlay div inside the PopupWithForm */}
        <div className="overlay" onClick={props.onClose}></div>
      </PopupWithForm>
    </div>
  );
}
export default DeleteCardPopup;
