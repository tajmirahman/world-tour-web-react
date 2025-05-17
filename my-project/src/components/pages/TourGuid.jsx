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

            <div className='flex justify-between '>
                <section className='col-span-3'>jhgjhgjh</section>
                <section className='col-span-9 grid grid-cols-1 md:grid-cols-3'>
                    {
                        data.map(tour => <Card hotel={tour}></Card>)
                    }
                </section>
            </div>

        </div>
    );
};

export default TourGuid;