import React from 'react';
import { Link } from 'react-router-dom'
import researchMain from './img/researchMain.jpg'
import participation from './img/participation_2.jpeg'


const SecondLanding = () => {
    return (
    <div class="card-deck" style= {{padding: '5%' , width: '100%', height: '100%'}}>
    <div class="card" style= {{ width: '50%', height: '50%'}}>
    <img class="card-img-top" src="http://neurofog.ca/img/teamsmall.jpg" alt="Card1"/>
    <div class="card-body">
      <h5 class="card-title">
      <Link className="btn btn-primary"style={{ textDecoration: 'none', color: 'white', objectFit: 'contain' }} to ="/team">Our Team</Link>
      </h5>
      <p class="card-text">View our current and past members of the Neuro Fog Laboratory.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" style= {{ height: '67%' }} src={researchMain} alt="Card2"/>
    <div class="card-body">
      <h5 class="card-title">
      <Link className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }} to ="/research">Our Research</Link>
      </h5>
      <p class="card-text">Take a look at what research goes on in our laboratory.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={participation} style={{height: "67%"}} alt="Card3"/>
    <div class="card-body">
      <h5>
        <Link className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }} to ="/involved">Become a Participant</Link>
      </h5>
      <p class="card-text">Interested in participting in studies? Click to find out more!</p>
    </div>
  </div>
</div>
    )
}
export default SecondLanding;
