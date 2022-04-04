import React from "react";
import useReview from "../../Hook/useReview";
import HomeReview from "../HomeReview/HomeReview";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="container">
      <h2 className="review-heading pt-5 pb-4">Customer Reviews</h2>
      <div className="review-card-all">
        {reviews.map((review) => (
          <HomeReview review={review} key={review.id}></HomeReview>
        ))}
      </div>
    </div>
  );
};

export default Review;
