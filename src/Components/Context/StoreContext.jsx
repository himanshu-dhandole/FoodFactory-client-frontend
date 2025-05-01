import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [foodlist, setFoodList] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [token, setToken] = useState("");

  const increaseQty = (foodId) => {
    setQuantity((prev) => ({ ...prev, [foodId]: (prev[foodId] || 0) + 1 }));
  };
  const decreaseQty = (foodId) => {
    setQuantity((prev) => ({
      ...prev,
      [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0,
    }));
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/food");
      setFoodList(response.data);
    } catch (err) {
      console.error("Failed to fetch food list:", err);
    }
  };

  const removeFromCart = (foodId) => {
    setQuantity((prevQty) => {
      const updatedQty = { ...prevQty };
      delete updatedQty[foodId];
      return updatedQty;
    });
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      // setFoodList(data) ;
      // if(localStorage.getItem('token')) {
      //   setToken(localStorage.getItem('token')) ;
      // }
    }
    loadData();
  }, []);

  const contextValue = {
    foodlist,
    increaseQty,
    decreaseQty,
    quantity,
    removeFromCart,
    token,
    setToken
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
