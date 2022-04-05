import React from 'react';
import './StarIcon.css'

const StarIcon = ({singleIcon}) => {
    return (
        <div className='px-1 star'>
            <img className='img-fluid' src={singleIcon.star} alt="" />
        </div>
    );
};

export default StarIcon;