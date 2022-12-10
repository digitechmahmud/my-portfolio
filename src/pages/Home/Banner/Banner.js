import React from 'react';
import banner from '../../../assets/images/banner.png';

const Banner = () => {

    // const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
    return (
        <div>
            <div className="hero min-h-screen " style={{ backgroundImage: `url("https://github.com/digitechmahmud/images/blob/main/banner.png")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;