import tw, { styled } from 'twin.macro';

const baseStyle = styled.div`
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
    ${tw`
        m-4 z-2
        h-10 w-10 
        justify-self-end
        fill-primary-orange
        row-start-1 row-end-2
        col-start-2 col-end-3
    `}
`;

const name = styled.h5`
    ${tw`
        justify-self-center
        row-start-1 row-end-2
        col-start-1 col-end-13
    `}
`;

const location_and_rooms = {

}

const location_roomns_area_price = {

}

export const HomeTW = {
    image, like, name,
}

export const Btn = {

}

