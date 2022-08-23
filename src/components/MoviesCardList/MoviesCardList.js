import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";
// import moviesApi from "../../utils/MoviesApi";
// import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
  
  
  return (
    <>
      <section className="movies-card-list">
        <ul className="movies-card-list__movies">
          {props.movies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.id}
            />                        
          ))}
        </ul>
        {/* <More /> */}
      </section>
    </>
  );
}

export default MoviesCardList;
