import React from 'react';
import bg from '../../assets/images/bg.jpg';

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    
                </div>
            </div>
        </div>
    );
};

export default Hero;