import Cards from "../card/Cards";
import Slide from "../slider/Slides.jsx";
import slidesData from "../../services/slideData.js";
import {auth0}
import "../home/home.css";

function Home() {
  let countPageProduct = 4;
  const { error, isAuthenticated, isLoading, user, getAccessTokenSilently } =
    useAuth0();
  return (
    <div className="home ui container">
      <Slide slides={slidesData()} />
      <Cards pageDevider={countPageProduct}/>
    </div>
  );
}
export default Home;
