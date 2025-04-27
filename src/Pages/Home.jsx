import React from 'react';
import './Home.css'; // Import your custom CSS
import Explore from './Explore';
import FoodDisplay from '../Components/FoodDisplay/FoodDisplay';

function Home() {
  return (
    <div className="container my-5">

      {/* Hero Section */}
      <div className="row align-items-center mb-5 hero-section">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">Delicious Meals Delivered to You</h1>
          <p className="lead mt-3 text-muted">
            Craving something special? Explore a wide range of mouth-watering dishes
            from the best restaurants near you.
          </p>
          <a href="/features" className="btn btn-primary btn-lg mt-4">
            Explore Menu
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img 
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" 
            alt="Delicious Food" 
            className="img-fluid hero-image"
          />
        </div>
      </div>

      <Explore/>
      <FoodDisplay/>
    </div>
  );
}

export default Home;
