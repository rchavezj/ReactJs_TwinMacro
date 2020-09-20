import React from 'react';
import { Button, SideBar } from './SideBar.styles';

const Sidebar = ({ children }) => {
    return (
        <>
            {/* <div className="sidebar"> */}
            <SideBar>
                {/* <button className="nav-btn"></button> */}
                <Button />
            </SideBar>
            {/* </div> */}
            {children}
        </>
    )
}



export default Sidebar;