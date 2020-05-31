import React from 'react';

import logo from '../../../../img/logo.png';
import logobbc from '../../../../img/logo-bbc.png';
import logoForbes from '../../../../img/logo-forbes.png';
import logoTechCrunch from '../../../../img/logo-techcrunch.png';
import logoBI from '../../../../img/logo-bi.png';

import Realtors from '../../../../components/Realtors/Realtors';


const Header = () => {
    return (
        <>
            <header className="header">
                <img src={logo} alt="Nexter logo" className="header__logo" />
                <h3 className="heading-3">Your own home:</h3>
                <h1 className="heading-1">The ultimate personal freedom</h1>
                <button className="btn header__btn">View our properties</button>
                <div className="header__seenon-text">Seen on</div>
                <div className="header__seenon-logos">
                    <img src={logobbc} alt="Seen on logo 1" />
                    <img src={logoForbes} alt="Seen on logo 2" />
                    <img src={logoTechCrunch} alt="Seen on logo 3" />
                    <img src={logoBI} alt="Seen on logo 4" />
                </div>
            </header>
            
            <Realtors />
        </>
    )
}

export default Header;