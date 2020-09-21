import React from 'react';
import { Button, SideBarTW } from './SideBar.styles';

const Sidebar = ({ children }) => {
    return (
        <>
            <SideBarTW>
                <Button />
            </SideBarTW>
            {children}
        </>
    )
}



export default Sidebar;