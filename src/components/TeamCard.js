import React, { Component } from 'react';
import jon from './img/jon.jpg';

export default class TeamCard extends Component {
    render() {
        // let teamData = this.props.teamData;
        let teamData = {
            "members" : [
                {
                    "name": "Jonathan Fawcett",
                    "role": "Lab Director | Assistant Professor",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": './img/jon.jpg'
                },
                {
                    "name": "Jonathan Fawcett",
                    "role": "Lab Director | Assistant Professor",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": './img/jon.jpg'
                },
                {
                    "name": "Jonathan Fawcett",
                    "role": "Lab Director | Assistant Professor",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": './img/jon.jpg'
                },
                {
                    "name": "Jonathan Fawcett",
                    "role": "Lab Director | Assistant Professor",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": './img/jon.jpg'
                },
                {
                    "name": "Jonathan Fawcett",
                    "role": "Lab Director | Assistant Professor",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": './img/jon.jpg'
                },
                
            ]
        }

    return (
        <section className="team-section my-5">
            <h2 className="h1-responsive text-center my-5" style = {{ letterSpacing: '2px' }}>NEURO FOG LABORATORY</h2>
            <p className="grey-text text-center w-responsive mx-auto mb-5">Current members of the labratory.</p> 

            <div className= "row text-center text-md-left">
            {
                teamData.members && teamData.members.map((item) => {
                    return (
                       
                            <div className="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between">
                                <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: "80%", height: "100%" }}>
                                    <img src={jon} className="rounded z-depth-1" style = {{ width: "100%", height: "100%" }} alt="avatar"/>
                                </div>
                    
                                <div className="mx-4">
                                    <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                    <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                    <p className="grey-text">{item.description}</p>
                                </div>
                            </div>
                        
                    )
                })
                  
            }
            </div>
            
          

                
        </section>
    );
    }
}