import "./SearchForm.css";
import icon from "../../images/SearchForm/icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useEffect, useState } from "react";
import useFormValidation from "../../hooks/useFormValidation";
import { MISSING_INPUT } from "../../utils/constants";

function SearchForm(props) {
  const { values, handleChange, isValid } = useFormValidation();
  const [searchError, setSearchError] = useState("");

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (values.search) {
      props.handleSubmit(values.search);
      setSearchError("");
    } else {
      setSearchError(MISSING_INPUT);
    }
  }

  useEffect(() => {
    setSearchError("");
  }, [isValid]);

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
                placeholder={props.value || "Фильм"}
                autoComplete="off"
                minLength="1"
                maxLength="200"
                required
                value={values.search || ""}
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
