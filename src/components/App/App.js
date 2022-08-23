import "./App.css";
import React, { useState, useEffect } from "react";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import InfoTooltipPopup from "../InfoTooltipPopup/InfoTooltipPopup";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "../Main/Main";
import mainApi from "../../utils/MainApi";

function App() {
  const history = useHistory();
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  //---Открываем попап сообщения
  function handleInfoTooltipOpen() {
    setIsInfoToolTipOpen(true);
  }


  function handleRegister({ name, email, password }) {
    return mainApi
      .register(name, email, password)
      .then((res) => {
        if (!res.message) {
          setIsRegistered(true);
          handleInfoTooltipOpen();
        } else {
          setIsRegistered(false);
          setErrorMessage(res.message);
          handleInfoTooltipOpen();
        }        
        history.push("/singin");
      })
      .catch((err) => {
        setIsRegistered(false);
        setErrorMessage(err);
        handleInfoTooltipOpen();
      });
  }
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register handleRegister={handleRegister}/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <InfoTooltipPopup />
    </div>
  );
}

export default App;
