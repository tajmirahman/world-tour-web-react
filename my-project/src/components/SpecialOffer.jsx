import specialPic1 from '../assets/image/special-pic-1.jpg'
import specialPic2 from '../assets/image/special-pic-2.jpg'
import specialPic3 from '../assets/image/special-pic-3.jpg'

const SpecialOffer = () => {
    return (
        <div className='md:flex justify-center items-center gap-3 mt-10'>

            <div className="md:w-6/12 w-11/12 mx-auto h-[400px] overflow-hidden relative group rounded-lg mb-1">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-150"
                    style={{
                        backgroundImage: `url(${specialPic1})`,
                    }}
                ></div>
                <div className="relative z-10 p-5 text-black">
                    <h1 className="text-3xl  font-bold mt-20">Special Offers</h1>
                    <p className="mt-2">
                        Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        dolor sit amet. Lorem ipsum dolor sit amet.
                    </p>
                    <button className="btn bg-purple-500 mt-10">Holiday Deals</button>
                </div>
            </div>


            <div className="md:w-3/12 w-11/12 mx-auto h-[400px] overflow-hidden relative group rounded-lg">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-150"
                    style={{
                        backgroundImage: `url(${specialPic2})`,
                    }}
                ></div>
                <div className="relative z-10 p-5 text-white text-center">
                    <h1 className="text-3xl drop-shadow-lg  font-bold mt-20">News Letter</h1>
                    <p className="mt-2 drop-shadow-lg">
                        Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        dolor sit amet. Lorem ipsum dolor sit amet.
                    </p>
                    <button className="btn bg-purple-500 mt-10">Subscribe</button>
                </div>
            </div>

            <div className="md:w-3/12 w-11/12 mx-auto h-[400px] overflow-hidden relative group rounded-lg mb-1">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-150"
                    style={{
                        backgroundImage: `url(${specialPic3})`,
                    }}
                ></div>
                <div className="relative z-10 p-5 text-white text-center">
                    <h1 className=" text-3xl font-bold text-white drop-shadow-lg mt-20">Travel Trip</h1>
                    <p className="mt-2 drop-shadow-lg">
                        Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        dolor sit amet. Lorem ipsum dolor sit amet.
                    </p>
                    <button className="btn bg-purple-500 mt-10">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;