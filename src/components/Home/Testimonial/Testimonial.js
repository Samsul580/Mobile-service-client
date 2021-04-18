import React, { useEffect, useState } from 'react';
import './Testimonial.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://agile-woodland-49427.herokuapp.com/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="testimonial">
            <h1 className="text-center">WHAT POEPLE SAY ABOUT US</h1>
            <p className="text-center my-4">Our clients love us!</p>
            <div className="container testimonial-area">

                {
                    reviews.map(review => 
                    <div>
                        <p>“{review.description}”</p>
                        <h3>{review.name}</h3>
                        <h5>{review.designation}</h5>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Testimonial;