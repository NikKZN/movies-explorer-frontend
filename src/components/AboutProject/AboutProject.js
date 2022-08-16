import "./AboutProject.css";

function AboutProject() {
  return (
    <>
      <div className="main__about-project about-project">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__length">
          <div className="about-project__stages">
            <h3 className="about-project__subtitle">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__dates">
            <h3 className="about-project__subtitle">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__period">
          <p className="about-project__back-end">1 неделя</p>
          <p className="about-project__front-end">4 недели</p>
          <span className="about-project__back-end-text">Back-end</span>
          <span className="about-project__front-end-text">Front-end</span>
        </div>
      </div>
    </>
  );
}

export default AboutProject;
