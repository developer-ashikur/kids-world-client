import React from 'react';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TestimonialDetails.css';

const TestimonialDetails = ({testimonial}) => {
    const {name, profession, description} = testimonial;
    return (
        <div className='col-md-4 g-4 mb-5'>
            <div className="testimonial-item shadow p-5 rounded">
                <div className="row">
                    <div className="col-8">
                        <h5>{name}</h5>
                        <h6>{profession}</h6>
                    </div>
                    <div className="col-4">
                        <FontAwesomeIcon className='testimonial-icon' icon={faQuoteRight} />
                    </div>
                </div>
                <div className="row">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialDetails;