import React from 'react';

import spriteSVG from '../../img/sprite.svg';

const Features = () => {

    return (
        <>
            <section class="features">
                <div class="feature">
                    <svg class="feature__icon">
                        <use xlinkHref={`${spriteSVG}#icon-global`} />
                    </svg>
                    <h4 class="heading-4 heading-4--dark">Only the best properties</h4>
                    <p class="feature__text">Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
                </div>

                <div class="feature">
                    <svg class="feature__icon">
                        <use xlinkHref={`${spriteSVG}#icon-trophy`} />
                    </svg>
                    <h4 class="heading-4 heading-4--dark">All homes in in top locations</h4>
                    <p class="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
                </div>

                <div class="feature">
                    <svg class="feature__icon">
                        <use xlinkHref={`${spriteSVG}#icon-map-pin`} />
                    </svg>
                    <h4 class="heading-4 heading-4--dark">All homes in in top locations</h4>
                    <p class="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
                </div>

                <div class="feature">
                    <svg class="feature__icon">
                        <use xlinkHref={`${spriteSVG}#icon-key`} />
                    </svg>
                    <h4 class="heading-4 heading-4--dark">New home in one week</h4>
                    <p class="feature__text">Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div class="feature">
                    <svg class="feature__icon">
                        <use xlinkHref={`${spriteSVG}#icon-presentation`} />
                    </svg>
                    <h4 class="heading-4 heading-4--dark">Top 1% realtors</h4>
                    <p class="feature__text">Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
                </div>

                <div class="feature">
                    <svg class="feature__icon">
                        <use xlinkHref={`${spriteSVG}#icon-lock`} />
                    </svg>
                    <h4 class="heading-4 heading-4--dark">Secure payments on nexter</h4>
                    <p class="feature__text">Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
                </div>
            </section >
        </>
    )
}

export default Features;