import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviesCardList(props) {
  const location = useLocation().pathname;
  const [isShowNumberMovies, setIsShowNumberMovies] = useState(
    window.innerWidth >= 1280 ? 12 : window.innerWidth >= 767 ? 8 : 5
  ); //-Показывает число фильмов от ширины экрана
  const [isNumberAddMovies, setIsNumberAddMovies] = useState(
    window.innerWidth >= 767 ? 3 : 2
  ); //-Добавляет необходимое число фильмов
  const [isShowMore, setIsShowMore] = useState(false); //-Показать кнопку "Ещё"
  const newShowMovies =
    location === "/movies"
      ? props.searchMovies.slice(0, isShowNumberMovies)
      : props.savedMovies; //-Отображаемые фильмы

  //---Отображаемое и добавляемое колличество фильмов от ширины дисплея
  function handleResize() {
    if (window.innerWidth >= 1280) {
      setIsShowNumberMovies(12);
      setIsNumberAddMovies(3);
    } else if (window.innerWidth >= 767) {
      setIsShowNumberMovies(8);
      setIsNumberAddMovies(2);
    } else {
      setIsShowNumberMovies(5);
      setIsNumberAddMovies(2);
    }
    if (location === "/movies") {
      showButtonAdd();
    }
  }

  // ---Отслеживаем изменение ширины экрана
  useEffect(() => {
    if (location === "/movies") {
      showButtonAdd();
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //---Показать кнопку Ещё
  function showButtonAdd() {
    if (newShowMovies.length === props.searchMovies.length) {
      setIsShowMore(false);
    } else {
      setIsShowMore(true);
    }
  }

  // ---Добавить ещё фильмы
  function addMoreMovies() {
    setIsShowNumberMovies((e) => e + isNumberAddMovies);
    showButtonAdd();
  }

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
