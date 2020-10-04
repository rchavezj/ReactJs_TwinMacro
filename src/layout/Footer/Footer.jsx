import React from 'react';
import { FooterTW } from './Footer.styles';

const Footer = () => {
    return (
        <FooterTW.footer>
            <FooterTW.nav>
                <li><FooterTW.link href="/#">Find your dream home</FooterTW.link></li>
                <li><FooterTW.link href="/#">Request proposal</FooterTW.link></li>
                <li><FooterTW.link href="/#">Download home planner</FooterTW.link></li>
                <li><FooterTW.link href="/#">Contact us</FooterTW.link></li>
                <li><FooterTW.link href="/#">Submit your property</FooterTW.link></li>
                <li><FooterTW.link href="/#">Come work with us!</FooterTW.link></li>
            </FooterTW.nav>
            <FooterTW.copyrightText>
                End of page.
            </FooterTW.copyrightText>
        </FooterTW.footer>
    )
}

export default Footer;