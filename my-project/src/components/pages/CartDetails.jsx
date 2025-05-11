import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Mainlayout/Header/Header';
import detailsBanner from '../../assets/image/hill.jpg'
import DetailsNavber from '../DetailsNavber';
import OverView from './CardDetails/OverView';
import StandardPackage from './CardDetails/StandaredPackage';
import Delux from './CardDetails/Delux';
import SupperDelux from './CardDetails/SupperDelux';
import WhyChooseUs from './CardDetails/WhyChooseUs';

const CartDetails = () => {
    const data = useLoaderData();
    console.log(data)
    const { id } = useParams();
    console.log(id)

    const [cartCategory, setCartCategory] = useState([]);

    useEffect(() => {
        const findData = [...data].find(d => d.id == id)
        setCartCategory(findData);
    }, [data, id])

    const { image, title, location } = cartCategory || {};

    return (
        <div>
            <div
                className='bg-cover bg-center h-[400px]'
                style={{
                    backgroundImage: `url(${detailsBanner})`,

                }}>

                <Header></Header>
                <DetailsNavber></DetailsNavber>

            </div>


            <div className=' grid grid-cols-1 md:grid-cols-12 w-11/12 mx-auto py-10 gap-3'>
                <section className='col-span-8 space-y-3'>
                    <div>
                        <h2 className='text-3xl font-bold'>Explore the evergreen forest</h2>
                        <span className='flex items-center'>
                            <FaMapMarkerAlt className='mr-2' /> {location}
                        </span>
                    </div>
                    <div className='mt-3'>
                        <figure className='w-full h-[400px]'>
                            <img
                                className='w-full h-[400px] object-cover rounded-lg'
                                src={image}
                                alt={title}
                            />
                        </figure>
                    </div>

                    <OverView></OverView>

                </section>


                <section className='col-span-4 space-y-3 '>

                    <StandardPackage></StandardPackage>
                    <Delux></Delux>
                    <SupperDelux></SupperDelux>
                    <WhyChooseUs></WhyChooseUs>

                </section>
            </div>
        </div>

    );
};

export default CartDetails;