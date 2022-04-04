import React from "react";
import "./Home.css";
import image from "../../image/mavic 3.png";
import HomeReview from "../HomeReview/HomeReview";

const Home = () => {
  return (
    <div>
      <div className="text-center text-lg-start my-lg-5 container d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center align-items-center">
        <div className="article pe-lg-5">
          <h1>DJI MAVIC 3 Drone</h1>
          <h1>HANDS ON REVIEW </h1>
          <p>
            DJI mavic 3 is one of the best drone in the market now. This drone
            is lived by many professional film maker, YouTuber, Photographer. We
            are arranging the reviews all over the world for you that you dont
            need west time researching this drone.
          </p>
          <button className="live-demo-btn">Live Demo</button>
        </div>
        <div className="img-holder2">
          <img className="img-fluid" src={image} alt="" />
        </div>
      </div>
      <HomeReview></HomeReview>
    </div>
  );
};

export default Home;
