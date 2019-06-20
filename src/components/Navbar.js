import React from 'react';
import { Link } from 'react-router-dom'
import icon from './img/favicon-32x32.png'

const Navbar = () => {
    return (
    <nav id ="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">

    {/* <img src={icon}  alt="icon"/> */}
    <Link className="navbar-brand" style={{ textDecoration: 'none', color: 'white' }} to ="/" >NeuroFog</Link>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mt-lg-0">
        <li className="nav-item">
            <Link className="nav-link" style={{ textDecoration: 'none', color: 'white' }} to ="/research">Our Research <span class="sr-only">(current)</span></Link>      
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ textDecoration: 'none', color: 'white' }} to ="/team">Our Team</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ textDecoration: 'none', color: 'white' }} to ="/involved">Get Involved</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ textDecoration: 'none', color: 'white' }} to ="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
        {/* <a className="nav-link" href="#!">
        <i class="fab fa-facebook"></i>
        </a> */}
        </li>  
      </ul>
    </div>
    </nav>
    );
}

export default Navbar; 
