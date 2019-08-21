import React from 'react';
import {Link} from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
class Footer extends React.Component {
 
    ScrollTo() {
        scroll.scrollToTop();
    }
    render() {
        return (
            <div>
    
                <div className="footer">
                    © All Rights Reserved 2019
                    <Link onClick={this.ScrollTo} style = {{paddingLeft: '0.5%', textDecoration: 'none'}}>Neurofog</Link>
                </div>
    
            </div>
    
        );
    }
}

export default Footer;
