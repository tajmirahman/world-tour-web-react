import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Mainlayout/MainLayout";
import Error from "../Error";
import Home from "../Home";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]

    }
]);

export default routes;