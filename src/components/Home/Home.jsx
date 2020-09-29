import React from 'react';
import { HomeTW, HomeButtonTW } from './Home.styles';
import spriteSVG from '../../img/sprite.svg';


const SvgIcon = ({ spriteSVG, iconType }) => {
    return (
        <svg>
            <use xlinkHref={`${spriteSVG}#${iconType}`} />
        </svg>
    )
}

const Home = ({ imgSrc, caption, country, numOfRooms, acreLength, price }) => {
    return (
        <HomeTW.baseStyle>
            <HomeTW.image src={imgSrc} alt="House 1" />
            <HomeTW.like>
                <SvgIcon spriteSVG={spriteSVG} iconType={'icon-heart-full'} />
            </HomeTW.like>
            <HomeTW.name>{caption}</HomeTW.name>
            <HomeTW.location>
                <SvgIcon spriteSVG={spriteSVG} iconType={'icon-map-pin'} />
                <p>{country}</p>
            </HomeTW.location>
            <HomeTW.rooms>
                <SvgIcon spriteSVG={spriteSVG} iconType={'icon-profile-male'} />
                <p>{numOfRooms} rooms</p>
            </HomeTW.rooms>
            <HomeTW.area>
                <SvgIcon spriteSVG={spriteSVG} iconType={'icon-expand'} />
                <p>{acreLength} m<sup>2</sup></p>
            </HomeTW.area>
            <HomeTW.price>
                <SvgIcon spriteSVG={spriteSVG} iconType={'icon-key'} />
                <p>{price}</p>
            </HomeTW.price>
            <HomeButtonTW>Contact realtor</HomeButtonTW>
        </HomeTW.baseStyle>
    )
}
export default Home;




