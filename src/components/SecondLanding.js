import React from 'react';
import { Link } from 'react-router-dom'


const SecondLanding = () => {
    return (

    <div class="card-deck" style= {{padding: '5%'}}>
    <div class="card" style= {{ width: '50%', height: '50%'}}>
    <img class="card-img-top" src="http://neurofog.ca/img/teamsmall.jpg" alt="Card1"/>
    <div class="card-body">
      <h5 class="card-title">
      <Link className="btn btn-primary"style={{ textDecoration: 'none', color: 'white' }} to ="/team">Our Team</Link>
      </h5>
      <p class="card-text">View our current and past members of the Neuro Fog Laboratory.</p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card2"/>
    <div class="card-body">
      <h5 class="card-title">
      <Link className="btn btn-primary"style={{ textDecoration: 'none', color: 'white' }} to ="/team">Our Research</Link>
      </h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card3"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
    )
}
export default SecondLanding;
