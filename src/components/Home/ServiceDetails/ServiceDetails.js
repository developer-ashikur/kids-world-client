import React from 'react';
import { faLongArrowAltRight, faWheelchair, faBook, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServiceDetails.css';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ service }) => {
    const { image, title, totalSits, totalLessons, duration, price, _id } = service;
    return (
        <div className="col-lg-4 col-md-7 col-sm-9 mb-5">
            <div className="single-course">
                <div className="course-thumb">
                    <img src={image} alt="course" />
                </div>
                <div className="course-content bg-white">
                    <div className="course-top">
                        <h4 className="title">{title}</h4>
                        <ul>
                            <li><FontAwesomeIcon className='course-icon' icon={faWheelchair} /> {totalSits} Sits</li>
                            <li><FontAwesomeIcon className='course-icon' icon={faBook} /> {totalLessons} Lessons</li>
                            <li><FontAwesomeIcon className='course-icon' icon={faClock} /> {duration} Hours</li>
                        </ul>
                        <h6>${price}</h6>
                    </div>
                    <div className="text-center">
                        <Link to={`/book/${_id}`} className="brand-btn">Buy Now <FontAwesomeIcon className='btn-icon' icon={faLongArrowAltRight} /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;