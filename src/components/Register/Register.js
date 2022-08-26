import "./Register.css";
import React, { useEffect } from "react";
import logo from "../../images/Header/header-logo.svg";
import { Link } from "react-router-dom";
import useFormValidation from "../../hooks/useFormValidation";

function Register(props) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister(values);
  }

  useEffect(() => {
    resetForm();
  }, [resetForm]);

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
          <form className="register__form" onSubmit={handleSubmit} noValidate>
            <label className="register__label">
              Имя
              <input
                className="register__input"
                name="name"
                value={values.name || ""}
                type="text"
                placeholder="Имя"
                minLength="2"
                maxLength="30"
                pattern="^[A-Za-zЁёА-Яа-я /s -]+$"
                onChange={handleChange}
                required
              />
              <span className="register__input-error">{errors.name || ""}</span>
            </label>
            <label className="register__label">
              E-mail
              <input
                className="register__input"
                name="email"
                value={values.email || ""}
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                required
              />
              <span className="register__input-error">
                {errors.email || ""}
              </span>
            </label>
            <label className="register__label">
              Пароль
              <input
                className="register__input"
                name="password"
                value={values.password || ""}
                type="password"
                placeholder="Пароль"
                onChange={handleChange}
                minLength="8"
                autoComplete="off"
                required
              />
              <span className="register__input-error">
                {errors.password || ""}
              </span>
            </label>
            <p className="register__error">{props.isErrMessage || ""}</p>
            <button
              className={`register__submit-button ${
                !isValid && "register__submit-button_disabled"
              }`}
              type="submit"
              disabled={!isValid}
            >
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
