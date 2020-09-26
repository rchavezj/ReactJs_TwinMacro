import tw, { css, styled } from 'twin.macro';


const baseStyles = css`
    ${tw` font-sans font-normal `};
`;

// Heading 1
const H1 = styled.h1`
    ${baseStyles};
    ${tw`
        text-7x1
        text-gray-50
        leading-none
    `};
`;


// Heading 2
const H2 = styled.h2`
    ${baseStyles};
    ${tw`
        italic
        text-6xl
        leading-4
    `};
`;
const H2Light = styled.h2`
    ${H2};
    ${tw` text-gray-50 `};
`;
const H2Dark = styled.h2`
    ${H2};
    ${tw` text-gray-950 `};
`;


// Heading 3
const H3 = styled.h3`
    ${baseStyles};
    ${tw`
        uppercase
        text-2x1x5
        text-orange-350
    `};
`;


// Heading 4
const H4 = styled.h4`
    ${baseStyles}
    ${tw` text-3x1x5`}
`;
const H4Light = styled.h4`
    ${H4};
    ${tw` text-gray-50 `};
`;
const H4Dark = styled.h4`
    ${H4};
    ${tw` text-gray-950 `};
`;

export const Heading = {
    H1,
    H2, H2Light, H2Dark,
    H3,
    H4, H4Light, H4Dark
}
// module.exports = Heading;





export const btn = styled.button`
    ${tw`
        text-2xl
        font-sans
        uppercase 
        text-white
        py-8 px-12
        border-none
        rounded-none
        bg-orange-350
        cursor-pointer
        transition-all duration-200
    `};

     &:hover {
        ${tw`bg-orange-355`}
    }
`;

