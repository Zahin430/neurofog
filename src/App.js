import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Team from './components/Team';
import Research from './components/Research';
import Involved from './components/Involved';
import Contact from './components/Contact';

import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Fragment>
    <Navbar />
    <Route exact path= '/' component={ Landing } />
    <section className="container">
    <Switch>
      <Route exact path= '/team' component={ Team } />
      <Route exact path= '/research' component={ Research } />
      <Route exact path= '/involved' component={ Involved } />
      <Route exact path= '/contact' component={ Contact } />
    </Switch>
    </section>

    <Footer />
    </Fragment>
    </Router>    
  );
}

export default App;
