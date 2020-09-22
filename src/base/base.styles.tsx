import { ReactNode } from "react";



// enum Variant {
//     GRAY,
//     RED,
//     ORANGE,
//     YELLOW,
//     GREEN,
//     TEAL,
//     BLUE,
//     INDIGO,
//     PURPLE,
//     PINK
// }

// type Props = {
//     variant: Variant;
//     children?: ReactNode;
// };


// // COLOR VARIABLES
// $color - primary: #c69963;
// $color - primary - dark: #B28451;

// $color - secondary: #101d2c;

// $color - grey - light - 1: #f9f7f6;
// $color - grey - light - 2: #aaa;

// $color - grey - dark - 1: #54483A;
// $color - grey - dark - 2: #6D5D4B;




// const VARIANT_MAPS: Record<Variant, string> = {
//     [Variant.GRAY]: "bg-gray-100 text-gray-800",
//     [Variant.RED]: "bg-red-100 text-red-800",
//     [Variant.ORANGE]: "bg-orange-100 text-orange-800",
//     [Variant.YELLOW]: "bg-yellow-100 text-yellow-800",
//     [Variant.GREEN]: "bg-green-100 text-green-800",
//     [Variant.TEAL]: "bg-teal-100 text-teal-800",
//     [Variant.BLUE]: "bg-blue-100 text-blue-800",
//     [Variant.INDIGO]: "bg-indigo-100 text-indigo-800",
//     [Variant.PURPLE]: "bg-purple-100 text-purple-800",
//     [Variant.PINK]: "bg-pink-100 text-pink-800"
// };




// // FONT VARIABLES
// $font - primary: 'Nunito', sans - serif;
// $font - display: 'Josefin Sans', sans - serif;

// // RESPONSIVE BREAKPOINTS
// $bp - largest: 75em;   // 1200px
// $bp - large: 62.5em;   // 1000px
// $bp - medium: 50em;    // 800px;
// $bp - small: 37.5em;    // 600px;



enum Variant {
    Primary,
    PrimaryDark,
    Secondary,
    GreyLight1,
    GreyLight2,
    GreyDark1,
    GreyDark2,
}

type Props = {
    variant: Variant;
    children?: ReactNode;
};


const VARIANT_MAPS: Record<Variant, string> = {
    [Variant.Primary]: "#c69963",
    [Variant.PrimaryDark]: "#B28451",
    [Variant.Secondary]: "#101d2c",
    [Variant.GreyLight1]: "#f9f7f6",
    [Variant.GreyLight2]: "#aaa",
    [Variant.GreyDark1]: "#54483A",
    [Variant.GreyDark2]: "#6D5D4B"
};