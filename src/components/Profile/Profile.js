import Header from "../Header/Header";
import "./Profile.css";

function Profile() {
  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__greeting">Привет, Виталий!</h1>
        <form className="profile__edit-form">
          <label className="profile__label">
            Имя
            <input
              className="profile__input"
              name="name"
              type="text"
              placeholder="Виталий"
              required
            />
          </label>
          <label className="profile__label">
            E-mail
            <input
              className="profile__input"
              name="email"
              type="email"
              placeholder="pochta@yandex.ru"
              required
            />
          </label>
        </form>
        <div className="profile__buttons">
          <button className="profile__button-edit" type="submit">
            Редактировать
          </button>
          <button className="profile__button-exit" type="button" role="link">
            Выйти из аккаунта
          </button>
        </div>
      </section>
    </>
  );
}

export default Profile;
