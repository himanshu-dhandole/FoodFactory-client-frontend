import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import Fooditem from "./Fooditem";

function FoodDisplay() {
  const { foodlist } = useContext(StoreContext);

  return (
    <div>
      <div className="container">
        <div className="row">
          {foodlist.length > 0 ? (
            foodlist.map((food, index) => {
              return (
                <Fooditem key={index}
                 name={food.name}
                 description={food.description}
                 id={food.id} 
                 imageurl = {food.imageurl} 
                 price = {food.price}
                />
              );
            })
          ) : (
            <div className="text-center mt-4">
              <p>No Content Found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodDisplay;
