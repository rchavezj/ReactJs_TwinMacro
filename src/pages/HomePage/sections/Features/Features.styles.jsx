import tw, { styled } from 'twin.macro';

export const FeatureTW = styled.section`
    ${tw`
        my-48
        col-start-center col-end-center
    `}
    @supports(display: grid) {
        ${tw`
            grid
            gap-24
            items-start
            grid-cols-auto-fit
        `}
     }    
`;

