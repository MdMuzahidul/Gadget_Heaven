import React, { createContext, useState } from "react";
export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cost, setCost] = useState(0);

  return (
    <AppContext.Provider
      value={{ cart, setCart, wishlist, setWishlist, cost, setCost }}
    >
      {children}
    </AppContext.Provider>
  );
};
