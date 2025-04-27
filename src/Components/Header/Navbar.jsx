import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar() {
  const cartItemCount = 3;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
        <Link className="navbar-brand fw-bold" to="/">
          <img 
            src={assets.logo} 
            alt="Logo" 
            width="40" 
            height="40" 
            className="d-inline-block align-top me-2"
          />
          FoodFactory
        </Link>

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
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">Explore</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">contact</Link>
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

          <div className="d-flex align-items-center gap-3">
            <Link to="/cart" className="position-relative">
              <img src={assets.cart} alt="Cart" height={40} width={40} />
              {cartItemCount > 0 && (
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "10px", padding: "5px 7px" }}
                >
                  {cartItemCount}
                </span>
              )}
            </Link>

            <Link to="/login">
              <button className="btn btn-outline-primary">Login</button>
            </Link>

            <Link to="/signup">
              <button className="btn btn-primary">Sign Up</button>
            </Link>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
