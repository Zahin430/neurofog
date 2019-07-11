import React from 'react';
import SecondLanding from './SecondLanding';
import ScrollableAnchor from 'react-scrollable-anchor';
import logo from './img/logo.png'

const Landing = () => {
    return (
        <div className = "main">

            <div className="crossfade ">


                <div className= "container d-flex justify-content-center" style={{width: 'auto'}}>
                    <p id = "main-tag" style ={{ letterSpacing: '8px' }} className="text-center">THE NEUROFOG LABORATORY</p>
                </div>

                <div className ="scroll">
                    <p id = "tag" style ={{ letterSpacing: '3px' }} className="text-center">Scroll Down!</p>
                        <a href="#section1">
                            <i className="fas fa-chevron-down text-center"></i>
                        </a>
                </div>
               

            </div>

            <ScrollableAnchor id={'section1'}>
            
            <div id = "landing">
                <div id = "cover" className="Hello">
                    <img className="rounded mx-auto d-block" style = {{width: "400px", height: "350px"}} src={logo} alt="main"/>
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
