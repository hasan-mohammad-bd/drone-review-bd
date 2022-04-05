import React from "react";
import "./HomeReview.css";
import StarIcon from "../StarIcon/StarIcon";


const HomeReview = ({ review }) => {
  const { img, name, para ,icon } = review;
  return (
    <div className="review-card p-3 m-4 card">
      <div className="img-holder3">
        <img className="img-fluid man-img" src={img} alt="" />
      </div>
      <h5 className="py-2">{name}</h5>
      <div className="d-flex mx-auto">
    {
        icon.map(singleIcon => <StarIcon singleIcon={singleIcon} key={singleIcon.id2}></StarIcon>)
      }
    </div>
      <p className="my-2">{para}</p>    

    </div>
  );
};

export default HomeReview;
