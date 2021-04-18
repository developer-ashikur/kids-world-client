import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light my-nav py-4">
      <div className="container">
        <a className="navbar-brand" href="/"><img src={logo} className='img-fluid navbar-logo' alt="" /></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-bold" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold px-4" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold px-4" aria-current="page" href="/">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold px-4" aria-current="page" href="/">Testimonial</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold px-4" aria-current="page" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold px-4" aria-current="page" href="/">Contact</a>
            </li>
            <li className="nav-item">
              {
                loggedInUser.isSignedIn || 
                <Link className="nav-link fw-bold px-4" aria-current="page" to="/login">Login</Link>
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;