const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";

// const BASE_URL = "https://api.filmoteka.nkzn.nomoredomains.xyz";
const BASE_URL = "http://localhost:3001";

const DURATION_SHORT_MOVIES = 40;

///////---СООБЩЕНИЯ ДЛЯ ПОЛЬЗОВАТЕЛЯ---///////
const MISSING_INPUT = "Нужно ввести ключевое слово.";
const NAME_VALIDATION =
  "Имя должно содержать только латиницу, кириллицу, пробел или дефис.";
const EMAIL_VALIDATION = "Некорректый E-mail.";
const REQUEST_ERROR = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.";
const NOT_FOUND = "Ничего не найдено!";
const SEARCH_VALIDATION = "Чтобы увидеть фильмы, начните поиск!";

export {
  MOVIES_URL,
  BASE_URL,
  DURATION_SHORT_MOVIES,
  MISSING_INPUT,
  NAME_VALIDATION,
  EMAIL_VALIDATION,
  REQUEST_ERROR,
  NOT_FOUND,
  SEARCH_VALIDATION,
};
