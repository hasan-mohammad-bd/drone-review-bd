import React from 'react';
import "./PageNotFound.css"
import image from "../../image/004.jpg"

const PageNotFound = () => {
    return (
        <div className='no-found'>
            <img className='img-fluid' src={image} alt="" />
        </div>
    );
};

export default PageNotFound;