import React from "react";

function Fooditem({ name, description, imageurl, price, id }) {
  return (
    
    <div className="col-12 col-sm-6 col-md-3 mb-4 d-flex justify-content-center">
      <div className="card" style={{ maxWidth: "320px" }}>
        <img
          src={imageurl}
          height={180}
          width={400}
          className="card-img-top"
          alt={name || "Product Image"}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="h5 mb-0">${price}</span>
    
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light">
          <button className="btn btn-primary btn-sm">Add to Cart</button>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fooditem;
