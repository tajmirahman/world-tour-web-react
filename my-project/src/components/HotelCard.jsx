import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const HotelCard = () => {
    const data= useLoaderData()
    const {category}=useParams();
    console.log(category)
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            hotel card --{category}
            {
                data.map(hotel=> <Card hotel={hotel}></Card>)
            }
        </div>
    );
};

export default HotelCard;