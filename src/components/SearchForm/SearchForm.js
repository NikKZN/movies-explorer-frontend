import "./SearchForm.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import icon from "../../images/SearchForm/icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { MISSING_INPUT } from "../../utils/constants";

function SearchForm(props) {
  const location = useLocation().pathname;
  const [inputValue, setInputValue] = useState("");
  const [searchError, setSearchError] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (inputValue) {
      props.handleSubmit(inputValue);
      setSearchError("");
    } else {
      setSearchError(MISSING_INPUT);
    }
  }

  useEffect(() => {
    if (location === "/movies") {
      setInputValue(localStorage.getItem("userSearchInput"));
    }
  }, [location]);

  useEffect(() => {
    setSearchError("");
  }, []);

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
                className={`search__input ${
                  searchError ? "search__input_invalid" : ""
                }`}
                type="text"
                name="search"
                placeholder={"Фильм"}
                autoComplete="off"
                minLength="1"
                maxLength="200"
                required
                value={inputValue || ""}
                onChange={handleChange}
              />
              <span className="search__input-error">{searchError || ""}</span>
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
