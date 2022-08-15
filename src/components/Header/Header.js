import './Header.css';
import { Link } from "react-router-dom";
import logo from "../../images/Header/header-logo.svg";
import burger from "../../images/Header/burger.svg";
import profileIcon from "../../images/Header/profile-icon.svg";
import Menu from '../Menu/Menu';

function Header(props) {
  return (
    <div className="header__container">
      <Link to="/">
        <img
            className="header__logo"
            src={logo}
            alt="Логотип фильмотека."
          />
      </Link>
      <div className='header__account'>
      {false ? (
            <>
              <Link
                to="/movies"
                // onClick={props.handleSignOut}
                className="header__link-films"
              >
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                // onClick={props.handleSignOut}
                className="header__link-films-saved"
              >
                Сохранённые фильмы
              </Link>
              <Link
                to="/profile"
                // onClick={props.handleSignOut}
                className="header__profile"
              >
                Аккаунт
                  <>
                    <div className='header__profile-background'>
                      <img
                        className="header__profile-icon"
                        src={profileIcon}
                        alt="Иконка аккаунта."
                      />
                    </div>
                  </>
              </Link>
              <img
                className="header__burger"
                src={burger}
                alt="Бургер меню."
              />
              <Menu />
            </>
          ) : (
            <>
              <Link
                to="/signup"
                // onClick={props.handleSignOut}
                className="header__register"
              >
                Регистрация
              </Link>
              <Link
                to="/signin"
                // onClick={props.handleSignOut}
                className="header__login"
              >
                Войти
              </Link>
            </>
            

          )}
      </div>
    </div>  
  );
};

export default Header;
