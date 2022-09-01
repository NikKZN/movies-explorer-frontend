import React, { useEffect, useState, } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesSearchError from "../MoviesSearchError/MoviesSearchError";
import { shortMovies, searchByRequest } from "../../utils/utils";
import {
  NOT_FOUND
} from "../../utils/constants";

function SavedMovies(props) {
  
  const [userSearchSavedMovies, setUserSearchSavedMovies] = useState(props.savedMovies); //-Фильмы по поиску
  const [isShortMovies, setIsShortMovies] = useState(false); //-Состояние чекбокса короткометражки
  const [moviesNotFound, setMoviesNotFound] = useState(false); //-Если ничего не найдено
  const [searchMessage, setSearchMessage] = useState(""); //-Сщщбщение о результатах поиска


  
   //---Ищем в сохранённых фильмах
   function handleSubmit(searchInput) {
    if (props.savedMovies.length > 0) {
      if (!isShortMovies) {
        setUserSearchSavedMovies(searchByRequest(props.savedMovies, searchInput));
      } else {
        setUserSearchSavedMovies(shortMovies(searchByRequest(props.savedMovies, searchInput)));
      }
    } else {
      setSearchMessage(NOT_FOUND);
      setMoviesNotFound(true);
    }
  }

  useEffect(() => {
    console.log('поменялись сохранённые')
  }, [])
  

  return (
    <>
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
          // value={searchQuerySaved}
          onChangeCheckbox={() => setIsShortMovies(!isShortMovies)}
          checkedCheckbox={isShortMovies}
        />
        {moviesNotFound ? (
          <MoviesSearchError message={searchMessage} />
        ) : (
          <MoviesCardList 
            savedMovies={userSearchSavedMovies}
            // savedMovies={props.SavedMovies}
            isSaved={true}
            onDeleteClick={props.onDeleteClick}
          />
        )}
      </main>
    </>
  );
}

export default SavedMovies;
