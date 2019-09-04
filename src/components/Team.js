import React, { Component } from 'react';

import teamData from './teamData'

export default class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: teamData
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='container-fluid'>
                <section className="team-section">
                    <h2 className="h1-responsive text-center justify-content-center my-5" style={{ letterSpacing: '2px' }}>NEURO FOG LABORATORY</h2>

                    <div className="row text-center border text-md-left ml-3 mb-3 text-center justify-content-start z-depth-1 shadow" style={{ width: '95%' }}>


                        <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center text-white" style={{ backgroundColor: "#47AFAF" }}>
                            <h4 className="h1-responsive font-weight-bold  " style={{ letterSpacing: '2px' }}>LAB DIRECTOR</h4>
                        </nav>
                        {
                            collections.director.map((item) => {
                                return (
                                    <div id="team-card" className="col-xl-6 col-md-12 col-sm-12 col-lg-12 pt-5 mb-5 d-md-flex justify-content-center" >
                                        <div className="img-responsive mb-4 mr-4 team" style={{ width: item.width || '100%', height: item.height }}>
                                            <img id="image" src={require(`./img/${item.image}.jpg`)} className="rounded img-responsive z-depth-1 shadow" style={{ width: item.width2 || '100%', height: '100%' }} alt="avatar" />
                                        </div>
                                        
                                        <div className="col-md-6" style={{ width: item.width3 }}>
                                        <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                        <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                        <p className="grey-text">{item.description}</p>
                                        </div>
                                    </div>
                                        
                                )
                            })
                        }
                    </div>



                    <div className="row text-center border text-md-left ml-3 mb-3 text-center justify-content-start z-depth-1 shadow" style={{ width: '95%' }}>


                        <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center text-white" style={{ backgroundColor: "#47AFAF" }}>
                            <h4 className="h1-responsive font-weight-bold  " style={{ letterSpacing: '2px' }}>MASTERS STUDENTS</h4>
                        </nav>
                        {
                            collections.MSC.map((item) => {
                                return (
                                    <div id="team-card" className="col-xl-6 col-md-12 col-sm-12 col-lg-12 pt-5 mb-5 d-md-flex justify-content-center" >
                                        <div className="img-responsive mb-4 mr-4 team" style={{ width: item.width || '100%', height: item.height }}>
                                            <img id="image" src={require(`./img/${item.image}.jpg`)} className="rounded img-responsive z-depth-1 shadow" style={{ width: item.width2 || '100%', height: '100%' }} alt="avatar" />
                                        </div>

                                        <div className="col-md-6" style={{ width: item.width3 }}>
                                            <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                            <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                            <p className="grey-text">{item.description}</p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>

                    <div className="row text-center border text-md-left ml-3 pb-2 text-center justify-content-center z-depth-1 shadow rounded" style={{ width: '95%' }}>

                        <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center text-white" style={{ backgroundColor: "#47AFAF" }}>
                            <h4 className="h1-responsive font-weight-bold " style={{ letterSpacing: '2px' }}>HONORS STUDENTS</h4>
                        </nav>
                        {
                            collections.Honors.map((item) => {
                                return (
                                    <div id="team-card" className="col-xl-6 col-md-12 col-sm-12 col-lg-12 pt-5 mb-5 d-md-flex justify-content-center" >
                                        <div className="img-responsive mb-4 mr-4 team" style={{ width: item.width || '100%', height: item.height }}>
                                            <img id="image" src={require(`./img/${item.image}.jpg`)} className="rounded img-responsive z-depth-1 shadow" style={{ width: item.width2 || '100%', height: '100%' }} alt="avatar" />
                                        </div>

                                        <div className="col-md-6" style={{ width: item.width3 }}>
                                            <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                            <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                            <p className="grey-text">{item.description}</p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>


                    <div className="row text-center border text-md-left ml-3 mb-3 mt-3 text-center justify-content-center z-depth-1 shadow" style={{ width: '95%' }}>

                        <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center text-white" style={{ backgroundColor: "#47AFAF" }}>
                            <h4 className="h1-responsive font-weight-bold  " style={{ letterSpacing: '2px' }}>VOLUNTEERS</h4>
                        </nav>
                        {
                            collections.Volunteers.map((item) => {
                                return (
                                    <div id="team-card" className="col-xl-6 col-md-12 col-sm-12 col-lg-12 pt-5 mb-5 d-md-flex justify-content-center" >
                                        <div className="img-responsive mb-4 mr-4 team" style={{ width: item.width || '100%', height: item.height }}>
                                            <img id="image" src={require(`./img/${item.image}.jpg`)} className="rounded img-responsive z-depth-1 shadow" style={{ width: item.width2 || '100%', height: '100%' }} alt="avatar" />
                                        </div>

                                        <div className="col-md-6" style={{ width: item.width3 }}>
                                            <h4 className="font-weight-bold mb-3">{item.name}</h4>
                                            <h6 className="font-weight-bold grey-text mb-3">{item.role}</h6>
                                            <p className="grey-text">{item.description}</p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>


                    <div className="row text-center border text-md-left ml-3 mb-3 mt-2 text-center justify-content-start z-depth-1 shadow" style={{ width: '95%' }}>

                        <nav class="navbar col-xl-12 z-depth-1 shadow justify-content-center text-white" style={{ backgroundColor: "#47AFAF" }}>
                            <h4 className="h1-responsive font-weight-bold  " style={{ letterSpacing: '2px' }}>MUCEP STUDENTS</h4>
                        </nav>
                        {
                            collections.MUCEP.map((item) => {
                                return (
                                    <div id="team-card" className="col-xl-6 col-md-12 col-sm-12 col-lg-12 pt-5 mb-5 d-md-flex justify-content-center" >
                                        <div className="img-responsive mb-4 mr-4 team" style={{ width: item.width || '100%', height: item.height }}>
                                            <img id="image" src={require(`./img/${item.image}.jpg`)} className="rounded img-responsive z-depth-1 shadow" style={{ width: item.width2 || '100%', height: '100%' }} alt="avatar" />
                                        </div>

                                        <div className="col-md-6" style={{ width: item.width3 }}>
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