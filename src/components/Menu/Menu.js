import './Menu.css';
import { Link } from "react-router-dom";
import profileIcon from "../../images/Header/profile-icon.svg";
import close from "../../images/Menu/close.svg";


function Menu() {
  return (
      <nav className="menu header__menu">
        <img
          className="menu__close"
          src={close}
          alt="Иконка аккаунта."
        />
        <div className="menu__nav">
          <Link
            to="/"
            // onClick={props.handleSignOut}
            className="menu__link-main-page"
          >
            Главная
          </Link>
          <Link
            to="/movies"
            // onClick={props.handleSignOut}
            className="menu__link-films"
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            // onClick={props.handleSignOut}
            className="menu__link-films-saved"
          >
            Сохранённые фильмы
          </Link>
        </div>
        
        <Link
          to="/profile"
          // onClick={props.handleSignOut}
          className="menu__profile"
        >
          Аккаунт
            <>
              <div className='menu__profile-background'>
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
};

export default Menu;
