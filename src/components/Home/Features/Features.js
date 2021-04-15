import React from 'react';
import { faLaptopCode, faTree, faCarSide, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import FeatureDetails from '../FeatureDetails/FeatureDetails';

const Features = () => {
    const featuresData = [
        {
            icon: faLaptopCode,
            title: 'Digital Library',
            description: 'But I must explain to you how this mistaken idea of denouncing pleasure and praising'
        },
        {
            icon: faTree,
            title: 'Natural Environment',
            description: 'But I must explain to you how this mistaken idea of denouncing pleasure and praising'
        },
        {
            icon: faCarSide,
            title: 'School Transport',
            description: 'But I must explain to you how this mistaken idea of denouncing pleasure and praising'
        },
        {
            icon: faUserNurse,
            title: 'Medical Services',
            description: 'But I must explain to you how this mistaken idea of denouncing pleasure and praising'
        },
    ]
    return (
        <section className='features py-5'>
            <div className="container">
                <div className="row">
                    <div className="brand-title">
                        <h4>What We Do</h4>
                        <h1>Thanks To Get Started <br/> With Our School</h1>
                    </div>
                </div>
                <div className="row justify-content-center pt-5">
                    {
                        featuresData.map(featureItem => <FeatureDetails key={featureItem.title} featureItem={featureItem}></FeatureDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Features;