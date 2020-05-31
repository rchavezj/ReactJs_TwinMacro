import React from 'react';

import spriteSVG from '../../img/sprite.svg';

const Feature = ({ svgType, topic, text }) => {
    return (
        <div class="feature">
            <svg class="feature__icon">
                <use xlinkHref={`${spriteSVG}#${svgType}`} />
            </svg>
            <h4 class="heading-4 heading-4--dark">{topic}</h4>
            <p class="feature__text">{text}</p>
        </div>
    )
}

export default Feature;