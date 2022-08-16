import "./SearchForm.css";
import icon from "../../images/SearchForm/icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <>
      <section className="search">
        <div className="search__wrapper">
          <form className="search__form">
            <div className="search__container">
              <img className="search__icon" src={icon} alt="Иконка поиска." />
              <input
                className="search__input"
                type="text"
                placeholder="Фильм"
                minLength="1"
                maxLength="200"
                required
              />
              <button className="search__button" type="submit"></button>
            </div>
            <FilterCheckbox />
          </form>
        </div>
      </section>
    </>
  );
}

export default SearchForm;
