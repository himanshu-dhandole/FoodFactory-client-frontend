import React from 'react';

function Home() {
  return (
    <div>
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">Delicious Meals Delivered to You</h1>
          <p className="lead mt-3">
            Craving something special? Explore a wide range of mouth-watering dishes
            from the best restaurants near you.
          </p>
          <a href="/features" className="btn btn-primary btn-lg mt-3">
            Explore Menu
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img 
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" 
            alt="Delicious Food" 
            className="img-fluid rounded-4 shadow"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Why Choose FoodFactory?</h2>
        <p className="text-muted">We bring happiness to your plate!</p>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <i className="bi bi-truck fs-1 text-primary"></i>
              <h5 className="card-title mt-3">Fast Delivery</h5>
              <p className="card-text text-muted">
                Get your favorite meals delivered hot and fresh at lightning speed!
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <i className="bi bi-star-fill fs-1 text-warning"></i>
              <h5 className="card-title mt-3">Top Rated</h5>
              <p className="card-text text-muted">
                We partner with only the best restaurants known for amazing quality.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <i className="bi bi-shield-lock fs-1 text-success"></i>
              <h5 className="card-title mt-3">Secure Payment</h5>
              <p className="card-text text-muted">
                Easy and secure online payments for a hassle-free experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
