import tw, { css, styled } from 'twin.macro';


const galleryStr = ` 
    p-6
    grid
    gap-6
    bg-gray-50
    grid-cols-gallery
`;


const image = styled.image`
    ${galleryStr}
    ${tw`
        block
        w-full
        h-full
        object-cover
    `}
`;


const item1 = styled.figure` 
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
`;

const item2 = styled.figure`
    grid-row: 1 / span 3;
    grid-column: 3 / span 3;
`;

const item3 = styled.figure`
    grid-row: 1 / span 2;
    grid-column: 6 / 7;
`;

const item4 = styled.figure`
    grid-row: 1 / span  2;
    grid-column: 7 /span 2;
`;

const item5 = styled.figure`
    grid-row: 3 / span 3;
    grid-column: 1 / span 2;
`;

const item6 = styled.figure`
    grid-row: 4 / span 2;
    grid-column: 3 / span 2;
`;

const item7 = styled.figure`
    grid-row: 4 / span 1;
    grid-column: 5 / span 1;
`;


const item8 = styled.figure`
    grid-row: 3 / span 2;
    grid-column: 6 / span 2;
`;

const item9 = styled.figure`
    grid-row: 3 / span 3;
    grid-column: 8 / -1;   
`;

const item10 = styled.figure`
    grid-row: 6 / span 2;
    grid-column: 1 / 2;
`;

const item11 = styled.figure`
    grid-row: 6 / span 2;
    grid-column: 2 / span 2;
`;

const item12 = styled.figure`
    grid-row: 6 / span 2;
    grid-column: 4 / 5;
`;

const item13 = styled.figure`
    grid-row: 5 / span 3;
    grid-column: 5 / span 3;
`;

const item14 = styled.figure` 
    grid-row: 6 / span 2;
    grid-column: 8 / span 1;
`;

export const GalleryTW = {
    image,
    item1, item2, item3, item4,
    item5, item6, item7, item8,
    item9, item10, item11, item12,
    item13, item14
}