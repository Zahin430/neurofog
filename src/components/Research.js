import React, { Component } from 'react'
// import { Experiment } from "jspsych-react";
// import { visualOddball } from "./examples/timelines/visualOddball";
// import  callbackImageDisplay from "./examples/plugins/callbackImageDisplay";
// import callbackHTMLDisplay from "./examples/plugins/callbackHTMLDisplay";
export default class ExperimentComponent extends Component {
  render() {
    return (
      <div className="container">
        <h3 class="text-center">Research</h3>
        <p style = {{ fontSize: '20px'}}>Dr. Fawcett and his team conduct a wide variety of research in Human Cognition. Primairly, the lab focusus on understanding the cognitive and neural basis of controlling unwanted thoughts or memories. For example, how is it that some people can be reminded of an unwanted experience and brush it off whereas others receive a similar reminder and find themselves caught ruminating over it for days? Dr. Fawcett's past work suggests that variation in the relative strength of certain mental control processes across individuals play a role. Some people are simply better at controlling unwanted memories – as measured in the laboratory – and those individuals tend to be less affected by intrusions of the manner described above. The team studies study this phenomenon in both general and clinical populations.</p>
      
        <br/>

        <p class="text-center" style = {{ fontSize: '20px'}}>The laboratory is also presently equipped with state-of-the-art facilities for eye tracking and electroencephalography (EEG) which are both used to extend knowledge of this research</p>

          <div class="card">
            <h5 class="card-header text-center" style>Research #1</h5>
            <div class="card-body">
              <h4 class="card-title">Pupillometry</h4>
                <p class="card-text" style = {{ fontSize: '16px'}}>Pupillometry is an unobtrusive psychophysiological techniques used to measure pupil size and reactivity. There is a great importance for pupil evaluation in cognitive research. Changes in pupil diameter in particular have been found to be a useful index of mental processing in humans. The more focused we are on something, the larger our pupils become. Many of our current studies involve measuremnts with a pupillometric instrument that can be found in our main laboratory. This device uses infrared light and special cameras to track and record the position of each eye, where it is looking on the computer screen and the size of the pupil. Together, these measurements allow us to monitor when and to what degree participants are attending to any given item on the screen.</p>
            </div>
          </div>

          <br/>

          <div class="card">
            <h5 class="card-header text-center">Research #2</h5>
            <div class="card-body">
              <h4 class="card-title">Electroencephalography (EEG)</h4>
                <p class="card-text" style = {{ fontSize: '16px'}}>EEG is an electrophysiological monitoring method to record electrical activity of the brain. This instrument has been newly adopted into the Neuro Fog laboratory! It is a noninvasive measuremnt which uses eletrodes placed on one's scalp to measures voltage fluctuations resulting from ionic current within the neurons of the brain. Future projects will make use of this EEG machine.</p>
            </div>
          </div>
      </div>

    );
  }
}

        // {/* <Experiment
        //   settings={{ timeline: visualOddball }}
        //   plugins={{
        //     "callback-html-display": callbackHTMLDisplay,
        //     "callback-image-display": callbackImageDisplay
        //   }}
        // /> */}