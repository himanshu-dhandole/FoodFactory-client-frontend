import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link

function Signup() {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center p-3">
      <div className="card shadow-lg w-100" style={{ maxWidth: "480px" }}>
        <div className="card-body">
          <div className="text-center">
            <h1 className="card-title h3">Sign up</h1>
            <p className="card-text text-muted">Create your account below</p>
          </div>
          <div className="mt-4">
            <form action="">
              <div className="mb-4">
                <label htmlFor="name" className="form-label text-muted">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label text-muted">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label text-muted">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-dark btn-lg">Sign up</button>
              </div>
              <p className="text-center text-muted mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-decoration-none">Sign in</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
