import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'

class Involved extends Component  {
    render() {
        var text = "Hello"
        return (    
            <div class="jumbotron jumbotron-fluid">
            {/* <div class="container">
                <h1 class="display-4">{text}</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div> */}
            <div>
                <a href='#section1'> Go to section 1 </a>
                <a href='#section2'> Go to section 2 </a>
                <ScrollableAnchor id={'section1'}>
                <div> Hello World </div>
                </ScrollableAnchor>
                <ScrollableAnchor id={'section2'}>
                    <div> How are you world? </div>
                </ScrollableAnchor>
            </div>
            </div>
            );
    }
    
}

export default Involved;