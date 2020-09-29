import React from 'react';
import { HomeTW, HomeButtonTW } from './Home.styles';
import spriteSVG from '../../img/sprite.svg';


const Home = ({ imgSrc, caption, country, numOfRooms, acreLength, price }) => {
    return (
        <HomeTW.baseStyle>
            <HomeTW.image src={imgSrc} alt="House 1" />
            <HomeTW.like>
                <use xlinkHref={`${spriteSVG}#icon-heart-full`} />
            </HomeTW.like>
            <HomeTW.name>{caption}</HomeTW.name>
            <HomeTW.location>
                <svg>
                    <use xlinkHref={`${spriteSVG}#icon-map-pin`} />
                </svg>
                <p>{country}</p>
            </HomeTW.location>
            <HomeTW.rooms>
                <svg>
                    <use xlinkHref={`${spriteSVG}#icon-profile-male`} />
                </svg>
                <p>{numOfRooms} rooms</p>
            </HomeTW.rooms>
            <HomeTW.area>
                <svg>
                    <use xlinkHref={`${spriteSVG}#icon-expand`} />
                </svg>
                <p>{acreLength} m<sup>2</sup></p>
            </HomeTW.area>
            <HomeTW.price>
                <svg>
                    <use xlinkHref={`${spriteSVG}#icon-key`} />
                </svg>
                <p>{price}</p>
            </HomeTW.price>

            <HomeButtonTW>Contact realtor</HomeButtonTW>

        </HomeTW.baseStyle>
    )
}
export default Home;




