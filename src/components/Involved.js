import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

class Involved extends Component  {
    render() {
        return (    
            <div class="involved-landing">


                <div className= "container">
                    <p id = "involved-text" style ={{ letterSpacing: '8px' }} className="text-center">GET INVOLVED</p>
                </div>

                <div class ="scroll">
                    <p id = "tag" style ={{ letterSpacing: '3px' }} className="text-center">Scroll Down!</p>
                        <a href="#section1">
                            <i class="fas fa-chevron-down text-center"></i>
                        </a>
                </div>
               


            </div>
            );
    }
    
}

export default Involved;