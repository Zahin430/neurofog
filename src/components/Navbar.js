import React from 'react';

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    {/* <img src="logo.png" alt=""/> */}
    <a className="navbar-brand" href="#!">Neurofog</a>

    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link" href="#!">Our Research</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#!">Our Team</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#!">Get Involved</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#!">Contact Us</a>
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
