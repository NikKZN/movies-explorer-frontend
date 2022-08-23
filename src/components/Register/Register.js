import "./Register.css";
import React, { useState } from "react";
import logo from "../../images/Header/header-logo.svg";
import { Link } from "react-router-dom";

function Register(props) {
  const [formParams, setFormParams] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.handleRegister({
      name: formParams.name,
      email: formParams.email,
      password: formParams.password,
    });
  }



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
          <form 
            className="register__form"
            onSubmit={handleSubmit}
          >
            <label className="register__label">
              Имя
              <input
                className="register__input"
                name="name"
                value={formParams.name}
                type="text"
                placeholder="Имя"
                onChange={handleChange}
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
                value={formParams.email}
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
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
                value={formParams.password}
                type="password"
                placeholder="Пароль"
                onChange={handleChange}
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
