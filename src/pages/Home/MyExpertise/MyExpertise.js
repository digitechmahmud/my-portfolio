import React from 'react';
import { SiManjaro } from "react-icons/si";

const MyExpertise = () => {
    return (
        <div className='min-h-screen mx-36'>
            <h2 className='font-bold text-3xl  mt-10 text-slate-300 underline'>My Expertise</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-20 text-slate-300'>
                <div className='hover:text-slate-500 border-2'>
                    <div>
                        <div className=' flex p-5'>
                            <p className='font-semibold text-2xl p-3 pt-5'><SiManjaro /></p>
                            <h3 className='font-semibold text-2xl'>Frontend<br /> Development</h3>
                        </div>
                        <div>
                            <p>More than 3 years of experience in React.js, Next.js, JS, HTML5, CSS3, SASS, and Bootstrap5.</p>
                        </div>
                    </div>
                </div>
                <div className='hover:text-slate-500'>
                    <div className='border-2 flex p-5'>
                        <p className='font-semibold text-2xl p-3 pt-5'><SiManjaro /></p>
                        <h3 className='font-semibold text-2xl'>Frontend<br/> Development</h3>
                    </div>
                </div>
                <div className='hover:text-slate-500'>
                    <div className='border-2 flex p-5'>
                        <p className='font-semibold text-2xl p-3 pt-5'><SiManjaro /></p>
                        <h3 className='font-semibold text-2xl'>Frontend<br/> Development</h3>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default MyExpertise;