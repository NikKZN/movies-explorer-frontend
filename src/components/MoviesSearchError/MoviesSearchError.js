import "./MoviesSearchError.css";

function MoviesSearchError(props) {  
  return (
    <>
      <div className="movies_not_found">
        <p className="movies_not_found__text">{props.message}</p>
      </div>
    </>
  );
}

export default MoviesSearchError;
