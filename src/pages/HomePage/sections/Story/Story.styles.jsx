import tw, { styled } from 'twin.macro';


const Pictures = styled.div`
  ${tw`
    mg_lg:p-0
    mg_lg:col-center-story-picture

  `}
  ${tw`
    grid
    bg-cover
    p-24 m-0
    grid-cols-6
    grid-rows-6
    items-center
    bg-orange-350
    col-start-1 col-end-13
  `}  
  background-image: 
    ${props => `url(${props.img})`};
`;


const Img1 = styled.img`
  ${tw`
    mg_lg:row-start-2 mg_lg:row-end-6
    mg_lg:col-start-2 mg_lg:col-end-6
  `}
  ${tw`
    w-full
    row-start-1 row-end-7
    col-start-1 col-end-5
  `}
  box-shadow: 0 2rem 5rem rgba(#000, .1);
`;


const Img2 = styled.img`
  ${tw`
    mg_lg:w-fullOffset
    mg_lg:row-start-4 mg_lg:row-end-6
  `}
  ${tw`
    z-20
    w-full
    row-start-1 row-end-7
    col-start-4 col-end-7
  `}
  box-shadow: 0 2rem 5rem rgba(#000, .2);
`;


// mg_lg:row-start-3 mg_lg:row-end-auto
const Content = styled.div`
  ${tw`
    mg_lg:col-center-story-content
  `}

  ${tw`
    grid
    bg-gray-50
    items-center
    justify-items-start
    row-start-5 row-end-6
    col-start-1 col-end-13
  `}
  padding: 6rem 8vw;
`;


const Text = styled.p`
  ${tw`
    m-16
    italic
    text-2xl
  `}
`;


export const StoryTW = {
  Pictures,
  Img1,
  Img2,
  Content,
  Text
}
// module.exports = StoryTW;

