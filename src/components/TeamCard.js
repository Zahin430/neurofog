import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class TeamCard extends Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {

        let teamData = {
            "members" : [
                {
                    "name": "Jonathan Fawcett",
                    "role": "Lab Director | Assistant Professor",
                    "description": "Dr. Fawcett is the owner and oporator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.",
                    "image": 'jon',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '90%'                   
                },
                {
                    "name": "Rachelle Wakeham-Lewis",
                    "role": "Lab Manager | Honours Student",
                    "description": "Rachelle is currently completing her BA (Hons) with a major in Psychology and a minor in Russian Language and Literature.",
                    "image": 'rachelle',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '90%'                  

                },
                {
                    "name": "Julia Rose",
                    "role": "NSERC Student",
                    "description": "Julia is currently completing her BSc (Hons) in Psychology. She is working with Dr. Fawcett and Dr. Rash to determine the cognitive mechanisms involved in managing past and future painful events.",
                    "image":'juliarose21',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '90%' 

                },
                {
                    "name": "Iain Gamba",
                    "role": "NSERC Student",
                    "description": "Iain is completing his BSc (Hons) in Behavioural Neuroscience with hops to persue Medicine. He is currently working on his Honours project with Dr. Fawcett.",
                    "image": 'iain2',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '90%' 

                },
                {
                    "name": "Janaya Toope ",
                    "role": "Honours Student ",
                    "description": "Member of the Laboratory.",
                    "image": 'avatarMen',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '90%' 
                },
                {
                    "name": "Chelsea Lahey",
                    "role": "Honours Student ",
                    "description": "Member of the Laboratory.",
                    "image": 'avatarMen',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '90%' 
                },
                {
                    "name": "Hannah Willoughby ",
                    "role": "Masters",
                    "description": "Hannah is a Master's student and has been involved in various studies examining recognition and recall memory. Currently, she is interested in using EEG to further her understanding of the cognitive processes underlying our memory. ",
                    "image": 'hannah',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '90%' 

                },
                {
                    "name": "Vanessa Strong",
                    "role": "Volunteer",
                    "description": "Vanessa is a current Psy. D student in the Neuro Fog laboratory.",
                    "image": 'vanessa',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '90%' 
                },
                {
                    "name": "Kelsi Hall",
                    "role": "Masters",
                    "description": "Kelsi is a former Honours student and is now completing her Master's with Dr. Fawcett.",
                    "image": 'avatarMen',
                    width: "40%",
                    width2: "100%",
                    width3: "100%",
                    height: '90%' 
                },
               
                {
                    "name": "Kathleen Prior",
                    "role": "Volunteer",
                    "description": "Kathleen is a new volunteer in the Neuro Fog laboratory.",
                    "image": 'avatarMen',
                    width: "65%",
                    width2: "100%",
                    width3: "100%",
                    height: '100%'
                },
                {
                    "name": "Michael Foote ",
                    "role": "Volunteer",
                    "description": "Iain is completing his BSc (Hons) in Behavioural Neuroscience with hops to persue Medicine. He is currently working on his Honours project with Dr. Fawcett.",
                    "image": 'avatarMen',
                    width: "65%",
                    width2: "100%",
                    width3: "100%",
                    height: '100%'
                },
                {
                    "name": "Cierra Okeefe",
                    "role": "Volunteer",
                    "description": "Iain is completing his BSc (Hons) in Behavioural Neuroscience with hops to persue Medicine. He is currently working on his Honours project with Dr. Fawcett.",
                    "image": 'avatarMen',
                    width: "65%",
                    width2: "100%",
                    width3: "100%",
                    height: '100%'
                },
                {
                    "name": "Zahin Hasan Prangon",
                    "role": "MUCEP Student",
                    "description": "Zahin is completing his BSc in Computer Science and is currently working on developing the website for the laboratory",
                    "image": 'zahin',
                    width: "65%",
                    width2: "100%",
                    width3: "100%",
                },
                {
                    "name": "Liam Foley",
                    "role": "Member",
                    "description": "Liam is a 4th year hons student studying auditory working memory. From his love for music he became interested in how we percieve and understand music, leading to his current research.",
                    "image": 'liam',
                    width: "65%",
                    width2: "100%",
                    width3: "100%",
                },
                {
                    "name": "Rachelle Lewis ",
                    "role": "Member",
                    "description": "Current Member of the Laboratory",
                    "image": 'avatarMen',
                    width: "65%",
                    width2: "100%",
                    width3: "100%",
                    height: '100%'

                },
                {
                    "name": "Cayley Thoms",
                    "role": "Member",
                    "description": "Current Member of the Laboratory",
                    "image": 'avatarMen',
                    width: "65%",
                    width2: "100%",
                    width3: "100%",
                    height: '100%'
                },  
   
                {
                    "name": "Emily Buchanan",
                    "role": "Volunteer",
                    "description": "Emily is a new volunteer in the Neuro Fog laboratory.",
                    "image": 'avatarMen',
                    width: "65%",
                    width2: "100%",
                    width3: "100%",
                    height: '100%'

                },   
                {
                    "name": "Aime Hirwa",
                    "role": "Member",
                    "description": "Current Member of the Laboratory",
                    "image": 'avatarMen',
                    width: "65%",
                    width2: "100%",
                    width3: "100%",
                    height: '100%'
                }               
            ]
        };

        

    return (
        <div>

        <section className="team-section">
                    <h2 className="h1-responsive text-center my-5" style = {{ letterSpacing: '2px' }}>NEURO FOG LABORATORY</h2>

                    <div className= "row text-center text-md-left" style = {{width: '90%', paddingBottom: '5%'}}>
                    {
                        teamData.members.map((item) => {
                            return (
                                    <div id = "team-card" className="col-xl-12 col-lg-12 pb-5 mb-5 ml-5 d-md-flex justify-content-between" >
                                        <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: item.width || '80%', height: item.height }}>
                                            <img id = "image" src={require(`./img/${item.image}.jpg`)} className="rounded z-depth-1 shadow" style = {{ width: item.width2 || '100%', maxWidth: '100%', height: '100%', maxHeight: '100%' }} alt="avatar"/>
                                        </div>
                            
                                        <div id = "item-detail" className="mx-6 justify-content-between" style = {{marginLeft: "50px", width: item.width3 }}>
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


        {/* <div className = "container" style = {{paddingBottom: '10%'}}>
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
      </div> */}


        <div className = "container">
            <Link to = "/alumni">Click Here to see our past members</Link>
        </div>

        </div>
        
    );
    }
}