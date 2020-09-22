import React from 'react';
import { ButtonTW, SideBarTW } from './SideBar.styles';

const Sidebar = ({ children }) => {
    return (
        <>
            <SideBarTW>
                <ButtonTW />
            </SideBarTW>
            {children}
        </>
    )
}



export default Sidebar;