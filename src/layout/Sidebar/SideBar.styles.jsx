// import styled from '@emotion/styled';
import tw, { styled } from 'twin.macro';


// col-start-auto col-end-auto row-start-auto row-end-auto
export const SideBarTW = styled.div`      
    ${tw`
        lg:items-start
        lg:row-start-1 lg:row-end-7
        lg:col-start-1 lg:col-end-2 
    `}

    ${tw`
        flex
        items-center
        bg-orange-350 
        justify-center
        row-start-1 row-end-2
        col-start-1 col-end-13
    `}
`;

// export const SideBarTW = styled.div`      
//     ${tw`
//         flex
//         bg-orange-350 
//         justify-center
//         row-start-1 row-end-7
//         col-start-auto col-end-auto 
//     `}

//     @media only screen and (max-width: 62.5em) {
//         ${tw`
//             items-center
//             justify-center
//             row-start-1 row-end-2
//             col-start-1 col-end-13
//         `}
//     }
// `;




export const SideBarSC = styled.div`
    background-color: #c69963;
    grid-column: sidebar-start / sidebar-end;
    grid-row: 1 / -1;
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 62.5em) {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        justify-content: center;
        align-items: center;
    }
`;





// col-start-auto col-end-auto row-start-auto row-end-auto
export const ButtonTW = styled.button`      
    ${tw`
        h-0.5
        mt-16
        w-16-5
        bg-white
        border-none
        rounded-none
    `}

    ::before, ::after {
        ${tw`
            h-0.5
            block
            w-16-5
            bg-white
        `}
        content: "";
    }

    ::before {
        ${tw`  transform -translate-y-6  `}
    } 

    ::after {
        ${tw` transform translate-y-5  `}
    }

    @media only screen and (max-width: 1023px) {
        ${tw`
            mt-0
        `}

        ::before {
            ${tw`
                transform
                -translate-y-5
            `}
            /* transform: translateY(-1.2rem);  */
        }
        
        ::after {
            ${tw`
                transform
                translate-y-4
            `}
            /* transform: translateY(1rem);  */
        }
    }
`;


export const Button = styled.button`
    
    border: none;
    border-radius: 0;
    background-color: #fff;
    height: 2px;
    width: 4.5rem;
    margin-top: 4rem; 
    
    ::before, ::after {
        background-color: #fff;
        height: 2px;
        width: 4.5rem;
        content: "";
        display: block; 
    }

    ::before {
        transform: translateY(-1.5rem); 
    }

    ::after {
        transform: translateY(1.3rem); 
    }

    @media only screen and (max-width: 62.5em) {
        
        margin-top: 0;
        margin-right: 3rem; 
            
        ::before {
            transform: translateY(-1.2rem); 
        }
        
        ::after {
            transform: translateY(1rem); 
        } 
    }
`;
