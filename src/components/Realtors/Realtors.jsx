import React from 'react';

import Realtor1 from '../../img/realtor-1.jpeg';
import Realtor2 from '../../img/realtor-2.jpeg';
import Realtor3 from '../../img/realtor-3.jpeg'

import { Realtor } from '../Realtor/Realtor';
import { RealtorsTW } from './Realtors.styles';
import { Heading } from '../../abstract/typography.styles';


const Realtors = () => {
    return (
        <RealtorsTW.realtors>
            <Heading.H3>Top 3 Realtors</Heading.H3>
            <RealtorsTW.list>
                <Realtor
                    imgSrc={Realtor1} altText={'Realtor 1'}
                    name={'Erik Feinman'} sold={'212 houses sold'}
                />

                {/* <RealtorsTW.img src={Realtor1} alt="Realtor 1" />
                <div>
                    <Heading.H4_Light>Erik Feinman</Heading.H4_Light>
                    <RealtorsTW.sold>212 houses sold</RealtorsTW.sold>
                </div> */}
                <RealtorsTW.img src={Realtor2} alt="Realtor 2" />
                <div>
                    <Heading.H4_Light>Kim Brown</Heading.H4_Light>
                    <RealtorsTW.sold>80 houses sold</RealtorsTW.sold>
                </div>

                <RealtorsTW.img src={Realtor3} alt="Realtor 3" />
                <div>
                    <Heading.H4_Light>Toby Ramsey</Heading.H4_Light>
                    <RealtorsTW.sold>198 houses sold</RealtorsTW.sold>
                </div>

            </RealtorsTW.list>
        </RealtorsTW.realtors>
    )
}

export default Realtors;