import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Portfolio></Portfolio>
            <Contact></Contact>
        </div>
    );
};

export default Home;