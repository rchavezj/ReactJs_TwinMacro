import React from 'react';

import Realtor1 from '../../img/realtor-1.jpeg';
import Realtor2 from '../../img/realtor-2.jpeg';
import Realtor3 from '../../img/realtor-3.jpeg'


import { RealtorsTW } from './Realtors.styles';


const Realtors = () => {
    return (
        <RealtorsTW.realtors>
            <h3 className="heading-3">Top 3 Realtors</h3>
            <div className="realtors__list">
                <img src={Realtor1} alt="Realtor 1" className="realtors__img" />
                <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
                    <p className="realtors__sold">245 houses sold</p>
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
            </div>
        </RealtorsTW.realtors>
    )
}

export default Realtors;