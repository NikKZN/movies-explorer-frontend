import "./AboutMe.css";
import avatar from "../../images/AboutMe/nik2.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <>
      <div className="main__about-me about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__content">
          <div className="about-me__info">
            <h3 className="about-me__name">Николай</h3>
            <p className="about-me__job">Фронтенд-разработчик, 39 лет</p>
            <p className="about-me__about">
              Живу в Казани, закончил факультет самолётостроения КНИТУ-КАИ.
              Люблю учиться чему-то новому и совершенствовать старые навыки. Со
              школы интересовался программированием, в 2022г. прошёл курс по
              веб-разработке и решил профессионально заняться написанием кода.
            </p>
            <ul className="about-me__contacts">
              <li className="about-me__item">
                <a
                  className="about-me__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://vk.com/nikolakzn"
                >
                  Вконтакте
                </a>
              </li>
              <li className="about-me__item">
                <a
                  className="about-me__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/NikKZN"
                >
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
