import React, { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { quantity, token, setToken , setQuantity } = useContext(StoreContext);
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

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    setQuantity({}) ;
    toast.info("Logout Successful !")
  };

  // Check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  const mobileLogout = () => {
    setMobileMenuOpen(false) ;
    logout() ;
  }

  return (
    <header className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo-container">
          <img src={assets.logo} alt="FoodFactory" className="navbar-logo" />
          <span className="navbar-brand-name">
            Food<span className="text-primary">Factory</span>
          </span>
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
                  className={`navbar-link ${
                    isActive("/explore") ? "active" : ""
                  }`}
                >
                  Explore
                </Link>
              </li>
              <li className="navbar-link-item">
                <Link
                  to="/contact"
                  className={`navbar-link ${
                    isActive("/contact") ? "active" : ""
                  }`}
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
              {cartItemCount > -1 && (
                <span className="navbar-cart-badge">{cartItemCount}</span>
              )}
            </div>
          </Link>

          {/* Auth Buttons */}
          {!token ? (
            <div className="navbar-auth-buttons">
              <button
                onClick={() => navigate("/login")}
                className="navbar-login-btn"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="navbar-signup-btn"
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="dropdown text-end">
              <a
                href=""
                className="d-block link-body-emphasis text-decoration-none"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={assets.profile}
                  height="32px"
                  width="32px"
                  alt="profile"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li
                  className="dropdown-item"
                  onClick={() => navigate("/order")}
                >
                  Orders
                </li>
                <li className="dropdown-item" onClick={logout}>
                  Logout
                </li>
              </ul>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`toggle-bar ${mobileMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`toggle-bar ${mobileMenuOpen ? "open" : ""}`}
            ></span>
            <span
              className={`toggle-bar ${mobileMenuOpen ? "open" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <nav>
            <ul className="navbar-mobile-links">
              <li className="navbar-mobile-link-item">
                <Link
                  to="/"
                  className={`navbar-mobile-link ${
                    isActive("/") ? "active" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="navbar-mobile-link-item">
                <Link
                  to="/explore"
                  className={`navbar-mobile-link ${
                    isActive("/explore") ? "active" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore
                </Link>
              </li>
              <li className="navbar-mobile-link-item">
                <Link
                  to="/contact"
                  className={`navbar-mobile-link ${
                    isActive("/contact") ? "active" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              {!token ? (
                <>
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
                      to="/register"
                      className="navbar-mobile-signup-btn"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              ) : (
                <>
                    <li className="navbar-mobile-link-item mobile-auth">
                <Link
                  to="/order"
                  className="navbar-mobile-login-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Orders
                </Link>
              </li>
              <li className="navbar-mobile-link-item mobile-auth">
                <button
                  className="navbar-mobile-signup-btn"
                  onClick={mobileLogout}
                >
                  Logout
                </button>
              </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
