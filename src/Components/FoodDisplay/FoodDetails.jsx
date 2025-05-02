import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../Context/StoreContext";

function FoodDetails() {

  const {increaseQty} = useContext(StoreContext) ;
  const navigate = useNavigate() ;
  const { id } = useParams();
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  const fetchData = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/api/food/${id}`);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      toast.error("Unable to load product details. Please try again later.");
    } finally {
      setIsLoading(false);
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

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {


    increaseQty(data.id) ;
    navigate("/cart") ;

    toast.success(`Added ${quantity} ${data.name} to cart!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
    });
    // Add cart logic here
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.info(
      isFavorite 
        ? `${data.name} removed from favorites` 
        : `${data.name} added to favorites`, 
      { position: "bottom-right", autoClose: 2000 }
    );
  };

  const handleShare = () => {
    // Share functionality would be implemented here
    toast.info("Share functionality coming soon!", { 
      position: "bottom-right", 
      autoClose: 2000 
    });
  };

  if (isLoading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Breadcrumb navigation */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-decoration-none text-secondary">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/explore" className="text-decoration-none text-secondary">Menu</a>
          </li>
          <li className="breadcrumb-item active fw-medium" aria-current="page">
            {data.name || "Product Details"}
          </li>
        </ol>
      </nav>

      <div className="card border-0 shadow-lg rounded-3 overflow-hidden">
        <div className="row g-0">
          {/* Food Image */}
          <div className="col-md-6 position-relative">
            {data.category && (
              <span className="position-absolute top-0 start-0 m-3 badge bg-primary rounded-pill px-3 py-2 text-white">
                {data.category}
              </span>
            )}
            {data.discount && (
              <span className="position-absolute top-0 end-0 m-3 badge bg-danger rounded-pill px-3 py-2">
                {data.discount}% OFF
              </span>
            )}
            <img
              src={data.imageurl || "https://via.placeholder.com/600x600?text=Food+Image"}
              alt={data.name}
              className="img-fluid h-100 object-fit-cover"
              style={{ minHeight: "500px", width: "100%" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/600x600?text=Image+Not+Available";
              }}
            />
          </div>

          {/* Food Details */}
          <div className="col-md-6">
            <div className="card-body p-4 p-lg-5 d-flex flex-column h-100">
              {data.isNew && (
                <div className="mb-3">
                  <span className="badge bg-success rounded-pill px-3 py-2">New</span>
                </div>
              )}

              <h1 className="card-title fw-bold mb-2">{data.name || "Product Name"}</h1>
              
              {data.subtitle && (
                <p className="text-muted mb-3">{data.subtitle}</p>
              )}

              {/* Rating */}
              {data.rating && (
                <div className="mb-3 d-flex align-items-center">
                  <div className="me-2">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`bi ${i < Math.floor(data.rating) ? "bi-star-fill" : "bi-star"} text-warning`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-muted">({data.reviewCount || 0} reviews)</span>
                </div>
              )}

              {/* Price */}
              <div className="mb-4">
                {data.originalPrice && data.originalPrice > data.price ? (
                  <div className="d-flex align-items-center gap-2">
                    <h3 className="fw-bold text-primary mb-0">${data.price?.toFixed(2)}</h3>
                    <h6 className="text-muted text-decoration-line-through mb-0">
                      ${data.originalPrice?.toFixed(2)}
                    </h6>
                  </div>
                ) : (
                  <h3 className="fw-bold text-primary mb-0">₹{data.price?.toFixed(2) || "0.00"}</h3>
                )}
              </div>

              {/* Description */}
              <div className="mb-4">
                <h5 className="fw-bold mb-2">Description</h5>
                <p className="card-text">{data.description || "No description available."}</p>
              </div>

              {/* Nutrition Facts */}
              {data.nutritionFacts && (
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Nutrition Facts</h5>
                  <div className="row row-cols-2 g-3">
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-fire text-danger me-2"></i>
                        <span className="me-2 text-secondary">Calories:</span>
                        <span className="fw-semibold">{data.nutritionFacts.calories}</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-egg-fried text-success me-2"></i>
                        <span className="me-2 text-secondary">Protein:</span>
                        <span className="fw-semibold">{data.nutritionFacts.protein}g</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-circle text-warning me-2"></i>
                        <span className="me-2 text-secondary">Carbs:</span>
                        <span className="fw-semibold">{data.nutritionFacts.carbs}g</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-droplet-half text-info me-2"></i>
                        <span className="me-2 text-secondary">Fat:</span>
                        <span className="fw-semibold">{data.nutritionFacts.fat}g</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Add to Cart */}
              <div className="mt-auto">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="input-group input-group-lg" style={{ maxWidth: "150px" }}>
                    
                    
                  </div>
                  <button
                    className="btn btn-primary btn-lg flex-grow-2 "
                    type="button"
                    onClick={handleAddToCart}
                  >
                    <i className="bi bi-cart-plus me-2"></i>
                    Add to Cart
                  </button>
                </div>
                
                {/* Additional actions */}
                <div className="d-flex justify-content-between">
                  <button 
                    className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={toggleFavorite}
                    aria-label="Toggle favorite"
                  >
                    <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'} me-2`}></i>
                    {isFavorite ? 'Saved' : 'Save'}
                  </button>
                  <button className="btn btn-outline-secondary" onClick={handleShare}>
                    <i className="bi bi-share me-2"></i>
                    Share
                  </button>
                </div>

                {/* Shipping & Returns */}
                <div className="mt-4 pt-3 border-top">
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-truck text-success me-2"></i>
                    <span className="fw-semibold">Free delivery</span>
                    <span className="ms-2 small text-muted">on orders over $50</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-arrow-return-left text-info me-2"></i>
                    <span className="fw-semibold">Easy returns</span>
                    <span className="ms-2 small text-muted">within 30 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products - placeholder */}
      {data.relatedProducts && data.relatedProducts.length > 0 && (
        <div className="mt-5">
          <h3 className="fw-bold mb-4">You May Also Like</h3>
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {/* Related products would be rendered here */}
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodDetails;