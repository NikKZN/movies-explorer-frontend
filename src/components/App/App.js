import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import InfoTooltipPopup from "../InfoTooltipPopup/InfoTooltipPopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoToolTip, setIsInfoToolTip] = useState({
    isOpen: false,
    status: true,
    message: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [isErrMessage, setIsErrMessage] = useState('');
  const headerPath = ['/', '/movies', '/saved-movies', '/profile'];
  const footerPath = ['/', '/movies', '/saved-movies'];

  //---Выводит сообщение об ошибке
  function informError(err) {
    setIsInfoToolTip({
      isOpen: true,
      status: false,
      message: err.message,
    });
  }

  //---Регистрация
  function handleRegister({ name, email, password }) {
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res._id) {
          handleLogin({ email, password });
        }
        setIsErrMessage(res.message)
      })
      .catch((err) => informError(err))
  }

  //---Вход
  function handleLogin({ email, password }) {
    mainApi
      .login(email, password)
      .then((res) => {        
        if (res.token) {
          tokenCheck();
        }
        setIsErrMessage(res.message)
      })
      .catch((err) => informError(err))
  }

  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function tokenCheck() {
    mainApi
      .getUserInfo()
      .then((res) => {
        if (res._id) {
          setCurrentUser(res);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => informError(err));
  }

  //---Редактирование профиля
  function handleProfile({ name, email }) {
    mainApi
      .setUserInfo(name, email)
      .then(newUser => {
        setCurrentUser(newUser);
        setIsInfoToolTip({
          isOpen: true,
          status: true,
          message: "Ваши данные изменены.",
        });
      })
      .catch((err) => informError(err))
  }

  //---Выход из аккаунта
  function handleSignOut() {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        // setIsBurgerMenuOpen(false);
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => informError(err));
  }

  //---Закрывает информационный попап
  function closeInfoTooltipPopup() {
    setIsInfoToolTip({
      isOpen: false,
      status: false,
      message: "",
    });
  }

  //---Закрывает информационный попап по клику на оверлей
  function closePopupOnOverlay(e) {
    if (e.target === e.currentTarget) {
      closeInfoTooltipPopup();
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Route exact path={headerPath}>
          <Header
            loggedIn={loggedIn}            
          />
        </Route>
        <Switch>
          <Route 
            exact path="/" 
            component={Main}
            loggedIn={loggedIn} 
          />
          <ProtectedRoute
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            handleSignOut={handleSignOut}
            isErrMessage={isErrMessage}
            handleProfile={handleProfile}
          />
          <Route path="/signin">
            <Login
              handleLogin={handleLogin}
              isErrMessage={isErrMessage}
            />
          </Route>
          <Route path="/signup">
            <Register
              handleRegister={handleRegister}
              isErrMessage={isErrMessage}
            />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          <Route>
            {loggedIn ? <Redirect to="/" /> : <Redirect to="signin" />}
          </Route>
        </Switch>
        <Route exact path={footerPath}>
            <Footer />
          </Route>
        <InfoTooltipPopup
          isOpen={isInfoToolTip.isOpen}
          status={isInfoToolTip.status}
          onClose={closeInfoTooltipPopup}
          onCloseOverlay={closePopupOnOverlay}
          message={isInfoToolTip.message}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
