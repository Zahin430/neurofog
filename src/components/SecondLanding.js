import React from 'react';
import { Link } from 'react-router-dom'
import researchMain from './img/researchMain.jpg'
// import participation from './img/participation.jpeg'


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
      <Link className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }} to ="/team">Our Research</Link>
      </h5>
      <p class="card-text">Take a look at what research goes on in our laboratory.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card3"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <Link className="btn btn-primary" style={{ textDecoration: 'none', color: 'white' }} to ="/team">Become a Participant</Link>
      <p class="card-text">Dummy Card</p>
    </div>
  </div>
</div>
    )
}
export default SecondLanding;
