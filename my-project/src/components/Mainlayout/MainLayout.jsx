import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navber from '../Navber';
import bannerImage from '../../assets/image/banner.webp'

const MainLayout = () => {
    return (
        <div>
            {/* Header section */}
            <div
                className="bg-cover bg-center  md:h-[600px] md:px-6"
                style={{
                    backgroundImage: `url(${bannerImage})`,

                }}
            >
                <Header />
                <Navber />
            </div>

            {/* outlet section */}

            <Outlet></Outlet>

            {/* footer section */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;