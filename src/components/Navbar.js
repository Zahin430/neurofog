import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    {/* <img src="logo.png" alt=""/> */}
    <a className="navbar-brand" href="#!">
    <Link style={{ textDecoration: 'none', color: 'white' }} to ="/">NeuroFog</Link>

    </a>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="#!">
          <Link style={{ textDecoration: 'none', color: 'white' }} to ="/research">Our Research</Link>
        </a>      
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!">
        <Link style={{ textDecoration: 'none', color: 'white' }} to ="/team">Our Team</Link>
        </a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#!">
      <Link style={{ textDecoration: 'none', color: 'white' }} to ="/involved">Get Involved</Link>
      </a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#!">
      <Link style={{ textDecoration: 'none', color: 'white' }} to ="/contact">Contact Us</Link>
      </a>
      </li>
      <li className="nav-item">
      {/* <a className="nav-link" href="#!">
      <i class="fab fa-facebook"></i>
      </a> */}
      </li>  
    </ul>

    </div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    </nav>
    );
}

export default Navbar;
