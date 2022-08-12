import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header />
      <SearchForm />
      <p>Тут фильмы</p>
      <Footer />
    </>
  );
};

export default Movies;
