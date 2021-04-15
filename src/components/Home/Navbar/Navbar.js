import React from 'react';
import logo from '../../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light my-nav py-4">
  <div class="container">
    <a class="navbar-brand" href="/"><img src={logo} className='img-fluid w-50' alt=""/></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link fw-bold" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold px-4" aria-current="page" href="/">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold px-4" aria-current="page" href="/">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold px-4" aria-current="page" href="/">Testimonial</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold px-4" aria-current="page" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold px-4" aria-current="page" href="/">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold px-4" aria-current="page" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
};

export default Navbar;