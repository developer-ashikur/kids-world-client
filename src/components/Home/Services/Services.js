import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, []);
    
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