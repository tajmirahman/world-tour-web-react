import Header from '../Mainlayout/Header/Header';
import DetailsNavber from '../DetailsNavber';
import detailsBanner from '../../assets/image/hill.jpg'
import { useLoaderData } from 'react-router-dom';
import Card from '../Card';

const TourGuid = () => {

    const data = useLoaderData();
    console.log(data);


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
                <h2 className='text-4xl font-bold text-center py-6'>{data.length} tour found</h2>

                <div className='flex justify-between '>

                    <section className='col-span-3'>
                        <div className='space-y-2 border-2 border-black p-3'>
                            <h2 className='font-bold'>Search By Name</h2>
                            <div className="mt-3 border-2 border-dashed rounded-md px-3 py-2 flex items-center">
                                <input
                                    type="text"
                                    placeholder="e.g Deluxe bus"
                                    className="input input-ghost w-full focus:outline-none p-0"
                                />
                            </div>
                        </div>
                    </section>

                    <section className='col-span-9 grid grid-cols-1 md:grid-cols-3'>
                        {

                            data.map(tour => <Card hotel={tour}></Card>)

                        }
                    </section>
                </div>
            </div>

        </div>
    );
};

export default TourGuid;