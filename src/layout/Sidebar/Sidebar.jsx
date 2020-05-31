import React from 'react';


const Sidebar = ({children}) => {
    return (
        <>
            <div className="sidebar">
                <button className="nav-btn"></button>
            </div>
            {children}
        </>
    )
}


export default Sidebar;