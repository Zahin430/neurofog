/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import Pupillometry from './img/pupillometry.jpg'
import electron from './img/electro.jpg'

export default class Research extends Component {
  render() {
    return (
      <div className = "research">
        <div className="research-head">
            <div className= "container">
                <p id = "research-text" style ={{ letterSpacing: '8px',paddingTop: "50px" }} className="text-center">RESEARCH</p>
            </div>

            <div className ="scroll" style ={{paddingTop: '120px'}}>
                <p id = "tag" style ={{ letterSpacing: '3px' }} className="text-center">Scroll Down!</p>
                    <a href="#section1">
                        <i className="fas fa-chevron-down text-center"></i>
                    </a>
            </div>
        </div>  
      <div className="container">
            
            <h2 className="text-center" style={{letterSpacing: '3px', paddingBottom: '35px'}} >RESEARCH</h2>
            
            <p style = {{ fontSize: '20px' }}>Dr. Fawcett and his team conduct a wide variety of research in Human Cognition. Primairly, the lab focusus on understanding the cognitive and neural basis of controlling unwanted thoughts or memories. For example, how is it that some people can be reminded of an unwanted experience and brush it off whereas others receive a similar reminder and find themselves caught ruminating over it for days? Dr. Fawcett's past work suggests that variation in the relative strength of certain mental control processes across individuals play a role. Some people are simply better at controlling unwanted memories – as measured in the laboratory – and those individuals tend to be less affected by intrusions of the manner described above. The team studies study this phenomenon in both general and clinical populations.</p>


            <br/>

            <hr/>

            <p className="text-center" style = {{ fontSize: '20px' }}>The laboratory is also presently equipped with state-of-the-art facilities for eye tracking and electroencephalography (EEG) which are both used to extend knowledge of this research</p>

            
                <div className="card" style={{ marginLeft: '15%',width: '70%', height: '50%'}} >
                  <img className="card-img-top" style = {{ objectFit: 'contain' }} src={Pupillometry} alt="Research" />
                  <h4 className="card-header text-center">Pupillometry</h4>
                  <div className="card-body">
                      <p className="card-text" style = {{ fontSize: '16px' }}>Pupillometry is an unobtrusive psychophysiological techniques used to measure pupil size and reactivity. There is a great importance for pupil evaluation in cognitive research. Changes in pupil diameter in particular have been found to be a useful index of mental processing in humans. The more focused we are on something, the larger our pupils become. Many of our current studies involve measuremnts with a pupillometric instrument that can be found in our main laboratory. This device uses infrared light and special cameras to track and record the position of each eye, where it is looking on the computer screen and the size of the pupil. Together, these measurements allow us to monitor when and to what degree participants are attending to any given item on the screen.</p>
                  </div>
                </div>

                  <br />

                <div className="card mx-auto mw-100 " style={{ width: '70%', height: '20%'}}>
                  <img className="card-img-top" style = {{ objectFit: 'contain' }} src={electron} alt="Research" />
                  <h5 className="card-header text-center">Electroencephalography (EEG)</h5>
                  <div className="card-body" style = {{ paddingBottom: "15px" }}>
                      <p className="card-text" style = {{ fontSize: '16px'}} >EEG is an electrophysiological monitoring method to record electrical activity of the brain. This instrument has been newly adopted into the Neuro Fog laboratory! It is a noninvasive measuremnt which uses eletrodes placed on one's scalp to measures voltage fluctuations resulting from ionic current within the neurons of the brain. Future projects will make use of this EEG machine.</p>
                  </div>
                </div>  



        </div>
          

      <div>
        <h3 className = "mx-auto" style = {{textAlign: 'center' }}>List of publications</h3>
        
        <div className = "mx-auto row" id = "list-publication">

          <div className="list-group col-sm w-100 p-3">
            <a  href="https://www.sciencedirect.com/science/article/pii/S2211368116300699" target="_blank" className="list-group-item list-group-item-action ">Looking Down the Barrel of a Gun: What Do We Know About the Weapon Focus Effect? <span className="text-muted">(2014)</span></a>
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4886847/" target="_blank" className="list-group-item list-group-item-action">Familiarity, but not recollection, supports the between-subject production effect. <span className="text-muted">(2016)</span></a>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/26709589" target="_blank" className="list-group-item list-group-item-action">The representational consequences of intentional forgetting: Impairments to both the probability and fidelity of long-term memory. <span className="text-muted">(2016)</span></a>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/24853535" target="_blank" className="list-group-item list-group-item-action">Effects of distinctive encoding on correct and false memory: A meta-analytic review of costs and benefits and their origins in the DRM paradigm. <span className="text-muted">(2015)</span></a>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/25462596" target="_blank" className="list-group-item list-group-item-action ">The origins of repetitive thought in rumination: Separating cognitive style from deficits in inhibitory control over memory. <span className="text-muted">(2015)</span></a>  
          </div>

          <div className="list-group col-sm w-100 p-3">
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/24064067" target="_blank" className="list-group-item list-group-item-action">Electrophysiological markers of biological motion and human form recognition. <span className="text-muted">(2014)</span></a>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/23884689" target="_blank" className="list-group-item list-group-item-action">The costs and benefits of production in recognition. <span className="text-muted">(2014)</span></a>
            <a href="https://www.sciencedirect.com/science/article/pii/S0001691813001571" target="_blank" className="list-group-item list-group-item-action">Event-method directed forgetting: Forgetting a video segment is more effortful than remembering it. <span className="text-muted">(2013)</span></a>
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/23656845" target="_blank" className="list-group-item list-group-item-action">Risk of obsessive-compulsive disorder in pregnant and post-partum women: A meta-analysis <span className="text-muted">(2013)</span></a>
            <a href="https://www.sciencedirect.com/science/article/pii/S0001691812001680" target="_blank" className="list-group-item list-group-item-action ">The production effect benefits performance in between-subject designs: A meta-analysis. <span className="text-muted">(2013)</span></a>
          </div>

      </div>
      </div>
      </div>
    );
  }
}
