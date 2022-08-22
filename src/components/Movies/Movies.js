import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [formClick, setFormClick] = useState();

  function showMovies() {
    const getMovies = JSON.parse(localStorage.getItem("moviesByFilter"));
    setMovies(getMovies);
  }
  

  useEffect(() => {
    showMovies();
  }, [formClick]);
  

  return (
    <>
      <Header />
      <main>
        <SearchForm
          handleSubmit={props.handleSubmit}
          onClick={setFormClick}
        />
        <MoviesCardList
          movies={movies}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
