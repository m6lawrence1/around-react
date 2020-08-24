class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers; 
  }
    
    getAppInfo(){
        return Promise.all([this.getInitialCards(), this.getUserProfile()])
    }
    
    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers
        })
            .then((res) => {
            if (res.ok) {
                return res.json();
            }
                return Promise.reject(`Error: ${res.status}`);
        })
    }
    
    getUserProfile(){
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
                return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    setUserAvatar(avatar){
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            headers: this.headers,
            method: "PATCH",
            body: JSON.stringify(avatar)
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
                return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    setUserProfile({name, about}) {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
            method: "PATCH",
            body: JSON.stringify({name, about})
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        }); 
    }
    
    addCard(cardInfo) {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers,
            method: "POST",
            body: JSON.stringify(cardInfo)
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        }); 
    }
    
    deleteCard(_id){
        return fetch(`${this.baseUrl}/cards/${_id}`, {
            headers: this.headers,
            method: "DELETE"
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        }); 
    }
    
    updateLike(cardId, isLiked){
        return fetch(`${this.baseUrl}/cards/likes/${cardId}`, {
            headers: this.headers,
            method: isLiked ? 'PUT' : 'DELETE'
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
          console.log(err);
        }); 
    }

}

//API 
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-1",
  headers: {
    authorization: "59b76db9-8593-4042-9d89-647c9c96a94c",
    "Content-Type": "application/json"
  }
});


export default api;


