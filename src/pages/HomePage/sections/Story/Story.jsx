import React from 'react';
import { Heading } from '../../../../abstract/typography.styles';
import background from '../../../../img/back.jpg';
import story1 from '../../../../img/story-1.jpeg';
import story2 from '../../../../img/story-2.jpeg';
import { StoryTW } from './Story.styles';



const Story = () => {
    return (
        <>
            <StoryTW.Pictures img={background}>
                <StoryTW.Img1 src={story1} alt="Couple with new house" />
                <StoryTW.Img2 src={story2} alt="New house" />
                {/* <img src={story2} alt="New house" class="story__img--2" /> */}
            </StoryTW.Pictures>
            {/* <div class="story__pictures">
                <img src={story1} alt="Couple with new house" class="story__img--1" />
                <img src={story2} alt="New house" class="story__img--2" />
            </div> */}

            <StoryTW.Content>
                <Heading.H3>Happy Customers</Heading.H3>
                {/* <div class="story__content"> */}
                <h3 class="heading-3 mb-sm">Happy Customers</h3>
                <Heading.H2>
                    &ldquo;The best decision of our lives&rdquo;
                </Heading.H2>
                <h2 class="heading-2 heading-2--dark mb-md">
                    &ldquo;The best decision of our lives&rdquo;
                </h2>
                <StoryTW.Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur distinctio necessitatibus pariatur voluptatibus.
                    Quidem consequatur harum volupta!
                </StoryTW.Text>
                <p class="story__text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur distinctio necessitatibus pariatur voluptatibus.
                    Quidem consequatur harum volupta!
                </p>
                <button class="btn">Find your own home</button>
                {/* </div> */}
            </StoryTW.Content>



        </>
    )
}

export default Story;