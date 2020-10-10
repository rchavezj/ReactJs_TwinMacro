import React from 'react';

import Realtor1 from '../../img/realtor-1.jpeg';
import Realtor2 from '../../img/realtor-2.jpeg';
import Realtor3 from '../../img/realtor-3.jpeg'

import Realtor from '../Realtor/Realtor';
import { RealtorsTW } from './Realtors.styles';
import { Heading } from '../../abstract/typography.styles';


const Realtors = () => {
    return (
        <RealtorsTW.realtors>
            <Heading.H3>Top 3 Realtors</Heading.H3>
            <RealtorsTW.list>

                <RealtorsTW.img src={Realtor1} alt="Realtor 1" />
                <Realtor name={'Erik Feinman'} sold={'212 houses sold'} />

                <RealtorsTW.img src={Realtor2} alt="Realtor 2" />
                <Realtor name={'Kim Brown'} sold={'80 houses sold'} />


                <RealtorsTW.img src={Realtor3} alt="Realtor 3" />
                <Realtor name={'Toby Ramsey'} sold={'198 houses sold'} />

            </RealtorsTW.list>
        </RealtorsTW.realtors>
    )
}

export default Realtors;