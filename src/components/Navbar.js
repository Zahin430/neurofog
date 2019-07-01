import React from 'react';
import { Link } from 'react-router-dom'
import icon from './img/icon.png'

const Navbar = () => {
    return (
    <nav id ="navbar" className="navbar navbar-expand-lg navbar-light bg-custom shadow-sm rounded sticky-top">

    <img src={icon} alt="icon" id = "navbar-icon"/>
   
    <Link className="navbar-brand" style={{ textDecoration: 'none', letterSpacing: '5px' }} to ="/" >NEUROFOG</Link>
    
    <button 
      class="navbar-toggler collapsed" 
      style={{color: 'black'}} 
      type="button" 
      data-toggle="collapse" 
      data-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
      <span>
      <i class="fas fa-bars"></i>
      </span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id = "nav-content" className="navbar-nav ml-auto mt-lg-0">
        <li className="nav-item">
            <Link className="nav-link" style={{ textDecoration: 'none' }} to ="/research">OUR RESEARCH<span class="sr-only">(current)</span></Link>      
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ textDecoration: 'none'  }} to ="/team">OUR TEAM</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ textDecoration: 'none' }} to ="/involved">GET INVOLVED</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ textDecoration: 'none' }} to ="/contact">CONTACT US</Link>
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
