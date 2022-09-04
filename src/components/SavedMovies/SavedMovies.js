import React, { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesSearchError from "../MoviesSearchError/MoviesSearchError";
import { shortMovies, searchByRequest } from "../../utils/utils";
import { NOT_FOUND } from "../../utils/constants";

function SavedMovies(props) {
  const [searchQuerySavedMovies, setSearchQuerySavedMovies] = useState(""); //-Поисковый запрос
  const [userSearchSavedMovies, setUserSearchSavedMovies] = useState([]); //-Фильмы по поиску
  const [isShortMovies, setIsShortMovies] = useState(false); //-Состояние чекбокса короткометражки
  const [moviesNotFound, setMoviesNotFound] = useState(false); //-Если ничего не найдено
  const [searchMessage, setSearchMessage] = useState(""); //-Сщщбщение о результатах поиска

  //---Ищем в сохранённых фильмах
  function handleSubmit(searchInput) {
    const moviesByRequest = searchByRequest(props.savedMovies, searchInput);
    const userShortMovies = shortMovies(moviesByRequest);
    if (isShortMovies) {
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
      setUserSearchSavedMovies(result);
    }
    setSearchQuerySavedMovies("");
  }

  useEffect(() => {
    handleSubmit(searchQuerySavedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.onDeleteClick, searchQuerySavedMovies, isShortMovies]);

  return (
    <>
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
          onChangeCheckbox={() => setIsShortMovies(!isShortMovies)}
          checkedCheckbox={isShortMovies}
        />
        {moviesNotFound ? (
          <MoviesSearchError message={searchMessage} />
        ) : (
          <MoviesCardList
            savedMovies={userSearchSavedMovies}
            isSaved={true}
            onDeleteClick={props.onDeleteClick}
          />
        )}
      </main>
    </>
  );
}

export default SavedMovies;
