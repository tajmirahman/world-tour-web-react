
import Header from '../Mainlayout/Header/Header';
import DetailsNavber from '../DetailsNavber';
import detailsBanner from '../../assets/image/hill.jpg'
import newsImg from '../../assets/image/special-pic-3.jpg'
import { FaArrowRight } from "react-icons/fa";

const News = () => {
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

            <div className=' w-11/12 mx-auto py-6'>
                <h1 className='text-5xl font-bold text-center mb-6'>Latest travel news</h1>

                <hr className='w-2/6 mx-auto border-t-2 border-gray-500  py-2'/>

                <div className='lg:flex justify-evenly gap-3 '>
                    <div>
                        <img src={newsImg} className='w-[2000px] rounded-lg' alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold '>Veniam ex tempor qui ad amet mollit cillum aliqua aliqua. Fugiat tempor eu magna</h1>

                        <p className='text-gray-400 my-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more. Ad minim in commodo fugiat adipisicing cupidatat tempor aliqua.</p>
                        <button className='flex justify-center items-center gap-3 text-purple-500 font-bold'>Read full article <span className='mt-1'><FaArrowRight /></span></button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default News;