import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { quantity, token, setToken, setQuantity } = useContext(StoreContext);
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target) && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setQuantity({});
    toast.info("Logout Successful!");
    navigate("/");
  };

  const mobileLogout = () => {
    setMobileMenuOpen(false);
    logout();
  };

  // Check if the link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Toggle dropdown
  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

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
            <Link
                to="/cart"
                className="navbar-cart-container"
                aria-label="Shopping Cart"
            >
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
                <div className="dropdown text-end" ref={dropdownRef}>
                  <a
                      href=""
                      className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                      onClick={toggleDropdown}
                      aria-expanded={dropdownOpen}
                  >
                    <img
                        src={assets.profile}
                        height="32px"
                        width="32px"
                        alt="profile"
                        className="profile-image"
                    />
                  </a>
                  <ul className={`dropdown-menu text-small ${dropdownOpen ? 'show' : ''}`}>
                    <li>
                      <button
                          className="dropdown-item"
                          onClick={() => {
                            setDropdownOpen(false);
                            navigate("/myorders");
                          }}
                      >
                        Orders
                      </button>
                    </li>
                    <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                  </ul>
                </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
                className="navbar-mobile-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
            >
              <span className={`toggle-bar ${mobileMenuOpen ? "open" : ""}`}></span>
              <span className={`toggle-bar ${mobileMenuOpen ? "open" : ""}`}></span>
              <span className={`toggle-bar ${mobileMenuOpen ? "open" : ""}`}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
              className={`navbar-mobile-menu ${mobileMenuOpen ? "open" : ""}`}
              ref={menuRef}
          >
            <nav>
              <ul className="navbar-mobile-links">
                <li className="navbar-mobile-link-item">
                  <Link
                      to="/"
                      className={`navbar-mobile-link ${isActive("/") ? "active" : ""}`}
                  >
                    Home
                  </Link>
                </li>
                <li className="navbar-mobile-link-item">
                  <Link
                      to="/explore"
                      className={`navbar-mobile-link ${isActive("/explore") ? "active" : ""}`}
                  >
                    Explore
                  </Link>
                </li>
                <li className="navbar-mobile-link-item">
                  <Link
                      to="/contact"
                      className={`navbar-mobile-link ${isActive("/contact") ? "active" : ""}`}
                  >
                    Contact
                  </Link>
                </li>
                <li className="navbar-mobile-link-item">
                  <Link
                      to="/cart"
                      className="navbar-mobile-link cart-mobile-link"
                  >
                    Cart
                    {cartItemCount > 0 && (
                        <span className="mobile-cart-badge">{cartItemCount}</span>
                    )}
                  </Link>
                </li>
                {!token ? (
                    <>
                      <li className="navbar-mobile-link-item mobile-auth">
                        <Link
                            to="/login"
                            className="navbar-mobile-login-btn"
                        >
                          Login
                        </Link>
                      </li>
                      <li className="navbar-mobile-link-item mobile-auth">
                        <Link
                            to="/register"
                            className="navbar-mobile-signup-btn"
                        >
                          Sign Up
                        </Link>
                      </li>
                    </>
                ) : (
                    <>
                      <li className="navbar-mobile-link-item mobile-auth">
                        <Link
                            to="/myorders"
                            className="navbar-mobile-login-btn"
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