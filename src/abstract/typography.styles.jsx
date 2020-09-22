// import styled from '@emotion/styled';
import tw, { css, styled } from 'twin.macro';


export const heading = css`
    ${tw` font-sans font-normal `}
`;

export const heading1 = styled.h1`
    ${heading}
    font-size: 4.5rem;
    font-style: italic;
    line-height: 1;
`;



// Need to convert sass to css to tailwindCSS
// sass
// .heading-2 {
//     @extend % heading;
//     font - size: 4rem;
//     font - style: italic;
//     line - height: 1;

//     & --light { color: $color - grey - light - 1; }
//     & --dark { color: $color - grey - dark - 1; }
// }
// css
// .heading-2 {
// font - size: 4rem;
// font - style: italic;
// line - height: 1;
// }
//  .heading - 2--light {
//     color: #f9f7f6;
// }
//  .heading - 2--dark {
//     color: #54483a;
// }

export const heading2 = styled.h2`
    ${heading}
    ${tw`
        italic
        text-7xl
        leading-4
    `}
`;