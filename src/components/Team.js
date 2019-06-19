import React from 'react';
import juliarose21 from './img/juliarose21.jpg';
import jon from './img/jon.jpg';

const Team = () => {
    return (
        <div> 
        <section class="team-section my-5">
          <h2 class="h1-responsive font-weight-bold text-center my-5">Our amazing team</h2>
          <p class="grey-text text-center w-responsive mx-auto mb-5">Hello</p>
        
          <div class="row text-center text-md-left">

            <div class="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between">
              <div class="avatar mb-md-0 mb-4 mx-4">
                <img src={jon} class="rounded z-depth-1" alt="avatar" />
              </div>
              <div class="mx-4">
                <h4 class="font-weight-bold mb-3">Jonathan Fawcett</h4>
                <h6 class="font-weight-bold grey-text mb-3">Lab Director | Assistant Professor</h6>
                <p class="grey-text">Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.</p>
              </div>
            </div>



            <div class="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between">
              <div class="avatar mb-md-0 mb-4 mx-4">
                <img src={juliarose21}  class="rounded z-depth-1" alt="Sample avatar"/>
              </div>
              <div class="mx-4">
                <h4 class="font-weight-bold mb-3">Julia Rose</h4>
                <h6 class="font-weight-bold grey-text mb-3">Photographer</h6>
                <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
                  tenetur.</p>
              </div>
            </div>     
        </div>

         
  <div class="row text-center text-md-left">

  
    <div class="col-xl-6 col-lg-12 mb-xl-0 mb-5 d-md-flex justify-content-between">
      <div class="avatar mb-md-0 mb-4 mx-4">
        <img src={jon} class="rounded z-depth-1" alt="Sample avatar"/>
      </div>
      <div class="mx-4">
        <h4 class="font-weight-bold mb-3">Anna Deynah</h4>
        <h6 class="font-weight-bold grey-text mb-3">Web Developer</h6>
        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
          tenetur.</p>
      </div>
    </div>



    <div class="col-xl-6 col-lg-12 d-md-flex justify-content-between">
      <div class="avatar mb-md-0 mb-4 mx-4">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg" class="rounded z-depth-1 img-fluid"
          alt="Sample avatar"/>
      </div>
      <div class="mx-4">
        <h4 class="font-weight-bold mb-3">Sarah Melyah</h4>
        <h6 class="font-weight-bold grey-text mb-3">Front-end Developer</h6>
        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
          tenetur.</p>

      </div>
    </div>
  </div>

  <div class="row text-center text-md-left my-5">

  
    <div class="col-xl-6 col-lg-12 mb-xl-0 mb-5 d-md-flex justify-content-between">
    <div class="avatar mb-md-0 mb-4 mx-4">
        <img src={jon} class="rounded z-depth-1" alt="Sample avatar"/>
    </div>
    <div class="mx-4">
        <h4 class="font-weight-bold mb-3">Anna Deynah</h4>
        <h6 class="font-weight-bold grey-text mb-3">Web Developer</h6>
        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
        tenetur.</p>
    </div>
    </div>



    <div class="col-xl-6 col-lg-12 d-md-flex justify-content-between">
    <div class="avatar mb-md-0 mb-4 mx-4">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg" class="rounded z-depth-1 img-fluid"
        alt="Sample avatar"/>
    </div>
    <div class="mx-4">
        <h4 class="font-weight-bold mb-3">Sarah Melyah</h4>
        <h6 class="font-weight-bold grey-text mb-3">Front-end Developer</h6>
        <p class="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
        tenetur.</p>
    </div>
    </div>
    </div>

 
        
        </section>
        </div>
    )
}

export default Team;