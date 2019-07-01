import React from 'react';
import SecondLanding from './SecondLanding';
import ScrollableAnchor from 'react-scrollable-anchor';
// import BackgroundSlideshow from 'react-background-slideshow'

import logo from './img/logo.png'
// import image2 from './img/harbour.jpg'

const Landing = () => {
    return (
        <div className = "main">

            <div class="crossfade">


                <div className= "container">
                    <p id = "main-tag" style ={{ letterSpacing: '8px' }} className="text-center">THE NEUROFOG LABORATORY</p>
                </div>

                <div class ="scroll">
                    <p id = "tag" style ={{ letterSpacing: '3px' }} className="text-center">Scroll Down!</p>
                        <a href="#section1">
                            <i class="fas fa-chevron-down text-center"></i>
                        </a>
                </div>
               

            </div>

            <ScrollableAnchor id={'section1'}>
            <div id = "landing">
                <div id = "cover" className="container">
                    <img className="rounded mx-auto d-block" style = {{width: "300px", height: "250px"}} src={logo} alt="main"/>
                </div>
                    <p id ="main-header" className="text text-center container">The Neurofog laboratory, directed by Dr. Jonathan Fawcett, is a human cognition laboratory in the department of Psychology at Memorial University of Newfoundland. The lab specializes in human memory and extends beyond behvaioural measurements, applying research with pupillometry and EEG. </p>
                </div>
            </ScrollableAnchor>






                
                <div>
                    <SecondLanding />
                </div>

        </div>
            
    );
}

export default Landing;
