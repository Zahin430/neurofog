import React from 'react';

import StickyFooter from 'react-sticky-footer';

const Footer = () => {
    return (
        <div className= "container-fluid">
        <StickyFooter className="container">
            <StickyFooter
        bottomThreshold={50}
        normalStyles={{
        backgroundColor: "white",
        }}
        stickyStyles={{
        backgroundColor: "white",
        }}/>
            © All Rights Reserved 2019
            {/* <br/>
            <Link to ='/'>Neurofog</Link> */}
        </StickyFooter>
        </div>

    );
}

export default Footer;
