import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="main__footer footer">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__content">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__links">
            <li className="footer__item">
              <a
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://practicum.yandex.ru"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/NikKZN"
              >
                Github
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com/nikolakzn"
              >
                Вконтакте
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
