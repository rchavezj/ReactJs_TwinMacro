import React from 'react';

import Feature from '../../../../components/Feature/Feature';

const Features = () => {

    return (
        <>
            <section class="features">


                <Feature 
                    svgType={`icon-global`}
                    topic={`Only the best properties`}
                    text={`
                        Voluptatum mollitia quae. 
                        Vero ipsum sapiente molestias accusamus 
                        rerum sed a eligendi aut quia.`
                    }
                />

                <Feature
                    svgType={`icon-trophy`}
                    topic={`All homes in in top locations`}
                    text={`
                        Voluptatum mollitia quae. Vero ipsum sapiente 
                        molestias accusamus rerum sed a eligendi aut quia.`
                    }
                />


                <Feature
                    svgType={`icon-map-pin`}
                    topic={`Only the best properties`}
                    text={`
                        Tenetur distinctio necessitatibus 
                        pariatur voluptatibus quidem consequatur harum.`
                    }
                />


                <Feature
                    svgType={`icon-key`}
                    topic={`New home in one week`}
                    text={`
                        Vero ipsum sapiente molestias 
                        accusamus rerum. Lorem, ipsum dolor 
                        sit amet consectetur adipisicing elit.`
                    }
                />


                <Feature
                    svgType={`icon-presentation`}
                    topic={`Top 1% realtors`}
                    text={`
                        Quidem consequatur harum, 
                        voluptatum mollitia quae. Tenetur 
                        distinctio necessitatibus pariatur voluptatibus.`
                    }
                />


                <Feature
                    svgType={`icon-lock`}
                    topic={`Secure payments on nexter`}
                    text={`
                        Pariatur voluptatibus quidem consequatur 
                        harum, voluptatum mollitia quae.`
                    }
                />
            </section >
        </>
    )
}

export default Features;