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
            <FooterTW.copyright>
                &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this
                project for your own purposes. This does NOT apply if you plan
                to produce your own course or tutorials based on this project.
            </FooterTW.copyright>
        </FooterTW.footer>
    )
}

export default Footer;