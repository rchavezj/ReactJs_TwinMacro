import tw, { css, styled } from 'twin.macro';

const baseStyle = css`
    ${tw`
        z-1
        grid
        gap-y-13
        bg-gray-50
        grid-cols-repeat
    `}
`;

const image = styled.img`
    ${baseStyle}
    ${tw`
        z-1
        w-full
        row-start-1 row-end-2
        col-start-1 col-end-13
    `}
`;

const like = styled.svg`
    ${baseStyle}
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
    ${baseStyle}
    ${tw`
        p-5
        w-10/12
        text-2x1x5
        text-center
        bg-blue-950
        font-normal
        text-blue-950
        translate-y-1/2
        justify-self-center
        row-start-1 row-end-2
        col-start-1 col-end-13
    `}
    font-family: "Josefin Sans", sans-serif;
`;

const location_or_rooms = styled.div`
    ${baseStyle}
    ${tw` mt-10 `}
`;


const location_rooms_area_price = styled.div`
    ${baseStyle}
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

export const HomeTW = {
    baseStyle,
    image, like, name,
    location_or_rooms,
    location_rooms_area_price
}

export const HomeBtn = styled.button`
    ${tw`
        col-start-1 col-end-13
    `}
`;

