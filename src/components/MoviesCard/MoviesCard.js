import "./MoviesCard.css";
import { durationConverter } from "../../utils/utils"; 

function MoviesCard(props) {
  const isLiked = true;
  const cardLikeClassName = `movies-card__like ${isLiked ? "movies-card__like_active" : " "}`;

  // function handleLikeClick {

  // }
  return (
    <>
      <article className="movies-card">
        <div className="movies-card__container">
          <div className="movies-card__info">
            <h2 className="movies-card__title">{props.movie.nameRU}</h2>
            <p className="movies-card__duration">{durationConverter(props.movie.duration)}</p>
          </div>
          <button
            className={cardLikeClassName}
            type="button"
            onClick={props.handleLikeClick}
          ></button>
        </div>
        <a
          href={props.movie.trailerLink}
          className="movies-card__images"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img 
            className="movies-card__images" 
            src={`https://api.nomoreparties.co/${props.movie.image.url}`}
            alt={props.movie.nameRU} />
        </a>
      </article>
    </>
  );
}

export default MoviesCard;
