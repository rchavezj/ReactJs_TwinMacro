import React from 'react';

import home1 from '../../../../img/house-1.jpeg';
import home2 from '../../../../img/house-2.jpeg';
import home3 from '../../../../img/house-3.jpeg';
import home4 from '../../../../img/house-4.jpeg';
import home5 from '../../../../img/house-5.jpeg';
import home6 from '../../../../img/house-6.jpeg';

import Home from '../../../../components/Home/Home';

import { HomesTW } from './Homes.styles';

const Homes = () => {
    return (
        <HomesTW>
            <Home
                imgSrc={home1}
                caption={`Beautiful Familiy House`}
                country={`USA`}
                numOfRooms={5}
                acreLength={325}
                price={`$1,200,000`}
            />

            <Home
                imgSrc={home2}
                caption={`Modern Glass Villa`}
                country={`Canada`}
                numOfRooms={6}
                acreLength={450}
                price={`$2,750,000`}
            />

            <Home
                imgSrc={home3}
                caption={`Cozy Country House`}
                country={`UK`}
                numOfRooms={4}
                acreLength={250}
                price={`$850,000`}
            />

            <Home
                imgSrc={home4}
                caption={`Large Rustical Villa`}
                country={`UK`}
                numOfRooms={6}
                acreLength={480}
                price={`$1,950,000`}
            />

            <Home
                imgSrc={home5}
                caption={`Majestic Palace House`}
                country={`Germany`}
                numOfRooms={18}
                acreLength={4230}
                price={`$9,500,000`}
            />


            <Home
                imgSrc={home6}
                caption={`Modern Familiy Apartment`}
                country={`Italy`}
                numOfRooms={3}
                acreLength={180}
                price={`$600,000`}
            />

        </HomesTW>
    )
}

export default Homes;