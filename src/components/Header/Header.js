import "./Header.css";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/Header/header-logo.svg";
import profileIcon from "../../images/Header/profile-icon.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function openBurgerMenu() {
    setIsBurgerOpen(true);
  }

  function closeBurgerMenu() {
    setIsBurgerOpen(false);
  }

  return (
    <header
      className={`header__container ${
        props.loggedIn ? "header__container_registered" : ""
      }`}
    >
      <Link to="/" className="header__logo">
        <img src={logo} alt="Логотип фильмотека." />
      </Link>
      <div className="header__account">
        {props.loggedIn ? (
          <>
            <NavLink
              to="/movies"
              className="header__link-films"
              activeClassName="header__link-films_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__link-films-saved"
              activeClassName="header__link-films-saved_active"
            >
              Сохранённые фильмы
            </NavLink>
            <NavLink
              to="/profile"
              className="header__profile"
              activeClassName="header__profile_active"
            >
              Аккаунт
              <>
                <div className="header__profile-background">
                  <img
                    className="header__profile-icon"
                    src={profileIcon}
                    alt="Иконка аккаунта."
                  />
                </div>
              </>
            </NavLink>
            <button
              type="button"
              className="header__burger"
              onClick={openBurgerMenu}
            ></button>

            <Navigation
              isBurgerOpen={isBurgerOpen}
              closeBurgerMenu={closeBurgerMenu}
            />
          </>
        ) : (
          <>
            <Link to="/signup" className="header__register">
              Регистрация
            </Link>
            <Link to="/signin" className="header__login">
              Войти
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
