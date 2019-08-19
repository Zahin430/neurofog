import React, { Component } from 'react';

export default class Alumni extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        let alumData = {
            "members" : [
                {
                    "name": "Jonathan Fawcett",
                    "role": "Lab Director | Assistant Professor",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'jon',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '100%'                  
                },
                {
                    "name": "Jonathan Fawcett",
                    "role": "Lab Director | Assistant Professor",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'jon',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '100%'  
                },
                {
                    "name": "Jonathan Fawcett",
                    "role": "Lab Director | Assistant Professor",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'jon',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '100%'  
                }
            ]
        }

        return (
            <div>

                <section className="team-section">
                    <h2 className="h1-responsive text-center my-5" style = {{ letterSpacing: '2px' }}>PAST MEMBERS</h2>

                    <div className= "row text-center text-md-left" style = {{width: '100%', paddingBottom: '5%'}}>
                    {
                        alumData.members && alumData.members.map((item) => {
                            return (
                                    <div id = "team-card" className="col-xl-12 col-lg-12 pb-5 mb-5 ml-5 d-md-flex justify-content-between" >
                                        <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: item.width || '80%', height: item.height }}>
                                            <img id = "image" src={require(`./img/${item.image}.jpg`)} className="rounded z-depth-1 shadow" style = {{ width: item.width2 || '100%', maxWidth: '100%', height: '100%', maxHeight: '100%' }} alt="avatar"/>
                                        </div>
                            
                                        <div className="mx-6 justify-content-between" style = {{marginLeft: "50px", width: item.width3 }}>
                                            <h4 className="font-weight-bold mb-3" style= {{fontSize: "3.5em"}}>{item.name}</h4>
                                            <h6 className="font-weight-bold grey-text mb-3" style= {{fontSize: "2em"}}>{item.role}</h6>
                                            <p className="grey-text" style= {{fontSize: "1.5em"}}>{item.description}</p>
                                        </div>
                                    </div>
                                
                            )
                        })
                    }
                    </div>
                </section>


            </div>
        )
    }
}

