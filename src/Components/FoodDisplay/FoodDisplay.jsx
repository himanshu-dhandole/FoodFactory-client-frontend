// import React, { useContext } from "react";
// import { StoreContext } from "../Context/StoreContext";
// import Fooditem from "./Fooditem";

// function FoodDisplay({ category , searchText }) {
//   const { foodlist } = useContext(StoreContext);
//   const filteredFood = foodlist.filter(food=>(
//     (category === "All" || food.category === category) && food.name.toLowerCase().includes(searchText.toLowerCase())
//   ));

//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           {filteredFood.length > 0 ? (
//             filteredFood.map((food, index) => {
//               return (
//                 <Fooditem
//                   key={index}
//                   name={food.name}
//                   description={food.description}
//                   id={food.id}
//                   imageurl={food.imageurl}
//                   price={food.price}
//                 />
//               );
//             })
//           ) : (
//             <div className="text-center mt-4">
//               <p>No Content Found.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FoodDisplay;
import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import FoodItem from "./FoodItem"; // Make sure this matches your component filename
import './FoodDisplay.css'

function FoodDisplay({ category, searchText }) {
  const { foodlist } = useContext(StoreContext);
  const filteredFood = foodlist.filter((food) => (
    (category === "All" || food.category === category) && 
    food.name.toLowerCase().includes(searchText.toLowerCase())
  ));

  return (
    <div className="py-3">
      <div className="container">
        {filteredFood.length > 0 ? (
          <div className="food-grid">
            {filteredFood.map((food, index) => (
              <FoodItem
                key={index}
                name={food.name}
                description={food.description}
                id={food.id}
                imageurl={food.imageurl}
                price={food.price}
              />
            ))}
          </div>
        ) : (
          <div className="text-center mt-4">
            <div className="alert alert-info">
              No items found matching your criteria.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FoodDisplay;