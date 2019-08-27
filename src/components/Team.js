import React, { Component } from 'react';

import jon from './img/jon.jpg'
import teamData from './teamData'

export default class Team extends Component {
    constructor(props){
        super(props);

        this.state = {
            collections: teamData
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {collections} = this.state;
    
    return (
        <div> 
        <section className="team-section">
                    <h2 className="h1-responsive text-center my-5" style = {{ letterSpacing: '2px' }}>NEURO FOG LABORATORY</h2>


                    <div className= "row text-md-left text-center justify-content-center " style = {{width: '95%', paddingBottom: '5%', marginLeft: '50px'}}>
              
                    <div id = "team-card card" className="col-xl-6 col-lg-12 mb-5 d-md-flex justify-content-between" >
                            <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: '65%', height: '100%' }}>
                                <img id = "image" src={jon} className="rounded z-depth-1 shadow" style = {{ width: '100%', maxWidth: '100%', height: '100%', maxHeight: '100%' }} alt="avatar"/>
                            </div>
                
                            <div className="mx-12" style = {{paddingLeft: '0', width: '100%' }}>
                            <h4 className="font-weight-bold mb-3">Jonathan Fawcett</h4>
                            <h6 className="font-weight-bold grey-text mb-3">Lab Director | Assistant Professor</h6>
                                <p className="grey-text">Dr. Fawcett is the owner and operator of the Neuro Fog laboratory. He is currently an Assisant Professor at MUN and has been for the last 3 years.</p>
                    </div>
                    </div>
                    </div>
                    <div className= "row text-center border text-md-left ml-3 mb-3 text-center justify-content-center z-depth-1 shadow" style = {{width: '95%'}}>
                    
                    
                    <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center bg-primary text-white ">
                      <h4 className="h1-responsive font-weight-bold  " style = {{ letterSpacing: '2px' }}>MASTERS STUDENTS</h4>
                    </nav>
                    {
                         collections.MSC.map((item) => {
                            return (
                                    <div id = "team-card" className="col-xl-6 col-lg-12 pt-5 mb-5 d-md-flex justify-content-between" >
                                        <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: item.width || '100%', height: item.height }}>
                                            <img id = "image" src={require(`./img/${item.image}.jpg`)} className="rounded z-depth-1 shadow" style = {{ width: item.width2 || '100%', maxWidth: '100%', height: '100%', maxHeight: '100%' }} alt="avatar"/>
                                        </div>
                            
                                        <div className="mx-6" style = {{paddingLeft: item.paddingLeft || '0', width: item.width3 }}>
                                            <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                            <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                            <p className="grey-text">{item.description}</p>
                                        </div>
                                    </div>
                                
                            )
                        })
                    }
                    </div>
                    
                    <div className= "row text-center border text-md-left ml-3 pb-2 text-center justify-content-center z-depth-1 shadow rounded" style = {{width: '95%'}}>

                    <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center bg-primary text-white ">
                      <h4 className="h1-responsive font-weight-bold  " style = {{ letterSpacing: '2px' }}>HONORS STUDENTS</h4>
                    </nav>
                    {
                      collections.Honors.map((item) => {
                         return (
                                 <div id = "team-card" className="col-xl-6 col-lg-12 mb-5 pt-5 d-md-flex justify-content-between" >
                                     <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: item.width || '100%', height: item.height }}>
                                         <img id = "image" src={require(`./img/${item.image}.jpg`)} className="rounded z-depth-1 shadow" style = {{ width: item.width2 || '100%', maxWidth: '100%', height: '100%', maxHeight: '100%' }} alt="avatar"/>
                                     </div>
                         
                                     <div className="mx-6" style = {{paddingLeft: item.paddingLeft || '0', width: item.width3 }}>
                                         <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                         <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                         <p className="grey-text">{item.description}</p>
                                     </div>
                                 </div>
                             
                         )
                     })
                 }
                 </div>


                 <div className= "row text-center border text-md-left ml-3 mb-3 mt-3 text-center justify-content-center z-depth-1 shadow" style = {{width: '95%'}}>
                    
                    
                 <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center bg-primary text-white ">
                   <h4 className="h1-responsive font-weight-bold  " style = {{ letterSpacing: '2px' }}>Volunteers</h4>
                 </nav>
                 {
                      collections.Volunteers.map((item) => {
                         return (
                                 <div id = "team-card" className="col-xl-6 col-lg-12 pt-5 mb-5 d-md-flex justify-content-between" >
                                     <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: item.width || '100%', height: item.height }}>
                                         <img id = "image" src={require(`./img/${item.image}.jpg`)} className="rounded z-depth-1 shadow" style = {{ width: item.width2 || '100%', maxWidth: '100%', height: '100%', maxHeight: '100%' }} alt="avatar"/>
                                     </div>
                         
                                     <div className="mx-6" style = {{paddingLeft: item.paddingLeft || '0', width: item.width3 }}>
                                         <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                         <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                         <p className="grey-text">{item.description}</p>
                                     </div>
                                 </div>
                             
                         )
                     })
                 }
                 </div>


                 <div className= "row text-center border text-md-left ml-3 mb-3 mt-2 text-center justify-content-center z-depth-1 shadow" style = {{width: '95%'}}>
                    
                    
                 <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center bg-primary text-white ">
                   <h4 className="h1-responsive font-weight-bold  " style = {{ letterSpacing: '2px' }}>MUCEP STUDENTS</h4>
                 </nav>
                 {
                      collections.MUCEP.map((item) => {
                         return (
                                 <div id = "team-card" className="col-xl-6 col-lg-12 pt-5 mb-5 d-md-flex justify-content-between" >
                                     <div className="avatar mb-md-0 mb-4 mx-4 team" style = {{ width: item.width || '100%', height: item.height }}>
                                         <img id = "image" src={require(`./img/${item.image}.jpg`)} className="rounded z-depth-1 shadow" style = {{ width: item.width2 || '100%', maxWidth: '100%', height: '100%', maxHeight: '100%' }} alt="avatar"/>
                                     </div>
                         
                                     <div className="mx-6" style = {{paddingLeft: item.paddingLeft || '0', width: item.width3 }}>
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