import React from "react";
import { Link } from "react-router-dom";

function Fooditem({ name, description, imageurl, price, id }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={imageurl}
          className="card-img-top img-fluid"
          alt={name || "Food item"}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate">{name}</h5>
          <p className="card-text text-muted small">{description}</p>
          <div className="mt-auto">
            <span className="badge bg-success p-2 mb-2">${price}</span>
            <div className="d-flex justify-content-between mt-2">
              <Link 
                to={`/food/${id}`} 
                className="btn btn-primary btn-sm flex-grow-1 me-2"
              >
                <i className="bi bi-cart-plus me-1"></i> Add to Cart
              </Link>
              <button 
                className="btn btn-outline-secondary btn-sm" 
                title="Add to favorites"
              >
                <i className="bi bi-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fooditem;