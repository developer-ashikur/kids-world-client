import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="container">
            <div className="row py-5 mb-5">
                    <div className="col-lg-3 col-md-6 mb-sm-4">
                        <div className="single-footer-wedget">
                            <div className="logo footer-logo"><a href="/"><img className='img-fluid w-50' src={logo} alt=""/></a></div>
                            <p>Avoids pleasure itself, because it is plea
                                sure, but because those who do not know how pursue pleasure rationally counter consequences that are extremely</p>
                            <ul className="footer-social-links">
                                <li><a href="/" className="blue"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="/" className="yellow"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="/" className="red"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="/" className="purple"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-sm-4">
                        <div className="single-footer-wedget">
                            <h4>Our Programs</h4>
                            <ul className="page-links">
                                <li><a href="/">Basic Engilsh Learning</a></li>
                                <li><a href="/">General Science</a></li>
                                <li><a href="/">Programming Basic</a></li>
                                <li><a href="/">Graphics Design</a></li>
                                <li><a href="/">Basic Photograpy</a></li>
                                <li><a href="/">Basic Entertainment</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-sm-4">
                        <div className="single-footer-wedget">
                            <h4>Contact Us</h4>
                            <div className="footer-contact-area">
                                <span><i className="fas fa-map-marker-alt"></i></span>
                                <span>Rajbari, Dhaka, Bangladesh <br/>
                                    Str. First Avenue 1</span>
                            </div>

                            <div className="footer-contact-area">
                                <span><i className="fas fa-envelope-open-text"></i></span>
                                <span>supportinfo@gmail.com <br/>
                                    www.kidsworld.net</span>
                            </div>


                            <div className="footer-contact-area">
                                <span><i className="fas fa-phone-volume"></i></span>
                                <span>+88017112233 <br/>
                                    +88019112233</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-sm-4">
                        <div className="single-footer-wedget">
                            <h4>Newsletters</h4>
                            <p>Subscribe Our Newsletters To
                                Get More Update</p>
                            <div className="footer-subscribe-form pb-20">
                                <form action="#">
                                    <input type="text" placeholder="Enter your email" name="email"/>
                                    <span><FontAwesomeIcon className='input-icon' icon={faEnvelopeOpenText} /></span>
                                </form>
                            </div>
                            <button className="brand-btn">Subscribe <FontAwesomeIcon className='btn-icon' icon={faLongArrowAltRight} /></button>
                        </div>
                    </div>
                </div>
                <div className="row sub-footer">
                    <p className='text-white text-center py-3'>Copyright {new Date().getFullYear()}. All Rights Reserved By Md Ashikur Rahman.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;