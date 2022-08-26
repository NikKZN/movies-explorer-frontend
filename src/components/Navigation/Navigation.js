import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import profileIcon from "../../images/Header/profile-icon.svg";
import close from "../../images/Navigation/close.svg";

function Navigation() {
  const location = useLocation().pathname;

  return (
    <nav className="menu header__menu">
      <img className="menu__close" src={close} alt="Иконка аккаунта." />
      <div className="menu__nav">
        <Link
          to="/"
          className={`menu__link-main-page ${
            location === "/" ? "menu__link-main-page_active" : ""
          }`}
        >
          Главная
        </Link>
        <Link
          to="/movies"
          className={`menu__link-films ${
            location === "/movies" ? "menu__link-films_active" : ""
          }`}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`menu__link-films-saved ${
            location === "/saved-movies" ? "menu__link-films-saved_active" : ""
          }`}
        >
          Сохранённые фильмы
        </Link>
      </div>

      <Link
        to="/profile"
        className={`menu__profile ${
          location === "/profile" ? "menu__profile_active" : ""
        }`}
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
