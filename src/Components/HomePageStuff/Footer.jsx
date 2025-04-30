import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="bg-light text-body py-5 border-top">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <h5 className="mb-4">About Us</h5>
              <p className="mb-4">
                We are dedicated to providing innovative solutions that help businesses grow and succeed
                in the digital age.
              </p>
              <div className="social-links d-flex gap-2">
                <a href="#" className="social-icon text-primary"><i className="bi bi-facebook fs-5"></i></a>
                <a href="#" className="social-icon text-dark"><i className="bi bi-twitter-x fs-5"></i></a>
                <a href="#" className="social-icon text-danger"><i className="bi bi-instagram fs-5"></i></a>
                <a href="#" className="social-icon text-primary"><i className="bi bi-linkedin fs-5"></i></a>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5 className="mb-4">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="footer-link text-body text-decoration-none">Home</a></li>
                <li className="mb-2"><a href="#" className="footer-link text-body text-decoration-none">About</a></li>
                <li className="mb-2"><a href="#" className="footer-link text-body text-decoration-none">Services</a></li>
                <li className="mb-2"><a href="#" className="footer-link text-body text-decoration-none">Portfolio</a></li>
                <li className="mb-2"><a href="#" className="footer-link text-body text-decoration-none">Contact</a></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6">
              <h5 className="mb-4">Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#" className="footer-link text-body text-decoration-none">Web Design</a></li>
                <li className="mb-2"><a href="#" className="footer-link text-body text-decoration-none">Development</a></li>
                <li className="mb-2"><a href="#" className="footer-link text-body text-decoration-none">Marketing</a></li>
                <li className="mb-2"><a href="#" className="footer-link text-body text-decoration-none">Consulting</a></li>
                <li className="mb-2"><a href="#" className="footer-link text-body text-decoration-none">Analytics</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h5 className="mb-4">Contact Info</h5>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  123 Business Street, New York, NY 10001
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <a href="tel:+1234567890" className="footer-link text-body text-decoration-none">+1 (234) 567-890</a>
                </li>
                <li className="mb-3">
                  <i className="bi bi-envelope-fill me-2"></i>
                  <a href="mailto:contact@example.com" className="footer-link text-body text-decoration-none">contact@example.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <hr className="mb-4" />
              <div className="text-center">
                <p className="mb-0 text-muted">&copy; 2024 Your Company. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
