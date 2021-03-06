import tw, { styled } from 'twin.macro';


const realtors = styled.div`
    ${tw`
        mg_lg:col-center-realtors
    `}

     ${tw`
        p-12
        grid
        gap-y-8
        bg-blue-950
        justify-center
        content-center
        justify-items-center
        col-start-1 col-end-neg-1
        
    `}
`;

const list = styled.div`
    ${tw`
        sm:items-center
        sm:grid-cols-realtors_sm
    `}
    
    ${tw`
        mg_lg:grid-cols-realtors
    `}
    
    ${tw` 
        grid
        gap-x-8
    `}
    grid-row-gap: 5vh;
`;

const img = styled.img`
    ${tw`
        w-28
        block
    `}border-radius: 50%;
`;

const sold = styled.p`
    ${tw`
        -mt-0.75
        uppercase
        text-gray-50
    `}
`;


export const RealtorsTW = {
    realtors, list, img, sold
}