import React, { useEffect } from 'react';
import Typical from 'react-typical';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div id='home' className="min-h-screen">
            <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-left text-neutral-content">
                    <div className="text-slate-300">
                        <h2 className='text-5xl font-bold mt-48'>HEY, I'M MAHMUDUL HASSAN</h2>
                        <h3 className='text-4xl font-bold'>
                            <Typical
                                steps={["MERN Stack Developer", 2000, 'JavaScript Developer', 2000]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </h3><br/>
                        <p className="mb-5">A Frontend focused Web Developer building the Frontend of Websites and<br/> Web Applications that leads to the success of the overall product</p>
                        <a href='https://drive.google.com/uc?export=download&id=1Eass99E3KSDLh0wURS0g9t-6zco1q8T9'><button className="btn btn-accent">Download Resume</button></a>
                    </div>
                </div>
        </div>
    );
};

export default Banner;