import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div>
            {/* Header section */}
            <Header></Header>

            {/* outlet section */}

            
            {/* footer section */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;