import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Mainlayout/MainLayout";
import Error from "../Error";
import Home from "../Home";
import HotelCard from "../HotelCard";
import Category from "../pages/category";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => fetch('../categoryData.json'),
                children: [
                    {
                        path: '/',
                        element: <HotelCard></HotelCard>,
                        loader: () => fetch('../tourData.json')
                    },
                    {
                        path: '/category/:category',
                        element: <HotelCard></HotelCard>,
                        loader: () => fetch('../tourData.json')
                    }
                ]
            }
        ]

    },
    {
        path: '/categories',
        element: <Category></Category>
    }
]);

export default routes;


// async()=>{
//                             const categories= await fetch ('./categoryData.json');
//                             const data=await categories.json();

//                             return data;

//                         }