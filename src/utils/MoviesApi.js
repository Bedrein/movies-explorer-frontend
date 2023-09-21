class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkPrommis(res) {
    if (res.ok) {
      return res.json();
    }
    // eslint-disable-next-line no-template-curly-in-string
    return Promise.reject('Ошибка: ${res.status}');
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
    }).then((res) => this._checkPrommis(res));
  }
}
export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});
