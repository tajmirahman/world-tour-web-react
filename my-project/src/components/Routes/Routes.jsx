import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Mainlayout/MainLayout";
import Error from "../Error";
import Home from "../Home";
import Categories from "../Categories";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:async()=>fetch ('../categoryData.json'),
                children:[
                    {
                        path:'/categories',
                        element:<Categories></Categories>,
                        
                    }
                ]
            }
        ]

    }
]);

export default routes;


// async()=>{
//                             const categories= await fetch ('./categoryData.json');
//                             const data=await categories.json();

//                             return data;

//                         }