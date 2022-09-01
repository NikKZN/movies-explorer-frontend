import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import moviesApi from "../../utils/MoviesApi";
import { shortMovies, searchByRequest } from "../../utils/utils";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import MoviesSearchError from "../MoviesSearchError/MoviesSearchError";
import {
  REQUEST_ERROR,
  NOT_FOUND,
  SEARCH_VALIDATION,
} from "../../utils/constants";

function Movies(props) {
  const [allMovies, setAllMovies] = useState([]); //-Массив всех фильмов
  const [userSearchMovies, setUserSearchMovies] = useState([]); //-Фильмы по поиску
  const [searchQuerySaved, setSearchQuerySaved] = useState(""); //-Поисковый запрос
  const [isShortMovies, setIsShortMovies] = useState(false); //-Состояние чекбокса короткометражки
  const [moviesNotFound, setMoviesNotFound] = useState(false); //-Если ничего не найдено
  const [searchMessage, setSearchMessage] = useState(""); //-Сщщбщение о результатах поиска
  const [isLoading, setIsLoading] = useState(false); //-Активатор прелоадера

  //---Проверяем наличие базы фильмов
  function handleSubmit(searchInput) {
    setIsLoading(true);
    setSearchMessage("");
    if (allMovies.length === 0) {
      moviesApi
        .getMovies()
        .then((movies) => {
          setAllMovies(movies);
          handleSearchMovies(movies, searchInput);
        })
        .catch(() => {
          setSearchMessage(REQUEST_ERROR);
          setMoviesNotFound(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      handleSearchMovies(allMovies, searchInput);
      setIsLoading(false);
    }
    localStorage.setItem("userStateCheckbox", isShortMovies);
  }

  //---Ищем фильмы по запросу
  function handleSearchMovies(movies, searchInput) {
    localStorage.setItem("userStateCheckbox", JSON.stringify(isShortMovies));
    const moviesByRequest = searchByRequest(movies, searchInput);
    if (moviesByRequest.length === 0) {
      setSearchMessage(NOT_FOUND);
      setMoviesNotFound(true);
    } else {
      setMoviesNotFound(false);
      setSearchMessage("");
      localStorage.setItem("userMovies", JSON.stringify(moviesByRequest));
      localStorage.setItem("userSearchInput", searchInput);
      searchByShortMovies(moviesByRequest);
    }
  }

  //----Фильтрация короткометражек
  function searchByShortMovies(moviesByRequest) {
    if (isShortMovies && moviesByRequest) {
      const userShortMovies = shortMovies(moviesByRequest);
      if (userShortMovies.length === 0) {
        setSearchMessage(NOT_FOUND);
        setMoviesNotFound(true);
      } else {
        setUserSearchMovies(userShortMovies);
      }
    } else {
      setUserSearchMovies(JSON.parse(localStorage.getItem("userMovies")));
    }
  }

  //---Получаем результат поиска
  function getSearchResult() {
    setUserSearchMovies(JSON.parse(localStorage.getItem("userMovies")));
    setSearchQuerySaved(localStorage.getItem("userSearchInput"));
    setIsShortMovies(JSON.parse(localStorage.getItem("userStateCheckbox")));
  }

  //---Отображаем результат поиска
  useEffect(() => {
    if (localStorage.userMovies) {
      getSearchResult();
    } else {
      setMoviesNotFound(true);
      setSearchMessage(SEARCH_VALIDATION);
    }
  }, []);

  //---Эффект от переключателя короткометражек
  useEffect(() => {
    searchByShortMovies(userSearchMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShortMovies]);

  return (
    <>
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
          value={searchQuerySaved}
          onChangeCheckbox={() => setIsShortMovies(!isShortMovies)}
          checkedCheckbox={isShortMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : moviesNotFound ? (
          <MoviesSearchError message={searchMessage} />
        ) : (
          <MoviesCardList
            searchMovies={userSearchMovies}
            savedMovies={props.savedMovies}
            isLoading={isLoading}
            onSaveClick={props.onSaveClick}
            onDeleteClick={props.onDeleteClick}
            isLiked={props.isLiked}
            isSaved={false}
          />
        )}
      </main>
    </>
  );
}

export default Movies;
