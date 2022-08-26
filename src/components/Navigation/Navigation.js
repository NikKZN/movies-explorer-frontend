import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../../images/Header/profile-icon.svg";
import close from "../../images/Navigation/close.svg";

function Navigation(props) {
  const location = useLocation().pathname;

  return (
    <nav
      className={`menu header__menu ${
        props.isBurgerOpen ? "header__menu_active" : ""
      }`}
    >
      <img
        className="menu__close"
        src={close}
        alt="Иконка закрыть."
        onClick={props.closeBurgerMenu}
      />
      <div className="menu__nav">
        <Link
          to="/"
          className={`menu__link-main-page ${
            location === "/" ? "menu__link-main-page_active" : ""
          }`}
          onClick={props.closeBurgerMenu}
        >
          Главная
        </Link>
        <Link
          to="/movies"
          className={`menu__link-films ${
            location === "/movies" ? "menu__link-films_active" : ""
          }`}
          onClick={props.closeBurgerMenu}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`menu__link-films-saved ${
            location === "/saved-movies" ? "menu__link-films-saved_active" : ""
          }`}
          onClick={props.closeBurgerMenu}
        >
          Сохранённые фильмы
        </Link>
      </div>

      <Link
        to="/profile"
        className={`menu__profile ${
          location === "/profile" ? "menu__profile_active" : ""
        }`}
        onClick={props.closeBurgerMenu}
      >
        Аккаунт
        <>
          <div className="menu__profile-background">
            <img
              className="menu__profile-icon"
              src={profileIcon}
              alt="Иконка аккаунта."
            />
          </div>
        </>
      </Link>
    </nav>
  );
}

export default Navigation;
