import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='text-start container'>
            <h3 className='py-4 text-center review-heading'>Questions and Answers</h3>
            <h4>What is Context API?</h4>
            <p><span className='fw-bold'>Answer:</span> To eradicate props-drilling from every level of the app, context api is used which is a React structure, enables sending data from one parent component to any component in the app structure. the sendable data can be any type. it could be function, string, numeric, array, object etc. also context api enable sending multiple data at once</p>
            this createContext() returns a consumer and provider. this Provide context provides state with the children. this provider holds all components. it means it can provide its value to all this holing components. Then going to the components, useContext is used to get the value of the provider context.
            <h3 className='py-4'>Questions and Answers</h3>
            <h4>What is Semantic Tag?</h4>
            <p><span className='fw-bold'></span>
            Semantic Tag are those which provides meaning to an HTML page rather than only presentation. it makes HTML more SEO friendly and machine readable. With the help of the semantic Tab Web Accessibility can be determined. 

            Semantic element tag core characteristic is clearly communicated its meaning to both browser and developer.
            <br />
            
            semantic gives web accessibility, gives better search engines optimization. page made with semantic tag are better understandable. also this tag gives better user experience. 
            semantic tag are used very often to make web more user friendly.
            </p>

        </div>
    );
};

export default Blogs;