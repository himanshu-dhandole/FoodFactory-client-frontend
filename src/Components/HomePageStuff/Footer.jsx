import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer className="bg-light text-body py-5 border-top">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <h5 className="mb-4">About Me</h5>
              <p className="mb-4">
                I am Himanshu Dhandole. I have a passion for creating beautiful and functional web applications. My goal is to provide the best user experience possible through my work.
              </p>
              <div className="social-links d-flex gap-2">
                <a href="#" className="social-icon text-primary"><i className="bi bi-github fs-5"></i></a>
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
                  Nagpur Maharashtra, India - 441107
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <a href="tel:+91 9284961467" className="footer-link text-body text-decoration-none">+91 9284961467</a>
                </li>
                <li className="mb-3">
                  <i className="bi bi-envelope-fill me-2"></i>
                  <a href="mailto:contact@example.com" className="footer-link text-body text-decoration-none">dhandolehimanshu@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <hr className="mb-4" />
              <div className="text-center">
                <p className="mb-0 text-muted">&copy; 2025 Team ARC. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
