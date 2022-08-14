import './MoviesCard.css';
import image from '../../images/MoviesCard/movies.png';

function MoviesCard() {
  return (
    <>
      <article className='movies-card'>
        <div className='movies-card__container'>
          <div className='movies-card__info'>
            <h2 className='movies-card__title'>33 слова о дизайне</h2>
            <p className='movies-card__duration'>1ч 47м</p>
          </div>
          <button
            className='movies-card__like'
            type='button'
          ></button>
        </div>
        <a href="ya.ru" target="_blank" rel="noopener noreferrer">
          <img className="movies-card__images" src={image} alt="Фильм" />
        </a>
      </article>
    </>
  )
}

export default MoviesCard;
