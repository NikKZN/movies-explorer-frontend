import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
      <Header />
      <SearchForm />
      <p className='p3'>Тут будут сохранённые фильмы!</p>
      <Footer />
    </>
  );
};

export default SavedMovies;
