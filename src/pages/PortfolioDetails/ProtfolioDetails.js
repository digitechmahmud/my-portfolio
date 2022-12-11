import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';


const ProtfolioDetails = () => {
    const projectDetails = useLoaderData();
    
    return (
        <div className='mt-10 mb-10'>
            {
                projectDetails.map(project =>
                    <div>
                        <div className="carousel w-2/3 mx-auto">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src={project.img} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src={project.img2} className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://placeimg.com/800/200/arch" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src="https://placeimg.com/800/200/arch" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <div className="hero-content">
                                    <div>
                                        <h1 className="text-5xl font-bold">{project.name}</h1>
                                        <div className='py-6'>
                                            <h3 className='text-xl font-bold'>Project Features:</h3>
                                            <p className='text-xl ml-2'>❯ {project.feture1}</p>
                                            <p className='text-xl ml-2 '>❯ {project.feture2}</p>
                                            <p className='text-xl ml-2'>❯ {project.feture3}</p>
                                        </div>
                                        <Link to='/#portfolio'><button className="btn btn-accent">Back to home</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default ProtfolioDetails;