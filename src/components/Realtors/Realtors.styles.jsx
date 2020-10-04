import tw, { styled } from 'twin.macro';


const realtors = styled.div`
    ${tw`
        mg_lg:p-12
        mg_lg:gap-y-8
        mg_lg:content-center
        mg_lg:col-center-realtors
        mg_lg:justify-center 
        mg_lg:justify-items-center
    `}

     ${tw`
        grid
        col-start-1
        bg-blue-950
    `}
`;

const list = styled.div`
    ${tw`
        mg_lg:grid
        mg_lg:gap-x-8
        mg_lg:items-center
    `}

    ${tw`
        sm:realtors_sm
    `}
    
    grid-row-gap: 5vh;
    ${tw` grid-cols-realtors `}
    
`;


const img = styled.img`
    ${tw`
        w-28
        block
    `}border-radius: 50%;
`;

const sold = styled.p`
    ${tw`
        -mt-12
        uppercase
        text-gray-50
    `}
`;


export const Realtors = {
    realtors, list, img, sold
}