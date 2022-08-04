import './Promo.css';
import logo from "../../images/Promo/logo.svg"

function Promo() {
  return (
    <>
      <div className='main__promo promo'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        <img 
          className='promo__logo'
          src={logo}
          alt="Логотип фильмотека."
        />
      </div>    
    </>    
  );
}

export default Promo;
