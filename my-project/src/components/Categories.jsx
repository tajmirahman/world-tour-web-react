import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const data= useLoaderData();
    console.log(data)
    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='text-3xl'>Explore our hot deals</h1>
               <div className='flex flex-row gap-4'>
                {
                    data.map(categories=> <div><button className='btn'>{categories.category}</button></div>)
                }
               </div>
            </div>
            
        </div>
    );
};

export default Categories;