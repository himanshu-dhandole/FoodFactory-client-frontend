import axios from "axios";
import { useState, useEffect, createContext } from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const [foodlist, setFoodList] = useState([]);

  const fetchFoodList = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/food");
      setFoodList(response.data);
    } catch (err) {
      console.error("Failed to fetch food list:", err);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
    }
    loadData();
  }, []);

  const contextValue = {
    foodlist,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
