import styled from '@emotion/styled';
// import tw from 'tailwind.macro';


export const SideBarLayoutTW = styled.div`
    grid
`;

// col-start-auto col-end-auto row-start-auto row-end-auto
export const SideBarTW = styled.div`    
    flex
    bg-yellow-600 
    justify-center
    row-start-auto row-end-auto
    col-start-auto col-end-auto 

    @media only screen and (max-width: 62.5em) {
        items-center
        rol-start-1 rol-start-2
        col-start-auto col-end-auto 
    }
    
`



export const SideBar = styled.div`
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
