// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { StoreContext } from "../Context/StoreContext";

// function Fooditem({ name, description, imageurl, price, id }) {
//   const { increaseQty, decreaseQty, quantity } = useContext(StoreContext);

//   return (
//     <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//       <div
//         className="card h-100 shadow-sm"
//         style={{
//           textDecoration: "none",
//         }}
//       >
//         <Link to={`/food/${id}`}>
//           <img
//             src={imageurl}
//             className="card-img-top img-fluid"
//             alt={name || "Food item"}
//             style={{ height: "200px", objectFit: "cover" }}
//           />
//         </Link>
//         <div className="card-body d-flex flex-column">
//           <h5 className="card-title text-truncate">{name}</h5>
//           <p className="card-text text-muted small">{description}</p>
//           <div className="mt-auto">
//             <span className="badge bg-success p-2 mb-2">${price}</span>
//             <div className="d-flex justify-content-between mt-2">
//               <button
//                 to={`/food/${id}`}
//                 className="btn btn-primary btn-sm me-2"
//               >
//                 <i className="bi bi-cart-plus me-1"></i> Add to Cart
//               </button>
//               {quantity[id] > 0 ? (
//                 <div className="d-flex align-items-center gap-2">
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => decreaseQty(id)}
//                   >
//                     <i className="bi bi-dash-circle"></i>
//                   </button>
//                   <span className="fw-bold">{quantity[id]}</span>
//                   <button
//                     className="btn btn-success btn-sm"
//                     onClick={() => increaseQty(id)}
//                   >
//                     <i className="bi bi-plus-circle"></i>
//                   </button>
//                 </div>
//               ) : (
//                 <button className="btn btn-outline-secondary btn-sm" onClick={()=> increaseQty(id)}>
//                   <i className="bi bi-plus-circle"></i>
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Fooditem;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
import "./FoodItem.css"; // Make sure to create this CSS file

function FoodItem({ name, description, imageurl, price, id }) {
  const { increaseQty, decreaseQty, quantity } = useContext(StoreContext);

  // Truncate description to prevent layout shifts
  const truncateDescription = (text, maxLength = 50) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  // Format price to always show 2 decimal places
  const formattedPrice = Number(price).toFixed(2);

  return (
    <div className="food-card">
      <div className="food-card-image-container">
        <Link to={`/food/${id}`}>
          <img
            src={imageurl}
            alt={name || "Food item"}
            className="food-card-image"
            loading="lazy"
          />
        </Link>
        <span className="food-card-price">${formattedPrice}</span>
      </div>
      
      <div className="food-card-content">
        <Link to={`/food/${id}`} className="food-card-title-link">
          <h5 className="food-card-title">{name}</h5>
        </Link>
        <p className="food-card-description">{truncateDescription(description)}</p>
        
        <div className="food-card-actions">
          {quantity[id] > 0 ? (
            <div className="food-card-quantity">
              <button 
                className="qty-btn" 
                onClick={() => decreaseQty(id)}
                aria-label="Decrease quantity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                </svg>
              </button>
              <span className="qty-value">{quantity[id]}</span>
              <button 
                className="qty-btn" 
                onClick={() => increaseQty(id)}
                aria-label="Increase quantity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
              </button>
            </div>
          ) : (
            <button 
              className="add-to-cart-btn" 
              onClick={() => increaseQty(id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="me-1">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodItem;