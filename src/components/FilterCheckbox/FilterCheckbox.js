import "./FilterCheckbox.css";

function FilterCheckbox(props) {
  return (
    <>
      <label className="checkbox">
        <input
          type="checkbox"
          checked={props.checked}
          onChange={props.onChange}
        />
        <span className="checkbox-switch"></span>
        Короткометражки
      </label>
    </>
  );
}

export default FilterCheckbox;
