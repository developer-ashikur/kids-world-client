import React from 'react';
import bannerThumb from '../../../images/banner-thumb.png';
import './Header.css';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <header className='pt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 g-4 d-flex align-items-center">
                        <div className='banner-content'>
                            <h2>We Care Your Baby’s Study Life</h2>
                            <h1>Start Study Life</h1>
                            <h3>With KidsWorld</h3>
                            <button className='brand-btn'>Get Started <FontAwesomeIcon className='btn-icon' icon={faLongArrowAltRight} /></button>
                        </div>
                    </div>
                    <div className="col-md-5 g-4">
                        <img src={bannerThumb} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;