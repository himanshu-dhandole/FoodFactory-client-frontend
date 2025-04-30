import React, { useState } from "react";
import FoodDisplay from "../Components/FoodDisplay/FoodDisplay";

const Explore = () => {
  const [category, setCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group mb-3">
                <select
                  className="form-select mt-2"
                  style={{ maxWidth: "150px" }}
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option value="All">Category</option>
                  <option value="cold-drinks">Cold Drinks</option>
                  <option value="pizzas">Pizzas</option>
                  <option value="burgers">Burgers</option>
                  <option value="biryani">Biryani</option>
                  <option value="sandwiches">Sandwiches</option>
                  <option value="pasta">Pasta</option>
                  <option value="salads">Salads</option>
                  <option value="desserts">Desserts</option>
                  <option value="soups">Soups</option>
                  <option value="seafood">Seafood</option>
                </select>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder="Search food ..."
                  onChange={(e) => setSearchText(e.target.value)}
                  value={searchText}
                />
                <button className="btn btn-primary mt-2" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <FoodDisplay category={category} searchText={searchText} />
    </>
  );
};

export default Explore;
