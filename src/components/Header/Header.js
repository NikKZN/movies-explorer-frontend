import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/Header/header-logo.svg";
import profileIcon from "../../images/Header/profile-icon.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const location = useLocation().pathname;

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
            <Link
              to="/movies"
              className={`header__link-films ${
                location === "/movies" ? "header__link-films_active" : ""
              }`}
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={`header__link-films-saved ${
                location === "/saved-movies"
                  ? "header__link-films-saved_active"
                  : ""
              }`}
            >
              Сохранённые фильмы
            </Link>
            <Link
              to="/profile"
              className={`header__profile ${
                location === "/profile" ? "header__profile_active" : ""
              }`}
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
            </Link>
            <button type="button" className="header__burger"></button>

            <Navigation />
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
