class Api {
 constructor({ baseUrl, headers }) {
  this.baseUrl = baseUrl;
  this.headers = headers;
 }
 getInitialCardsAndUserInfo() {
  return Promise.all([this.getInitialCards(), this.getUserInfo()]);
 }
 async getUserInfo() {
  try {
   const res = await fetch(`${this.baseUrl}/users/me`, {
    headers: this.headers,
   });

   if (res.ok) {
    return res.json();
   }
  } catch (err) {
   throw err;
  }
 }

 async getInitialCards() {
  try {
   const res = await fetch(`${this.baseUrl}/cards`, {
    headers: this.headers,
   });

   if (res.ok) {
    return res.json();
   }
  } catch (err) {
   throw err;
  }
 }

 async postNewCard(data) {
  try {
   const res = await fetch(`${this.baseUrl}/cards`, {
    method: 'POST',
    headers: this.headers,
    body: JSON.stringify({
     name: data.inputJudul,
     link: data.inputTautanGambar,
    }),
   });

   if (res.ok) {
    return res.json();
   }
  } catch (err) {
   throw err;
  }
 }

 async updateLikeCard(cardId, isLiked) {
  try {
   const method = isLiked ? 'DELETE' : 'PUT';
   const res = await fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
    headers: this.headers,
    method,
   });

   if (res.ok) {
    return res.json();
   }
  } catch (err) {
   throw err;
  }
 }

 async deleteCard(cardId) {
  try {
   const res = await fetch(`${this.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: this.headers,
   });

   if (res.ok) {
    return res.json();
   }
  } catch (err) {
   throw err;
  }
 }

 async patchUserInfo(data) {
  try {
   const res = await fetch(`${this.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
     name: data.inputName,
     about: data.inputJob,
    }),
   });

   if (res.ok) {
    return res.json();
   }
  } catch (err) {
   throw err;
  }
 }

 async patchAvatarUser(url) {
  try {
   const res = await fetch(`${this.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: this.headers,
    body: JSON.stringify({
     avatar: url,
    }),
   });

   if (res.ok) {
    return res.json();
   }
  } catch (err) {
   throw err;
  }
 }
}

export default Api;
