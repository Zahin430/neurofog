import React, { Fragment, Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import PropTypes from 'prop-types';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Team from './components/Team';
import Research from './components/Research';
import Involved from './components/Involved';
import Contact from './components/Contact';

import Footer from './components/Footer';

class App extends Component{
  

  render(){
    return (
      <Router>
      <Fragment>
      <Navbar />
      <Route exact path= '/' component={ Landing } />
      <section>
      <Switch>
  
        <Route exact path= '/team' component={ Team } />
        <Route exact path= '/research' component={ Research } />
        <Route exact path= '/involved' component={ Involved } />
        <Route exact path= '/contact'
          render={() => <Contact env = {this.props.env} />} />
  
        
      </Switch>
  
      <Footer />
  
      </section>
  
      </Fragment>
  
      </Router>    
    );
  }

}


App.propTypes = {
  env: PropTypes.object.isRequired
};


export default App;
