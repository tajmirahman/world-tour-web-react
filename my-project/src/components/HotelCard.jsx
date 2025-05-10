import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const HotelCard = () => {
    const data= useLoaderData()
    const {category}=useParams();
    // console.log(category)

    const [cardCategry, setCartCategory]=useState([]);

    useEffect(()=>{
        if(category){
            const categoryByFilter=[...data].filter(d=> d.category === category);
        setCartCategory(categoryByFilter);
        }
        else{
            setCartCategory(data)
        }
    },[category, data])


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-11/12 mx-auto'>
            
            {
                
                cardCategry.length >0 
                ?
                cardCategry.map(hotel=> <Card hotel={hotel}></Card>)
                :
              <h1 className="text-2xl font-bold text-red-600 ">Category has no found</h1>
            }
        </div>
    );
};

export default HotelCard;