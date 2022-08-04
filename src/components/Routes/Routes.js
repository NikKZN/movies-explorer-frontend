import React from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import AboutProject from '../AboutProject/AboutProject';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Route, Switch } from 'react-router-dom';

function Routes() {
  return(
    <>
      <Switch>
        <Route exact path="/">
          <AboutProject />
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
            <Register />
          </Route>
      </Switch>
    </>
  )
}

export default Routes;
