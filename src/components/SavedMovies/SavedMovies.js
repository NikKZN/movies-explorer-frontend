import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <>
      <Header />
      <main>
        <SearchForm />
        {/* <MoviesCardList /> */}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
