import "./Profile.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useFormValidation from "../../hooks/useFormValidation";


function Profile(props) {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();
  const buttonDisabled = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

  // useEffect(() => {
  //   setName(values.name);
  //   setEmail(values.email);
  //   console.log('Эффект в профиле')
  // }, [values, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleProfile(values);
    resetForm();
  }  
  
  return (
    <>
      <section className="profile">
        <h1 className="profile__greeting">Привет, {currentUser.name}!</h1>
        <form
          className="profile__edit-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <label className="profile__label">
            Имя
            <input
              className="profile__input"
              name="name"
              type="text"
              minLength="2"
              value={values.name || ""}
              onChange={handleChange}
              required
            />
          </label>
            <span className="profile__input-error">{errors.name || ''}</span>
          <label className="profile__label">
            E-mail
            <input
              className="profile__input"
              name="email"
              type="email"
              value={values.email || ""}
              onChange={handleChange}
              required
            />
          </label>
            <span className="profile__input-error">{errors.email || ''}</span>
          <div className="profile__buttons">
            <button
              className={`profile__button-edit ${buttonDisabled ? 'profile__button-edit_disabled' : ''}`}
              type="submit"
              disabled={buttonDisabled ? true : false}
            >
              Редактировать
            </button>
            <Link
              to="/signin"
              className={`profile__button-exit ${!buttonDisabled ? 'profile__button-exit_disabled' : ''}`}
              onClick={props.handleSignOut}
            >
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
