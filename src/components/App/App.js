import "./App.css";
import React, { useState, useEffect } from "react";
import {
  Route,
  Redirect,
  Switch,
  useHistory,
} from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
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
import { MOVIE_BASE_URL, PROFILE_EDIT_TRUE } from "../../utils/constants";

function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({});
  const [isInfoToolTip, setIsInfoToolTip] = useState({
    isOpen: false,
    status: true,
    message: "",
  }); //-Информационный попап
  const [loggedIn, setLoggedIn] = useState(false);
  const [isErrMessage, setIsErrMessage] = useState("");
  const headerPath = ["/", "/movies", "/saved-movies", "/profile"]; //-Локации хедера
  const footerPath = ["/", "/movies", "/saved-movies"]; //-Локации футера
  const [isLiked, setIsLiked] = useState(false); //- Отметка сохранить
  const [isSavedMovies, setIsSavedMovies] = useState([]); //-Сохранённые фильмы

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
        setIsErrMessage(res.message);
      })
      .catch((err) => informError(err));
  }

  //---Вход
  function handleLogin({ email, password }) {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          tokenCheck();
        }
        setIsErrMessage(res.message);
      })
      .catch((err) => informError(err));
  }

  //---Монтирование tokenCheck()
  useEffect(() => {
    tokenCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //---Проверяем токен
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
      .then((newUser) => {
        setCurrentUser(newUser);
        setIsInfoToolTip({
          isOpen: true,
          status: true,
          message: PROFILE_EDIT_TRUE,
        });
      })
      .catch((err) => informError(err));
  }

  //---Выход из аккаунта
  function handleSignOut() {
    mainApi
      .logout()
      .then(() => {
        setLoggedIn(false);
        localStorage.clear();
        history.push("/");
      })
      .catch((err) => informError(err));
  }

  //---Сохранение фильма
  function handleSaveMovie(movie) {
    const newMovie = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: MOVIE_BASE_URL + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: MOVIE_BASE_URL + movie.image.formats.thumbnail.url,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    };
    mainApi
      .addMovie(newMovie)
      .then(() => {
        setIsLiked(true);
        getSavedMovies();
      })
      .catch((err) => informError(err));
  }

  //---Получаем сохранённые фильмы c сервера
  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        setIsSavedMovies(movies);
      })
      .catch((err) => informError(err));
  }

  //---Удаление фильма
  function handleDeleteMovie(movie) {
    setIsLiked(false);
    const savedMovie = isSavedMovies.find(
      (i) => i.movieId === movie.id || i.movieId === movie.movieId
    );
    mainApi
      .deleteMovie(savedMovie._id)
      .then(() => {
        getSavedMovies();
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

  useEffect(() => {}, []);

  useEffect(() => {
    if (loggedIn && currentUser) {
      getSavedMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Route exact path={headerPath}>
          <Header loggedIn={loggedIn} />
        </Route>
        <Switch>
          <Route exact path="/" component={Main} loggedIn={loggedIn} />
          <ProtectedRoute
            path="/movies"
            component={Movies}
            savedMovies={isSavedMovies}
            loggedIn={loggedIn}
            onSaveClick={handleSaveMovie}
            onDeleteClick={handleDeleteMovie}
            isLiked={isLiked}
          />
          <ProtectedRoute
            path="/saved-movies"
            component={SavedMovies}
            loggedIn={loggedIn}
            savedMovies={isSavedMovies}
            onDeleteClick={handleDeleteMovie}
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
            <Login handleLogin={handleLogin} isErrMessage={isErrMessage} />
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
