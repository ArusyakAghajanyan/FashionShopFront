import React from "react";
import Cards from "../card/Cards";
import Slide from "../slider/Slides.jsx";
import slidesData from "../../services/slideData.js";
import {Sticky, Message} from "semantic-ui-react";
import useResponseInfo from "../customHook/useResponseInfo";
import {useState} from "react";
import "../home/home.css";
function Home() {
function handleDismiss() {
  setResponseInfo("");
}
const [responseInfo, setResponseInfo] = useState("");

  let countPageProduct = 2; 
  return (
    <div className="home ui container">
       {responseInfo && responseInfo.length > 0 ? (
        <Sticky>
          
          <Message success onDismiss={handleDismiss} content={responseInfo} />
        </Sticky>
      ) : (
        ""
      )}
      <Slide slides={slidesData()} />

      <Cards pageDevider={countPageProduct} setResponseInfo={setResponseInfo} />
    
    </div>
    
  );
}
export default Home;
