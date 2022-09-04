import { BASE_URL } from "./constants";

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkReponse(res) {
    if (res) {
      return res.json();
    } else if (res.status === 400) {
      throw new Error("Переданы некоректные данные!");
    } else if (res.status === 404) {
      throw new Error("Объект не найден!");
    } else if (res.status === 500) {
      throw new Error("На сервере произошла ошибка!");
    } 
  }

  //---Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      credentials: "include",
    }).then(this._checkReponse);
  }

  //---Редактирование профиля
  setUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
      }),
      credentials: "include",
    }).then(this._checkReponse);
  }

  //---Получение сохранённых фильмов
  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers,
      credentials: "include",
    }).then(this._checkReponse);
  }

  //---Сохранение фильма
  addMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
      credentials: "include",
    }).then(this._checkReponse);
  }

  //---Удаление фильма из сохранённых
  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      eaders: this._headers,
      credentials: "include",
    }).then(this._checkReponse);
  }

  //---Регистрация
  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      credentials: "include",
    }).then(this._checkReponse);
  }

  //---Вход
  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: "include",
    }).then(this._checkReponse);
  }

  logout() {
    return fetch(`${BASE_URL}/signout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then(this._checkReponse);
  }
}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default mainApi;
