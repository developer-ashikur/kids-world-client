import React, { useEffect, useState } from 'react';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/reviews')
        .then(res => res.json())
        .then(data => setTestimonialData(data))
    }, []);
    
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row justify-content-center">
                <div className="brand-title">
                        <h4>Our Testimonials</h4>
                        <h1>What Our Parents Say <br/> About Kidcave</h1>
                    </div>
                </div>
                <div className="row justify-content-center py-5">
                    {
                        testimonialData.map(testimonial => <TestimonialDetails key={testimonial.name} testimonial={testimonial}></TestimonialDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;