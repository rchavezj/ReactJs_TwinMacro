import styled from '@emotion/styled';


enum Variant {
    GRAY,
    RED,
    ORANGE,
    YELLOW,
    GREEN,
    TEAL,
    BLUE,
    INDIGO,
    PURPLE,
    PINK
}

type Props = {
    variant: Variant;
    children?: ReactNode;
};


// // COLOR VARIABLES
// $color - primary: #c69963;
// $color - primary - dark: #B28451;

// $color - secondary: #101d2c;

// $color - grey - light - 1: #f9f7f6;
// $color - grey - light - 2: #aaa;

// $color - grey - dark - 1: #54483A;
// $color - grey - dark - 2: #6D5D4B;




const VARIANT_MAPS: Record<Variant, string> = {
    [Variant.GRAY]: "bg-gray-100 text-gray-800",
    [Variant.RED]: "bg-red-100 text-red-800",
    [Variant.ORANGE]: "bg-orange-100 text-orange-800",
    [Variant.YELLOW]: "bg-yellow-100 text-yellow-800",
    [Variant.GREEN]: "bg-green-100 text-green-800",
    [Variant.TEAL]: "bg-teal-100 text-teal-800",
    [Variant.BLUE]: "bg-blue-100 text-blue-800",
    [Variant.INDIGO]: "bg-indigo-100 text-indigo-800",
    [Variant.PURPLE]: "bg-purple-100 text-purple-800",
    [Variant.PINK]: "bg-pink-100 text-pink-800"
};




// // FONT VARIABLES
// $font - primary: 'Nunito', sans - serif;
// $font - display: 'Josefin Sans', sans - serif;

// // RESPONSIVE BREAKPOINTS
// $bp - largest: 75em;   // 1200px
// $bp - large: 62.5em;   // 1000px
// $bp - medium: 50em;    // 800px;
// $bp - small: 37.5em;    // 600px;


export const heading = styled.div`
    font-weight: 400;
    font-family: 'Josefin Sans', sans-serif;
`;

export const heading1 = styled.h1`
    font-size: 4.5rem;
    font-style: italic;
    line-height: 1;


`;