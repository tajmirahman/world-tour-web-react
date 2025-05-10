import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from './Categories';

const Home = () => {
    // const data= useLoaderData();
    // console.log(data)
    return (
        <div className='py-6'>
            <div>
                
                <div>
                    <Categories></Categories>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;