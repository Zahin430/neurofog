import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import StickyFooter from 'react-sticky-footer';

const Footer = () => {
    return (
        <div>
        {/* <StickyFooter className="container">
            <StickyFooter
        bottomThreshold={50}
        normalStyles={{
        backgroundColor: "white",
        }}
        stickyStyles={{
        backgroundColor: "white",
        }}/> */}
        <div className="footer">
            © All Rights Reserved 2019
            <AnchorLink href='#navbar' style = {{paddingLeft: '0.5%'}}>Neurofog</AnchorLink>
        </div>
        {/* </StickyFooter> */}
        </div>

    );
}

export default Footer;
