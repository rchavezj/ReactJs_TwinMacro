import React from 'react';
import Sidebar from '../../layout/Sidebar/Sidebar';

import Header from '../../layout/Header/Header';
import Features from '../../components/Features/Features';
import Story from '../../components/Story/Story';
import Homes from '../../layout/Homes/Homes';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../layout/Footer/Footer';

const Home = () => {
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

export default Home;
