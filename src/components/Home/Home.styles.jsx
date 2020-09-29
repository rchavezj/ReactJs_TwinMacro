import tw, { css, styled } from 'twin.macro';
import { ButtonStr } from '../../abstract/typography.styles';


const baseStyle = styled.div`
    ${tw` 
        grid
        gap-y-13
        bg-gray-50
        grid-cols-repeat
    `}
`;


const image = styled.img`
    ${tw`
        z-1
        w-full
        col-1-to-neg-1
        row-start-1 row-end-2
    `}
`;


const like = styled.svg`
    ${tw`
        m-4 z-2
        h-10 w-10 
        fill-current
        justify-self-end
        row-start-1 row-end-2
        col-start-2 col-end-3
    `}
`;


const name = styled.h5`
    ${tw`
        p-5
        w-10/12
        text-2x1x5
        text-center
        bg-blue-950
        font-normal
        text-blue-950
        col-1-to-neg-1
        translate-y-1/2
        justify-self-center
        row-start-1 row-end-2
    `}
    font-family: "Josefin Sans", sans-serif;
`;


const homeProperties = css`
    ${tw`
        flex
        ml-8
        text-2xl
        items-center
    `}
    svg {
        ${tw`
            mr-4
            h-8 w-8
            fill-current
        `}
    }
`;


const location = styled.div`
    ${homeProperties}
    ${tw` mt-10 `}
`; const rooms = location;


const area = styled.div`
    ${homeProperties}
`; const price = area;



export const HomeTW = {
    baseStyle,
    image, like, name,
    location, rooms,
    area, price
}


export const HomeButtonTW = styled.button`
    ${ButtonStr}
    ${tw` col-1-to-neg-1 `}
`;


