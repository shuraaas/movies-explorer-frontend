class MainApi {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _checkResult = (res) => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  _request = (url, options) => fetch(url, options).then(this._checkResult);

  _getToken = () => {
    const token = localStorage.getItem('jwt');

    return {
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };
  };

  createMovie = (data) => {
    return this._request(`${this._url}movies`, {
      method: 'POST',
      headers: this._getToken(),
      body: JSON.stringify(data),
    });
  };

  deleteMovie = (movieId) => {
    return this._request(`${this._url}movies/${movieId}`, {
      method: 'DELETE',
      headers: this._getToken(),
    });
  };

  getSavedMovies = () => {
    return this._request(`${this._url}movies/`, {
      method: 'GET',
      headers: this._getToken(),
    });
  };

  getUserInfo = () => this._request(`${this._url}users/me`, { headers: this._getToken() });

  setUserInfo = ({ name, email }) => {
    return this._request(`${this._url}users/me`, {
      method: 'PATCH',
      headers: this._getToken(),
      body: JSON.stringify({
        name,
        email
      })
    });
  };

  // запрашиваем начальные карточки с сервера
  // getMovies = () => {
  //   return this._request(this._url, {
  //       headers: this._headers
  //     });
  // };

  // загружаем новую карточку на сервер
  // setNewCard = ({ name, link }) => {
  //   return this._request(`${this._url}cards`, {
  //     method: 'POST',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       name,
  //       link
  //     })
  //   });
  // };

  // deleteCard = (cardId) => {
  //   return this._request(`${this._url}cards/${cardId}`, {
  //     method: 'DELETE',
  //     headers: this._headers
  //   });
  // };

  // ставим лайк
  // likeCard = (cardId, status) => {
  //   return this._request(`${this._url}cards/${cardId}/likes`, {
  //     method: status ? 'DELETE' : 'PUT',
  //     headers: this._headers
  //   });
  // };

  // загружаем новый аватар на сервер
  // changeAvatar = (data) => {
  //   return this._request(`${this._url}users/me/avatar`, {
  //     method: 'PATCH',
  //     headers: this._headers,
  //     body: JSON.stringify({
  //       avatar: data.avatar
  //     })
  //   });
  // };
};

const apiConfig = { baseUrl: 'http://localhost:3000/' };
const mainApi = new MainApi(apiConfig);

export default mainApi;