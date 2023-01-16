import React, { useEffect } from 'react';
import about from '../../../assets/images/about.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaJsSquare } from "react-icons/fa";

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        // <div id='about' className='min-h-screen mt-24'>
        //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
        //         <div>
        //             <h2 className='md:mx-20 text-5xl font-bold'>About Me</h2>
        //         </div>
        //     </div>
        //     <div className=" " data-aos='fade-down'>
        //         <div className="hero-content  flex-col lg:flex-row-reverse" data-aos='fade-top'>
        //             <img src={about} alt='' className="max-w-sm rounded-lg shadow-2xl" />
        //             <div>

        //                 <p className="py-6">I m professional MERN Stack developer with good knowledge of frontend as well as backend technology such as Html, Css, JavaScript, Bootstrap, NodeJs, Express Js, MongoDB, Mongoose.Passionate Front-End and MERN Stack web developer with extensive knowledge and ability to build innovative, creative, & interactive web-based applications using modern technology. </p>
        //                 <a href='https://www.linkedin.com/in/digitechmahmud/'><button className="btn btn-accent">Linkedin Profile</button></a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div id='about' data-aos='fade-down' className='min-h-screen'>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow rounded-box place-items-center w-full"><img className='rounded-xl' src={about} width={320} alt="" /></div>
                <div className="divider pr-10 lg:divider-horizontal">OR</div>
                <div className="mt-12 grid flex-grow  card rounded-box w-full mr-10">
                    <div>
                        <h3 className='font-bold text-2xl'>Hi, my name is Mahmudul Hassan</h3><br/>
                        <p className='font-medium text-xl text-justify text-white'>A self-motivated MERN stack developer. Being a fast learner, I am always looking to learn new technologies and constantly trying to keep up with new trends. I bring ideas to life with excellent design & coding skills. I have the positive attitude and expertise to assist you with any project, regardless of how small or large it might be.</p><br/>
                        <p className='font-medium text-xl text-justify text-white'>Among my areas of expertise are:</p>
                        <div className='grid grid-cols-1 md:grid-cols-2'>
                            <div >
                                <div className='flex'>
                                    <><FaJsSquare className='mt-1 mx-2' />JavaScript</>
                                </div>
                                <div className='flex'>
                                    <><FaJsSquare className='mt-1 mx-2' />JavaScript</>
                                </div>
                                <div className='flex'>
                                    <><FaJsSquare className='mt-1 mx-2' />JavaScript</>
                                </div>
                            </div>
                            <div>

                            </div>
                       </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default About;