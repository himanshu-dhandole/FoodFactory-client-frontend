// import React, { useState } from 'react';
// import './Home.css'; 
// import FoodDisplay from '../Components/FoodDisplay/FoodDisplay';
// import Categories from '../Components/HomePageStuff/Categories';

// function Home() {

//   const [category , setCategory] = useState("All") ;

//   return (
//     <div className="container my-5">

//       {/* Hero Section */}
//       <div className="row align-items-center mb-5 hero-section">
//         <div className="col-md-6">
//           <h1 className="display-4 fw-bold">Delicious Meals Delivered to You</h1>
//           <p className="lead mt-3 text-muted">
//             Craving something special? Explore a wide range of mouth-watering dishes
//             from the best restaurants near you.
//           </p>
//           <a href="/features" className="btn btn-primary btn-lg mt-4">
//             Explore Menu
//           </a>
//         </div>
//         <div className="col-md-6 text-center">
//           <img 
//             src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" 
//             alt="Delicious Food" 
//             className="img-fluid hero-image"
//           />
//         </div>
//       </div>
//       <hr />
//       <Categories category={category} setCategory={setCategory} />
//       <hr />
//       <FoodDisplay category={category} searchText={''}/>
//       <hr />
//     </div>
//   );
// } 
// export default Home;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import FoodDisplay from '../Components/FoodDisplay/FoodDisplay';
import Categories from '../Components/HomePageStuff/Categories';

function Home() {
  const [category, setCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Search functionality would be implemented here
  };

  return (
    <div className="home-container">
      {/* Hero Section with Gradient Overlay */}
      <section className="hero-section position-relative mb-5">
        <div className="hero-background" style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px"
        }}>
          <div className="overlay position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
          <div className="container h-100 position-relative">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <div className="hero-content text-white p-4">
                  <h1 className="display-4 fw-bold mb-3">Delicious Meals Delivered to Your Doorstep</h1>
                  <p className="lead mb-4">
                    Experience culinary excellence with our carefully curated selection of gourmet dishes 
                    from top-rated restaurants in your area.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
                    <Link to="/explore" className="btn btn-primary btn-lg px-4 py-2">
                      Explore Menu
                    </Link>
                    <Link to="/cart" className="btn btn-outline-light btn-lg px-4 py-2">
                      View Your Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <form onSubmit={handleSearchSubmit} className="search-form bg-white p-4 rounded-3 shadow">
                  <h4 className="mb-3 text-dark fw-bold">Find Your Favorite Dish</h4>
                  <div className="input-group mb-3">
                    <input 
                      type="text" 
                      className="form-control form-control-lg" 
                      placeholder="Search dishes..." 
                      value={searchText}
                      onChange={handleSearchChange}
                      aria-label="Search dishes"
                    />
                    <button className="btn btn-primary" type="submit">
                      <i className="bi bi-search"></i>
                    </button>
                  </div>
                  <div className="popular-searches small text-muted">
                    <span>Popular:</span> 
                    <button 
                      type="button" 
                      className="btn btn-link btn-sm p-0 mx-1 text-decoration-none" 
                      onClick={() => setSearchText('Pizza')}
                    >
                      Pizza
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-link btn-sm p-0 mx-1 text-decoration-none" 
                      onClick={() => setSearchText('Burger')}
                    >
                      Burger
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-link btn-sm p-0 mx-1 text-decoration-none" 
                      onClick={() => setSearchText('Sushi')}
                    >
                      Sushi
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Benefits Section */}
      <section className="benefits-section container mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="bi bi-truck text-primary fs-1"></i>
                </div>
                <h3 className="card-title fw-bold">Fast Delivery</h3>
                <p className="card-text text-muted">
                  Our dedicated delivery team ensures your food arrives hot and fresh within 30 minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="bi bi-shield-check text-primary fs-1"></i>
                </div>
                <h3 className="card-title fw-bold">Quality Assured</h3>
                <p className="card-text text-muted">
                  We partner with restaurants that maintain the highest standards of food quality and hygiene.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon mb-3">
                  <i className="bi bi-credit-card text-primary fs-1"></i>
                </div>
                <h3 className="card-title fw-bold">Secure Payment</h3>
                <p className="card-text text-muted">
                  Multiple payment options with bank-grade security for all your transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section with Title */}
      <section className="categories-section container mb-5">
        <div className="section-header d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title fw-bold mb-0">Browse By Category</h2>
          <Link to="/explore" className="text-decoration-none">View All <i className="bi bi-arrow-right"></i></Link>
        </div>
        <Categories category={category} setCategory={setCategory} />
      </section>

      {/* Food Display Section with Title */}
      <section className="food-display-section container mb-5">
        <div className="section-header d-flex justify-content-between align-items-center mb-4">
          <h2 className="section-title fw-bold mb-0">
            {category === "All" ? "Popular Dishes" : `${category} Dishes`}
          </h2>
          <div className="d-flex align-items-center">
            <div className="dropdown me-2">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="sortDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Sort By
              </button>
              <ul className="dropdown-menu" aria-labelledby="sortDropdown">
                <li><button className="dropdown-item">Popularity</button></li>
                <li><button className="dropdown-item">Price: Low to High</button></li>
                <li><button className="dropdown-item">Price: High to Low</button></li>
                <li><button className="dropdown-item">Rating</button></li>
              </ul>
            </div>
            <Link to="/explore" className="text-decoration-none">View All <i className="bi bi-arrow-right"></i></Link>
          </div>
        </div>
        {isLoading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading delicious dishes...</p>
          </div>
        ) : (
          <FoodDisplay category={category} searchText={searchText} />
        )}
      </section>   
    </div>
  );
}

export default Home;