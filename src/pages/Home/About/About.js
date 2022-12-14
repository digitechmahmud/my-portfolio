import React, { useEffect } from 'react';
import about from '../../../assets/images/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div id='about'>
            <div className=" min-h-screen" data-aos='fade-down'>
                <div className="hero-content  flex-col lg:flex-row-reverse" data-aos='fade-top'>
                    <img src={about} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">About Me</h1>
                        <p className="py-6">I m professional MERN Stack developer with good knowledge of frontend as well as backend technology such as Html, Css, JavaScript, Bootstrap, NodeJs, Express Js, MongoDB, Mongoose.Passionate Front-End and MERN Stack web developer with extensive knowledge and ability to build innovative, creative, & interactive web-based applications using modern technology. </p>
                        <a href='https://www.linkedin.com/in/digitechmahmud/'><button className="btn btn-accent">Linkedin Profile</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;