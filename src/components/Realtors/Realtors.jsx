import React from 'react';

import Realtor1 from '../../img/realtor-1.jpeg';
import Realtor2 from '../../img/realtor-2.jpeg';
import Realtor3 from '../../img/realtor-3.jpeg'


import { RealtorsTW } from './Realtors.styles';
import { Heading } from '../../abstract/typography.styles';


const Realtors = () => {
    return (
        <RealtorsTW.realtors>
            <Heading.H3>Top 3 Realtors</Heading.H3>
            <RealtorsTW.list>

                <RealtorsTW.img src={Realtor1} alt="Realtor 1" />
                <div>
                    <Heading.H4_Light>Erik Feinman</Heading.H4_Light>
                    <RealtorsTW.sold>45 houses sold</RealtorsTW.sold>
                </div>

                <img src={Realtor2} alt="Realtor 2" className="realtors__img" />
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">Kim Brown</h4>
                    <p className="realtors__sold">212 houses sold</p>
                </div>

                <img src={Realtor3} alt="Realtor 3" className="realtors__img" />
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
                    <p className="realtors__sold">198 houses sold</p>
                </div>
            </RealtorsTW.list>
        </RealtorsTW.realtors>
    )
}

export default Realtors;