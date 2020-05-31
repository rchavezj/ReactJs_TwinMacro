import React from 'react';
import Sidebar from '../../layout/Sidebar/Sidebar';

import Header from './sections/Header/Header';
import Features from './sections/Features/Features';
import Story from './sections/Story/Story';
import Homes from './sections/Homes/Homes';
import Gallery from './sections/Gallery/Gallery';
import Footer from '../../layout/Footer/Footer';

const HomePage = () => {
    return (
        <body className="container">
            <Sidebar>
                <Header />
                <Features />
                <Story />
                <Homes />
                <Gallery />
                <Footer />
            </Sidebar>
        </body>
    );
}

export default HomePage;
