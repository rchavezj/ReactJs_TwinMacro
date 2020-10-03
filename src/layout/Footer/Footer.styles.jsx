import tw, { css, styled } from 'twin.macro';



const footer = styled.footer`
    ${tw`
        p-32
        bg-blue-950
        col-full-st-end
    `}
`;

const navStr = `
    grid
    gap-8
    list-none
    items-center
    grid-cols-auto-fit-nav
`;


const nav = styled.ul`
    ${tw` ${navStr}`}
`;


const link = styled.a`
    ${tw` ${navStr} `};
    :link, :visited{
        ${tw`
            p-6
            text-1xl
            block
            bg-white
            uppercase
            text-center
            no-underline
            transition-all duration-200
        `};
        
        font-family: "Josefin Sans", sans-serif;
    }
    :hover, :active {
        transform: translateY(-3px);
        background-color: rgba(#fff, .05);
    }   
`;


const copyright = styled.p`
    ${tw`
        mt-24
        mr-auto
        ml-auto
        text-1xl
        w-8/12/5
        bg-gray-25
        text-center
    `}
`;


export const FooterTW = {
    footer, nav,
    link, copyright
}

