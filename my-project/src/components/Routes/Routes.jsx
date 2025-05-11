import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Mainlayout/MainLayout";
import Error from "../Error";
import Home from "../Home";
import HotelCard from "../HotelCard";
import Category from "../pages/category";
import CartDetails from "../pages/CartDetails";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: async () => fetch('/categoryData.json').then(res => res.json()),
                children: [
                    {
                        path: '/',
                        element: <HotelCard></HotelCard>,
                        loader: () => fetch('/tourData.json').then(res => res.json())
                    },
                    {
                        path: '/category/:category',
                        element: <HotelCard></HotelCard>,
                        loader: () => fetch('/tourData.json').then(res => res.json())
                    }
                ]
            }
        ]

    },
    {
        path: '/tour/details',
        element: <Category></Category>,
        loader: () => fetch('/tourData.json').then(res => res.json())
    },
    {
        path: '/cart/details/:id',
        element: <CartDetails></CartDetails>,
        loader: () => fetch('/tourData.json').then(res => res.json())
    }

]);

export default routes;


