import React from "react";
import "./HomeReview.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HomeReview = ({ review }) => {
  const { img, name, para, rating } = review;
  console.log(review);
  return (
    <div className="review-card p-3 m-4 card">
      <div className="img-holder3">
        <img className="img-fluid man-img" src={img} alt="" />
      </div>
      <h5 className="py-2">{name}</h5>
      <div className="img-holder4 mx-auto">
        <img className="img-fluid star" src={rating} alt="" />
      </div>
      <p className="my-2">{para}</p>
    </div>
  );
};

export default HomeReview;
