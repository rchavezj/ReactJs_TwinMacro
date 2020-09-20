import React from 'react';
import { Button, SideBar } from './SideBar.styles';

const Sidebar = ({ children }) => {
    return (
        <>
            <SideBar>
                {/* < SideBarTW > */}
                <Button />
                {/* </SideBarTW > */}
            </SideBar>
            {children}
        </>
    )
}



export default Sidebar;