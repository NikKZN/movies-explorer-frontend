import "./SearchForm.css";
import icon from "../../images/SearchForm/icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";
import moviesApi from "../../utils/MoviesApi";
import { searchByFilter } from "../../utils/utils";

function SearchForm(props) {
  // const [isShortMovies, setIsShortMovies] = useState(false);
  const [errorSearch, setErrorSearch] = useState('');//-Ошибка инпута
  const [inputSearch, setInputSearch] = useState('');//-Поисковый запрос
  const [allMovies, setAllMovies] = useState([]);//-Массив всех фильмов
  const [isCheckboxState, setIsCheckboxState] = useState(false);//-Состояние чекбокса короткометражки
  function handleSubmit(input) {
    if (allMovies.length === 0) {
      moviesApi
      .getMovies()
      .then((res) => {
        setAllMovies(res)
      })
      .catch(alert);
    } else {
      localStorage.setItem(
        "moviesByFilter",
        JSON.stringify(searchByFilter(allMovies, input, isCheckboxState))
      )
    }
  }  

  function handleSearchChange(e) {
    setInputSearch(e.target.value);
    setErrorSearch('');
  }  

  function handleSearchSubmit(e) {
    e.preventDefault();
    inputSearch ? handleSubmit(inputSearch) : setErrorSearch("Нужно ввести ключевое слово!");
  }

  

  return (
    <>
      <section className="search">
        <div className="search__wrapper">
          <form 
            className="search__form"
            onSubmit={handleSearchSubmit}
            noValidate
          >
            <div className="search__container">
              <img className="search__icon" src={icon} alt="Иконка поиска." />
              <input
                className="search__input"
                type="text"
                name="search"
                placeholder="Фильм"
                autoComplete="off"
                minLength="1"
                maxLength="200"
                required
                value={inputSearch ?? ""}
                onChange={handleSearchChange}
              />
              <span className="search__input-error">{errorSearch}</span>
              <button 
                className="search__button" 
                type="submit"
                onClick={props.onClick}
              ></button>
            </div>
            <FilterCheckbox
              onChange={() => setIsCheckboxState(!isCheckboxState)}
              checked={isCheckboxState}
            />
          </form>          
        </div>
      </section>
    </>
  );
}

export default SearchForm;
