import styled from '@emotion/styled';

export const headerSection = styled.header`
    display: grid;
    padding: 8rem;
    padding-top: 4rem;
    background-color: #54483a;
    grid-column: full-start / col-end 6;
    background-image: linear-gradient(rgba(16, 29, 44, .93), rgba(16, 29, 44, .93)), url(../../../../img/hero.jpeg);
    background-size: cover;
    background-position: center;
    grid-template-rows: 1fr min-content minmax(6rem, min-content) 1fr;
    grid-template-columns: minmax(min-content, max-content);
    grid-row-gap: 1.5rem;
    justify-content: center;



    @media only screen and (max-width: 50em) {
        grid-column: -1;
    }

    @media only screen and (max-width: 37.5em) {
	    padding: 5rem;
    }

    /* .header__logo {
        height: 3rem;
        justify-self: center;
    }

    .header__btn {
        align-self: start;
        justify-self: start; 1fr);
        grid-column-gap: 3rem;
    }
    .header__seenon-text {
        display: grid;
        grid-template-columns: 1fr max-content 1fr;
        grid-column-gap: 1.5rem;
        align-items: center;
        font-size: 1.6rem;
        color: #aaa;
    }
    .header__seenon-text::before, .header__seenon-text::after {
        content: "";
        height: 1px;
        display: block;
        background-color: currentColor;
    }
    .header__seenon-logos {
        display: grid;
        grid-template-columns: repeat(4,
        justify-items: center;
        align-items: center;
    }
    .header__seenon-logos img {
        max-height: 2.5rem;
        max-width: 100%;
        filter: brightness(70%);
    } */
`;

export const ImgStyle = styled.div`
    height: 3rem;
    justify-self: center;
    background-image: url(${props => props.logo});
`

export const heading3Style = styled.h3`
    font-weight: 400;
    font-size: 1.6rem;
    color: $color-primary;
    text-transform: uppercase;
    font-family: $font-display;
`;

export const heading1Style = styled.h1`
    line-height: 1;
    font-weight: 400;
    font-size: 4.5rem;
    font-family: $font-display;
    color: $color-grey-light-1;
`;

