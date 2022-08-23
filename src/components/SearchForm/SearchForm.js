import "./SearchForm.css";
import icon from "../../images/SearchForm/icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useState } from "react";

function SearchForm(props) {
  const [errorSearch, setErrorSearch] = useState('');//-Ошибка инпута
  const [inputSearch, setInputSearch] = useState('');//-Поисковый запрос

  function handleSearchChange(e) {
    setInputSearch(e.target.value);
    setErrorSearch('');
  }  


  function handleSearchSubmit(e) {
    e.preventDefault();
    inputSearch ? props.handleSubmit(inputSearch) : setErrorSearch("Нужно ввести ключевое слово!");
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
                value={inputSearch || props.value}
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
              onChange={props.onChangeCheckbox}
              checked={props.checkedCheckbox}
            />
          </form>          
        </div>
      </section>
    </>
  );
}

export default SearchForm;
