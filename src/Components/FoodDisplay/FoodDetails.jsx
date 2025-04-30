import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function FoodDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);

  const fetchData = async (id) => {
    try {
      const response = await axios.get("http://localhost:8080/api/food/" + id);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      toast.error("API call error");
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${data.name} to cart!`);
    // Add your cart logic here
  };

  return (
    <div className="container py-5">
      {/* Breadcrumb navigation */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/" className="text-decoration-none">Home</a></li>
          <li className="breadcrumb-item"><a href="/explore" className="text-decoration-none">Menu</a></li>
          <li className="breadcrumb-item active" aria-current="page">{data.name}</li>
        </ol>
      </nav>

      <div className="card border-0 shadow">
        <div className="row g-0">
          {/* Food Image */}
          <div className="col-md-6">
            <div className="position-relative h-100">
              {data.category && (
                <span className="position-absolute top-0 start-0 m-3 badge bg-warning">
                  {data.category}
                </span>
              )}
              <img
                src={data.imageurl}
                alt={data.name}
                className="img-fluid rounded-start h-100 object-fit-cover"
                style={{ maxHeight: "500px", width: "100%" }}
              />
            </div>
          </div>

          {/* Food Details */}
          <div className="col-md-6">
            <div className="card-body p-4 p-md-5 d-flex flex-column h-100">
              <h1 className="card-title fw-bold mb-3">{data.name}</h1>

              {/* Price */}
              <h3 className="mb-4 text-primary">${data.price}</h3>

              {/* Description */}
              <p className="card-text mb-4 flex-grow-1">{data.description}</p>

              {/* Nutrition Facts (example - replace with actual data if available) */}
              {data.nutritionFacts && (
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Nutrition Facts</h5>
                  <div className="row row-cols-2 g-3">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-secondary">Calories:</span>
                        <span className="fw-semibold">{data.nutritionFacts.calories}</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-secondary">Protein:</span>
                        <span className="fw-semibold">{data.nutritionFacts.protein}g</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-secondary">Carbs:</span>
                        <span className="fw-semibold">{data.nutritionFacts.carbs}g</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-secondary">Fat:</span>
                        <span className="fw-semibold">{data.nutritionFacts.fat}g</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              <div className="mt-auto">
                <div className="d-flex align-items-center gap-3">
                  <div className="input-group" style={{ maxWidth: "120px" }}>
                    <button 
                      className="btn btn-outline-secondary" 
                      type="button"
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="form-control text-center"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                    />
                    <button 
                      className="btn btn-outline-secondary" 
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-primary flex-grow-1"
                    type="button"
                    onClick={handleAddToCart}
                  >
                    <i className="bi bi-cart-plus me-2"></i>
                    Add to Cart
                  </button>
                </div>
                
                {/* Additional actions */}
                <div className="d-flex justify-content-between mt-3">
                  <button className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-heart me-1"></i>
                    Add to Favorites
                  </button>
                  <button className="btn btn-outline-secondary btn-sm">
                    <i className="bi bi-share me-1"></i>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;