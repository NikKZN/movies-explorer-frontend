import "./Register.css";
import logo from "../../images/Header/header-logo.svg";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <section className="register">
        <div className="register__content">
          <Link to="/">
            <img
              className="register__logo"
              src={logo}
              alt="Логотип фильмотека."
            />
          </Link>
          <h1 className="register__greeting">Добро пожаловать!</h1>
          <form className="register__form">
            <label className="register__label">
              Имя
              <input
                className="register__input"
                name="name"
                type="text"
                placeholder="Виталий"
                required
              />
              <span className="register__input-error">
                Что-то пошло не так...
              </span>
            </label>
            <label className="register__label">
              E-mail
              <input
                className="register__input"
                name="email"
                type="email"
                placeholder="pochta@yandex.ru"
                required
              />
              <span className="register__input-error">
                Что-то пошло не так...
              </span>
            </label>
            <label className="register__label">
              Пароль
              <input
                className="register__input"
                name="password"
                type="password"
                placeholder="Пароль"
                minLength="8"
                autoComplete="off"
                required
              />
              <span className="register__input-error">
                Что-то пошло не так...
              </span>
            </label>
            <button className="register__submit-button" type="submit">
              Зарегистрироваться
            </button>
            <p className="register__caption">
              Уже зарегистрированы?
              <Link to="/signin" className="register__caption-link">
                Войти
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register;
