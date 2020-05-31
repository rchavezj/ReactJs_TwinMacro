import React from 'react';


import spriteSVG from '../../img/sprite.svg';

const Home = ({ imgSrc, caption, country, numOfRooms, acreLength, price }) => {
    return (
            <div className="home">
                <img src={imgSrc} alt="House 1" className="home__img" />
                <svg className="home__like">
                    <use xlinkHref={`${spriteSVG}#icon-heart-full`} />
                </svg>
                <h5 className="home__name">{caption}</h5>
                <div className="home__location">
                    <svg>
                        <use xlinkHref={`${spriteSVG}#icon-map-pin`} />
                    </svg>
                    <p>{country}</p>
                </div>
                <div className="home__rooms">
                    <svg>
                        <use xlinkHref={`${spriteSVG}#icon-profile-male`} />
                    </svg>
                    <p>{numOfRooms} rooms</p>
                </div>
                <div className="home__area">
                    <svg>
                        <use xlinkHref={`${spriteSVG}#icon-expand`} />
                    </svg>
                    <p>{acreLength} m<sup>2</sup></p>
                </div >
                <div className="home__price">
                    <svg>
                        <use xlinkHref={`${spriteSVG}#icon-key`} />
                    </svg>
                    <p>{price}</p>
                </div >
                <button className="btn home__btn">Contact realtor</button>
            </div >      
    )
}

export default Home;