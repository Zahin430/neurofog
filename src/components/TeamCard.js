import React, { Component } from 'react';

export default class TeamCard extends Component {
    render() {
        // let teamData = this.props.teamData;
        let teamData = {
            "members" : [
                {
                    "name": "Jonathan Fawcett",
                    "role": "Lab Director | Assistant Professor",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'jon',                  
                },
                {
                    "name": "Rachelle Wakeham-Lewis",
                    "role": "Lab Manager | Honours Student",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'rachelle'
                },
                {
                    "name": "Julia Rose",
                    "role": "NSERC Student",
                    "description": "Julia is currently completing her BSc (Hons) in Psychology. She is working with Dr. Fawcett and Dr. Rash to determine the cognitive mechanisms involved in managing past and future painful events.",
                    "image":'juliarose21',
                    width : '100%'

                },
                {
                    "name": "Iain Gamba",
                    "role": "NSERC Student",
                    "description": "Iain is completing his BSc (Hons) in Behavioural Neuroscience with hops to persue Medicine. He is currently working on his Honours project with Dr. Fawcett.",
                    "image": 'iainM'
                },
                {
                    "name": "Janaya Toope ",
                    "role": "Honours Student ",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'jon',
                },
                {
                    "name": "Chelsea Lahey",
                    "role": "Honours Student ",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'jon',
                },
                {
                    "name": "Hannah Willoughby ",
                    "role": "Masters",
                    "description": "Iain is completing his BSc (Hons) in Behavioural Neuroscience with hops to persue Medicine. He is currently working on his Honours project with Dr. Fawcett.",
                    "image": 'iainM'
                },
                {
                    "name": "Kelsi Hall",
                    "role": "Masters",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'jon',
                },
                {
                    "name": "Vanessa Strong",
                    "role": "Volunteer",
                    "description": "Iain is completing his BSc (Hons) in Behavioural Neuroscience with hops to persue Medicine. He is currently working on his Honours project with Dr. Fawcett.",
                    "image": 'iainM'
                },
                {
                    "name": "Kathleen Prior",
                    "role": "Volunteer",
                    "description": "Iain is completing his BSc (Hons) in Behavioural Neuroscience with hops to persue Medicine. He is currently working on his Honours project with Dr. Fawcett.",
                    "image": 'iainM'
                },
                {
                    "name": "Michael Foote ",
                    "role": "Volunteer",
                    "description": "Iain is completing his BSc (Hons) in Behavioural Neuroscience with hops to persue Medicine. He is currently working on his Honours project with Dr. Fawcett.",
                    "image": 'iainM'
                },
                {
                    "name": "Cierra Okeefe",
                    "role": "Volunteer",
                    "description": "Iain is completing his BSc (Hons) in Behavioural Neuroscience with hops to persue Medicine. He is currently working on his Honours project with Dr. Fawcett.",
                    "image": 'iainM'
                },
                {
                    "name": "Zahin Hasan Prangon",
                    "role": "MUCEP Student",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'jon',
                },
                {
                    "name": "Zahin Hasan Prangon",
                    "role": "MUCEP Student",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'jon',
                },
                
                
            ]
        }

    return (
        <div>

        <section className="team-section">
                    <h2 className="h1-responsive text-center my-5" style = {{ letterSpacing: '2px' }}>NEURO FOG LABORATORY</h2>
                    <p className="grey-text text-center w-responsive mx-auto mb-5" style = {{ fontWeight: '500', letterSpacing: '2px' }}>CURRENT MEMBERS OF THE LABORATORY.</p> 

                    <div className= "row text-center text-md-left">
                    {
                        teamData.members && teamData.members.map((item) => {
                            return (
                                    <div className="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between">
                                        <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: item.width || '60%', height: item.height }}>
                                            <img  src={require(`./img/${item.image}.jpg`)} className="rounded z-depth-1" style = {{ width: 'auto', maxWidth: '100%', height: 'auto', maxHeight: '100%' }} alt="avatar"/>
                                        </div>
                            
                                        <div className="mx-6">
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

        </div>
        
    );
    }
}