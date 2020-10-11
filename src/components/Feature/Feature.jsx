import React from 'react';

import spriteSVG from '../../img/sprite.svg';

const Feature = ({ svgType, topic, text }) => {
    return (
        <div className="feature">
            <svg className="feature__icon">
                <use xlinkHref={`${spriteSVG}#${svgType}`} />
            </svg>
            <h4 className="heading-4 heading-4--dark">{topic}</h4>
            <p className="feature__text">{text}</p>
        </div>
    )
}

export default Feature;