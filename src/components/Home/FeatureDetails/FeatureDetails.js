import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FeatureDetails.css';

const FeatureDetails = ({featureItem}) => {
    const {icon, title, description} = featureItem;
    return (
        <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="features-item text-center mt-30 ">
                <FontAwesomeIcon className='feature-icon' icon={icon} />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default FeatureDetails;