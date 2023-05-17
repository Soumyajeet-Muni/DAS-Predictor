import React from "react";
import frontpg7 from "../images/frontpg5.png";
import "./home.css";
import {useNavigate} from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  return (
    
        < div className="container">
                    <h1 className="title">
                      <strong>
                         <span className="span" >Depression Anxiety And Stress level Predictor  </span>
                      </strong>
                      </h1>
                      <div className="vec">
                      
                      <div className="container m-4 ">
                      <img src={frontpg7} alt="frontpg3" className="img" />
                       
                      </div>
                      <strong>
                         <div className="quote" >"Depression Anxiety And Stress are caused when are living to please others"  </div>
                      </strong>
                      </div>
                      <br></br>
                      <br></br>
                      <div className="quotes">Click below to Assess levels of Stress , Anxiety and Depression</div>
                      <div className="title-new">
                        
                        <button onClick={() => navigate('/login')}>🍃DASL Detector </button></div>
                     
                    
          </div>
  );
};

export default Home;