import specialPic1 from '../assets/image/special-pic-1.jpg'

const SpecialOffer = () => {
    return (
        <div className='flex justify-center items-center gap-3 mt-10'>

            <div className="w-6/12 h-[400px] overflow-hidden relative group">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-150"
                    style={{
                        backgroundImage: `url(${specialPic1})`,
                    }}
                ></div>
                <div className="relative z-10 p-5 text-black">
                    <h1 className="text-3xl text-center font-bold mt-10">Special Offers</h1>
                    <p className="mt-2">
                        Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                        dolor sit amet. Lorem ipsum dolor sit amet.
                    </p>
                    <button className="btn mt-4">Holiday Deals</button>
                </div>
            </div>


            <div className='w-3/12'>
                <h1 className='text-3xl'>News Letter</h1>
                <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='btn'>Subscribe</button>
            </div>
            <div className='w-3/12'>
                <h1 className='text-3xl'>Travel Trip</h1>
                <p>Invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <button className='btn'>Subscribe</button>
            </div>
        </div>
    );
};

export default SpecialOffer;