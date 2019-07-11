import React from 'react';
// import { Link } from 'react-router-dom'
import researchMain from './img/researchMain.jpg'
import participation from './img/participation_2.jpeg'


const SecondLanding = () => {
    return (
    <div className="card-deck" style= {{padding: '5%' , width: '100%', height: '100%'}}>
    <div className="card shadow bg-white rounded" >
    <img className="card-img-top" src="http://neurofog.ca/img/teamsmall.jpg" alt="Card1"/>
    <div className="card-body">
      <h5 className="card-title">
      <a className="btn btn-primary" style={{ textDecoration: 'none', color: 'white', objectFit: 'contain',  height: 'auto' }} href ="/team">Our Team</a>
      </h5>
      <p className="card-text">View our current and past members of the Neuro Fog Laboratory.</p>
    </div>
  </div>
  <div className="card shadow bg-white rounded">
    <img className="card-img-top" style= {{ height: '67%', width: '100%' }} src={researchMain} alt="Card2"/>
    <div className="card-body">
      <h5 className="card-title">
      <a className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }} href ="/research">Our Research</a>
      </h5>
      <p className="card-text">Take a look at what research goes on in our laboratory.</p>
    </div>
  </div>
  <div className="card shadow bg-white rounded">
    <img className="card-img-top" src={participation}  style= {{ height: '67%'}} alt="Card3"/>
    <div className="card-body">
      <h5>
        <a className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }} href ="/involved">Become a Participant</a>
      </h5>
      <p className="card-text">Interested in participting in studies? Click to find out more!</p>
    </div>
  </div>
</div>
    )
}
export default SecondLanding;
