import React from 'react';
import Categories from './Categories';
import { Outlet } from 'react-router-dom';
import SpecialOffer from './SpecialOffer';

const Home = () => {
    // const data= useLoaderData();
    // console.log(data)
    return (
        <div className='md:w-11/12 mx-auto py-6'>
                

            {/* categories section */}
            
            <Categories></Categories>

            {/* outlet section */}
            <Outlet></Outlet>

            {/* Special Offers Card */}
            <SpecialOffer></SpecialOffer>

        </div>
    );
};

export default Home;