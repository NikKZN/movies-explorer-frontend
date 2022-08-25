import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
// import Header from "../Header/Header";

function Main(props) {
  return (
    <>
      {/* <Header
        loggedIn={props.loggedIn}
      /> */}
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
    </>
  );
}

export default Main;
