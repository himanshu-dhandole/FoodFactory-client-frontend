import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
function Navbar() {
  return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
      <a className="navbar-brand fw-bold" href="/">
        <img 
          src={assets.logo} 
          alt="" 
          width="40" 
          height="40" 
          className="d-inline-block align-top me-2"
        />
        FoodFactory
      </a>
      
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarContent" 
        aria-controls="navbarContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/features">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pricing">Pricing</a>
          </li>
        </ul>

        <form className="d-flex me-3" role="search">
          <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Search..." 
            aria-label="Search" 
          />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div className="d-flex">
          <button className="btn btn-outline-primary me-2">Login</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </nav>
      </div>
  );
}

export default Navbar;
