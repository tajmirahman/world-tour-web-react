import Header from '../Mainlayout/Header/Header';
import DetailsNavber from '../DetailsNavber';
import detailsBanner from '../../assets/image/hill.jpg'


const Booking = () => {
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
        </div>
    );
};

export default Booking;