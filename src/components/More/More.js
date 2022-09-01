import "./More.css";

function More(props) {
  return (
    <>
      <div className="more">
        <button
          className="more__button"
          type="button"
          onClick={props.onClick}
        >
          Ещё
        </button>
      </div>
    </>
  );
}

export default More;
