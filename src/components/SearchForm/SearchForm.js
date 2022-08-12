import "./SearchForm.css";
import icon from "../../images/SearchForm/icon.svg";
import find from "../../images/SearchForm/find.svg";

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
              <button className="search__button">
                <img className="search__button-icon" src={find} alt="Найти." />
              </button>
            </div>
            <div className="search__checkbox">
              <input
                type="checkbox"
                className="search__checkbox-selector"
                id="short-films"
                name="short-films"
                value="yes"
              />
              <label for="short-films">Короткометражки</label>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default SearchForm;
