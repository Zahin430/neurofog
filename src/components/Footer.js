import React from 'react';
import { Link } from 'react-router-dom'

import StickyFooter from 'react-sticky-footer';

const Footer = () => {
    return (
        <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "white",
    padding: "2px"
    }}
    stickyStyles={{
    backgroundColor: "white",
    padding: "2px"
    }}>
        © All Rights Reserved 2019
        {/* <br/>
        <Link to ='/'>Neurofog</Link> */}
    </StickyFooter>

    );
}

export default Footer;
