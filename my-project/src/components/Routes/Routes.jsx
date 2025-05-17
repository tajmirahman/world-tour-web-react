import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Mainlayout/MainLayout";
import Error from "../Error";
import Home from "../Home";
import HotelCard from "../HotelCard";
import Category from "../pages/category";
import CartDetails from "../pages/CartDetails";
import Abouts from "../pages/Abouts";
import News from "../pages/News";
import Booking from "../pages/Booking";
import TourGuid from "../pages/TourGuid";
import Login from "../Login";
import Register from "../Register";


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
        path: '/tour/details/:id',
        element: <CartDetails></CartDetails>,
        loader: () => fetch('/tourData.json').then(res => res.json())
    },
    {
        path:'/abouts',
        element:<Abouts></Abouts>
    },
    {
        path:'/news',
        element:<News></News>
    },
    {
        path:'/information',
        element:<Booking></Booking>
    },
    {
        path:'/tour/guid',
        element:<TourGuid></TourGuid>,
        loader: () => fetch('/tourData.json').then(res => res.json())
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element: <Register></Register>
    }

]);

export default routes;


