import React from 'react';
// import juliarose21 from './img/juliarose21.jpg';
import jon from './img/jon.jpg';
import ian from './img/iain2.jpg';
import rachelle from './img/rachelle.PNG';
import julia from './img/julia.jpg'
import female from './img/Female.jpg'

const Team = () => {
    return (
        <div> 
        <section className="team-section my-5">
          <h2 className="h1-responsive text-center my-5" style = {{ letterSpacing: '2px' }}>NEURO FOG LABORATORY</h2>
          <p className="grey-text text-center w-responsive mx-auto mb-5">Current members of the labratory.</p>
        
          <div className="row text-center text-md-left">

            <div className="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between">
              <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: "80%", height: "100%" }}>
                <img src={jon} className="rounded z-depth-1" style = {{ width: "100%", height: "100%" }} alt="avatar"/>
              </div>
              <div className="mx-4">
                <h4 className="font-weight-bold mb-3">Jonathan Fawcett</h4>
                <h6 className="font-weight-bold grey-text mb-3">Lab Director | Assistant Professor</h6>
                <p className="grey-text">Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.</p>
              </div>
            </div>



            <div className="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between">
              <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: "60%", height: "95%" }}>
                <img src={rachelle}  className="rounded z-depth-1" style = {{ width: "100%", height: "100%" }} alt="Sample avatar"/>
              </div>
              <div className="mx-4">
                <h4 className="font-weight-bold mb-3">Rachelle Wakeham-Lewis</h4>
                <h6 className="font-weight-bold grey-text mb-3">Lab Manager | Honours Student</h6>
                <p className="grey-text">Rachelle is currently completing her BA (Hons) with a major in Psychology and a minor in Russian Language 
                and Literature.</p>
              </div>
            </div>     
        </div>

         
  <div className="row text-center text-md-left">

  
    <div className="col-xl-6 col-lg-12 mb-xl-0 mb-5 d-md-flex justify-content-between">
      <div className="avatar mb-md-0 mx-4 team" style = {{ width: "85%", height: "100%" }}>
        <img src = {ian} className = "rounded z-depth-1" style = {{ width: "100%", height: "100%" }} alt="Sample avatar"/>
      </div>
      <div className="mx-4">
        <h4 className="font-weight-bold mb-3">Iain Gamba</h4>
        <h6 className="font-weight-bold grey-text mb-3">Honors Student</h6>
        <p className="grey-text">Iain is completing his BSc (Hons) in Behavioural Neuroscience with hops to persue Medicine. He is currently working on his Honours project with Dr. Fawcett.</p>
      </div>
    </div>



    <div className="col-xl-6 col-lg-12 d-md-flex justify-content-between">
      <div className="avatar mb-md-0 mb-4 mx-4">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(29).jpg" className="rounded z-depth-1 img-fluid"
          alt="Sample avatar"/>
      </div>
      <div className="mx-4">
        <h4 className="font-weight-bold mb-3">Sarah Melyah</h4>
        <h6 className="font-weight-bold grey-text mb-3">Front-end Developer</h6>
        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
          tenetur.</p>

      </div>
    </div>
  </div>

  <div className="row text-center text-md-left my-5">

  
    <div className="col-xl-6 col-lg-12 mb-xl-0 mb-5 d-md-flex justify-content-between">
    <div className="avatar mb-md-0 mb-4 mx-4" style = {{ width: "100%", height: "100%" }}>
        <img src={julia} className="rounded z-depth-1" style = {{ width: "100%", height: "100%" }} alt="Sample avatar"/>
    </div>
    <div className="mx-4">
        <h4 className="font-weight-bold mb-3">Julia Greenham</h4>
        <h6 className="font-weight-bold grey-text mb-3">Volunteer</h6>
        <p className="grey-text">Julia has been involved with the Neurofog lab since May, 2017 when she held an NSERC USRA under the supervision of Dr. Fawcett. She has since taken the role as laboratory manager.</p>
    </div>
    </div>



    <div className="col-xl-6 col-lg-12 d-md-flex justify-content-between">
    <div className="avatar mb-md-0 mb-4 mx-4" style = {{ width: "40%", height: "100%" }}>
        <img src={female} className="rounded z-depth-1 img-fluid" style = {{ width: "100%", height: "100%" }}
        alt="Sample avatar"/>
    </div>
    <div className="mx-4">
        <h4 className="font-weight-bold mb-3">Emily Joy Buchanan</h4>
        <h6 className="font-weight-bold grey-text mb-3">Volunteer</h6>
        <p className="grey-text">Emily is a new volunteer in the Neuro Fog laboratory.</p>
    </div>
    </div>
    </div>


    <div className="row text-center text-md-left my-5">

  
<div className="col-xl-6 col-lg-12 mb-xl-0 mb-5 d-md-flex justify-content-between">
<div className="avatar mb-md-0 mb-4 mx-4" style = {{ width: "100%", height: "100%" }}>
    <img src={julia} className="rounded z-depth-1" style = {{ width: "100%", height: "100%" }} alt="Sample avatar"/>
</div>
<div className="mx-4">
    <h4 className="font-weight-bold mb-3">Julia Greenham</h4>
    <h6 className="font-weight-bold grey-text mb-3">Volunteer</h6>
    <p className="grey-text">Julia has been involved with the Neurofog lab since May, 2017 when she held an NSERC USRA under the supervision of Dr. Fawcett. She has since taken the role as laboratory manager.</p>
</div>
</div>



<div className="col-xl-6 col-lg-12 d-md-flex justify-content-between">
<div className="avatar mb-md-0 mb-4 mx-4" style = {{ width: "40%", height: "100%" }}>
    <img src={female} className="rounded z-depth-1 img-fluid" style = {{ width: "100%", height: "100%" }}
    alt="Sample avatar"/>
</div>
<div className="mx-4">
    <h4 className="font-weight-bold mb-3">Emily Joy Buchanan</h4>
    <h6 className="font-weight-bold grey-text mb-3">Volunteer</h6>
    <p className="grey-text">Emily is a new volunteer in the Neuro Fog laboratory.</p>
</div>
</div>
</div>


 
        
        </section>


        <div className = "container">
        <h3 className = "mx-auto" style = {{textAlign: 'center', color: 'brown', letterSpacing: '3px' }}>LAB ALUMNI</h3>
        
        <hr/>

        <div className = "mx-auto row" id = "list-publication">

          <div className="list-group col-sm w-100 p-3">
           <p className="list-group-item">Jenny Tiller (Directed Studies/Volunteer)</p>
           <p className="list-group-item">Gabby Hodder</p>
           <p className="list-group-item">Lauren Peters (Volunteer)</p>
           <p className="list-group-item">Rachel Hewitt (Volunteer)</p>
           <p className="list-group-item">Emily Buchanan (Volunteer)</p>
          </div>

          <div className="list-group col-sm w-100 p-3">
           <p className="list-group-item">Brittany Flood (Honours Student)</p>
           <p className="list-group-item">Jillian Penney (Honours Student)</p>
           <p className="list-group-item">Rabia Farmahan (Honours Student)</p>
           <p className="list-group-item">Maryam Michael</p>
           <p className="list-group-item">Marcus Alves (PhD student)</p>
          </div>

      </div>
      </div>


        </div>
    )
}

export default Team;