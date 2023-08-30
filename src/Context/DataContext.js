import React, { createContext, useState } from "react";
import data from "../Data/data.json";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cartValue, setCartValue] = useState(0);
  const [products] = useState(data.products);
  const [cart,setCart] = useState([])
  

  return (
    <DataContext.Provider
      value={{
        cartValue,
        setCartValue,
        products,setCart,cart
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
