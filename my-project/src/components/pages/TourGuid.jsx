import Header from '../Mainlayout/Header/Header';
import DetailsNavber from '../DetailsNavber';
import detailsBanner from '../../assets/image/hill.jpg'
import { useLoaderData } from 'react-router-dom';
import Card from '../Card';
import { useState } from 'react';

const TourGuid = () => {

    const data = useLoaderData();
    console.log(data);

    const [tour, setTour]=useState(data)

    const handleSort=sortBy=>{
        if(sortBy === 'rating'){
            const sortByRating=[...data].sort((a,b)=>b.rating -a.rating);
            setTour(sortByRating);
        }
    }


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

            <div className='w-11/12 mx-auto'>
                <h2 className='text-4xl font-bold text-center py-6'>{data.length} tours found</h2>

                <div className='flex justify-between gap-3'>

                    <section className='col-span-3 space-y-4'>
                        <div className='space-y-2 border-2 border-dash p-3'>
                            <h2 className='font-bold'>Search By Name</h2>
                            <div className="mt-3 border-2 border-dashed rounded-md px-3 py-2 flex items-center">
                                <input
                                    type="text"
                                    placeholder="search by name"
                                    className="text-xl input input-ghost w-full focus:outline-none p-0"
                                />
                            </div>
                        </div>
                        <div className='space-y-2 border-2 border-dash p-3'>
                            
                            <button onClick={()=>handleSort('rating')} className='btn bg-purple-500 text-white'>Filter By Rating</button>
                            
                        </div>
                    </section>

                    <section className='col-span-9 grid grid-cols-1 md:grid-cols-3 gap-3'>
                        {

                            tour.map(tour => <Card hotel={tour}></Card>)

                        }
                    </section>
                </div>
            </div>

        </div>
    );
};

export default TourGuid;