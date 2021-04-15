import React from 'react';
import aboutImg from '../../../images/about-thumb.jpg';
import { faLongArrowAltRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';

const About = () => {
    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 g-4">
                        <img src={aboutImg} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 g-4">
                        <div className="about-content">
                            <h4>About Us</h4>
                            <h2>20 Years Of Experience</h2>
                            <h1>In Teaching Sector</h1>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blan ditiis praes entium voluptatum deleniti atque corrupti quos dolorequas molestias excepturi sintoc caecati cupiditate provident</p>
                            <ul>
                                <li><FontAwesomeIcon icon={faCheck} className='about-icon' /> A Modern School For Your Area How To Improve Test Coverage </li>
                                <li><FontAwesomeIcon icon={faCheck} className='about-icon' /> Better Soluation For Your Child Modern School For Area How Improve </li>
                                <li><FontAwesomeIcon icon={faCheck} className='about-icon' />Digital Teacher &amp; Lab To Tech Our Student For Their Better Life </li>
                            </ul>
                            <button className="brand-btn">Read More <FontAwesomeIcon className='btn-icon' icon={faLongArrowAltRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;