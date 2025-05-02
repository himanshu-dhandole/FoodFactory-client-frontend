import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [foodlist, setFoodList] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [token, setToken] = useState("");

  const increaseQty = async (foodId) => {
    setQuantity((prev) => ({ ...prev, [foodId]: (prev[foodId] || 0) + 1 }));
    await axios.post(
      "http://localhost:8080/api/cart",
      { foodId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };
  const decreaseQty = async (foodId) => {
    setQuantity((prev) => ({
      ...prev,
      [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0,
    }));
    await axios.post(
      "http://localhost:8080/api/cart/remove",
      { foodId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
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

  const loadCartData = async (token) => {
    const res = await axios.get("http://localhost:8080/api/cart", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setQuantity(res.data.items) ;
  };  

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();

      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token")) ;
      }
    }
    loadData();
  }, [token]);

  const contextValue = {
    foodlist,
    increaseQty,
    decreaseQty,
    quantity,
    removeFromCart,
    token,
    setToken,
    setQuantity
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
