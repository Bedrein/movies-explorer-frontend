class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  _checkPrommis(res) {
    if (res.ok) {
      return res.json();
    }
    // eslint-disable-next-line no-template-curly-in-string
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  //---------------Auth---------------------------------
  register = ({ name, email, password }) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    }).then((res) => this._checkPrommis(res));
  };

  login = ({ email, password }) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkPrommis(res));
  };

  checkToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkPrommis(res));
  };
  //--------------------Profile----------------------------------------------------------
  getProfileInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => this._checkPrommis(res));
  }

  patchProfileInfo({ email, name }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ email, name }),
    }).then((res) => this._checkPrommis(res));
  }
  //--------------------Movies-----------------------------------------------------------
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => this._checkPrommis(res));
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: 'https://api.nomoreparties.co' + movie.image.url,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail:
          'https://api.nomoreparties.co' + movie.image.formats.thumbnail.url,
        movieId: movie.id,
      }),
    }).then((res) => this._checkPrommis(res));
  }
  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    }).then((res) => this._checkPrommis(res));
  }
}
export const mainApi = new MainApi({
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'https://api.bedrein-movies.nomoredomainsicu.ru/',
});
