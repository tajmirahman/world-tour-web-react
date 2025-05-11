import React from 'react';
import { Link } from 'react-router-dom';

const DetailsNavber = () => {
    return (
        <div className='text-center space-y-4 mt-10'>
            <h1 className='text-white text-5xl font-bold'>Tour Details</h1>
            <div className='flex justify-center items-center text-white font-semibold text-xl gap-4'>
                <Link to={'/'}><h2>Home</h2></Link>
                <li>Tour Details</li>
            </div>
        </div>
    );
};

export default DetailsNavber;