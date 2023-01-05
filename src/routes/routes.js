import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home/Home/Home";
import ProtfolioDetails from "../pages/PortfolioDetails/ProtfolioDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/portfolio/:id',
                element: <ProtfolioDetails></ProtfolioDetails>,
                loader: ({ params }) => fetch(`https://my-portfolio-server-digitechmahmud.vercel.app/portfolio/details/${params.id}`)
                
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }
])