import React from "react";
import "./Home.css";
import image from "../../image/mavic 3.png";
import HomeReview from "../HomeReview/HomeReview";
import useReview from "../../Hook/useReview";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [reviews, setReviews] = useReview();
    const navigate = useNavigate();
    console.log(reviews);
  return (
    <div>
      <div className="text-center text-lg-start my-lg-5 container d-flex flex-column flex-lg-row justify-content-lg-between justify-content-center align-items-center py-5">
        <div className="article pe-lg-5">
          <h1>DJI MAVIC 3 Drone</h1>
          <h1>HANDS ON REVIEW </h1>
          <p>
            DJI mavic 3 is one of the best drone in the market now. This drone
            is loved by many professional film maker, YouTuber, Photographer. We
            are arranging the reviews all over the world for you that you dont
            need west time researching this drone.
          </p>
          <button className="live-demo-btn">Live Demo</button>
        </div>
        <div className="img-holder2">
          <img className="img-fluid" src={image} alt="" />
        </div>
      </div>
      <div>
      <h2 className="review-heading pt-5 pb-4">Customer Reviews(3)</h2>
      </div>
        <div className="d-flex flex-column flex-lg-row justify-content-lg-around container">

        {
          reviews.slice(0,3).map(review => <HomeReview review={review} key={review.id}></HomeReview>)
      }
        </div>
        <div className="py-5">
            <button onClick={()=>navigate("/review")} className="live-demo-btn">See All Reviews</button>
        </div>
    </div>
  );
};

export default Home;
