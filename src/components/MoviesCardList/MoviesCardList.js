import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DESKTOP,
  TABLET,
  MOVIES_IN_ROW_DESKTOP,
  MOVIES_IN_ROW_TABLET,
  MOVIES_IN_ROW_MOBILE,
  ADD_MOVIES_DESKTOP,
  ADD_MOVIES_TABLET,
  ADD_MOVIES_MOBILE,
} from "../../utils/constants";

function MoviesCardList(props) {
  const location = useLocation().pathname;
  const [isShowNumberMovies, setIsShowNumberMovies] = useState(
    window.innerWidth >= DESKTOP
      ? MOVIES_IN_ROW_DESKTOP
      : window.innerWidth >= TABLET
      ? MOVIES_IN_ROW_TABLET
      : MOVIES_IN_ROW_MOBILE
  ); //-Показывает число фильмов от ширины экрана
  const [isNumberAddMovies, setIsNumberAddMovies] = useState(
    window.innerWidth >= TABLET ? ADD_MOVIES_DESKTOP : ADD_MOVIES_TABLET
  ); //-Добавляет необходимое число фильмов
  const [isShowMore, setIsShowMore] = useState(false); //-Показать кнопку "Ещё"
  const newShowMovies =
    location === "/movies"
      ? props.searchMovies.slice(0, isShowNumberMovies)
      : props.savedMovies; //-Отображаемые фильмы

  //---Отображаемое и добавляемое колличество фильмов от ширины дисплея
  function handleResize() {
    if (window.innerWidth >= DESKTOP) {
      setIsShowNumberMovies(MOVIES_IN_ROW_DESKTOP);
      setIsNumberAddMovies(ADD_MOVIES_DESKTOP);
    } else if (window.innerWidth >= TABLET) {
      setIsShowNumberMovies(MOVIES_IN_ROW_TABLET);
      setIsNumberAddMovies(ADD_MOVIES_TABLET);
    } else {
      setIsShowNumberMovies(MOVIES_IN_ROW_MOBILE);
      setIsNumberAddMovies(ADD_MOVIES_MOBILE);
    }
  }

  // ---Отслеживаем изменение ширины экрана
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ---Добавить ещё фильмы
  function addMoreMovies() {
    setIsShowNumberMovies((e) => e + isNumberAddMovies);
  }

  // ---Сбрасываем число отображаемых фильмов про новом поиске
  useEffect(() => {
    handleResize();
  }, [props.searchMovies]);

  useEffect(() => {
    if (
      location === "/movies" &&
      newShowMovies.length < props.searchMovies.length
    ) {
      setIsShowMore(true);
    } else {
      setIsShowMore(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchMovies, newShowMovies.length]);

  return (
    <>
      <section className="movies-card-list">
        <ul className="movies-card-list__movies">
          {newShowMovies.map((movie) => (
            <MoviesCard
              searchMovies={props.searchMovies}
              savedMovies={props.savedMovies}
              movie={movie}
              key={props.isSaved ? movie._id : movie.id}
              onSaveClick={props.onSaveClick}
              onDeleteClick={props.onDeleteClick}
              isLiked={props.isLiked}
              isSaved={props.isSaved}
            />
          ))}
        </ul>
        {location === "/movies" && isShowMore ? (
          <More onClick={addMoreMovies} />
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default MoviesCardList;
