import React from 'react';
import Header from '../Mainlayout/Header/Header';
import CartDetails from './CartDetails';
import { useLoaderData } from 'react-router-dom';

const Category = () => {

    const {data} =useLoaderData();

    return (
        <div>
           <CartDetails data={data}></CartDetails>
        </div>
    );
};

export default Category;