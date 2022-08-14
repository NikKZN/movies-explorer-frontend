import "./AboutMe.css";
import avatar from "../../images/AboutMe/avatar.png";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <>
      <div className="main__about-me about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__content">
          <div className="about-me__info">
            <h3 className="about-me__name">Виталий</h3>
            <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
            <p className="about-me__about">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <ul className="about-me__contacts">
              <li className="about-me__item">
                <a className="about-me__link" target="_blank" rel="noopener noreferrer" href="https://yandex.ru/">
                  Facebook
                </a>
              </li>
              <li className="about-me__item">
                <a className="about-me__link" target="_blank" rel="noopener noreferrer" href="https://github.com/NikKZN">
                  Github
                </a>
              </li>
            </ul>
          </div>
          <img
            className="about-me__foto"
            alt="Фотография студента."
            src={avatar}
          />
        </div>
        <Portfolio />
      </div>
    </>
  );
}

export default AboutMe;
