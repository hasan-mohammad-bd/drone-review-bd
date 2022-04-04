import React from 'react';
import useReview from '../../Hook/useReview';
import HomeReview from '../HomeReview/HomeReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReview()
    return (
        <div className='review-card-all'>
            {
                reviews.map(review => <HomeReview review={review} key={review.id}></HomeReview>)
            }
        </div>
    );
};

export default Review;