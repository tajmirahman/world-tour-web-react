import Header from '../Mainlayout/Header/Header';
import DetailsNavber from '../DetailsNavber';
import detailsBanner from '../../assets/image/hill.jpg'
import aboutImg from '../../assets/image/special-pic-2.jpg'

const Abouts = () => {
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

            <div className='w-11/12 mx-auto my-6'>
                <h1 className='text-5xl font-bold text-center mb-6'>About Us</h1>

                <hr className='w-1/6 mx-auto border-t-2 border-gray-500  py-2'/>


                <div className='md:flex justify-center gap-3'>
                    <div className='flex-1 '>
                        <h2 className='text-3xl font-bold'>We Are The World Best Travel Agency Company Since 2000</h2>

                        <p className='text-gray-400 mt-3 text-justify '>
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr. <br />

                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                        </p>

                    <button className='btn bg-purple-500 mt-6'>Find Tour</button>

                    </div>

                    <div className='flex-1'>
                        <img src={aboutImg} className='rounded-lg' alt="" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Abouts;