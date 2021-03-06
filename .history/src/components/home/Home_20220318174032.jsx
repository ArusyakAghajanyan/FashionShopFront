import Cards from "../card/Cards";
import "../home/home.css";
import Slides from "../slider/Slides";
import { useAuth0 } from "@auth0/auth0-react";

const {user, isAuthenticated} = useAuth0();
console.log(useAuth0;

const Home = () => {
    return (
        <div className="home">
            <Slides />
           <Cards />
        </div>
    );
}

export default Home;
