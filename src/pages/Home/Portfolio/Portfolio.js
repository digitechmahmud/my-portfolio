import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://my-portfolio-server-gamma.vercel.app/portfolio')
            .then(res => res.json())
            .then(data => setProjects(data));
    },[])
    return (
        <div id='portfolio' className='min-h-screen'>
            <h2 className='text-center font-bold text-3xl mb-10'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    projects.map(project => <div className="card w-96 bg-base-100 shadow-xl border-spacing-2 border-white">
                        <figure className="px-10 pt-10">
                            <img width={300} height={50} src={project.img} alt="" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">Project Name: {project.name}</h2>
                            
                            <div className="card-actions">
                                <Link to={`/portfolio/${project._id}`}><button className="btn btn-accent">Details</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Portfolio;