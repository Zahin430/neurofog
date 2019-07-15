import React from 'react';
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <div>

            <div className="footer">
                © All Rights Reserved 2019
                <Link to = "/" style = {{paddingLeft: '0.5%'}}>Neurofog</Link>
            </div>

        </div>

    );
}

export default Footer;
