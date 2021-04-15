import React from 'react';
import './Services.css';
import course1 from '../../../images/course-1.jpg';
import course2 from '../../../images/course-2.jpg';
import course3 from '../../../images/course-3.jpg';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const serviceData = [
        {
            image: course1,
            title: 'English For Today',
            totalSits: 25,
            totalLessons: 12,
            duration: 10,
            price: 50.24
        },
        {
            image: course2,
            title: 'Graphics Arts',
            totalSits: 25,
            totalLessons: 12,
            duration: 10,
            price: 50.24
        },
        {
            image: course3,
            title: 'General Science',
            totalSits: 25,
            totalLessons: 12,
            duration: 10,
            price: 50.24
        }
    ];
    return (
        <section className='py-5 services'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="brand-title">
                        <h4>Our Program</h4>
                        <h1>We Offer An Exclusive <br /> Program For Kids</h1>
                    </div>
                </div>
                <div className="row justify-content-center py-5">
                    {
                        serviceData.map(service => <ServiceDetails key={service.title} service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;