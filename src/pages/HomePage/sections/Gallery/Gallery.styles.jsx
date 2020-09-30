import tw, { css, styled } from 'twin.macro';


const galleryStr = ` 
    p-6
    grid
    gap-6
    bg-gray-50
    grid-cols-gallery
`;




const item = [
    styled.figure` 
        grid-row: 1 / span 2;
        grid-column: 1 / span 2;
    `,
    styled.figure`
        grid-row: 1 / span 3;
        grid-column: 3 / span 3;
    `,
    styled.figure`
        grid-row: 1 / span 2;
        grid-column: 6 / 7;
    `,
    styled.figure`
        grid-row: 1 / span 2;
        grid-column: 7 / -1;
    `
];