import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/Header/header-logo.svg";
import profileIcon from "../../images/Header/profile-icon.svg";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className={`header__container ${props.loggedIn ? 'header__container_registered' : ''}`}>
      <Link to="/" className="header__logo">
        <img src={logo} alt="Логотип фильмотека." />
      </Link>
      <div className="header__account">
        {props.loggedIn ? (
          <>
            <Link to="/movies" className="header__link-films">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__link-films-saved">
              Сохранённые фильмы
            </Link>
            <Link to="/profile" className="header__profile">
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
