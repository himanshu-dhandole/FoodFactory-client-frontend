// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { assets } from "../../assets/assets";
// import { StoreContext } from "../Context/StoreContext";

// function Navbar() {
//   const { quantity } = useContext(StoreContext);

//   Object.values(quantity).filter((qty) => qty > 0).length;

//   const cartItemCount = Object.values(quantity).filter((qty) => qty > 0).length;

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
//         <Link className="navbar-brand fw-bold" to="/">
//           <img
//             src={assets.logo}
//             alt="Logo"
//             width="40"
//             height="40"
//             className="d-inline-block align-top me-2"
//           />
//           FoodFactory
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarContent"
//           aria-controls="navbarContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/explore">
//                 Explore
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 contact
//               </Link>
//             </li>
//           </ul>

//           <div className="d-flex align-items-center gap-3">
//             <Link to="/cart" className="position-relative">
//               <img src={assets.cart} alt="Cart" height={40} width={40} />
//               {cartItemCount > 0 && (
//                 <span
//                   className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                   style={{ fontSize: "10px", padding: "5px 7px" }}
//                 >
//                   {cartItemCount}
//                 </span>
//               )}
//             </Link>

//             <Link to="/login">
//               <button className="btn btn-outline-primary">Login</button>
//             </Link>

//             <Link to="/signup">
//               <button className="btn btn-primary">Sign Up</button>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import { assets } from "../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const { quantity } = useContext(StoreContext);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calculate cart item count
  const cartItemCount = Object.values(quantity).filter((qty) => qty > 0).length;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo-container">
          <img 
            src={assets.logo} 
            alt="FoodFactory" 
            className="navbar-logo" 
          />
          <span className="navbar-brand-name">Food<span className="text-primary">Factory</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu desktop-menu">
          <nav>
            <ul className="navbar-links">
              <li className="navbar-link-item">
                <Link 
                  to="/" 
                  className={`navbar-link ${isActive("/") ? "active" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li className="navbar-link-item">
                <Link 
                  to="/explore" 
                  className={`navbar-link ${isActive("/explore") ? "active" : ""}`}
                >
                  Explore
                </Link>
              </li>
              <li className="navbar-link-item">
                <Link 
                  to="/contact" 
                  className={`navbar-link ${isActive("/contact") ? "active" : ""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* User Actions */}
        <div className="navbar-actions">
          {/* Cart Icon */}
          <Link to="/cart" className="navbar-cart-container">
            <div className="navbar-cart-icon">
              <img src={assets.cart} alt="Cart" className="navbar-cart-image" />
              {cartItemCount > 0 && (
                <span className="navbar-cart-badge">{cartItemCount}</span>
              )}
            </div>
          </Link>

          {/* Auth Buttons */}
          <div className="navbar-auth-buttons">
            <Link to="/login" className="navbar-login-btn">
              Login
            </Link>
            <Link to="/signup" className="navbar-signup-btn">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="navbar-mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`toggle-bar ${mobileMenuOpen ? "open" : ""}`}></span>
            <span className={`toggle-bar ${mobileMenuOpen ? "open" : ""}`}></span>
            <span className={`toggle-bar ${mobileMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <nav>
            <ul className="navbar-mobile-links">
              <li className="navbar-mobile-link-item">
                <Link 
                  to="/" 
                  className={`navbar-mobile-link ${isActive("/") ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="navbar-mobile-link-item">
                <Link 
                  to="/explore" 
                  className={`navbar-mobile-link ${isActive("/explore") ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore
                </Link>
              </li>
              <li className="navbar-mobile-link-item">
                <Link 
                  to="/contact" 
                  className={`navbar-mobile-link ${isActive("/contact") ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="navbar-mobile-link-item mobile-auth">
                <Link 
                  to="/login" 
                  className="navbar-mobile-login-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li className="navbar-mobile-link-item mobile-auth">
                <Link 
                  to="/signup" 
                  className="navbar-mobile-signup-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

