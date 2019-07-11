import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ScrollableAnchor from 'react-scrollable-anchor';

const Footer = () => {
    return (
        <div>

            <div className="footer">
                © All Rights Reserved 2019
                <AnchorLink href='#navbar' style = {{paddingLeft: '0.5%'}}>Neurofog</AnchorLink>
            </div>

        </div>

    );
}

export default Footer;
