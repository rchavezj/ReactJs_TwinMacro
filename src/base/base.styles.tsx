import { ReactNode } from "react";



// // COLOR VARIABLES
// $color - primary: #c69963;
// $color - primary - dark: #B28451;

// $color - secondary: #101d2c;

// $color - grey - light - 1: #f9f7f6;
// $color - grey - light - 2: #aaa;

// $color - grey - dark - 1: #54483A;
// $color - grey - dark - 2: #6D5D4B;



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