import React, { useEffect } from "react";
import useFormValidation from "../../hooks/useFormValidation";
import "./Login.css";
import logo from "../../images/Header/header-logo.svg";
import { Link } from "react-router-dom";

function Login(props) {
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin(values);    
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

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
          <form 
            className="login__form"
            onSubmit={handleSubmit}
          >
            <label className="login__label">
              E-mail
              <input
                className="login__input"
                name="email"
                type="email"
                placeholder="pochta@yandex.ru"
                onChange={handleChange}
                value={values.email || ''}
                required
              />
              <span className="login__input-error">{errors.email || ''}</span>
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
                onChange={handleChange}
                value={values.password || ''}
                required
              />
              <span className="login__input-error">{errors.password || ''}</span>
            </label>
            <p className="login__error">{props.isErrMessage || ''}</p>
            <button className={`login__submit-button ${!isValid && 'login__submit-button_disabled'}`}>
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
