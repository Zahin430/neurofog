/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

import Pupillometry from './img/Pupil.jpg'
import electron from './img/electro.jpg'

import Publication from './Publication';


export default class Research extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }


    render() {

        return (
            <div className="research">
                <div className="research-head">
                    <div className="container d-flex justify-content-center" style={{ width: 'auto' }}>
                        <p id="main-tag" style={{ letterSpacing: '10px', padding: '20px', paddingTop: '15px', border: 'none', fontWeight: '300' }} className="text-center">RESEARCH</p>
                    </div>

                    <div className="scroll" style={{ paddingTop: '120px' }}>
                        <p id="tag" style={{ letterSpacing: '3px' }} className="text-center">Scroll Down!</p>
                        <a href="#section1">
                            <i className="fas fa-chevron-down text-center"></i>
                        </a>
                    </div>
                </div>


                <div className="container" id="section1" style={{ paddingTop: "200px" }}>

                    <h2 className="text-center" style={{ letterSpacing: '3px', paddingBottom: '35px', fontWeight: '400' }} >RESEARCH</h2>

                    <p style={{ fontSize: '20px' }}>Dr. Fawcett and his team conduct a wide variety of research in Human Cognition. Primairly, the lab focusus on understanding the cognitive and neural basis of controlling unwanted thoughts or memories. For example, how is it that some people can be reminded of an unwanted experience and brush it off whereas others receive a similar reminder and find themselves caught ruminating over it for days? Dr. Fawcett's past work suggests that variation in the relative strength of certain mental control processes across individuals play a role. Some people are simply better at controlling unwanted memories – as measured in the laboratory – and those individuals tend to be less affected by intrusions of the manner described above. The team studies study this phenomenon in both general and clinical populations.</p>
                    <br />
                    <hr />
                    <p className="text-center" style={{ fontSize: '20px', padding: '5px' }}>The laboratory is also presently equipped with state-of-the-art facilities for eye tracking and electroencephalography (EEG) which are both used to extend knowledge of this research</p>


                </div>


                <div class="no-padding lib-item" data-category="view">
                    <div class="lib-panel align-middle">
                        <div class="row box-shadow">
                            <div class="col-md-6">
                                <img class="lib-img-show" src={Pupillometry} alt='' />
                            </div>
                            <div class="col-md-6">
                                <div class="lib-row lib-header">
                                    <h5>Pupillometry</h5>
                                    <div class="lib-header-seperator"></div>
                                </div>
                                <div class="lib-row lib-desc">
                                    <p>Pupillometry is an unobtrusive psychophysiological techniques used to measure pupil size and reactivity. There is a great importance for pupil evaluation in cognitive research. Changes in pupil diameter in particular have been found to be a useful index of mental processing in humans. The more focused we are on something, the larger our pupils become. Many of our current studies involve measuremnts with a pupillometric instrument that can be found in our main laboratory. This device uses infrared light and special cameras to track and record the position of each eye, where it is looking on the computer screen and the size of the pupil. Together, these measurements allow us to monitor when and to what degree participants are attending to any given item on the screen.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lib-panel align-middle">
                        <div class="row box-shadow">
                            <div class="col-md-6">
                                <img class="lib-img-show" src={electron} alt='' />
                            </div>
                            <div class="col-md-6" style = {{width: 'auto'}}>
                                <div class="lib-row lib-header" style = {{width: 'auto'}} >
                                    <h5>Electroencephalography</h5>
                                    <div class="lib-header-seperator"></div>
                                </div>
                                <div class="lib-row lib-desc">
                                    <p className="card-text" style={{ fontSize: '16px' }} >EEG is an electrophysiological monitoring method to record electrical activity of the brain. This instrument has been newly adopted into the Neuro Fog laboratory! It is a noninvasive measuremnt which uses eletrodes placed on one's scalp to measures voltage fluctuations resulting from ionic current within the neurons of the brain. Future projects will make use of this EEG machine.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Publication />


            </div>
        );
    }
}

