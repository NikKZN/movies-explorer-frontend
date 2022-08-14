import "./Portfolio.css";
import arrow from "../../images/AboutMe/arrow.svg";

function Portfolio() {
  return (
    <>
      <div className="main__portfolio portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">
          <li className="portfolio__item">
            <a className="portfolio__link" target="_blank" rel="noopener noreferrer" href="https://github.com/NikKZN">
              Статичный сайт
              <img className="portfolio__link-img" src={arrow} alt="Стрелка." />
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" target="_blank" rel="noopener noreferrer" href="https://github.com/NikKZN">
              Адаптивный сайт
              <img className="portfolio__link-img" src={arrow} alt="Стрелка." />
            </a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" target="_blank" rel="noopener noreferrer" href="https://github.com/NikKZN">
              Одностраничное приложение
              <img className="portfolio__link-img" src={arrow} alt="Стрелка." />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Portfolio;
