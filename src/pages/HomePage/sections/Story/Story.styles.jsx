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
  ${tw`
    mg_lg:w-full
    mg_lg:row-start-2 mg_lg:row-end-6
    mg_lg:col-start-2 mg_lg:col-end-6
  `}

  ${tw`
     row-start-1 row-end-7
     col-start-1 col-end-13
  `}
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

