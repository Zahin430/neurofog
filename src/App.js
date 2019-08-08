import React, { Fragment, Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Team from './components/TeamCard';
import Research from './components/Research';
import Involved from './components/Involved';
import Contact from './components/Contact';
import Footer from './components/Footer';
import experiment from './components/Experiment'

import teamData from './components/teamData';


class App extends Component{
  

  render(){
    return (
      <Router>
      <Fragment>
        <Navbar />

        <Route exact path= '/' component={ Landing } />
        
        <section>

          <Switch>
      
            <Route exact path= '/team' 
            render = { () => <Team teamData = {teamData} />} />
            <Route exact path= '/research' component={ Research } />
            <Route exact path= '/involved' component={ Involved } />
            <Route exact path= '/experiment' component={ experiment } />

            <Route exact path= '/contact'
              render={ () => <Contact env = {this.props.env} /> } />
            {/* <Route exact path = "/visualltm.html"
            render {() => {window.location.href = "visualltm.html"}} /> */}
          </Switch> 

          <Footer />
    
      </section>
    
        </Fragment>
  
      </Router>    
    );
  }

}

App.propTypes = {
  env: PropTypes.object.isRequired,
  teamData : PropTypes.object.isRequired
};


export default App;
