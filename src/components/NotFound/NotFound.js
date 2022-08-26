import "./NotFound.css";
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();
  
  function goBack() {
    history.goBack();
  }

  return (
    <>
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Страница не найдена</p>
        <button 
          className="not-found__back-button" 
          type="button"
          onClick={goBack}
        >
          Назад
        </button>
      </section>
    </>
  );
}

export default NotFound;
