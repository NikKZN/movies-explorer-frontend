import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import moviesApi from "../../utils/MoviesApi";
import { searchByFilter } from "../../utils/utils";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import MoviesSearchError from "../MoviesSearchError/MoviesSearchError";

function Movies(props) {
  const [allMovies, setAllMovies] = useState([]);//-Массив всех фильмов
  const [userSearchMovies, setUserSearchMovies] = useState([]);//-Фильмы по поиску
  const [isShortMovies, setIsShortMovies] = useState(false);//-Состояние чекбокса короткометражки
  const [moviesNotFound, setMoviesNotFound] = useState(false);//-Если ничего не найдено
  const [searchQuerySaved, setSearchQuerySaved] = useState('');//-Поисковый запрос

 

  function handleSearchMovies(movies, searchInput, shortMovies) {
    const moviesByFilter = searchByFilter(movies, searchInput, shortMovies);

    if (moviesByFilter.length === 0) {
      setMoviesNotFound(true);
    } else {
      setMoviesNotFound(false)
    }
    setUserSearchMovies(moviesByFilter);
    localStorage.setItem(
      "moviesByFilter",
      JSON.stringify({
        userMovies: moviesByFilter,
        userSearchInput: searchInput,
        userStateCheckbox: shortMovies
      })
    );

  }   

  function handleSubmit(searchInput) {
    if (allMovies.length === 0) {
      moviesApi
      .getMovies()
      .then((movies) => {
        setAllMovies(movies);
        handleSearchMovies(
          movies,
          searchInput,
          isShortMovies
        );
      })
      .catch(alert);
    } else {
      handleSearchMovies(allMovies, searchInput, isShortMovies);
    }
  }  

  function showMovies() {
    const getMovies = JSON.parse(localStorage.getItem("moviesByFilter"));
    setUserSearchMovies(getMovies.userMovies);
    setSearchQuerySaved(getMovies.userSearchInput)
    setIsShortMovies(getMovies.userStateCheckbox)

  }
  

  useEffect(() => {
    showMovies();
  }, []);
  

  return (
    <>
      <Header />
      <main>
        <SearchForm
          handleSubmit={handleSubmit}
          setMoviesNotFound={setMoviesNotFound}
          onChangeCheckbox={() => setIsShortMovies(!isShortMovies)}
          checkedCheckbox={isShortMovies}
          value={searchQuerySaved}       
        />
        {moviesNotFound ? (
          <MoviesSearchError
            message={'Ничего не найдено!'}
          />          
        ) : (
          <MoviesCardList
            movies={userSearchMovies}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
