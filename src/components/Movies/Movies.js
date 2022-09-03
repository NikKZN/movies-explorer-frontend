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
  const [userSearchMovies, setUserSearchMovies] = useState([]); //-Фильмы по поиску
  const [isShortMovies, setIsShortMovies] = useState(
    localStorage.userStateCheckbox
      ? JSON.parse(localStorage.getItem("userStateCheckbox"))
      : false
  ); //-Состояние чекбокса короткометражки
  const [moviesNotFound, setMoviesNotFound] = useState(false); //-Если ничего не найдено
  const [searchMessage, setSearchMessage] = useState(""); //-Сщщбщение о результатах поиска
  const [isLoading, setIsLoading] = useState(false); //-Активатор прелоадера

  //---Проверяем фильмы в локальном хранилище
  function checkMoviesInLocalStorage() {
    if (!localStorage.allMovies) {
      setIsLoading(true);
      setSearchMessage("");
      moviesApi
        .getMovies()
        .then((movies) => {
          if (movies) {
            localStorage.setItem("allMovies", JSON.stringify(movies));
            handleSearchMovies();
          } else {
            setSearchMessage(REQUEST_ERROR);
            setMoviesNotFound(true);
          }
        })
        .catch((err) => {
          setSearchMessage(err);
          setMoviesNotFound(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      handleSearchMovies();
    }
  }

  //---Сабмит поиска
  function handleSubmit(searchInput) {
    localStorage.setItem("userSearchInput", searchInput);
    localStorage.setItem("userStateCheckbox", isShortMovies);
    checkMoviesInLocalStorage();
  }

  //---Ищем фильмы по запросу
  function handleSearchMovies() {
    const allMovies = JSON.parse(localStorage.getItem("allMovies"));
    const userSearchInput = localStorage.getItem("userSearchInput");
    const userStateCheckbox = JSON.parse(
      localStorage.getItem("userStateCheckbox")
    );
    const moviesByRequest = searchByRequest(allMovies, userSearchInput);
    const userShortMovies = shortMovies(moviesByRequest);
    if (userStateCheckbox) {
      getSearchResult(userShortMovies);
    } else {
      getSearchResult(moviesByRequest);
    }
  }

  //---Получаем результат поиска
  function getSearchResult(result) {
    if (result.length === 0) {
      setSearchMessage(NOT_FOUND);
      setMoviesNotFound(true);
    } else {
      setSearchMessage("");
      setMoviesNotFound(false);
      setUserSearchMovies(result);
    }
  }

  //---Отображаем результат поиска
  useEffect(() => {
    if (!localStorage.allMovies) {
      setSearchMessage(SEARCH_VALIDATION);
      setMoviesNotFound(true);
    } else {
      setSearchMessage("");
      setMoviesNotFound(false);
      handleSearchMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("userStateCheckbox", isShortMovies);
    if (
      localStorage.allMovies &&
      localStorage.userSearchInput &&
      localStorage.userStateCheckbox
    ) {
      handleSearchMovies();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShortMovies]);

  return (
    <>
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
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
