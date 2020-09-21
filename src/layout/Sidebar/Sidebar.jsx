import React from 'react';
import { Button, SideBarTW } from './SideBar.styles';

const Sidebar = ({ children }) => {
    return (
        <>
            <SideBarTW>
                {/* < SideBarTW > */}
                <Button />
                {/* </SideBarTW > */}
            </SideBarTW>
            {children}
        </>
    )
}



export default Sidebar;