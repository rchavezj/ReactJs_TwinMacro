import tw, { styled } from 'twin.macro';


const Pictures = styled.div`
  
  ${tw`
    md:bg-orange-350
    
  `}
  
  ${tw`
    p-24
    col-start-1 col-end-13
  `}  
`;

const Img1 = styled.img`

`;

const Img2 = styled.img`
    
`;


const Content = styled.div`

`;

const Text = styled.p`

`;


const Story = {
    Pictures,
    Img1,
    Img2,
    Content,
    Text
}
module.exports = Story;

