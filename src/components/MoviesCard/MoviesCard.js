import "./MoviesCard.css";
import React, { useContext, useEffect, useState } from "react";
import { durationConverter } from "../../utils/utils";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { MOVIE_BASE_URL } from "../../utils/constants";

function MoviesCard(props) {
  const location = useLocation();
  const currentUser = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(false);
  const isSavedMovie = props.savedMovies.find(
    (i) => i.nameRU === props.movie.nameRU && i.owner === currentUser._id
  ); //- Сохранённый фильм
  const cardLikeClassName = `movies-card__like ${
    isLiked ? "movies-card__like_active" : " "
  }`; //-Добавляем модификатор

  //---Клик по кнопке "Сохранить"
  function handleSaveClick() {
    if (isLiked) {
      props.onDeleteClick(props.movie);
      setIsLiked(false);
    } else {
      props.onSaveClick(props.movie);
    }
  }

  //---Клик по кнопке "Удалить"
  function handleDeleteClick() {
    props.onDeleteClick(props.movie);
  }

  //---Отмечаем кнопку у сохранённых фильмов
  useEffect(() => {
    if (isSavedMovie) {
      setIsLiked(true);
    }
  }, [isSavedMovie]);

  return (
    <>
      <li className="movies-card">
        <div className="movies-card__container">
          <div className="movies-card__info">
            <h2 className="movies-card__title">{props.movie.nameRU}</h2>
            <p className="movies-card__duration">
              {durationConverter(props.movie.duration)}
            </p>
          </div>
          {location.pathname === "/movies" ? (
            <button
              className={cardLikeClassName}
              type="button"
              onClick={handleSaveClick}
            ></button>
          ) : (
            <button
              className="movies-card__delete"
              type="button"
              onClick={handleDeleteClick}
            ></button>
          )}
        </div>
        <a
          href={props.movie.trailerLink}
          className="movies-card__images"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="movies-card__images"
            src={
              props.isSaved
                ? props.movie.image
                : MOVIE_BASE_URL + props.movie.image.url
            }
            alt={props.movie.nameRU}
          />
        </a>
      </li>
    </>
  );
}

export default MoviesCard;
