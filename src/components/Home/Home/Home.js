import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Features />
            <About />
            <Services />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;