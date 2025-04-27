import React from 'react';
import { Link } from 'react-router-dom'; 

function Login() {
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center p-3">
      <div className="card shadow-lg w-100" style={{ maxWidth: "480px" }}>
        <div className="card-body">
          <div className="text-center">
            <h1 className="card-title h3">Sign in</h1>
            <p className="card-text text-muted">Sign in below to access your account</p>
          </div>
          <div className="mt-4">
            <form action="">
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
                <button type="submit" className="btn btn-dark btn-lg">Sign in</button>
              </div>
              <p className="text-center text-muted mt-4">
                Don't have an account yet?{" "}
                <Link to="/signup" className="text-decoration-none">Sign up</Link>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
