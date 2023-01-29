import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyExpertise from '../MyExpertise/MyExpertise';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Portfolio></Portfolio>
            <MyExpertise></MyExpertise>
            <Contact></Contact>
        </div>
    );
};

export default Home;