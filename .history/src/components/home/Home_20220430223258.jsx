import Cards from "../card/Cards";
import Slide from "../slider/Slides.jsx";
import slidesData from "../../services/slideData.js";
import

import "../home/home.css";
function handleDismiss() {
  setResponseInfo("");
}
const [responseInfo, setResponseInfo] = useState("");
function Home() {
  let countPageProduct = 2; 
  return (
    <div className="home ui container">
      <Slide slides={slidesData()} />
      <Cards pageDevider={countPageProduct}/>
    </div>
     {responseInfo && responseInfo.length > 0 ? (
      <Sticky>
        
        <Message success onDismiss={handleDismiss} content={responseInfo} />
      </Sticky>
    ) : (
      ""
    )}
    <Slide slides={slidesData()} />

    <Cards pageDevider={countPageProduct} setResponseInfo={setResponseInfo} />
  );
}
export default Home;
