import "./Login.css";
import logo from "../../images/Header/header-logo.svg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="login">
        <div className="login__content">
          <Link to="/">
            <img
              className="register__logo"
              src={logo}
              alt="Логотип фильмотека."
            />
          </Link>
          <h1 className="login__greeting">Рады видеть!</h1>
          <form className="login__form">
            <label className="login__label">
              E-mail
              <input
                className="login__input"
                name="email"
                type="email"
                placeholder="pochta@yandex.ru"
                required
              />
              <span className="login__input-error">Что-то пошло не так...</span>
            </label>
            <label className="login__label">
              Пароль
              <input
                className="login__input"
                name="password"
                type="password"
                placeholder="Пароль"
                minLength="8"
                autoComplete="off"
                required
              />
              <span className="login__input-error">Что-то пошло не так...</span>
            </label>
            <button className="login__submit-button" type="submit">
              Войти
            </button>
            <p className="login__caption">
              Ещё не зарегистрированы?
              <Link to="/signup" className="login__caption-link">
                Регистрация
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
