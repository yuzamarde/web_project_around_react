export class Api {
    constructor(options) {
      // body konstruktor
      this.options = options;
    }

    getInitialCards() {
        return fetch("https://around.nomoreparties.co/v1/web_id_03/cards", {
          headers: {
            authorization: "1ad1c0df-de90-4291-88fd-ebf0a0fa5a42"
          }
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            
            return Promise.reject(`Error: ${res.status}`);
          });
    }

    addNewCard(name, link){
        return fetch("https://around.nomoreparties.co/v1/web_id_03/cards", {
            method: "POST",
            headers: {
                authorization: "1ad1c0df-de90-4291-88fd-ebf0a0fa5a42",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            
            return Promise.reject(`Error: ${res.status}`);
          });
    }

    likeCard(id){
        return fetch(`https://around.nomoreparties.co/v1/web_id_03/cards/likes/${id}`, {
            method: "PUT",
            headers: {
                authorization: "1ad1c0df-de90-4291-88fd-ebf0a0fa5a42",
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            
            return Promise.reject(`Error: ${res.status}`);
          });
    }

    unlikeCard(id){
        return fetch(`https://around.nomoreparties.co/v1/web_id_03/cards/likes/${id}`, {
            method: "DELETE",
            headers: {
                authorization: "1ad1c0df-de90-4291-88fd-ebf0a0fa5a42",
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            
            return Promise.reject(`Error: ${res.status}`);
          });
    }

    changeLikeCardStatus(id, isLiked){
      if(isLiked == true){
        this.likeCard(id)
      }
      else if(isLiked ==false){
        this.unlikeCard(id)
      }
    }

    deleteSelectedCard(id){
        return fetch(`https://around.nomoreparties.co/v1/web_id_03/cards/${id}`, {
            method: "DELETE",
            headers: {
                authorization: "1ad1c0df-de90-4291-88fd-ebf0a0fa5a42",
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            
            return Promise.reject(`Error: ${res.status}`);
          });
    }



    
    getUserInformation(){
        return fetch("https://around.nomoreparties.co/v1/web_id_03/users/me", {
            headers: {
                authorization: "1ad1c0df-de90-4291-88fd-ebf0a0fa5a42"
            }
            })
            .then(res => {
                if (res.ok) {
                return res.json();
                }
                
                return Promise.reject(`Error: ${res.status}`);
            });
    }

    editUserInformation(name, about){
        return fetch("https://around.nomoreparties.co/v1/web_id_03/users/me", {
            method: "PATCH",
            
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            
            return Promise.reject(`Error: ${res.status}`);
          });
    }

    changeProfileAvatar(avatarurl){
        return fetch("https://around.nomoreparties.co/v1/web_id_03/users/me/avatar", {
            method: "PATCH",
           
            body: JSON.stringify({
                avatar: avatarurl
            })
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
            
            return Promise.reject(`Error: ${res.status}`);
          });
    }
  }
