import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import More from "../More/More";
import Preloader from "../Preloader/Preloader";

function MoviesCardList() {
  return (
    <>
      <section className="movies-card-list">
        <div className="movies-card-list__element">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <Preloader />
        </div>
        <More />
      </section>
    </>
  );
}

export default MoviesCardList;
