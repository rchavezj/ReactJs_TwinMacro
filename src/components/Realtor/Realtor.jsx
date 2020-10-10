import React from 'react';

import { RealtorTW } from './Realtor.styles';
import { Heading } from '../../abstract/typography.styles';

const Realtor = ({ name, sold }) => {
    return (
        <>
            {/* <RealtorTW.img src={imgSrc} alt={altText} /> */}
            <div>
                <Heading.H4_Light>{name}</Heading.H4_Light>
                <RealtorTW.sold>{sold}</RealtorTW.sold>
            </div>
        </>
    )
}

export default Realtor;