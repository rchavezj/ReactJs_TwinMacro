import React from 'react';
import Footer from '../../layout/Footer/Footer';
import Sidebar from '../../layout/Sidebar/Sidebar';
import Features from './sections/Features/Features';
import Gallery from './sections/Gallery/Gallery';
import Header from './sections/Header/Header';
import Homes from './sections/Homes/Homes';
import Story from './sections/Story/Story';


const HomePage = () => {
    return (
        <div className="container">
            <Sidebar>
                <Header />
                <Features />
                <Story />
                <Homes />
                <Gallery />
                <Footer />
            </Sidebar>
        </div>
    );
}

export default HomePage;
