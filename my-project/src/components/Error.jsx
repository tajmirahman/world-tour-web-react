import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-4 mt-20'>
            <h1>Opss! Page not found</h1>
            <Link to={'/'}><button className='btn btn-warning'>Back to Home</button></Link>
        </div>
    );
};

export default Error;